let num = parseInt(prompt("введіть тризначне число"));
let digit3 = num % 10;
let digit2 = Math.floor((num % 100) / 10);
let digit1 = Math.floor(num / 100);
let sum = digit1 + digit2 + digit3;
let productOfNum = digit1 * digit2 * digit3;

//перевірка на парність
if (sum % 2 === 0) {
    console.log("a: Сума чисел парна");
} else {
    console.log("a: Сума чисел непарна");
}
//чи кратна сума 5
if (sum % 5 === 0) {
    console.log("b: Сума чисел кратна 5");
} else {
    console.log("b: Сума чисел не кратна 5");
}
//чи добуток більше за 100
if (productOfNum > 100) {
    console.log("c:добуток цифр більше за 100");
} else {
    console.log("c: добуток менший за 100");
}
//чи всі числа однакові
if (digit1 === digit2 && digit2=== digit3) {
    console.log("d: всі числа однакові");
} else {
    console.log("d: не всі числа однакові");
}
//чи є однакові цифри
if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    console.log("e:Є однакові цифри");
} else if (digit1 === digit2 === digit3) {
    console.log("e:Всі цифри однакові");
} else {
    console.log("e:Немає однакових чисел");
}

