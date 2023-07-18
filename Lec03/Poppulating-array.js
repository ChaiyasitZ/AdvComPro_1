let arr1 =['A', true, 5];

console.log("\n********Length and index********\n");
console.log(arr1.length);
console.log(arr1[3]);  // Does not exist
console.log(arr1[2]); // Last index of array
console.log(arr1[arr1.length-1]); // Equals 2nd last index of array

console.log("\n********Length and index Part 2********\n");
let arr3 = Array(3); // Creates an array of length 3
arr3[2] = "Adding value";
console.log(arr3[2]) // Prints "Adding value"
console.log(arr3[arr3.length-1]) // Prints "Adding value"
console.log(arr3[0]) // Prints "undefined"
console.log(arr3[1]) // Prints "undefined"
