function calculateBMI() { 
    var weight = parseFloat(document.getElementById('weight').value); 
    var height = parseFloat(document.getElementById('height').value);
    var bmi = weight / ((height/100) * (height/100));
    var resultContainer = document.getElementById('resultContainer');

    if (!isNaN(bmi)) {
      var bmiText = "Your BMI is: " + bmi.toFixed(2);

      resultContainer.innerHTML = bmiText;
      resultContainer.classList.remove("low", "normal", "high", "caution");

      if (bmi < 18.5) {
        resultContainer.classList.add("low", "caution");
        var cautionText = "Caution: Low BMI may indicate an eating disorder, malnutrition or other health problems.";
        var cautionElement = document.createElement("p");
        cautionElement.textContent = cautionText;
        resultContainer.appendChild(cautionElement);
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultContainer.classList.add("normal");
      } else {
        resultContainer.classList.add("high", "caution");
        var cautionText = "Caution: High BMI may indicate increased health risks.";
        var cautionElement = document.createElement("p");
        cautionElement.textContent = cautionText;
        resultContainer.appendChild(cautionElement);
      }
    } else {
      resultContainer.innerHTML = "Please enter valid values for weight and height.";
    }
  }

  var form = document.getElementById('bmiForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    calculateBMI();
  });