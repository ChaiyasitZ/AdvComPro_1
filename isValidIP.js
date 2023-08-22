function isValidIP(ip){
    var ipArr = ip.split('.'); // split ip address by '.' and store in array
    if(ipArr.length !== 4) return false; // check if ip address has 4 parts
    for(var i = 0; i < ipArr.length; i++){ // check if ip address is number
        if(ipArr[i] < 0 || ipArr[i] > 255) return false; // check if ip address is between 0 and 255
    }
    return true;
}

console.log(isValidIP('1.2.3.4'));
console.log(isValidIP('1.2.3')); 
console.log(isValidIP('123.456.78.90'));
console.log(isValidIP('192.222.0.0'));
console.log(isValidIP('192.222.0.256'));   

