function simplePair(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[i] * arr[i + j] === n) {
        return [arr[i], arr[i + j]];
      }
    }
  }
  return null;
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));