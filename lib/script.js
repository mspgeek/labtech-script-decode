/**
 * Created by kgrube on 10/13/2017
 */

const zlib = require('zlib');
const parseXML = require('xml2js').parseString;
const fs = require('fs');

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
  })
    .then(inflated => new Promise((resolve, reject) => {
      parseXML(inflated, {explicitArray: false}, (err, parsed) => {
        if (err) return reject(err);
        return resolve(parsed);
      })
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
      const LicenseData = parsed.LabTech_Expansion.PackedScript.NewDataSet.Table.LicenseData;
      const ScriptData = parsed.LabTech_Expansion.PackedScript.NewDataSet.Table.ScriptData;
      return Promise.all([decode(LicenseData), decode(ScriptData)])
        .then(([LicenseDataDecoded, ScriptDataDecoded]) => {
          return {LicenseData: LicenseDataDecoded.LicenseData, ScriptData: ScriptDataDecoded.ScriptData, parsed};
        });
    })
    .then(({LicenseData, ScriptData, parsed}) => {
      const cloned = Object.assign({}, parsed);
      cloned.LabTech_Expansion.PackedScript.NewDataSet.Table.LicenseData = LicenseData;
      cloned.LabTech_Expansion.PackedScript.NewDataSet.Table.ScriptData = ScriptData;
      return cloned;
    });
}

/**
 *
 * @param file
 * @returns {Promise<LabTechScript>}
 */
function decodeFile(file) {
  const contents = fs.readFileSync(file);
  return decodeXML(contents.toString());
}

/**
 *
 * @param {LabTechScript} decodedXML
 * @returns {ScriptData}
 */
function selectScriptData(decodedXML) {
  return decodedXML.LabTech_Expansion.PackedScript.NewDataSet.Table.ScriptData;
}


/**
 * @param {LabTechScript} labtechScript
 * @param {ScriptData} interpolatedScriptData
 * @returns {*}
 */
function setScriptData(labtechScript, interpolatedScriptData) {
  return labtechScript.LabTech_Expansion.PackedScript.NewDataSet.Table.ScriptData = interpolatedScriptData;
}

/**
 * @param {ScriptDataXML} scriptDataDecoded
 * @returns {Array<ScriptStep>}
 */
function interpolateScriptData(scriptDataDecoded) {
  const {ScriptSteps} = scriptDataDecoded;

  return ScriptSteps.map(step => {
    const params = [step.Param1, step.Param2, step.Param3, step.Param4, step.Param5];
    const {FunctionFlag, FunctionType} = Functions[step.FunctionId];

    const FunctionDef = Object.assign({}, Functions[step.FunctionId], {
      FunctionFlag: FunctionFlags[FunctionFlag],
      FunctionType: FunctionTypes[FunctionType],
    });

    FunctionDef.ParamNames.forEach((param, idx) => {
      param.Value = params[idx];
    });

    return Object.assign(step, {
      Action: Actions[step.Action],
      Continue: Continues[step.Continue],
      Function: FunctionDef,
      OsLimit: OsLimits[step.OsLimit],
      Params: [],
    });
  });
}

/**
 * @param file
 * @returns {Promise<LabTechScript>}
 */
function loadDecodeParseInterpolate(file) {
  return decodeFile(file)
    .then(decoded => {
      const scriptData = selectScriptData(decoded);
      const interpolated = interpolateScriptData(scriptData);
      return setScriptData(decoded, interpolated);
    })
}


exports.decode = decode;
exports.decodeXML = decodeXML;
exports.decodeFile = decodeFile;
exports.loadFile = loadDecodeParseInterpolate;
exports.selectScriptData = selectScriptData;
exports.interpolateScriptData = interpolateScriptData;
