let number = 10369;

digit5 = number % 10;
//остача 9
digit4 = parseInt(number / 10) % 10;
//остача 6
digit3 = parseInt(number / 100) % 10;
//остача 3
digit2 = parseInt(number / 1000) % 10;
//0
digit1 = parseInt(number / 10000) % 10;
//1

console.log(digit1,digit2,digit3,digit4,digit5);



