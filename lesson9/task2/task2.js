"use strict";
/*Завдання 2. Сума замовлень кожного користувача
Використати map + reduce, щоб створити об’єкт 
{ Alice: 620, Bob: 1700, Charlie: 300 }.*/

const sum = orders.map((order) => {
  const items = order.items;

  const orderSum = items.reduce((total, item) => total + item.price, 0);

  return [order.user, orderSum];
});

const result = sum.reduce((acc, [user, orderSum]) => {
  acc[user] = (acc[user] || 0) + orderSum;
  return acc;
}, {});

console.log(result);

/*Використовуємо Map, де ключ - им’я користувача, а значення - сума його покупок
Map { 'Alice' => 620, 'Bob' => 1700, 'Charlie' => 300 }*/

const map = new Map();

for (const order of orders) {
  let orderSum2 = 0;
  for (const item of order.items) {
    orderSum2 += item.price;
  }
  const name = order.user;
  if (map.has(name)) {
    map.set(name, map.get(name) + orderSum2);
  } else {
    map.set(name, orderSum2);
  }
}

console.log(map);
