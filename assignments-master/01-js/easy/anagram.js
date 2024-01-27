/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const _=require('lodash');
  let lowerStr1=str1.toLowerCase();
  let lowerStr2=str2.toLowerCase();

  let finalStr1=lowerStr1.split("").sort();
  let finalStr2=lowerStr2.split("").sort();
  return _.isEqual(finalStr1,finalStr2)
}
const prompt=require('prompt-sync')();
var inp1=prompt("Enter the first string:  ");
var inp2=prompt("Enter the second string:  ");
console.log(isAnagram(inp1,inp2));

module.exports = isAnagram;
