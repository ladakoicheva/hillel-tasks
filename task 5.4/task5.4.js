let num = parseInt(prompt("Введи ціле число:"));

while (isNaN(num)) {
  num = parseInt(prompt("Це не число. Введи ціле число:"));
}

if (num < 2) {
  console.log(`${num} не є простим числом`);
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  const message = isPrime
    ? `${num} — просте число`
    : `${num} — не є простим числом`;

  console.log(message);
}
