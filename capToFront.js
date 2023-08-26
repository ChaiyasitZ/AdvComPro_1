function capToFront(str) {
  let cap = str.match(/[A-Z]/g); 
  let low = str.match(/[a-z]/g); 
  return cap.join("") + low.join(""); 
}

console.log(capToFront("hApPy")); // APpyh
console.log(capToFront("moveMENT")); // MENTmove
console.log(capToFront("shOrtCAKE")); // OCAKEshrt