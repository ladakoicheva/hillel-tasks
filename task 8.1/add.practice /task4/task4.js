const items = [
  { name: "apple", quantity: 2, price: 30 },
  { name: "banana", quantity: 5, price: 10 },
  { name: "orange", quantity: 3, price: 20 },
];



1.// С помощью map создать новый массив, где к каждому товару добавлено поле total = quantity * price.
const mapped = items.map((item) => {
  item.total = item.quantity * item.price; 
  return item; 
});



console.log(mapped);

//2. С помощью reduce найти общую стоимость всех товаров.

const overall = mapped.reduce((acc,item) => acc + item.total, 0);
console.log("Загальна сума:" + overall);