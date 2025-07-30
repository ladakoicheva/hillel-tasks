let num = parseInt(prompt("Введіть ціле число:"));

document.write(`Квадрати чисел, що не перевищують ${num}: `);

for (let i = 1; i * i <= num; i++) {
  document.write(i + " ");
}
