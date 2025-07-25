let num = parseInt(prompt("Введи число"));
let lastDigit = num % 10;
if (lastDigit % 2 === 0) {
    console.log("Число парне");
}
else  {
    console.log("Число непарне");
}
console.log("остання цифра:", lastDigit);