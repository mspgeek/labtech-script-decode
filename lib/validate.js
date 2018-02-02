/**
 * Created by kgrube on 1/31/2018
 */

const Ajv = require('ajv');

const LabTech_Expansion = {
  '$id': 'LabTech_Expansion',
  type: 'object',
  required: ['$', 'PackedScript'],
  properties: {
    '$': {
      type: 'object',
      properties: {
        Version: {type: 'string'},
        Type: {type: 'string'},
        Name: {type: 'string', default: 'LabTech Script Expansion'},
      },
      PackedScript: {'$ref': 'PackedScript'},
    },
  },
};

const PackedScript = {
  '$id': 'PackedScript',
  type: 'object',
  properties: {
    NewDataSet: {
      type: 'object',
      properties: {
        Table: {
          type: 'object',
          properties: {
            ComputerScript: {type: 'string'},
            EditPermission: {type: 'string'},
            FolderId: {type: 'string'},
            FunctionScript: {type: 'string'},
            LicenseData: {type: 'string'},
            LocationScript: {type: 'string'},
            MaintenanceScript: {type: 'string'},
            Parameters: {type: 'string'},
            Permission: {type: 'string'},
            ScriptData: {type: 'string'},
            ScriptFlags: {type: 'string'},
            ScriptGuid: {type: 'string'},
            ScriptId: {type: 'string'},
            ScriptNotes: {type: 'string'},
            ScriptVersion: {type: 'string'},
          },
        },
      },
    },
    File: {'$ref': 'File'},
    ExtraDataField: {'$ref': 'ExtraDataField'},
    PackedScript: {'$ref': 'PackedScript'},
    ScriptFolder: {'$ref': 'ScriptFolder'},
  },
};

const
  File = {
    '$id': 'File',
    type: 'object',
    properties: {
      Name: {type: 'string'},
      Bytes: {type: 'string'},
    },
  };

const ExtraDataField = {
  '$id': 'ExtraDataField',
  type: 'object',
  properties: {
    NewDataSet: {
      type: 'object',
      properties: {
        Table: {
          type: 'object',
          properties: {
            ID: {type: 'string'},
            Form: {type: 'string'},
            Name: {type: 'string'},
            Sort: {type: 'string'},
            NoBreak: {type: 'string'},
            FType: {type: 'string'},
            Section: {type: 'string'},
            UnEditable: {type: 'string'},
            Collapsed: {type: 'string'},
            Fill: {type: 'string'},
            LtGuid: {type: 'string'},
            IsPassword: {type: 'string'},
            IsEncrypted: {type: 'string'},
            IsHidden: {type: 'string'},
            IsRestricted: {type: 'string'},
          },
        },
      },
    },
  },
};

const ScriptFolder = {
  '$id': 'ScriptFolder',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      NewDataSet: {
        type: 'object',
        required: ['Table'],
        properties: {
          Table: {
            type: 'object',
            required: ['FolderID', 'Name', 'ParentID'],
            properties: {
              FolderID: {type: 'string'},
              GUID: {type: 'string'},
              Name: {type: 'string'},
              ParentID: {type: 'string'},
            },
          },
        },
      },
    },
  },
};

const LicenseDataObject = {
  '$id': 'LicenseDataObject',
  type: 'object',
  properties: {
    ExpireDate: {type: 'string'},
    RunCounter: {type: 'string'},
    ScriptGuid: {type: 'string'},
    ScripVersion: {type: 'string'},
    Type: {type: 'string'},
  },
};

const ScriptDataObject = {
  '$id': 'ScriptDataObject',
  type: 'object',
  properties: {
    ScriptSteps: {
      type: 'array',
      items: {'$ref': 'ScriptStep'},
    },
    Scripts: {
      type: 'object',
      properties: {
        ExtraDataFields: {type: 'string'},
        Globals: {type: 'string'},
        Parameters: {type: 'string'},
        ScriptGuid: {type: 'string'},
        ScriptVersion: {type: 'string'},
      },
    },
  },
};

const ScriptStep = {
  '$id': 'ScriptStep',
  type: 'object',
  properties: {
    Action: {type: 'string'},
    Continue: {type: 'string'},
    FunctionId: {type: 'string'},
    Indentation: {type: 'string'},
    OsLimit: {type: 'string'},
    Param1: {type: 'string'},
    Param2: {type: 'string'},
    Param3: {type: 'string'},
    Param4: {type: 'string'},
    Param5: {type: 'string'},
    Sort: {type: 'string'},
  },
};


const ScriptFunction = {
  '$id': 'ScriptFunction',
  type: 'object',
  properties: {
    Description: {type: 'string'},
    FunctionFlag: {type: 'string'},
    FunctionId: {type: 'string'},
    FunctionType: {type: 'string'},
    Name: {type: 'string'},
    ParamNames: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    Parameters: {type: 'string'},
  },
};

const schemas = [ExtraDataField, File, LabTech_Expansion, LicenseDataObject, ScriptDataObject, ScriptFolder, ScriptFunction, ScriptStep];

const ajv = new Ajv({schemas});

module.exports = ajv.getSchema('LabTech_Expansion');
