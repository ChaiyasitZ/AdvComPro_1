const names = ['Justin', 'Sarah', 'Christopher'];

// while loop
console.log('\n********** while loop **********');
let index = 0;
while (index < names.length) { // while index is less than the length of the array
    const name = names[index]; // get the name at the current index
    console.log(name); // print the name
    index++; // increment the index
}

// for loop
console.log('\n********** for loop **********'); 
for (let index = 0; index < names.length; index++) { // for each index in the array
    const name = names[index]; // get the name at the current index
    console.log(name); // print the name
}

// for-of loop
console.log('\n********** for-of loop **********');
for (let name of names) { // for each name in the array
    console.log(name); // print the name
}

// do-while loop
console.log('\n********** do-while loop **********');
let index2 = 0; // initialize the index
do { // do the following
    const name = names[index2]; // get the name at the current index
    console.log(name); // print the name
    index2++; // increment the index
}
while (index2 < names.length); // while index is less than the length of the array
