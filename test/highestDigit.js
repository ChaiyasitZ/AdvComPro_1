function highestDigit(num) {
    let numMax = 0;
    while (num > 0) {
        let digit = num % 10; 
        if (digit > numMax) {
            numMax = digit;
        }
        num = Math.floor(num / 10);
    }
    return numMax;
}

console.log(highestDigit(379)); // 9
console.log(highestDigit(23145678)); // 8
console.log(highestDigit(377401)); // 7