/*
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var dictionary = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    },
    i = 1,
    result = val = dictionary[s[0]];

  while (i < s.length) {
    var newVal = dictionary[s[i]];

    if (newVal <= val) {
      result += newVal;
      console.log('+' + newVal)
    } else {
      result += newVal - 2 * val;
      console.log('+' + newVal + '-' + 2 * val)
    }

    i++;
    val = newVal;
  }

  return result;
};

console.log(romanToInt("MCMXCVI"));