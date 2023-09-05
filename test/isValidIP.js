function isValidIP(ip){
    var ipArr = ip.split('.'); 
    if(ipArr.length !== 4) return false; 
    for(var i = 0; i < ipArr.length; i++){ 
        if(ipArr[i] < 0 || ipArr[i] > 255) return false; 
    }
    return true;
}

console.log(isValidIP('1.2.3.4')); // true
console.log(isValidIP('1.2.3')); // false
console.log(isValidIP('123.456.78.90')); // false
console.log(isValidIP('192.222.0.0')); // true
console.log(isValidIP('192.222.0.256')); // false

