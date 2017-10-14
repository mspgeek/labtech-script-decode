/**
 * Created by kgrube on 10/13/2017
 */

/**
 * @typedef {object} LabTechScript
 * @property LabTech_Expansion
 * @property LabTech_Expansion.$
 * @property LabTech_Expansion.$.Name
 * @property LabTech_Expansion.$.Type
 * @property LabTech_Expansion.$.Version
 * @property LabTech_Expansion.PackedScript
 * @property LabTech_Expansion.PackedScript.NewDataSet
 * @property {ScriptTable} LabTech_Expansion.PackedScript.NewDataSet.Table
 * @property LabTech_Expansion.PackedScript.ScriptFolder
 * @property {FolderTable} LabTech_Expansion.PackedScript.ScriptFolder.Table
 */

/**
 * @typedef {object} LicenseData
 * @property ExpireDate
 * @property RunCounter
 * @property ScriptGuid
 * @property ScriptVersion
 * @property Type
 */

/**
 * @typedef {object} ScriptDataXML
 * @property {Array<ScriptStepXML>} ScriptSteps
 * @property Scripts
 * @property Scripts.ExtraDataFields
 * @property Scripts.Globals
 * @property Scripts.Parameters
 * @property Scripts.ScriptGuid
 * @property Scripts.ScriptVersion
 */

/**
 * @typedef {object} ScriptData
 * @property {Array<ScriptStep>} ScriptSteps
 * @property Scripts
 * @property Scripts.ExtraDataFields
 * @property Scripts.Globals
 * @property Scripts.Parameters
 * @property Scripts.ScriptGuid
 * @property Scripts.ScriptVersion
 */

/**
 * @typedef {object} ScriptStepXML
 * @property Action
 * @property Continue
 * @property FunctionId
 * @property Indentation
 * @property OsLimit
 * @property Param1
 * @property Param2
 * @property Param3
 * @property Param4
 * @property Param5
 * @property Sort
 */

/**
 * @typedef {object} ScriptStep
 * @property Action
 * @property Continue
 * @property {ScriptFunction} Function
 * @property FunctionId
 * @property Indentation
 * @property OsLimit
 * @property Param1
 * @property Param2
 * @property Param3
 * @property Param4
 * @property Param5
 * @property Sort
 */

/**
 * @typedef {object} ScriptFunction
 * @property Description
 * @property FunctionFlag
 * @property FunctionId
 * @property FunctionType
 * @property Name
 * @property {Array<ScriptParam>} ParamNames
 */

/**
 * @typedef {object} ScriptParam
 * @property Description
 * @property ParamName
 * @property Value
 * @property {Array<String>} Values
 */

/**
 * @typedef {object} ScriptTableXML
 * @property ComputerScript
 * @property EditPermission
 * @property FolderId
 * @property FunctionScript
 * @property LicenseData
 * @property LocationScript
 * @property MaintenanceScript
 * @property Parameters
 * @property Permission
 * @property {ScriptData} ScriptData
 * @property ScriptFlags
 * @property ScriptGuid
 * @property ScriptId
 * @property ScriptName
 * @property ScriptNotes
 * @property ScriptVersion
 */


/**
 * @typedef {object} ScriptTable
 * @property ComputerScript
 * @property EditPermission
 * @property FolderId
 * @property FunctionScript
 * @property {LicenseData} LicenseData
 * @property LocationScript
 * @property MaintenanceScript
 * @property Parameters
 * @property Permission
 * @property {ScriptData} ScriptData
 * @property ScriptFlags
 * @property ScriptGuid
 * @property ScriptId
 * @property ScriptName
 * @property ScriptNotes
 * @property ScriptVersion
 */

/**
 * @typedef {object} FolderTable
 * @property FolderID
 * @property GUID
 * @property Name
 * @property ParentID
 */

const script = require('./lib/script');
const constants = require('./lib/constants');

/**
 * @type {Constants}
 */
exports.constants = constants;

/**
 * @type {decode}
 */
exports.decode = script.decode;

/**
 * @type {decodeFile}
 */
exports.decodeFile = script.decodeFile;

/**
 * @type {decodeXML}
 */
exports.decodeXML = script.decodeXML;

/**
 * @type {interpolateScriptData}
 */
exports.interpolate = script.interpolateScriptData;

/**
 * @type {loadDecodeParseInterpolate}
 */
exports.loadFile = script.loadFile;
