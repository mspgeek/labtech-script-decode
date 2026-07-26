import {describe, it, expect} from 'vitest';
import {constants, interpolate, getFunctionLineDescription} from '../src/index.js';
const {Functions} = constants;

function makeStep(FunctionId, params = {}) {
  return {
    Action: 2, Continue: 1, FunctionId, Indentation: 0, OsLimit: 0,
    Param1: '', Param2: '', Param3: '', Param4: '', Param5: '', Sort: 0,
    ...params,
  };
}

function interpolateSteps(steps) {
  const PackedScript = {NewDataSet: {Table: {ScriptData: {ScriptSteps: steps}}}};
  return interpolate(PackedScript).NewDataSet.Table.ScriptData.ScriptSteps;
}

describe('function definitions 257-259', () => {
  it('defines Script Resume State', () => {
    expect(Functions['257']).toMatchObject({
      FunctionId: 257, Name: 'Script Resume State', Parameters: 1, FunctionType: 2, FunctionFlag: 1,
    });
    expect(Functions['257'].ParamNames).toHaveLength(1);
    expect(Functions['257'].ParamNames[0].ParamName).toBe('Resume State');
  });

  it('defines Script Label', () => {
    expect(Functions['258']).toMatchObject({
      FunctionId: 258, Name: 'Script Label', Parameters: 1, FunctionType: 2, FunctionFlag: 1,
    });
    expect(Functions['258'].ParamNames[0].ParamName).toBe('Label Name');
  });

  it('defines Script Exit', () => {
    expect(Functions['259']).toMatchObject({
      FunctionId: 259, Name: 'Script Exit', Parameters: 0, FunctionType: 2, FunctionFlag: 1,
    });
    expect(Functions['259'].ParamNames).toEqual([]);
  });

  it('interpolates steps using the new definitions', () => {
    const [resume, label, exit] = interpolateSteps([
      makeStep(257, {Param1: 2}),
      makeStep(258, {Param1: 'Cleanup', Sort: 1}),
      makeStep(259, {Sort: 2}),
    ]);
    expect(resume.StepDescription).toBe('Set Resume State: Resume from last successful step');
    expect(label.StepDescription).toBe('Label: Cleanup');
    expect(exit.StepDescription).toBe('Exit Script with Success');
  });

  it('renders resume state variants', () => {
    expect(getFunctionLineDescription(interpolateSteps([makeStep(257, {Param1: 0})])[0]))
      .toBe('Set Resume State: Resume disabled');
    expect(getFunctionLineDescription(interpolateSteps([makeStep(257, {Param1: 1})])[0]))
      .toBe('Set Resume State: Resume from this step');
  });
});
