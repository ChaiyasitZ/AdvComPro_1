// Init: npm init -y
function areaTriangle(b, h) { // b: base, h: height
    return (b * h) / 2; // (base * height) / 2
}

function areaCircle(r) { // r: radius
    return Math.PI * r * r; // PI * r^2
} 

function areaSqr(w, l) { // w: width, l: length
    return w * l; // width * length
}

export {areaTriangle, areaCircle, areaSqr}; // export functions