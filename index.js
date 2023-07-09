function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmi = weight / ((height/100) * (height/100));
    var resultContainer = document.getElementById('resultContainer');

    if (!isNaN(bmi)) {
      var bmiText = "Your BMI is: " + bmi.toFixed(2);

      if (bmi < 18.5) {
        bmiText += " (Low)";
        resultContainer.classList.add("low");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiText += " (Normal)";
        resultContainer.classList.add("normal");
      } else {
        bmiText += " (High)";
        resultContainer.classList.add("high");
        var cautionText = "Caution: High BMI may indicate increased health risks.";
        var cautionElement = document.createElement("p");
        cautionElement.classList.add("caution");
        cautionElement.textContent = cautionText;
        resultContainer.appendChild(cautionElement);
      }

      resultContainer.innerHTML = bmiText;
    } else {
      resultContainer.innerHTML = "Please enter valid values for weight and height.";
    }
  }

  var form = document.getElementById('bmiForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    calculateBMI();
  });