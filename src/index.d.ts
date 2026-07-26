// Type definitions for labtech-script-decode

export as namespace labtech_script;

/**
 * @typedef {object} Constants
 * @type {{OsLimits, Actions, Continues, FunctionFlags, FunctionTypes, Functions, RemoteCommands}}
 */
type Constants = any;
/**
 * @typedef {Object} LabTechScript
 * @property LabTech_Expansion
 * @property LabTech_Expansion.$
 * @property LabTech_Expansion.$.Name
 * @property LabTech_Expansion.$.Type
 * @property LabTech_Expansion.$.Version
 * @property {PackedScript} LabTech_Expansion.PackedScript
 */
type LabTechScript = {
    LabTech_Expansion: {
        $: {
            Name: any;
            Type: any;
            Version: any;
        };
        PackedScript: PackedScript;
    };
};
/**
 * @typedef {Array<Object>|Object} PackedScript
 * @property {Object} NewDataSet
 * @property {ScriptTable} NewDataSet.Table
 * @property {Array<PackedScript>|PackedScript} PackedScript
 * @property {ScriptFolder} ScriptFolder
 */
type PackedScript = object[] | {
    NewDataSet: {
        Table: ScriptTable;
    };
    PackedScript: PackedScript[] | PackedScript;
    ScriptFolder: ScriptFolder;
};
/**
 * @typedef {Array<Object>} ScriptFolder
 * @property NewDataSet
 * @property {FolderTable} NewDataSet.Table
 */
type ScriptFolder = object[];
/**
 * @typedef {Object} LicenseData
 * @property ExpireDate
 * @property RunCounter
 * @property ScriptGuid
 * @property ScriptVersion
 * @property Type
 */
type LicenseData = {
    ExpireDate: any;
    RunCounter: any;
    ScriptGuid: any;
    ScriptVersion: any;
    Type: any;
};
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
type ScriptData = {
    ScriptSteps: (ScriptStep | ScriptStepXML)[];
    Scripts: {
        ExtraDataFields: any;
        Globals: any;
        Parameters: any;
        ScriptGuid: any;
        ScriptVersion: any;
    };
};
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
type ScriptStepXML = {
    Action: any;
    Continue: any;
    FunctionId: any;
    Indentation: any;
    OsLimit: any;
    Param1: any;
    Param2: any;
    Param3: any;
    Param4: any;
    Param5: any;
    Sort: any;
};
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
type ScriptStep = {
    Action: any;
    Continue: any;
    Function: ScriptFunction;
    FunctionId: any;
    Indentation: any;
    OsLimit: any;
    Param1: any;
    Param2: any;
    Param3: any;
    Param4: any;
    Param5: any;
    Sort: any;
};
/**
 * @typedef {Object} ScriptFunction
 * @property Description
 * @property FunctionFlag
 * @property FunctionId
 * @property FunctionType
 * @property Name
 * @property {Array<ScriptParam>} ParamNames
 */
type ScriptFunction = {
    Description: any;
    FunctionFlag: any;
    FunctionId: any;
    FunctionType: any;
    Name: any;
    ParamNames: ScriptParam[];
};
/**
 * @typedef {Object} ScriptParam
 * @property Description
 * @property ParamName
 * @property Value
 * @property {Array<String>} Values
 */
type ScriptParam = {
    Description: any;
    ParamName: any;
    Value: any;
    Values: String[];
};
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
type ScriptTable = {
    ComputerScript: any;
    EditPermission: any;
    FolderId: any;
    FunctionScript: any;
    LicenseData: any;
    LocationScript: any;
    MaintenanceScript: any;
    Parameters: any;
    Permission: any;
    ScriptData: ScriptData;
    ScriptFlags: any;
    ScriptGuid: any;
    ScriptId: any;
    ScriptName: any;
    ScriptNotes: any;
    ScriptVersion: any;
};
/**
 * @typedef {Object} FolderTable
 * @property FolderID
 * @property GUID
 * @property Name
 * @property ParentID
 */
