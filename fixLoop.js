// Function to generate an array of numbers from 1 to a specified number and return the array.
function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

// Test cases
console.log(printArray(1)); //  ➞ [1]
console.log(printArray(3)); //  ➞ [1, 2, 3]
console.log(printArray(6)); //  ➞ [1, 2, 3, 4, 5, 6]
