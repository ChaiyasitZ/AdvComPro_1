let arr1 = ['A', true, 2]

//  push and pop
console.log('\n********** push and pop **********');
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); // remove last element
console.log(arr1);

//  shift and unshift
console.log('\n********** shift and unshift **********');
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift()); // remove first element
console.log(arr1);

//  concat
console.log('\n********** concat **********');
let arr2 = ['B', false, 3]
let newArr = arr1.concat(arr2);
let newArr2 = arr1.concat(arr2, [1, 2, 3]);
console.log(newArr);
console.log(newArr2);