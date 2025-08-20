/*Дізнатись суму всіх зарплат користувачів:
Об'єкт може містити невідому кількість департаментів та співробітників*/
'use strict';
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

debugger;
function sumSalaries(obj) {
    let total = 0;
    for (const key in obj) {
        const value = obj[key];
        if (Array.isArray(value)) {
            total += value.reduce((acc, emp) => acc + emp.salary, 0);
        } else if (typeof (value === 'object' && value != null)) {
            total += sumSalaries(value);
        }
    }
    return total;
}
console.log("Cума всіх зарплат:" + sumSalaries(company));
