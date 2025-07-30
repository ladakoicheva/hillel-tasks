const number = 60;
let i = 1;

document.write("Дільники:");

let counteven = 0;
let sum = 0;

//виведемо всі дільники

while (i <= number) {
  if (number % i === 0) {
    if (i < number) {
      document.write(i + ",");
    } else if (i === number) {
      document.write(i + "<br>");
    }
//кількість парних дільників та сума 
    if (i % 2 === 0) {
      counteven++;
      sum += i;
    }
  }
  i++;
}

document.write("Кількість парних дільників: " + counteven + "<br>");
document.write("Cума парних дільників: " + sum);
