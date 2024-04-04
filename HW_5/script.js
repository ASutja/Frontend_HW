const number = prompt("Enter the number");

const firstNumber = parseInt(number / 100);
const secondNumber = parseInt((number % 100) / 10);
const thirdNumber = parseInt(number % 10);

let allNumbersAreEqual = false;
let anyTwoNumbersAreEqual = false;

if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    allNumbersAreEqual = true;
} 
else if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber) {
    anyTwoNumbersAreEqual = true;
}
if (allNumbersAreEqual) {
    document.write("All numbers are equal");
} 
else if (anyTwoNumbersAreEqual) {
    document.write("Two numbers are equal");
} 
else {
    document.write("All numbers are different");
}
