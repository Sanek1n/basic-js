const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let newArr = '';
  if (!(members instanceof Array)) {
    return false;
  }
  members.forEach((element) => {
    if (typeof element === 'string') {
      newArr += element.trimStart()[0].toUpperCase();
    }
  })
  if (newArr.length === 0) {
    return false;
  } else {
    return newArr.split('').sort().join('');
  }
}

module.exports = {
  createDreamTeam
};
