let number = prompt("Введіть тризначне число:")
 isNaN(number) || number < 100 || number > 999
  ? console.log("Це не тризначне число")
  : number[0] === number[1] && number[1] === number[2]
  ? console.log("Всі цифри однакові")
  : number[0] === number[1] ||
    number[1] === number[2] ||
    number[0] === number[2]
  ? console.log("Серед цифр є однакові.")
  : console.log("Всі цифри різні.");
        
