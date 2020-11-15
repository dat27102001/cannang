let weight = prompt('can nang');
let height = prompt('chieu cao');
let bmi = weight/ (height ^ 2);

if(bmi < 18) {
    document.write("underweight");
} else if (bmi <25.0) {
    document.write("normal");
} else if(bmi <30.0) {
    document.write("overweight");
} else {
    document.write("obese");
}