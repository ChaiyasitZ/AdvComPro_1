const names = ['Justin', 'Sarah', 'Christopher'];

// while loop
console.log('\n********** while loop **********');
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}

// for loop
console.log('\n********** for loop **********');
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
}

// for-of loop
console.log('\n********** for-of loop **********');
for (let name of names) {
    console.log(name);
}

// do-while loop
console.log('\n********** do-while loop **********');
let index2 = 0;
do {
    const name = names[index2];
    console.log(name);
    index2++;
}
while (index2 < names.length);
