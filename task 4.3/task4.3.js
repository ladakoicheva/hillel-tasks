//основне завдання

const currentYear = new Date().getFullYear();

const birthYear = prompt("Введи свій рік народження:");
const city = prompt("У якому місті ти живеш?");
const sport = prompt("Який твій улюблений вид спорту?");

const age = currentYear - Number(birthYear);

let country = "";
let cityMessage = "";

switch (city) {
  case "Київ":
    country = "України";
    break;
  case "Вашингтон":
    country = "США";
    break;
  case "Лондон":
    country = "Великої Британії";
    break;
  default:
    country = "";
}

if (country) {
  cityMessage = `Ти живеш у столиці ${country}.`;
} else {
  cityMessage = `Ти живеш у місті ${city}.`;
}
if (birthYear) { 
    alert(`Тобі приблизно ${age} років.\n${cityMessage}`);
}

//додаткове
let sportMessage = "";
let champion = "";

switch (sport) {
    case "бокс":
        champion = "Олександр Усик";
        break;
    case "футбол":
        champion = "Мессі";
        break;
    case "теніс":
        champion = "Новак Джокович";
        break;
    default:
        champion = "";
}
if (sport && champion) {
    sportMessage = `Круто!Хочешь стати ${champion}`;
} else if (sport){
    sportMessage = `Гарний вибір!`;
}
if (sportMessage) {
  alert(sportMessage);
}

// перевірка на порожні поля
if (sport === "" && birthYear === "" && city === "") {
  alert("Навіщо ви залишили пусту анкету?");
} else {
  if (sport === "") {
    alert("Шкода, що ви не захотіли ввести вид спорту.");
  }
  if (birthYear === "") {
    alert("Шкода, що ви не захотіли ввести свій вік.");
  }
  if (city === "") {
    alert("Шкода, що ви не захотіли ввести своє місто.");
  }
}




