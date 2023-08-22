function frequencySort(s) {
    let map = new Map();
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted[i][1]; j++) {
            result += sorted[i][0];
        }
    }
    return result;
}

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
console.log(frequencySort("2a554442f544asfasssffffasss"));