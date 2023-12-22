const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (!options.separator) {
    options.separator = '+';
   } else {
    options.separator = String(options.separator);
   }

    if (!options.additionSeparator) {
    options.additionSeparator = '|';
   } else {
    options.additionSeparator = String(options.additionSeparator);
   }

  if (!("addition" in options)) {
    options.addition = '';
   } else {
    options.addition = String(options.addition);
   }

let newStr = '';
let addStr = ''
let addSep = '';
let sep = '';

  addStr = String((options.addition || '') + (options.additionSeparator || '')).repeat((+options.additionRepeatTimes || 1));
    //console.log('----', addStr.slice(0,-1));
 if (options.additionSeparator.length > 0) {
  addSep = addStr.slice(0, -options.additionSeparator.length);
 } else {
  addSep = addStr;
 }

 newStr = String(String(str) + (addSep || '') + (options.separator || '')).repeat((+options.repeatTimes || 1));
    //newStr.length = newStr.length - String(options.separator).length -1 ;
 if (options.separator) {
   sep = newStr.slice(0, -(options.separator.length));
  } else {
   sep = newStr;
  }

  return newStr.slice(0, -(options.separator.length));
}

module.exports = {
  repeater
};
