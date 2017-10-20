## labtech-script-decode

A set of utilities to load, parse and interpolate exported LabTech scripts from XML into JSON.

## Installation

```
npm install --save labtech-script-decode
```

## Usage

```javascript
const decode = require('labtech-script-decode');

decode.decodeFile('filename.xml')
  .then(result => {
    // other function
  });

decode.decodeXML(scriptXML).then()

decode.decode(base64string).then()
```


## Examples

See the test folder for an example decoded script [here](https://github.com/k-grube/labtech-script-decode/blob/master/test/Export%20Test.json). 

This library is documented with JSDoc for exported object schema.

## API

### decodeXML(value)

Decode and interpolate an XML string

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| value | String | Exported LabTech script |

**Returns**

Promise ⇒ Object\<LabTechScript\>

### decodeFile(file)

Helper to load and parse an exported file.

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| file | String | Filename |

**Returns**

Promise ⇒ Object\<LabTechScript\>


### decode(value)

Decode and parse a base 64 encoded string such as ScriptData or LicenseData.  This function does not interpolate constants such as function names into decoded values.

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| value | String or Array | Base 64 encoded |

**Returns**

Promise ⇒ Object\<Parsed XML\>

### interpolate(scriptData)

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| scriptData | Object\<ScriptData\> | Uninterpolated script data |

**Returns**

Promise ⇒ Object\<ScriptData\>


### Constants

A helper object containing a map of ids to 

**Properties**

| Property | Values |
| --- | --- |
| Actions | Function location in script |
| Continues | Function enabled or disabled |
| FunctionFlags | Base 10 bitstring determining target for this function |
| FunctionTypes | If or regular function|
| Functions | Function definitions |
| OsLimits | Function OS limits |


## Schema

<dl>
<dt><a href="#LabTechScript">LabTechScript</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PackedScript">PackedScript</a> : <code>Array.&lt;Object&gt;</code> | <code>Object</code></dt>
<dd></dd>
<dt><a href="#ScriptFolder">ScriptFolder</a> : <code>Array.&lt;Object&gt;</code></dt>
<dd></dd>
<dt><a href="#LicenseData">LicenseData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ScriptData">ScriptData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ScriptStepXML">ScriptStepXML</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ScriptStep">ScriptStep</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ScriptFunction">ScriptFunction</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ScriptParam">ScriptParam</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ScriptTable">ScriptTable</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FolderTable">FolderTable</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="LabTechScript"></a>

### LabTechScript : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| LabTech_Expansion |  | 
| LabTech_Expansion.$ |  | 
| LabTech_Expansion.$.Name |  | 
| LabTech_Expansion.$.Type |  | 
| LabTech_Expansion.$.Version |  | 
| LabTech_Expansion.PackedScript | [<code>PackedScript</code>](#PackedScript) | 

<a name="PackedScript"></a>

### PackedScript : <code>Array.&lt;Object&gt;</code> \| <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| NewDataSet | <code>Object</code> | 
| NewDataSet.Table | [<code>ScriptTable</code>](#ScriptTable) | 
| PackedScript | [<code>Array.&lt;PackedScript&gt;</code>](#PackedScript) \| [<code>PackedScript</code>](#PackedScript) | 
| ScriptFolder | [<code>ScriptFolder</code>](#ScriptFolder) | 

<a name="ScriptFolder"></a>

### ScriptFolder : <code>Array.&lt;Object&gt;</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| NewDataSet |  | 
| NewDataSet.Table | [<code>FolderTable</code>](#FolderTable) | 

<a name="LicenseData"></a>

### LicenseData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| ExpireDate | 
| RunCounter | 
| ScriptGuid | 
| ScriptVersion | 
| Type | 

<a name="ScriptData"></a>

### ScriptData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| ScriptSteps | <code>Array.&lt;(ScriptStep\|ScriptStepXML)&gt;</code> | 
| Scripts | <code>Object</code> | 
| Scripts.ExtraDataFields |  | 
| Scripts.Globals |  | 
| Scripts.Parameters |  | 
| Scripts.ScriptGuid |  | 
| Scripts.ScriptVersion |  | 

<a name="ScriptStepXML"></a>

### ScriptStepXML : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| Action | 
| Continue | 
| FunctionId | 
| Indentation | 
| OsLimit | 
| Param1 | 
| Param2 | 
| Param3 | 
| Param4 | 
| Param5 | 
| Sort | 

<a name="ScriptStep"></a>

### ScriptStep : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Action |  | 
| Continue |  | 
| Function | [<code>ScriptFunction</code>](#ScriptFunction) | 
| FunctionId |  | 
| Indentation |  | 
| OsLimit |  | 
| Param1 |  | 
| Param2 |  | 
| Param3 |  | 
| Param4 |  | 
| Param5 |  | 
| Sort |  | 

<a name="ScriptFunction"></a>

### ScriptFunction : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Description |  | 
| FunctionFlag |  | 
| FunctionId |  | 
| FunctionType |  | 
| Name |  | 
| ParamNames | [<code>Array.&lt;ScriptParam&gt;</code>](#ScriptParam) | 

<a name="ScriptParam"></a>

### ScriptParam : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Description |  | 
| ParamName |  | 
| Value |  | 
| Values | <code>Array.&lt;String&gt;</code> | 

<a name="ScriptTable"></a>

### ScriptTable : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| ComputerScript |  | 
| EditPermission |  | 
| FolderId |  | 
| FunctionScript |  | 
| LicenseData |  | 
| LocationScript |  | 
| MaintenanceScript |  | 
| Parameters |  | 
| Permission |  | 
| ScriptData | [<code>ScriptData</code>](#ScriptData) | 
| ScriptFlags |  | 
| ScriptGuid |  | 
| ScriptId |  | 
| ScriptName |  | 
| ScriptNotes |  | 
| ScriptVersion |  | 

<a name="FolderTable"></a>

### FolderTable : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| FolderID | 
| GUID | 
| Name | 
| ParentID | 

