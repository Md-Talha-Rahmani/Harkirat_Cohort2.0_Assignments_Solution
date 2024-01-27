/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let upperStr=str.toUpperCase().replace(/[^A-Z0-9]/g, "");
  let rev=upperStr.split("").reverse().join("");
  //  console.log(upperStr)
  //  console.log(rev)
  if(upperStr===rev) {
      return true;
  } else {
      return false;
  }
}
console.log(isPalindrome('hello'))

module.exports = isPalindrome;
