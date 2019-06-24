/**
 * Created by kgrube on 1/31/2018
 */
/**
 * @module gzip
 */
/**
 * @private
 */
// define variables, load libs based on what libs are available.
const pako = require('pako');
let BufferLib;

// workaround to set this global when this file isn't compiled by webpack
if (typeof IS_BROWSER === 'undefined') {
  IS_BROWSER = false;
}

// include buffer class in browsers
if (IS_BROWSER) {
  BufferLib = require('buffer/').Buffer;
}

if (!IS_BROWSER) {
  BufferLib = Buffer;
}

/**
 * @param promise
 * @param promise.resolve
 * @param promise.reject
 * @param buffer
 * @returns {string}
 */
function pakoGzipHandler({resolve, reject}, buffer) {
  try {
    const deflated = pako.gzip(buffer, {level: -1, header: {os: 0}, memLevel: 8});
    // need to set XFL byte to 04 to match LT output
    deflated[8] = 0x4;
    return resolve(BufferLib.from(deflated).toString('base64'));
  } catch (err) {
    return reject(err);
  }
}

/**
 * @param promise
 * @param promise.resolve
 * @param promise.reject
 * @param buffer
 * @returns {string}
 */
function pakoGunzipHandler({resolve, reject}, buffer) {
  try {
    const inflated = pako.ungzip(buffer);
    return resolve(BufferLib.from(inflated).toString());
  } catch (err) {
    return reject(err);
  }
}

exports.unzip = pakoGunzipHandler;
exports.zip = pakoGzipHandler;
