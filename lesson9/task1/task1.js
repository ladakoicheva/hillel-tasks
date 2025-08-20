'use strict';

/*Завдання 1. 

Кількість замовлень кожного користувача
Використовуйте reduce, щоб створити об’єкт:
{ Alice: 2, Bob: 2, Charlie: 1 }.*/



const count = orders.reduce((acc, order) => {
  const name = order.user;


  acc[name] = (acc[name] || 0) + 1;

  return acc; 
}, {});

console.log(count); 



/*Використовуйте Map:
Замість об’єкту використовуємо Map, де ключ - ім’я користувача, а значення - кількість його замовлень
Map { 'Alice' => 2, 'Bob' => 2, 'Charlie' => 1 }*/


const map = new Map();
for (const order of orders) {
  const name = order.user;
  if (map.has(name)) {
    map.set(name, map.get(name)+1);
  } else
    map.set(name,1)


}
console.log(map);


