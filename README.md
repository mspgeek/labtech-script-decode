## labtech-script-decode

A set of utilities to load, parse, encode and interpolate exported LabTech scripts from XML into JSON and from JSON to XML.   This module will run in the browser or on the server.   
 

## Installation

```
npm install --save labtech-script-decode
```

## Usage

### Server
```javascript
const labtech_script = require('labtech-script-decode');

labtech_script.decodeXML(scriptXML).then(scriptJSON => {})

labtech_script.decode(base64string).then()
```

### Browser

Include using Webpack, Browserify, etc, or directly using a script tag:

```html
<script src="/dist/labtech-script-decode.min.js"></script>
<script>
  labtech_script.decodeXML(scriptXML)
    .then(scriptJSON => {
      // scriptJSON
    })
</script>
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

### decode(value)

Decode and parse a base 64 encoded string such as ScriptData or LicenseData.  This function does not interpolate constants such as function names into decoded values.

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| value | String or Array | Base 64 encoded |

**Returns**

Promise ⇒ Object\<Parsed XML\>


### encodeXML(object)

Encode and de-interpolate object into an XML string.  The input's schema is validated to confirm that the output will produce a valid LabTech script. 

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| object | Object<LabTech_Expansion> | Packed LabTech script |

**Returns**

Promise ⇒ String\<XML\>

### encode(object)

Encode a JSON object into a base64 encoded string such as for ScriptData or LicenseData. 

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| object | object | |

**Returns**

Promise ⇒ String<Base64 Encoded>

### interpolate(scriptData)

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| scriptData | Object\<ScriptData\> | Uninterpolated script data |

**Returns**

Promise ⇒ Object\<ScriptData\>

### toText(scriptJSON)

**Arguments**

| Param | Type | Description |
| --- | --- | --- |
| scriptJSON | LabTechScript | LabTech Script JSON returned by decodeXML |


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
