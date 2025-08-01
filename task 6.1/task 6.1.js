//Створити масив, довжину та елементи якого задає користувач. Після цього, відсортувати масив за зростанням. 
// Далі, видалити з масива елементи з 2-го по 4-й елемент. 
// По мірі змін масива - виводити його вміст на сторінку.



let arr = [];
let length = 0;


//  Отримуємо довжину масиву
while (length <= 0) {
  length = parseInt(prompt("Введи довжину масиву"));
  if (isNaN(length)) {
    alert("Це не число!");
  } else if (length === 0) {
    alert("О ні, заповни цю порожнечу(((");
  } else if (length < 0) {
    alert("Довжина масива не може бути < 0");
  }
}

//  Отримуємо елементи
for (let i = 0; i < length; i++) {
  let input = prompt(`Введи елемент №${i + 1}`);
  let value = Number(input);
  if (!isNaN(value) && input.trim() !== "") {
    arr.push(value); // число
  } else {
    arr.push(input); // рядок
  }
}

// Виводимо початковий масив
document.write("Початковий масив:", arr,"<br>");

// Перевіряємо: чи всі числа
let allNumbers = arr.every((el) => typeof el === "number");

// Сортуємо
if (allNumbers) {
  arr.sort((a, b) => a - b);
} else {
  arr.sort(); // за алфавітом
}

document.write("Відсортований масив:", arr ,"<br>");

//  Видаляємо з 2 по 4 (індекси 1–3)
arr.splice(1, 3);
document.write("Після видалення з 2 по 4 елемент:", arr);
