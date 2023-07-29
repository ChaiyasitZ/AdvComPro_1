document.getElementById("calculateBtn").addEventListener("click", function() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid weight and height.";
        document.getElementById("result").style.color = "red";
        return; 
    }

    var bmi = weight / (height * height);
    var bmiCategory;

    if (bmi < 18.5) { 
        bmiCategory = "Underweight";
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
        document.getElementById("result").style.color = "red";
        document.getElementById("caution").innerText = "Caution: You are in the Underweight category. It's important to maintain a healthy weight.";
        document.getElementById("caution").style.color = "red";
    } else if (bmi >= 18.5 && bmi < 24.9) { 
        bmiCategory = "Normal weight";
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
        document.getElementById("result").style.color = "green";
        document.getElementById("caution").innerText = "Caution: You are in the Normal weight category. It's important to maintain a healthy weight.";
        document.getElementById("caution").style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
        document.getElementById("result").style.color = "orange";
        document.getElementById("caution").innerText = "Caution: You are in the Overweight category. It's important to maintain a healthy weight.";
        document.getElementById("caution").style.color = "orange";
    } else {
        bmiCategory = "Obese";
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
        document.getElementById("result").style.color = "red";
        document.getElementById("caution").innerText = "Caution: You are in the Obese category. Please consult a healthcare professional.";
        document.getElementById("caution").style.color = "red";
    }

});
