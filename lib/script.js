/**
 * Created by kgrube on 10/13/2017
 */

const xml2js = require('xml2js');
const parseXML = xml2js.parseString;
const {parseNumbers} = require('xml2js/lib/processors');
const _ = require('lodash');

const validate = require('./validate');
const gzip = require('./gzip');
const {getFunctionLineDescription} = require('./functions');
const constants = require('./constants');
const {Actions, OsLimits, Continues, FunctionFlags, FunctionTypes, Functions} = constants;

let BufferLib;

if (typeof IS_BROWSER === 'undefined') {
  IS_BROWSER = false;
}

if (IS_BROWSER) {
  BufferLib = require('buffer/').Buffer;
}

if (!IS_BROWSER) {
  BufferLib = Buffer;
}

/**
 * @param {String|Array} encodedBuffer
 * @returns {Promise<LabTechScript>}
 */
function decode(encodedBuffer) {
  return new Promise((resolve, reject) => {
    const buffer = BufferLib.from(encodedBuffer, 'base64');
    return gzip.unzip({resolve, reject}, buffer);
  }).then(inflated => new Promise((resolve, reject) => {
    parseXML(inflated, {
      explicitArray: false,
      valueProcessors: [parseNumbers],
    }, (err, parsed) => {
      if (err) return reject(err);
      return resolve(parsed);
    });
  }));
}

/**
 * @param {LicenseData|ScriptData} data
 * @param [options] Builder class options
 * @param {boolean} pad apply padding on ScriptData and LicenseData encoded nodes to match exported values
 * @returns {Promise<String>}
 */
function encode(data, options = {}, pad = false) {
  return new Promise((resolve, reject) => {
    const builder = new xml2js.Builder(options);
    let xml = builder.buildObject(data);

    if (pad) {
      // labtech export formats encoded xml tags as <Tag /> instead of <Tag/>
      xml = xml.replace(/<((?!.+ \/>)[^\/>]+)\/>/g, '<$1 \/>');
      // there's an extra new line at the end, which makes the encoding not match
      xml += '\r\n';
    }

    const buffer = BufferLib.from(xml).toString();

    return gzip.zip({resolve, reject}, buffer);
  });
}

function traversePromiseHandler({promiseResult, result, PackedScript}) {
  if (!!result) {
    return promiseResult;
  } else {
    // abusing javascript closure and references
    // return the same edited object passed in
    return PackedScript;
  }
}

/**
 * Flatten the result from traverse()
 * @param promiseResult
 * @param result
 * @param PackedScript
 * @returns {*}
 */
function traversePromiseHandlerText({promiseResult, result, PackedScript}) {
  let combined = [];
  // loop over result array and flatten any sub arrays
  promiseResult.forEach(idxResult => {
    combined = combined.concat(idxResult);
  });
  // merge with the result
  return result.concat(combined);
}

/**
 * @param {LabTech_Expansion} LabTech_Expansion
 * @returns {Promise<string>} xml
 */
function encodeXML(LabTech_Expansion) {
  return new Promise((resolve, reject) => {
    const valid = validate(LabTech_Expansion);
    if (valid) {
      return resolve(LabTech_Expansion);
    }
    return reject(validate.errors);
  })
    .then(LabTech_Expansion => {
      const xmldec = LabTech_Expansion.$;
      const builder = new xml2js.Builder({rootName: 'LabTech_Expansion', xmldec, headless: true});
      return traverse({
        PackedScript: LabTech_Expansion,
        handler: encodeTraverseHandler,
        promiseHandler: traversePromiseHandler,
      })
        .then(PackedScript => builder.buildObject(PackedScript))
        // labtech exports empty nodes as <node></node>
        // parser does not give option to expand empty nodes
        // from <node /> to <node></node>
        .then(scriptXML => scriptXML.replace(/<([^\/>]+)\/>/g, '<$1><\/$1>'));
    });
}

/**
 * Turn XML into JSON
 * @param {String} scriptXML
 * @returns {Promise<LabTechScript>}
 */
