let num = parseInt(prompt("Введіть ціле число"));
document.write("Квадрат цих чисел: ")
for (let i = 1; i <= 100; i++){
    if (i * i <= num) {
        document.write(i + " ");
    }
}
document.writeln(` не перевищує числа ${num}`);5