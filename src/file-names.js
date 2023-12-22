const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  newArr = [];
  obj = new Map();

  names.forEach((value) => {
    if (obj.has(value)) {
      obj.set(value, obj.get(value) + 1);
      newArr.push(value + `(${obj.get(value)})`);
      } else {
        if (newArr.includes(value)) {
          obj.set(value, 1);
          newArr.push(value + `(${obj.get(value)})`);
        } else {
          obj.set(value, 0);
          newArr.push(value);
        }
    }
  });

  return newArr;
}

module.exports = {
  renameFiles
};
