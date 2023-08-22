function highestDigit(num) {
    let max = 0;
    while (num > 0) {
        let digit = num % 10; 
        if (digit > max) {
            max = digit;
        }
        num = Math.floor(num / 10);
    }
    return max;
}

console.log(highestDigit(379)); 
console.log(highestDigit(23145678)); 
console.log(highestDigit(377401)); 