const books = [
  { title: "JS для начинающих", price: 500, genre: "programming" },
  { title: "CSS в деталях", price: 300, genre: "design" },
  { title: "React быстро", price: 800, genre: "programming" },
];



//Задание:


//1. С помощью filter выбрать только книги жанра "programming".
console.log("task1");
const programmingBooks = books.filter((book) => book.genre === "programming");
console.log(programmingBooks);




//2. С помощью map получить массив только с названиями этих книг.
console.log("task 2");
const mapped = books.map((book) => book.title);
console.log(mapped);

//3. С помощью reduce посчитать общую стоимость выбранных книг.
console.log("task 3");

 const sum = programmingBooks.reduce(
   (accumulator, currentValue) => accumulator + currentValue.price,
     0,
 );

 console.log(sum);
