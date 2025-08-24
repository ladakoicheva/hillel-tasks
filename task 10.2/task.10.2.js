/*Маєте масив чисел. Використовуйте 
вже існуючі методи масиву для створення нового масиву,
 в якому лише парні числа з оригінального масиву.*/

let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
let even = numbers.filter((num) => num % 2 === 0);
console.log(even);
