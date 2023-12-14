const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = +String(n)[0];
  arr = String(n).split('');
  for (i = 0; i < String(n).length; i++) {
    sss = arr.slice();
    sss.splice(i,1);
    if (+sss.join('') > max) {
      max = +sss.join('');
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
