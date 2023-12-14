const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let sum = 0;
  let findIdx = -1;
  let i = 0;
  while (i < arr1.length) {
    findIdx = arr2.indexOf(arr1[i]);
    if (findIdx > -1) {
      sum++;
      arr1.splice(i,1);
      arr2.splice(findIdx,1);
    } else {
      i++;
    }
  }

  i = 0;
  while (i < arr2.length) {
    findIdx = arr1.indexOf(arr2[i]);
    if (findIdx > -1) {
      sum++;
      arr2.splice(i,1);
      arr1.splice(findIdx,1);
    } else {
      i++;
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
