document.getElementById("bmi-form").addEventListener("submit", function (e) {

    e.preventDefault();
    const Gender = document.getElementById("Gender").value;
    const Age = parseInt(document.getElementById("Age").value);
    const Feet = parseInt(document.getElementById("Feet").value);
    const Inches = parseInt(document.getElementById("Inches").value);
    const Weight = parseFloat(document.getElementById("Weight").value);

    const HeightInMeter = (((Feet * 12) + Inches) * 0.0254);
    const bmi = Weight / (HeightInMeter * HeightInMeter);
    const result = document.getElementById("result");

    let category = '';

    if (bmi < 18.5) {
        category = 'Under Weight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Over Weight'
    } else {
        category = 'Obese'
    }

    let resultmassage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
    resultmassage += 'Category:' + category;

    result.innerHTML = resultmassage;




});
