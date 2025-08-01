/*
 Дано масив об’єктів. 
 Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів. І знайти суму всіх балансів користувачів

*/


let phones = [];
let sum = 0;

for (let user of users) {
  if (user.balance > 2000) {
    phones.push(user.phone);
  }
    sum += user.balance;
}

console.log(phones);
console.log('Cума всіх балансів:', sum);

