let a = parseInt(prompt("Введіть перше число"));
let b = parseInt(prompt("Введіть друге число"));

if (a < b) {
  if (b % a === 0) {
    console.log("Число a менше за b і є його дільником");
  } else {
    console.log("Число a менше за b і не є його дільником");
  }
} else if (a > b) {
  console.log("Число a більше за b");
} else {
  console.log("Числа a і b однакові");
}
