function removeDupe(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDupe([1, 0, 1, 0])); // [1, 0]
console.log(removeDupe(["The", "big", "cat"])); // ["The", "big", "cat"]
console.log(removeDupe(["John", "Taylor", "John"])); // ["John", "Taylor"]