function decodeXML(scriptXML) {
  return new Promise((resolve, reject) => {
    parseXML(scriptXML, {
      explicitArray: false,
      valueProcessors: [parseNumbers],
    }, (err, parsed) => {
      if (err) return reject(err);
      return resolve(parsed);
    });
  })
    .then(parsed => {
      if (!parsed || !parsed.LabTech_Expansion) {
        throw new Error('Could not parse XML.');
      }
      return traverse({PackedScript: parsed.LabTech_Expansion, handler: decodeTraverseHandler, promiseHandler: traversePromiseHandler});
    })
    .then(LabTech_Expansion => {
      const valid = validate(LabTech_Expansion);
      if (valid) {
        return LabTech_Expansion;
      }
      throw validate.errors;
    });
}

/**
 * Recurse over a packed script, look for script definitions
 * @param {PackedScript|PackedScript[]} PackedScript
 * @param {function} handler - what to do with each packed script
 * @param {function} promiseHandler - what to do at the end with the results
 * @param [promises]
 * @param [result]
 * @returns {Promise<PackedScript>}
 */
function traverse({PackedScript, handler, promiseHandler, promises, result}) {
  if (!promises) {
    promises = [];
  }

  // if this an array of packed scripts
  if (_.isArray(PackedScript)) {
    PackedScript.forEach(packed => traverse({PackedScript: packed, handler, promiseHandler, promises, result}));
  }

  // if there is an array of packed scripts called from the top level script
  if (_.isArray(PackedScript && PackedScript.PackedScript)) {
    PackedScript.PackedScript.forEach(packed => traverse({PackedScript: packed, handler, promiseHandler, promises, result}));
  }

  // if there's a single packed script
  if (PackedScript.PackedScript && !_.isArray(PackedScript.PackedScript)) {
    promises.push(traverse({PackedScript: PackedScript.PackedScript, handler, promiseHandler, result}));
  }

  // if this is a packed script
  if (PackedScript.NewDataSet) {
    promises.push(handler(PackedScript));
  }

  // this makes an array
  return Promise.all(promises)
    .then((promiseResult) => promiseHandler({promiseResult, result, PackedScript}));
}

/**
 *
 * @param PackedScript
 * @returns {Promise<PackedScript>}
 */
function encodeTraverseHandler(PackedScript) {
  return Promise.resolve(PackedScript)
    .then(PackedScript => {
      const {ScriptData, LicenseData} = PackedScript.NewDataSet.Table;

      ScriptData.ScriptSteps.forEach(step => {
        // reverse script interpolation before packaging
        delete step.ActionObject;
        delete step.ContinueObject;
        delete step.FunctionObject;
        delete step.StepDescription;
        delete step.OsLimitObject;
      });

      return Promise.all([
        encode(ScriptData, {
          rootName: 'ScriptData', headless: true, renderOpts: {pretty: true, indent: '  ', newline: '\r\n'},
        }, true),
        encode(LicenseData, {
          rootName: 'LicenseData', headless: true, renderOpts: {pretty: true, indent: '  ', newline: '\r\n'},
        }, true),
      ])
        .then(([ScriptData, LicenseData]) => {
          PackedScript.NewDataSet.Table.ScriptData = ScriptData;
          PackedScript.NewDataSet.Table.LicenseData = LicenseData;
          return PackedScript;
        });
    });
}

/**
 * Decode/interpolate and perform schema checks
 * @param PackedScript
 * @returns {Promise<PackedScript>}
 */
function decodeTraverseHandler(PackedScript) {
  return Promise.resolve(PackedScript)
    .then(PackedScript => {
      const {ScriptData, LicenseData} = PackedScript.NewDataSet.Table;

      return Promise.all([decode(ScriptData), decode(LicenseData), Promise.resolve(PackedScript)])
        .then(([ScriptDataDecoded, LicenseDataDecoded, PackedScript]) => {
          PackedScript.NewDataSet.Table.ScriptData = ScriptDataDecoded.ScriptData;
          PackedScript.NewDataSet.Table.LicenseData = LicenseDataDecoded.LicenseData;

          // perform house-keeping steps on the decoded script
          PackedScript = checkScriptFolder(PackedScript);
          PackedScript = checkScriptSteps(PackedScript);
          PackedScript = sortScriptSteps(PackedScript);
          PackedScript = interpolateScriptData(PackedScript);
          return PackedScript;
        })
        .catch(err => {
          console.log(err);
        });
    });
}

/**
 * Check if Script folder is an array, make it an array
 * @param {PackedScript} PackedScript
 * @returns {PackedScript}
 */
