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
const {bytesToBase64} = require('./bytes');

/**
 * @param promise
 * @param promise.resolve
 * @param promise.reject
 * @param buffer
 * @returns {string}
 */
function pakoGzipHandler({resolve, reject}, buffer) {
  try {
    const deflated = pako.gzip(new TextEncoder().encode(buffer), {level: -1, header: {os: 0}, memLevel: 8});
    // need to set XFL byte to 04 to match LT output
    deflated[8] = 0x4;
    return resolve(bytesToBase64(deflated));
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
    return resolve(new TextDecoder().decode(inflated));
  } catch (err) {
    return reject(err);
  }
}

exports.unzip = pakoGunzipHandler;
exports.zip = pakoGzipHandler;
