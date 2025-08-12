/*Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27 
*/



function getSum() {
    let total = 0; 

    return function(num) {

        while (typeof num !== "number" || isNaN(num)) {
            num = Number(prompt("Введи число"));
            if (isNaN(num)) {
                alert("Ви ввели не число");
            }
        }

        total += num;
        return total;
    }
}

let sum = getSum();

console.log(sum(4));  
console.log(sum(6));  
console.log(sum());   
console.log(sum(7)); 