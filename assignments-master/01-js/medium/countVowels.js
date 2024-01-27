/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    var keepCount=0;
    upperStr=str.toUpperCase();
    for (let i=0;i<upperStr.length;i++) {
      if(upperStr[i]=="A"||upperStr[i]=="E"||upperStr[i]=="I"
      ||upperStr[i]=="O"||upperStr[i]=="U") {
        ++keepCount;
      }
    }
    return keepCount;
}
console.log(countVowels("You are a good boy!"));

module.exports = countVowels;