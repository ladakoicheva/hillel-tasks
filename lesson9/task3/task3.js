"use strict";
/*Створюємо Set, щоб отримати унікальні товари
Set { 'Phone', 'Case', 'Laptop', 'Headphones', 'Monitor' }
*/

const items = orders.reduce((acc, { items }) => {
  const names = items.map(item => item.name);
  return [...acc, ...names];
}, []);

const special = new Set(items);
for (const s of special) {
  console.log(s);
}
