/*
Знайти суму і кількість додатних (положительных) елементів.+
Знайти мінімальний (найменший) елемент масива і його індекс. +
Знайти максимальний (найбільший) елемент масива та його індекс +
Визначити кількість від’ємних (отрицательных) елементів масива +
Знайти кількість непарних додатних  елементів +
Знайти кількість парних додатних елементів +
Знайти суму парних додатних елементів +
Знайти суму непарних додатних елементів +
Знайти добуток всіх додатних елементів +
Змінити на 0 всі елементи масива окрім найбільшого. +
*/


let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,];
  

let sum = 0;
let positiveNumberCount = 0;
let negativeNumberCount = 0;
let min = arr[0];
let minIndex = 0;
let max = arr[1];
let maxIndex = 0;
let positiveOddCount = 0;
let positiveEvenCount = 0;
let positiveEvenSum = 0;
let positiveOddSum = 0;
let product = 1;



for (let i = 0; i < arr.length; i++) {
   if (arr[i] > 0) {
    sum += arr[i];
    positiveNumberCount++;
    product *= arr[i];
  }
   if (arr[i] < 0) {
       negativeNumberCount++;
    }

   if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
   if (arr[i] > max) {
       max = arr[i];
       maxIndex = i;
       
  }
    if (arr[i] > 0 && arr[i] % 2 != 0) {
        positiveOddCount++;
        positiveOddSum+= arr[i];
    }
  
    if (arr[i] > 0 && arr[i] % 2 === 0) {
       positiveEvenCount++;
       positiveEvenSum += arr[i];
    }
   
    
    
}
let index = 0;

while (index < arr.length) {
    if (index !== maxIndex) {
        arr[index] = 0;
    }

    
    index++;
}

console.log(`сума додатних чисел:`, sum);
console.log(`Кількість додатніх елементів:`, positiveNumberCount);
console.log("Мінімальний елемент:", min);
console.log("Його індекс:", minIndex);
console.log("Максимальний елемент:", max);
console.log("Його індекс:", maxIndex);
console.log(`Кількість від’ємних елементів:`, negativeNumberCount);
console.log(`кількість непарних додатних  елементів :`, positiveOddCount);
console.log(`кількість парних додатних  елементів :`, positiveEvenCount);
console.log(`сума парних додатних елементів:`, positiveEvenSum);
console.log(`сума непарних додатних елементів:`, positiveOddSum);
console.log(`добуток додатних елементів:`, product);
console.log("змінений масив:", arr);


