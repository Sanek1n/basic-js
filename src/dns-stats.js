const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = new Map();
  let arr = [];
  let keyArr = '';
  domains.forEach((values) => {
    arr = values.split('.');
    for (let i = arr.length - 1; i >= 0; i--) {
      keyArr = keyArr + '.' + arr[i];
      if (obj.has(keyArr)) {
        obj.set(keyArr, obj.get(keyArr) + 1);
      } else {
        obj.set(keyArr, 1);
      }
    }
    keyArr = '';
  })
  return Object.fromEntries(obj);
}

module.exports = {
  getDNSStats
};
