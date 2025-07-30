let num = parseInt(prompt("Введи ціле число"));

while (isNaN(num)) {
  num = parseInt(prompt("Будь ласка, введи ціле число"));
}

if (num <= 1) {
  console.log(`Число ${num} не є простим числом`);
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${num} — це просте число`);
  } else {
    console.log(`${num} — це не просте число`);
  }
}
