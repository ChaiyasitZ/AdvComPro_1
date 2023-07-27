document.getElementById("calculateBtn").addEventListener("click", function() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // Convert height from cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid weight and height.";
        return;
    }

    var bmi = weight / (height * height);
    var bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
});
