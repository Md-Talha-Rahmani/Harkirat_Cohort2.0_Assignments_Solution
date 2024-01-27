/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max=numbers[0];
    let lengthOfNumber=numbers.length;
    for(let i=0;i<lengthOfNumber;i++) {
        let currentElement=numbers[i];
        if(currentElement>max) {
            max=currentElement;
        }
    }
    return max;
}

module.exports = findLargestElement;