const text =
  "Зустріч з командою проєкту #Beta_Release запланована на 25.12.2023. Важливо перевірити всі компоненти, опис яких можна знайти на сайті https://beta.project.org. Деталі щодо вимог до імені користувача Admin_User_New та пароля будуть надані пізніше. Ми розглянемо хештеги #QA_Session, #Release, #DevTeam та дати, такі як 01.01.2024 та 05.02.2024. Будь ласка, зверніть увагу на посилання https://docs.google.com/document/d/123.";
//всі хештеги
function extractHashtags(text) {
    const hashtags = /#\w*/gim;
    return text.match(hashtags) || [];
}

//всі дати дд.мм.рррр
function extractDates(text) {
    const date = /\b\d{2}\.\d{2}\.\d{4}\b/g;
    return text.match(date)|| [];
}

//посилання
function extractLinks(text) {
    const link = /https?:\/\/\S+/g;
    return text.match(link).join("\n")|| [];
}
//валідація імені користувача
function validateUsername (username) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/;
    return usernameRegex.test(username);

}
//перевірка пароля
function getPasswordStrength(password) {
    const simple = /^[a-zA-Z]+$/;
    const medium = /^[a-zA-Z0-9]+$/;
    const complex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    
    const checks = [
  
    { regex: complex, label: "Складний" },
    { regex: medium, label: "Середній" },
    { regex: simple, label: "Простий" },
  ];

  for (const { regex, label } of checks) {
    if (regex.test(password)) return label;
  }

  return "Не відповідає жодному типу";
}

const username = "User_2025";
const password = "pass123456!@#$";

console.log(`Всі хештеги :${extractHashtags(text)}`);
console.log(`Всі дати : ${extractDates(text)}`);
console.log(`Всі посилання:${extractLinks(text)}`);
console.log(`чи валідне імʼя користувача? ${validateUsername(username)}`);
console.log(`Cкладність пароля:${getPasswordStrength(password)}`);
