/**
 * Created by kgrube on 10/13/2017
 */
const fs = require('fs');
const decode = require('../lib/index');

const xml = '<LabTech_Expansion Version="110.374" Name="LabTech Script Expansion" Type="PackedScript"> <PackedScript> <NewDataSet> <Table> <ScriptId>6401</ScriptId> <FolderId>202</FolderId> <ScriptName>Export Test</ScriptName> <ScriptNotes></ScriptNotes> <Permission>0,</Permission> <EditPermission>0,</EditPermission> <ComputerScript>1</ComputerScript> <LocationScript>0</LocationScript> <MaintenanceScript>0</MaintenanceScript> <FunctionScript>0</FunctionScript> <LicenseData> H4sIAAAAAAAEAFWPzQrCMBCE74LvkAdoSWLtj2XJRcWLRVHxvk23kEtS0hTs22uLQj3tzsx+Awtno8n2dMCACh5jR0oCnyfcBrt3gw3klQC+UHB8dcZPDKnK2QbHiF10cDV5JrOIbYTM2baUuzIV7FoBX9zDXXvThSf53jg7Ff8b3/w0mEYVRdNim4gYCYtYSso/m8ZYiFSkGSY5yfrHzwDw5Tvr1RvD+Oh/3gAAAA== </LicenseData> <ScriptData> H4sIAAAAAAAEAMWUYUvDMBCGvwv+h/yB2qZ1bkIJiG5jICps+P22XlmgS0tyk/180yydaXH7ojAo5N57L8fdQ2i+3GjZ0AsQiNsbxvKjNk5YOT2QhtadSawKw+LO+AANOyTUQW5e1WuogsSx2actkrUSPI/7iV7VfC8LMZkUJZRZEgHCJOIcxzbaQJQko2T0ANkY+brr4i64meNwaN9uSdictnjakB/ARz4/2yunF0XrBSpckg+WTgc6G+j7gR4FPGpNIrHztqfPPdeKpNpjmz/F3ns3r3In3ZUu9M5CFagI3DLWDWWI5IfCBSzpBSxpcp6L4Fke+7AHSBgk1ui6QU0SjS9K+9TEF2gJ6wrf7DvyJdm/gOTnQab8aiR59ngB5WorDbMfMOO6M1UTMqkYbZFND43dk63QECtlhXe/Y//ju+RXeJed9v+fb+FsRzqOBAAA </ScriptData> <ScriptVersion>1</ScriptVersion> <ScriptGuid>88dfaf30-aea8-11e7-aeca-005056a37e1b</ScriptGuid> <ScriptFlags>0</ScriptFlags> <Parameters></Parameters> </Table> </NewDataSet> <ScriptFolder> <NewDataSet> <Table> <FolderID>202</FolderID> <ParentID>0</ParentID> <Name>Export Test</Name> <GUID>74529cfa-5979-4fd7-aaf5-706788b3d2ee</GUID> </Table> </NewDataSet> </ScriptFolder> </PackedScript> </LabTech_Expansion>';

Promise.all([decode.decodeXML(fs.readFileSync('Export Test.xml')), decode.decodeXML(xml)])
  .then(([result1, result2]) => {
    const str1 = JSON.stringify(result1);
    const str2 = JSON.stringify(result2);
    console.log('Equivalent', str1 === str2);
  });