function checkScriptFolder(PackedScript) {
  if (!_.isArray(PackedScript.ScriptFolder)) {
    PackedScript.ScriptFolder = [PackedScript.ScriptFolder];
  }

  return PackedScript;
}

/**
 * Make ScriptData an array if the script has only 1 step
 * @param {PackedScript} PackedScript
 * @returns {PackedScript}
 */
function checkScriptSteps(PackedScript) {
  const ScriptSteps = PackedScript.NewDataSet.Table.ScriptData.ScriptSteps;
  if (!_.isArray(ScriptSteps)) {
    PackedScript.NewDataSet.Table.ScriptData = [ScriptSteps];
  }

  return PackedScript;
}

/**
 * Sort script steps in some sort of logical order based on 'Sort' property
 * @param {PackedScript} PackedScript
 */
function sortScriptSteps(PackedScript) {
  const ScriptSteps = PackedScript.NewDataSet.Table.ScriptData.ScriptSteps;
  ScriptSteps.sort((a, b) => {
    if (a.Action === 'InitialCheck') {
      return -1;
    } else if (b.Action === 'InitialCheck') {
      return 1;
    }
    return a.Sort - b.Sort;
  });
  return PackedScript;
}

/**
 * Look up string constants, function definitions, etc, and inject into the ScriptSteps
 * @param {PackedScript} PackedScript
 * @returns {PackedScript}
 */
function interpolateScriptData(PackedScript) {
  const ScriptSteps = PackedScript.NewDataSet.Table.ScriptData.ScriptSteps;

  ScriptSteps.forEach(step => {
    const params = [step.Param1, step.Param2, step.Param3, step.Param4, step.Param5];
    const {FunctionFlag, FunctionType} = Functions[step.FunctionId];

    const FunctionDef = Object.assign({}, Functions[step.FunctionId], {
      FunctionFlag: FunctionFlags[FunctionFlag],
      FunctionType: FunctionTypes[FunctionType],
    });

    FunctionDef.ParamNames.forEach((param, idx) => {
      param.Value = params[idx];
    });

    // merge this step with the interpolated values
    step.ActionObject = Actions[step.Action];
    step.ContinueObject = Continues[step.Continue];
    step.FunctionObject = FunctionDef;
    step.OsLimitObject = OsLimits[step.OsLimit];
    step.StepDescription = getFunctionLineDescription(step);

  });

  return PackedScript;
}

function traverseTextHandler(PackedScript) {
  function formatStep(step) {
    // if any params have newlines, put \r\n newline characters in there instead of an actual newline
    return `${' '.repeat(step.Indentation)}${step.StepDescription.replace(/\r/g, '\\\\r').replace(/\n/g, '\\\\n')}\r\n`;
  }

  return Promise.resolve(PackedScript)
    .then(PackedScript => {
      const ScriptSteps = PackedScript.NewDataSet.Table.ScriptData.ScriptSteps;
      const ScriptId = PackedScript.NewDataSet.Table.ScriptId;

      // if, then, else
      const result = {ScriptId, InitialCheck: '', ThenSection: '', ElseSection: ''};

      // the steps should already be sorted above during the initial traversal
      ScriptSteps.forEach(step => {
        if (step.Action === 1) {
          result.InitialCheck += formatStep(step);
        } else if (step.Action === 2) {
          result.ThenSection += formatStep(step);
        } else if (step.Action === 3) {
          result.ElseSection += formatStep(step);
        }
      });
      return result;
    });
}

/**
 *
 * @param {Object<LabTechScript>|String} input
 * @returns {Promise<Array<String>>}
 */
function toText(input) {
  return new Promise((resolve, reject) => {
    // check if it's xml
    if (typeof input === 'string') {
      return decodeXML(input)
        .then(script => resolve(script));
    }
    return resolve(input);
  })
    .then(script => traverse({
      PackedScript: script.PackedScript,
      handler: traverseTextHandler,
      result: [],
      promiseHandler: traversePromiseHandlerText,
    }));
}

exports.decode = decode;
exports.encode = encode;
exports.encodeXML = encodeXML;
exports.decodeXML = decodeXML;
exports.interpolateScriptData = interpolateScriptData;
exports.toText = toText;
