function isAdditive(str) {
    let len = str.length;
    for (let i = 1; i < len; i++) { 
        for (let j = i + 1; j < len; j++) { 
            let num1 = parseInt(str.substring(0, i));
            let num2 = parseInt(str.substring(i, j));
            let next = num1 + num2;
            let nextStr = next.toString(); 
            let nextLen = nextStr.length; 
            let nextIndex = j; 
            while (nextIndex + nextLen <= len) { 
                let nextNum = parseInt(str.substring(nextIndex, nextIndex + nextLen)); 
                if (nextNum === next) { 
                    if (nextIndex + nextLen === len) { 
                        return true; 
                    }
                    num1 = num2; 
                    num2 = next; 
                    next = num1 + num2; 
                    nextStr = next.toString();
                    nextLen = nextStr.length;
                    nextIndex += nextLen;
                } else {
                    break;
                }
            }
        }
    }
    return false;
}

console.log(isAdditive("112358")); // true
console.log(isAdditive("129881000")); // true
console.log(isAdditive("12988110101891")); // true
console.log(isAdditive("123456789")); // false
console.log(isAdditive("300045007500")); // true

