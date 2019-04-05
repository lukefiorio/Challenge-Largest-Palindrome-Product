/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  let factor_0 = 0;
  let factor_1 = 0;
  let palindromeNumber = 0;

  // do your work here
  function checkSymmetry(num) {
    let strDigits = num.toString();
    const cntDigits = strDigits.length;
    for (let i = 0; i < Math.floor(cntDigits / 2); i++) {
      if (strDigits.substring(i, i + 1) !== strDigits.substring(cntDigits - i - 1, cntDigits - i)) {
        return false;
      }
    }
    return true;
  }

  let palindromeArr = [];
  let factor_0Arr = [];
  let factor_1Arr = [];

  for (let i = 10 ** (digits - 1); i < 10 ** (digits); i++) {
    for (let j = 10 ** (digits - 1); j < 10 ** (digits); j++) {
      if (checkSymmetry(i * j)) {
        palindromeArr.push(i * j);
        factor_0Arr.push(i);
        factor_1Arr.push(j);
      }
    }
  }

  for (let i = 0; i < palindromeArr.length; i++) {
    if (palindromeArr[i] > palindromeNumber) {
      palindromeNumber = palindromeArr[i];
      factor_0 = factor_0Arr[i];
      factor_1 = factor_1Arr[i];
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
