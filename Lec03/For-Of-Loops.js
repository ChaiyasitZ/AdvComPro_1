let str = 'Hello';
// does the same as

let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
}