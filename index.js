/**
 * Created by kgrube on 10/13/2017
 */

/**
 * @typedef {Object} LabTechScript
 * @property LabTech_Expansion
 * @property LabTech_Expansion.$
 * @property LabTech_Expansion.$.Name
 * @property LabTech_Expansion.$.Type
 * @property LabTech_Expansion.$.Version
 * @property {PackedScript} LabTech_Expansion.PackedScript
 */

/**
 * @typedef {Array<Object>|Object} PackedScript
 * @property {Object} NewDataSet
 * @property {ScriptTable} NewDataSet.Table
 * @property {Array<PackedScript>|PackedScript} PackedScript
 * @property {ScriptFolder} ScriptFolder
 */

/**
 * @typedef {Array<Object>} ScriptFolder
 * @property NewDataSet
 * @property {FolderTable} NewDataSet.Table
 */

/**
 * @typedef {Object} LicenseData
 * @property ExpireDate
 * @property RunCounter
 * @property ScriptGuid
 * @property ScriptVersion
 * @property Type
 */

/**
 * @typedef {Object} ScriptData
 * @property {Array<ScriptStep|ScriptStepXML>} ScriptSteps
 * @property {Object} Scripts
 * @property Scripts.ExtraDataFields
 * @property Scripts.Globals
 * @property Scripts.Parameters
 * @property Scripts.ScriptGuid
 * @property Scripts.ScriptVersion
 */

/**
 * @typedef {Object} ScriptStepXML
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
 * @typedef {Object} ScriptStep
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
 * @typedef {Object} ScriptFunction
 * @property Description
 * @property FunctionFlag
 * @property FunctionId
 * @property FunctionType
 * @property Name
 * @property {Array<ScriptParam>} ParamNames
 */

/**
 * @typedef {Object} ScriptParam
 * @property Description
 * @property ParamName
 * @property Value
 * @property {Array<String>} Values
 */

/**
 * @typedef {Object} ScriptTable
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
 * @typedef {Object} FolderTable
 * @property FolderID
 * @property GUID
 * @property Name
 * @property ParentID
 */

const script = require('./lib/script');
const constants = require('./lib/constants');
const functions = require('./lib/functions');

exports.constants = constants;
exports.decode = script.decode;
exports.decodeXML = script.decodeXML;
exports.interpolate = script.interpolateScriptData;
exports.encode = script.encode;
exports.encodeXML = script.encodeXML;
exports.functionTempaltes = functions.functionTemplates;
exports.getFunctionLineDescription = functions.getFunctionLineDescription;

