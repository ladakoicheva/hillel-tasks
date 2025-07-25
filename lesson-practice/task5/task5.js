let num = parseInt(prompt("введи двозначне число"));
let firstDigit = parseInt(num / 10);
let secondDigit = num % 10;

if (firstDigit > secondDigit) {
    console.log("Перше число більше");
} else if (secondDigit > firstDigit) {
    console.log("Друге число більше");
} else {
    console.log("числа однакові");
}