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

// const status = 'error';

// if (status.toUpperCase() === 'ERROR') {
//     console.log('Something went wrong!');
// } else {
//     console.log('Looks great!!');
// }

// const status = 500;

// if (status === 200) {
//     console.log('OK!');
// } else if (status === 400 || status === 500) {
//     console.log('Error!');
// } else {
//     console.log('Unknown status');
// }

// const status = 700;

// switch (status) {
//     case 200:
//         console.log('OK!');
//         break;
//     case 400: // if (status === 400 || status === 500)
//     case 500: // if (status === 400 || status === 500)
//         console.log('Error!');
//         break;
//     default: // else
//         console.log('Unknown status');
// }

// // 1. Fuction Definition
// function prtintHello(name) {
//     console.log('Hello ' + name);
//     return name + ' Hello! ';
// }

// console.log(prtintHello.name);

// // 2. Fuction Call
// let result = prtintHello('Chaiyasit !');
// console.log(result);

// let plusFive = (number) => {
//     return number + 5;
// };
// // f is assigned the value of plusFive
// let f = plusFive;

// console.log(plusFive(3)); // 8
// // Since f has a function value, it can be invoked.
// console.log(f(9)); // 14

// const add = (a, b) => a + b;
// console.log(add(1, 2)); // 3

// const substract = (a, b) => {
//     const result = a - b;
//     return result; // return is necessary in a multi-line arrow function
// }
// console.log(substract(4, 2)); // 2

// const sum = (firstParam, secondParam) => {
//     return firstParam + secondParam;
// };
// console.log(sum(2, 5)); // Prints: 7

// const prtintHello = () => {
//     console.log('hello'); // Prints: Hello
// };
// prtintHello();

// const checkWeight = (weight) => {
//     console.log(`Baggage weight : ${weight} kilograms.`);
// };
// checkWeight(25); // Prints: Baggage weight : 25 kilograms.

// const multiply = (a, b) => a * b;
// console.log(multiply(2, 30)); // Prints: 60

// function createQuote(quote, callback) {
//     let myQuote = "Like I always say, " + quote;
//     callback(myQuote); // 2
// }

// function logQuote(quote) {
//     console.log(quote + ' Yes.. ');
// }

// createQuote("you will get better", logQuote); // 1

// const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

// function reverseString(value) {
//     let reversedValue = "";
//     value.split('').forEach((char) => {
//         reversedValue = char + reversedValue;
//     });
//     return reversedValue;
// }

// console.log(reverseString('Hello World!'));

// function reverseString(value) {
    
//     const reversedValue = value.split('').reverse().join('');
//     return reversedValue;
// }

// console.log(reverseString('Hello World!'));

// function circumference(r) {
//     if (Number.isNaN(Number.parseFloat(r))) {
//         return 0;
//     }
//     return parseFloat(r) * 2.0 * Math.PI;
// }

// console.log(circumference('4.567abcdefgh')); // 28.695307297889173
// console.log(circumference('abcdefgh')); // 0

// console.log(Math.floor(5.05)); // 5
// console.log(Math.ceil(7.004)); // 8
// console.log(Math.random()); // 0.6223245434803363
// console.log(Math.min(-2, -3, -1)); // -3

// const start = Date.now();
// setTimeout(() => {
//     const millis = Date.now() - start;
//     console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
// }, 2000);

// function findPerimeter(length, width) {
//     return (length + width) * 2; // 2 * (length + width)
// }
// console.log(findPerimeter(6, 7)); // 26
// console.log(findPerimeter(20, 10)); // 60
// console.log(findPerimeter(2, 9)); // 22

// function equation(value) {
//     let result = 0;
//     let operator = '+';
//     value.split('').forEach((char) => { // for (let char of value)
//         if (char === '+' || char === '-' || char === '*' || char === '/') { // if (['+', '-', '*', '/'].includes(char))
//             operator = char; // operator = value
//         } else { // else if (Number.isInteger(parseInt(char)))
//             if (operator === '+') { // 
//                 result += parseInt(char);
//             } else if (operator === '-') {
//                 result -= parseInt(char);
//             } else if (operator === '*') {
//                 result *= parseInt(char);
//             } else if (operator === '/') {
//                 result /= parseInt(char);
//             }
//         }
//     });
//     return result;
// }

// console.log(equation('1+1'));
// console.log(equation('7*4-2'));
// console.log(equation('1+1+1+1+1'));




