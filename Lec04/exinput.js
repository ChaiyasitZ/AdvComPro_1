// Program to calculate BMI
// Input: weight and height

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var name, weight, height, bmi;

// promt user to enter name, weight, and height
rl.question('Enter your name: ', (answer) => {
    name = answer;
    rl.question('Enter your weight (in kg): ', (answer) => {
        weight = answer;
        rl.question('Enter your height (in m): ', (answer) => {
            height = answer;
            bmi = weight / (height * height);
            // display the result in 2 decimal places
            console.log(`${name}, your BMI is ${bmi}`);
            rl.close();
        });
    });
});