type FolderTable = {
    FolderID: any;
    GUID: any;
    Name: any;
    ParentID: any;
};
/**
 * @type {Constants}
 */
export const constants: Constants;

/**
 *
 * @param {ScriptStep} step
 * @returns {string}
 */
export function getFunctionLineDescription(step: ScriptStep): string;

/**
 * Object keyed by function id with functions to generate a step description
 * @type {{}}
 */
export const functionTemplates: any;

/**
 * @param promise
 * @param promise.resolve
 * @param promise.reject
 * @param buffer
 * @returns {string}
 */
export function zip(promise: {
    resolve: any;
    reject: any;
}, buffer: any): string;

/**
 * @param promise
 * @param promise.resolve
 * @param promise.reject
 * @param buffer
 * @returns {string}
 */
export function unzip(promise: {
    resolve: any;
    reject: any;
}, buffer: any): string;

/**
 * @param {String|Number[]} encodedBuffer
 * @returns {Promise<LabTechScript>}
 */
export function decode(encodedBuffer: string | Number[]): Promise<LabTechScript>;

/**
 * @param {LicenseData|ScriptData} data
 * @param [options] Builder class options
 * @param {boolean} [pad] apply padding on ScriptData and LicenseData encoded nodes to match exported values
 * @returns {Promise<String>}
 */
export function encode(data: LicenseData | ScriptData, options?: any, pad?: boolean): Promise<String>;

declare namespace script {

    /**
     * Flatten the result from traverse()
     * @param promiseResult
     * @param result
     * @param PackedScript
     * @returns {*}
     */
    function traversePromiseHandlerText(promiseResult: any, result: any, PackedScript: any): any;


    /**
     * Recurse over a packed script, look for script definitions
     * @param {PackedScript|PackedScript[]} PackedScript
     * @param {function} handler - what to do with each packed script
     * @param {function} promiseHandler - what to do at the end with the results
     * @param [promises]
     * @param [result]
     * @returns {Promise<PackedScript>}
     */
    function traverse(PackedScript: PackedScript | PackedScript[], handler: (...params: any[]) => any, promiseHandler: (...params: any[]) => any, promises?: any, result?: any): Promise<PackedScript>;


    /**
     *
     * @param PackedScript
     * @returns {Promise<PackedScript>}
     */
    function encodeTraverseHandler(PackedScript: any): Promise<PackedScript>;


    /**
     * Decode/interpolate and perform schema checks
     * @param PackedScript
     * @returns {Promise<PackedScript>}
     */
    function decodeTraverseHandler(PackedScript: any): Promise<PackedScript>;

    /**
     * Check if Script folder is an array, make it an array
     * @param {PackedScript} PackedScript
     * @returns {PackedScript}
     */
    function checkScriptFolder(PackedScript: PackedScript): PackedScript;

    /**
     * Make ScriptData an array if the script has only 1 step
     * @param {PackedScript} PackedScript
     * @returns {PackedScript}
     */
    function checkScriptSteps(PackedScript: PackedScript): PackedScript;

    /**
     * Sort script steps in some sort of logical order based on 'Sort' property
     * @param {PackedScript} PackedScript
     * @return {PackedScript}
     */
    function sortScriptSteps(PackedScript: PackedScript): PackedScript;

}

/**
 * @param {LabTechScript} LabTechExpansion
 * @returns {Promise<string>} xml
 */
export function encodeXML(LabTechExpansion: LabTechScript): Promise<string>;


/**
 * Turn XML into JSON
 * @param {String} scriptXML
 * @returns {Promise<LabTechScript>}
 */
export function decodeXML(scriptXML: string): Promise<LabTechScript>;


/**
 * Look up string constants, function definitions, etc, and inject into the ScriptSteps
 * @param {PackedScript} PackedScript
 * @returns {PackedScript}
 */
export function interpolate(PackedScript: PackedScript): PackedScript;

/**
 *
 * @param {LabTechScript|String} input
 * @returns {Promise<Array<String>>}
 */
export function toText(input: LabTechScript | string): Promise<String[]>;
