function capToFront(str) {
  let cap = str.match(/[A-Z]/g); // match() method retrieves the result of matching a string against a regular expression.
  let low = str.match(/[a-z]/g); // match() method retrieves the result of matching a string against a regular expression.
  return cap.join("") + low.join(""); // join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));