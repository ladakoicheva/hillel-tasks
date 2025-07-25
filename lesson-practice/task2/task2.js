let km = parseFloat(prompt("введи відстань в кілометрах"));
let ft = parseFloat(prompt("Введи відстань у футах"));
let kmInFeet = km * 3280.84;
if (kmInFeet < ft) {
    console.log('Кілометри менші');
} else if (kmInFeet > ft) {
    console.log('Фути менші');
} else {
    console.log("Відстані однакові");
}