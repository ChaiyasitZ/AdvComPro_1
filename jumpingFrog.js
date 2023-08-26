const jumppingFrog = (n, length) => {
    let count = 1;
    let i = 0;
    while (i < n) {
        if (length[i] === 0) return "no chance :-(";
        i += length[i];
        count++;
    }
    return count;
}

console.log(jumppingFrog(5, [1, 1, 1, 1, 1])); // 6
console.log(jumppingFrog(5, [1, 3, 1, 1, 1])); // 4
console.log(jumppingFrog(5, [1, 1, 0, 1, 1])); // no chance :-(