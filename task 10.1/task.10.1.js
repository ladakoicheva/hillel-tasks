/*Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, 
вік, місце проживання тощо. 
Створіть метод об'єкту для отримання та відображення цих даних. */

const user = {
    name: "Bob",
    country_of_residence: "USA",
    age: 18,
    hobby:" baseball",
    get_data: function () {
        console.log(` Імʼя:${this.name} \n Країна:${this.country_of_residence} \n Вік: ${this.age} \n Хобі:${this.hobby}`);
    }

};

user.get_data();