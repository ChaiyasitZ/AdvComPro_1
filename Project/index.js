// Description: This file contains the JavaScript code for the BMI calculator.

document.getElementById("calculateBtn").addEventListener("click", function() { // Add event listener to calculate button
    var weight = parseFloat(document.getElementById("weight").value); // Convert weight from string to float
    var height = parseFloat(document.getElementById("height").value) / 100; // Convert height from cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) { // Check if weight or height is not a number or less than or equal to 0
        document.getElementById("result").innerText = "Please enter valid weight and height."; // Display error message
        return; 
    }

    var bmi = weight / (height * height); // Calculate BMI
    var bmiCategory; // Declare variable to store BMI category

    if (bmi < 18.5) { 
        bmiCategory = "Underweight";
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
        document.getElementById("result").style.color = "red"; // Change text color to red
    } else if (bmi >= 18.5 && bmi < 24.9) { 
        bmiCategory = "Normal weight";
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
        document.getElementById("result").style.color = "green"; // Change text color to green
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
        document.getElementById("result").style.color = "orange"; // Change text color to orange
    } else {
        bmiCategory = "Obese";
    }

});


