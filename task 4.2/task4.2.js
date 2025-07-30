let number = prompt("Введіть тризначне число:");

if (isNaN(number) || number < 100 || number > 999) {
  console.log("Це не тризначне число");
} else if (number[0] === number[1] && number[1] === number[2]) {
  console.log("Всі цифри однакові");
} else if (
  number[0] === number[1] ||
  number[1] === number[2] ||
  number[0] === number[2]
) {
  console.log("Серед цифр є однакові.");
} else {
  console.log("Всі цифри різні.");
}
