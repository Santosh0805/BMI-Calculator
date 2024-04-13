// function calculateBMI() {
//     var weight = parseFloat(document.getElementById("weight").value);
//     var height = parseFloat(document.getElementById("height").value);

//     if (isNaN(weight) || isNaN(height)) {
//         document.getElementById("result").innerText = "Please enter valid weight and height.";
//         return;
//     }

//     var bmi = weight / (height * height);
//     let resultText;

//     if (bmi <= 18.4) {
//         resultText = "Underweight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         resultText = "Normal weight";
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         resultText = "Overweight";
//     } else {
//         resultText = "Obese";
//     }

//     document.getElementById("result").innerText = "Your BMI : " + bmi.toFixed(2) + " - " + resultText;
// }