/**
 * Created by kgrube on 6/11/2019
 */
const decode = require('../index');
const fs = require('fs');
const path = require('path');

const xml = fs.readFileSync(path.join(__dirname, 'Hell Script v2.xml'));


decode.decodeXML(xml)
  .then(result => result.PackedScript.NewDataSet.Table.ScriptData.ScriptSteps)
  .then(steps => {
    const functionDescriptions = {};

    steps.forEach(step => {
      if (!functionDescriptions[step.FunctionId]) {
        functionDescriptions[step.FunctionId] = {
          functionName: step.FunctionObject.Name,
          functionDisplays: [],
          step: step,
        };
      }
      functionDescriptions[step.FunctionId].functionDisplays.push(step.StepDescription);
    });

    Object.keys(functionDescriptions).forEach(key => {
      const description = functionDescriptions[key];
      console.log(`### ${description.functionName}
${description.step.FunctionObject.Description}

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
${description.step.FunctionObject.ParamNames.map(param => {
        if (param.Values && param.Values.length === 1) {
          return `| ${param.ParamName} | Values loaded from database  | ${param.Description} |`;
        } else if (param.Values && param.Values.length > 1) {
          return `| ${param.ParamName} | [${param.Values.join(', ')}]  | ${param.Description} |`;
        }
        return `| ${param.ParamName} |  | ${param.Description} |`;
      }).join('\n')}

**Example Function Text**
\`\`\`        
${description.functionDisplays.join('\n')}
\`\`\`
`);

      console.log();
    });
  });
