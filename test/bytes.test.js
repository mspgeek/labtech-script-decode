import { describe, it, expect } from 'vitest'
import { base64ToBytes, bytesToBase64 } from '../src/bytes.js'

describe('bytes', () => {
  it('round trips', () => {
    const input = Uint8Array.from([0, 1, 2, 250, 255])
    expect(base64ToBytes(bytesToBase64(input))).toEqual(input)
  })

  it('ignores whitespace in base64 input', () => {
    // xml text nodes carry spaces/newlines around encoded payloads, Buffer tolerated them, atob does not
    const b64 = ` ${bytesToBase64(Uint8Array.from([1, 2, 3]))}\r\n `
    expect(base64ToBytes(b64)).toEqual(Uint8Array.from([1, 2, 3]))
  })

  it('handles large payloads', () => {
    const big = new Uint8Array(200000).map((_, i) => i % 256)
    expect(base64ToBytes(bytesToBase64(big))).toEqual(big)
  })
})
