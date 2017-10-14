/**
 * Created by kgrube on 10/13/2017
 */

const decodeFile = require('../lib/script').decodeFile;
const interpolateScriptData = require('../lib/script').interpolateScriptData;
const selectScriptData = require('../lib/script').selectScriptData;

decodeFile('../test/Export Test.xml')
  .then(decoded => {
    return decoded;
  })
  .then(decoded => {
    return selectScriptData(decoded)
  })
  .then(scriptData => interpolateScriptData(scriptData))
  .then(scriptData => {
    console.log(JSON.stringify(scriptData, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
