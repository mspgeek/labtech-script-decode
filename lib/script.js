/**
 * Created by kgrube on 10/13/2017
 */

const zlib = require('zlib');
const parseXML = require('xml2js').parseString;
const fs = require('fs');
const _ = require('lodash');

const constants = require('./constants');
const {Actions, OsLimits, Continues, FunctionFlags, FunctionTypes, Functions} = constants;

/**
 * @param {String|Array} encodedBuffer
 * @returns {Promise<LabTechScript>}
 */
function decode(encodedBuffer) {
  return new Promise((resolve, reject) => {
    const buffer = Buffer.from(encodedBuffer, 'base64');
    return zlib.gunzip(buffer, (err, inflated) => {
      if (err) return reject(err);
      return resolve(inflated.toString());
    });
  }).then(inflated => new Promise((resolve, reject) => {
    parseXML(inflated, {explicitArray: false}, (err, parsed) => {
      if (err) return reject(err);
      return resolve(parsed);
    });
  }));
}

/**
 * @param {String} scriptXML
 * @returns {Promise<LabTechScript>}
 */
function decodeXML(scriptXML) {
  return new Promise((resolve, reject) => {
    parseXML(scriptXML, {explicitArray: false}, (err, parsed) => {
      if (err) return reject(err);
      return resolve(parsed);
    });
  })
    .then(parsed => {
      return traverse(parsed.LabTech_Expansion);
    });
}

}

/**
 * Recurse over a packed script, look for script definitions
 * @param {PackedScript} PackedScript
 * @param [promises]
 * @returns {Promise<PackedScript>}
 */
function traverse(PackedScript, promises) {
  if (!promises) {
    promises = [];
  }

  // if this an array of packed scripts
  if (_.isArray(PackedScript)) {
    PackedScript.forEach(packed => traverse(packed, promises));
  }

  // if there is an array of packed scripts called from the top level script
  if (_.isArray(PackedScript && PackedScript.PackedScript)) {
    PackedScript.PackedScript.forEach(packed => traverse(packed, promises));
  }

  // if there's a single packed script
  if (PackedScript.PackedScript) {
    promises.push(traverse(PackedScript.PackedScript));
  }


  // if this is a packed script
  if (PackedScript.NewDataSet) {
    promises.push(traverseHandler(PackedScript));
  }

  return Promise.all(promises)
    .then(() => PackedScript);
}

/**
 * Decode/interpolate and perform schema checks
 * @param PackedScript
 * @returns {Promise<PackedScript>}
 */
function traverseHandler(PackedScript) {
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
    step = Object.assign(step, {
      Action: Actions[step.Action],
      Continue: Continues[step.Continue],
      Function: FunctionDef,
      OsLimit: OsLimits[step.OsLimit],
    });
  });

  return PackedScript;
}

exports.decode = decode;
exports.decodeXML = decodeXML;
exports.interpolateScriptData = interpolateScriptData;
