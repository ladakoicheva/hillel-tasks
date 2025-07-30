let n = parseInt(prompt("Введи число"));

if (n < 1) {
  document.write("Число не може бути степенем трійки");
} else {
  while (n % 3 === 0) {
    n = n / 3;
  }

  if (n === 1) {
    document.write("Це число можна отримати як 3 у деякій степені");
  } else {
    document.write("Це число НЕ можна отримати як 3 у деякій степені");
  }
}
