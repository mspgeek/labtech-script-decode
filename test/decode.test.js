import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import decode from '../src/index.js'

const fixturesDir = dirname(fileURLToPath(import.meta.url))
const exportTestXML = readFileSync(join(fixturesDir, 'Export Test.xml'), 'utf8')
const hellScriptXML = readFileSync(join(fixturesDir, 'Hell Script v2.xml'), 'utf8')
// exported from Automate 250.436, exercises functions 257/258/259
const demoXML = readFileSync(join(fixturesDir, 'Script Function Demonstration.xml'), 'utf8')

describe('decodeXML', () => {
  it('decodes Export Test.xml', async () => {
    const result = await decode.decodeXML(exportTestXML)
    const { Table } = result.PackedScript.NewDataSet
    expect(Table.ScriptName).toBe('Export Test')
    expect(Table.ScriptId).toBe(6401)
    expect(Array.isArray(Table.ScriptData.ScriptSteps)).toBe(true)
    // full-shape lock, catches any drift from dep upgrades
    expect(result).toMatchSnapshot()
  })

  it('decodes a multi-script bundle', async () => {
    const result = await decode.decodeXML(hellScriptXML)
    expect(result).toMatchSnapshot()
  })

  it('matches the historical baseline Export Test.json', async () => {
    // known good-ish baseline captured from the original tooling (had some
    // unfixed export issues, see plan notes), catches drift snapshots cannot
    const baseline = JSON.parse(readFileSync(join(fixturesDir, 'Export Test.json'), 'utf8'))
    const result = await decode.decodeXML(exportTestXML)
    expect(result).toEqual(baseline)
  })
})

describe('Script Function Demonstration.xml (Automate 250.436)', () => {
  it('decodes with the same structure as the 2017 exports', async () => {
    const result = await decode.decodeXML(demoXML)
    const { Table } = result.PackedScript.NewDataSet
    expect(Table.ScriptName).toBe('Script Function Demonstration')
    expect(Table.ScriptId).toBe(1303)
    const ids = Table.ScriptData.ScriptSteps.map((s) => s.FunctionId)
    expect(ids).toContain(257)
    expect(ids).toContain(258)
    expect(ids).toContain(259)
    expect(result).toMatchSnapshot()
  })

  it('interpolates 257-259 to the editor display text', async () => {
    const result = await decode.decodeXML(demoXML)
    const bySort = decode.interpolate(result.PackedScript).NewDataSet.Table.ScriptData.ScriptSteps
    const text = bySort.map((s) => s.StepDescription)
    expect(text).toContain(':NewScriptLabelFunction - Label')
    expect(text).toContain('Exit Script')
    expect(text).toContain('Script Resume State: Resume disabled')
    expect(text).toContain('Script Resume State: Resume from this step')
    expect(text).toContain('Script Resume State: Resume from last executed script step')
  })

  it('round-trips stably', async () => {
    const encoded1 = await decode.encodeXML(await decode.decodeXML(demoXML))
    const encoded2 = await decode.encodeXML(await decode.decodeXML(encoded1))
    expect(encoded2).toBe(encoded1)
  })
})

describe('encodeXML round trip', () => {
  it('is stable: encode(decode(x)) === encode(decode(encode(decode(x))))', async () => {
    const decoded = await decode.decodeXML(exportTestXML)
    const encoded1 = await decode.encodeXML(decoded)
    const decoded2 = await decode.decodeXML(encoded1)
    const encoded2 = await decode.encodeXML(decoded2)
    expect(encoded2).toBe(encoded1)
  })
})

describe('toText', () => {
  it('renders sections keyed by ScriptId', async () => {
    const result = await decode.toText(exportTestXML)
    expect(result[0]).toHaveProperty('ScriptId')
    expect(result[0]).toHaveProperty('ThenSection')
    expect(result).toMatchSnapshot()
  })
})
