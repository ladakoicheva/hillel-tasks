/*Завдання 4. Хто витратив більше за всіх?
Використовуйте reduce, щоб знайти користувача з найбільшими витратами.
"Bob витратив більше за всіх: $1700"*/
"use strict";

const items = orders.reduce((acc, order) => {
  const orderSum = order.items.reduce((sum, { price }) => sum + price, 0);

  acc[order.user] = (acc[order.user] || 0) + orderSum;

  return acc;
}, {});

const result = Object.entries(items);

const leader = result.reduce(
  (acc, [user, total]) => {
    if (total > acc.total) {
      return { user, total };
    }
    return acc;
  },
  { user: null, total: 0 }
);

console.log(`${leader.user} витратив більше за всіх: $${leader.total}`);


