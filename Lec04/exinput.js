const { reverse } = require('dns');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var name, weight, height, bmi;

// prompt user to enter name, weight, and height
rl.question('Enter your name: ', (answer) => {
    name = answer;
    rl.question('Enter your weight (in kg): ', (answer) => {
        weight = parseFloat(answer);
        rl.question('Enter your height (in m): ', (answer) => {
            height = parseFloat(answer);
            bmi = (weight / ((height * height)/10000)).toFixed(2); // toFixed(2) rounds to 2 decimal places
            console.log(`${name}, your BMI is ${bmi}`); 
            rl.close();
        });
    });
});
