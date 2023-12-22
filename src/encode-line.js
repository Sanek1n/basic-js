const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  if (!!str) {
  let sumChar = 1;
  let char = str[0];
    for (i = 1; i < str.length; i++) {
      if (char === str[i]) {
        sumChar++;
      } else {
        newStr = newStr + (sumChar === 1 ? char : sumChar + char);
        sumChar = 1;
        char = str[i];
      }
    }
   newStr = newStr + (sumChar === 1 ? char : sumChar + char)
  }
  return newStr;
}

module.exports = {
  encodeLine
};
