class BigHouse {
  constructor(address) {
    this.address = address;
    if (!address || address.trim() === "") {
      console.log("Error: Адреса будинку не може бути порожньою.");
    }
    this.appartments = new Map();
  }
  addAppartment(number, roomsAmount) {
    const newAppartment = new Appartment(number, roomsAmount);

    if (newAppartment.number && newAppartment.roomsAmount) {
      this.appartments.set(newAppartment.number, newAppartment);
      return newAppartment;
    }
    return null;
  }
  displayInfo() {
    console.log(`\n========================================`);
    console.log(`Інформація про будинок за адресою: ${this.address}`);
    console.log(`========================================\n`);

    if (this.appartments.size === 0) {
      console.log("У цьому будинку ще немає квартир.");
      return;
    }

    this.appartments.forEach((appartment, appNumber) => {
      console.log(
        `--- Квартира №${appNumber} (Кількість кімнат: ${appartment.roomsAmount}) ---`
      );

      if (appartment.inhabitants.size === 0) {
        console.log("  У цій квартирі мешканців немає.");
      } else {
        console.log("  Мешканці:");
        appartment.inhabitants.forEach((inhabitant) => {
          console.log(`    - ${inhabitant.fullname}`);
        });
      }
      console.log("------------------------------------\n");
    });
  }
}

class Appartment {
  constructor(number, roomsAmount) {
    if (number < 1 || roomsAmount < 1) {
      console.log("Номер квартири та число кімнат має бути додатнім!");
    } else {
      this.number = number;
      this.roomsAmount = roomsAmount;
    }
    this.inhabitants = new Set();
  }

  addInhabitant(name, surname) {
    const newInhabitant = new Inhabitant(name, surname);
    if (newInhabitant.name && newInhabitant.surname) {
      this.inhabitants.add(newInhabitant);
    }
    return;
  }
}

class Inhabitant {
  constructor(name, surname) {
    if (!name || name.trim() === "" || !surname || surname.trim() === "") {
      console.log("Error (не заповнено імʼя або прізвище)");
    } else {
      this.name = name;
      this.surname = surname;
    }
  }

  get fullname() {
    return this.name + " " + this.surname;
  }
}
function startBuildingCreation() {
  const address = prompt("Введіть адресу будинку:");
  if (!address) {
    console.log("Створення будинку скасовано.");
    return;
  }
  const myBigHouse = new BigHouse(address);

  const numAppartments = parseInt(prompt("Введіть кількість квартир:"));
  if (isNaN(numAppartments) || numAppartments <= 0) {
    console.log("Некоректна кількість квартир. Створення скасовано.");
    return;
  }

  for (let i = 1; i <= numAppartments; i++) {
    const roomsAmount = parseInt(
      prompt(`Введіть кількість кімнат для квартири №${i}:`)
    );
    const appartment = myBigHouse.addAppartment(i, roomsAmount);

    if (appartment) {
      const numInhabitants = parseInt(
        prompt(`Введіть кількість мешканців для квартири №${i}:`)
      );

      if (isNaN(numInhabitants) || numInhabitants < 0) {
        console.log(
          `Некоректна кількість мешканців для квартири №${i}. Ця квартира буде без мешканців.`
        );
      } else {
        for (let j = 1; j <= numInhabitants; j++) {
          const name = prompt(
            `Введіть ім'я мешканця №${j} для квартири №${i}:`
          );
          const surname = prompt(
            `Введіть прізвище мешканця №${j} для квартири №${i}:`
          );
          appartment.addInhabitant(name, surname);
        }
      }
    }
  }
  myBigHouse.displayInfo();
}

startBuildingCreation();
