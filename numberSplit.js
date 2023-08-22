function numberSplit(num) {
    let arr = [];
    let num1 = Math.floor(num / 2); // floor() returns the largest integer less than or equal to a given number.
    let num2 = Math.ceil(num / 2); // ceil() returns the smallest integer greater than or equal to a given number.
    arr.push(num1, num2);
    return arr;
}

console.log(numberSplit(4)); 
console.log(numberSplit(10)); 
console.log(numberSplit(11)); 
console.log(numberSplit(-9));