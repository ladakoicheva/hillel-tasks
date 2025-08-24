let phoneBook = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [
    { name: "Аліса", phone: "+380931112233", email: "alisa@example.com" },
    { name: "Богдан", phone: "+380671234567", email: "bogdan@example.com" },
    { name: "Катерина", phone: "+380501112233", email: "katya@example.com" },
  ],

  
  search_by_name: function () {
    let name1 = prompt("Введіть імʼя");
    if (!name1) {
      console.log("⚠️ Введіть ім'я для пошуку!");
      return;
    }

    let search = name1.toLowerCase();
    search = search[0].toUpperCase() + search.slice(1);

    let result = this.contacts.find(
      (contact) => contact && contact.name && contact.name.includes(search)
    );

    if (result) {
      console.log("✅ Знайдено контакт:", result);
    } else {
      console.log("❌ Контакт не знайдено");
    }
  },

  
  addContact: function () {
    let username = prompt("Ім'я:");
    let userphone = prompt("Телефон:");
    let useremail = prompt("Email:");

    if (!username || !userphone || !useremail) {
      console.log("⚠️ Всі поля обов'язкові!");
      return;
    }

    
    let duplicate = this.contacts.find(
      (contact) => contact && contact.name === username
    );
    if (duplicate) {
      console.log(`⚠️ Контакт з ім'ям "${username}" вже існує!`);
      return;
    }

    this.contacts.push({ name: username, phone: userphone, email: useremail });
    localStorage.setItem("contacts", JSON.stringify(this.contacts));
    console.log("✅ Контакт додано!");
  },

  
  showAll: function () {
    if (!this.contacts || this.contacts.length === 0) {
      console.log("📭 Контакти відсутні");
      return;
    }

    console.log("📒 Список контактів:");
    this.contacts.forEach((c) => {
      if (c && c.name && c.phone && c.email) {
        console.log(`- ${c.name}, 📞 ${c.phone}, 📧 ${c.email}`);
      }
    });
  },
};

// phoneBook.addContact();
 phoneBook.showAll();
//phoneBook.search_by_name();
