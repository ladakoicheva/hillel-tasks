let number;

// Цикл ввода — пока не введёт натуральное число
while (true) {
  number = parseInt(prompt("Введіть натуральне число:"));
  if (Number.isInteger(number) && number > 0) {
    break; // правильное число — выходим
  } else {
    alert("Будь ласка, введіть натуральне число більше 0.");
  }
}

let i = 1;
let counteven = 0;
let sum = 0;

document.write("Дільники: ");

while (i <= number) {
  //перевірка чи є число дільником
  if (number % i === 0) {
    //якщо так то виводимо його
    if (i < number) {
      document.write(i + ", ");
    } else {
      document.write(i + "<br>");
    }
    //перевірка чи є дільник парним числом
    if (i % 2 === 0) {
      counteven++;
      sum += i;
    }
  }
  i++;
}

document.write("Кількість парних дільників: " + counteven + "<br>");
document.write("Сума парних дільників: " + sum);
