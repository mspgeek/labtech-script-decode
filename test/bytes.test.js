import {createRequire} from 'node:module';
import {describe, it, expect} from 'vitest';

const require = createRequire(import.meta.url);
const {base64ToBytes, bytesToBase64} = require('../lib/bytes');

describe('bytes', () => {
  it('round trips', () => {
    const input = Uint8Array.from([0, 1, 2, 250, 255]);
    expect(base64ToBytes(bytesToBase64(input))).toEqual(input);
  });

  it('ignores whitespace in base64 input', () => {
    // xml text nodes carry spaces/newlines around encoded payloads, Buffer tolerated them, atob does not
    const b64 = ` ${bytesToBase64(Uint8Array.from([1, 2, 3]))}\r\n `;
    expect(base64ToBytes(b64)).toEqual(Uint8Array.from([1, 2, 3]));
  });

  it('handles large payloads', () => {
    const big = new Uint8Array(200000).map((_, i) => i % 256);
    expect(base64ToBytes(bytesToBase64(big))).toEqual(big);
  });
});
