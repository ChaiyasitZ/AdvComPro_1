// const people = ['John', 'Beth', 'Mike']
// const one = 1;
// const str = 'Hello World';
// const employee = {
//     firstName: 'John',
//     lastName: 'Doe',
// };

// function sayHello(person) {
//     console.log('Hello ' + person.firstName);
// }

// console.log(typeof people);
// console.log(typeof sayHello);
// console.log(employee instanceof Array);
// sayHello(employee);

// const message = "Hello";
// const place = "World";

// // logging out a string
// console.log('Hello, World!');

// // using substitution
// console.log('Hello, %s!', place);

// // using a string literal
// console.log(`${message}, ${place}!`);

// var Hello = "Hello"; // var Hello = "Hello";

// console.log(Hello); // console.log(Hello);
// Hello = "Hello World"; // Hello = "Hello World";
// console.log(Hello); // console.log(Hello);

// if (true) { // if (true) {
//     let World = "Hello World"; // let World = "Hello World";
//     console.log(World); // console.log(World);
// }

// const fixval = "Hello World"; // const fixval = "Hello World";
// console.log(fixval); // fixval = "test assign value to const"

// // Concatenation with template literals
// console.log('\n********************** Concatenation with template literals **********************\n');

// let str1 = "JavaScript";
// let str2 = "fun";

// console.log('I am writing code in ${str1}');
// console.log('Formatting in ${str1} is ${str2}!');

// // Expressions in template literal
// console.log('\n********************** Expressions in template literal **********************\n');

// let bool1 = true;
// console.log(`1 + 1 is ${1 + 1}`);
// console.log(`The opposite of true is ${!bool1}`);

// function getVowels(str) {
//     const m = str.match(/[aeiou]/gi);
//     if (m === null) {
//         return 0;
//     }
//     return m.length;
// }
// console.log(getVowels('seeing'));

// function test(t) {
//     if (t === undefined) {
//         return 'Undefined value!';
//     }
//     return t;
// }

// let x;
// console.log(test(x));

// let num1 = 100;

// // Basic Math
// console.log('\n**********************Basic Math**********************\n');
// console.log(num1 + 25); // 125
// console.log(num1 - 100); // 0
// console.log(num1 * 100); // 10000
// console.log(num1 / 1500); // 0.06666666666666667

// console.log('\n**********************Addtional Mathmatical Operation**********************\n');
// // Additional mathematical operations
// console.log(num1 % 1500); // 100 (remainder)
// console.log(++num1); // 101 (Increment)
// console.log(--num1); // 100 (Decrement)

// console.log('\n**********************Using The Math Object**********************\n');
// // Using the Math object
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.sqrt(num1)); // 10

// let num1 = '150';
// let flo1 = '1.50';

// console.log('\n**********************Converting Strings to Numbers**********************\n');
// // Converting strings to numbers
// console.log(Number.parseInt(num1)); // 150
// console.log(Number.parseInt(num1)); // 1
// console.log(Number.parseInt('ABC')); // NaN (Not a Number)
// console.log(Number.parseInt(0xF)); // 15

// console.log('\n**********************Converting Strings to Floats**********************\n');
// // Converting strings to floats
// console.log(Number.parseFloat('1.25abc')); // 1.25
// console.log(Number.parseFloat('flo1')); // 1.5
// console.log(Number.parseFloat('ABC')); // NaN (Not a Number)

// console.log('\n**********************More Conversation Examples**********************\n');
// // More conversation examples
// // Number after special characters are ignored
// console.log(Number.parseInt('1.5')); // 1
// console.log(Number.parseInt('1 + 1')); // 1

// // Using Template Literals
// console.log(parseInt(`${1 + 1}`)); // 2

// console.log('\n**********************Converting Numbers to Strings**********************\n');
// // Converting numbers to strings
// console.log(num1.toString()); // '150'
// console.log(flo1.toString()); // '1.5'
// console.log((100).toString()); // '100'

// let x = 5;
// let y = 2;
// let z = x * y;
// let a = x ** y;
// document.getElementById("demo1").innerHTML = z;
// document.getElementById("demo2").innerHTML = a;

// const status = 200;

// if (status === 200) {
//     console.log('OK!');
// } else if (status === 400) {
//     console.log('Error!');
// } else {
//     console.log('Unknown status');
// }

// const status = 200;

// const message = (status === 200) ? 'OK!' : 'Error!';

// console.log(message); // OK!

// const name = '';

// if (name) {
//     console.log('We have a name!');
// } else {
//     console.log('No name provided');
// }

const status = 'error';

if (status.toUpperCase() === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}