function totalVolume() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        let volume = 1;
        for (let j = 0; j < arguments[i].length; j++) { 
            volume *= arguments[i][j];
        }
        total += volume;
    }
    return total;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // 63
console.log(totalVolume([2, 2, 2], [2, 1, 1])); // 10
console.log(totalVolume([1, 1, 1])); // 1
console.log(totalVolume([5, 1, 10], [1, 9, 2])); // 405





