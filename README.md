## labtech-script-decode

A set of utilities to load, parse and interpolate exported LabTech scripts. 

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

decode.decodeXML(scriptXML);

decode.decode(base64string);
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

Decode and parse a base 64 encoded string such as ScriptData or LicenseData.  Does not interpolate constants such as function names into decoded values.

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


### constants

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