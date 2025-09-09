const cities = {
  ODS: "Odessa",
  KV: "Kiev",
  LV: "Lviv",
};
const languages = {
  ENG: "English",
  SPN: "Spanish",
  UKR: "Ukrainian ",
  GERM: "German",
};
const headers = [
  "Імʼя",
  "Прізвище",
  "Дата народження",
  "Стать",
  "Місто",
  "Адреса",
  "Мови",
];

const form = document.querySelector("form");
const data = document.querySelector(".data");
const saveButton = document.querySelector(".button");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  getFormData();
  form.reset();
});

getFormData = () => {
 

  //hide form
  form.classList.add("hidden");

  //get the values from inputs 
  const nameValue = document.querySelector('input[name="name"]').value;
  const surnameValue = document.querySelector('input[name="surname"]').value;
  const birthdayValue = document.querySelector('input[name="birthdate"]').value;
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const GenderValue = genderInput ? genderInput.value : "";
  const cityKey = document.querySelector("select").value;
  const cityValue = cities[cityKey];
  const addressValue = document.querySelector('textarea[name="address"]').value;
  const checkedLanguages = document.querySelectorAll(
    'input[name="language"]:checked'
  );
  const languageValues = Array.from(checkedLanguages).map((el) => el.value);
  const languageNames = languageValues.map((code) => languages[code]).join(",");
  //regex
  const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/;
  const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  const addressRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9\s.,\-\/№]+$/;
 

  //validation
  function validateInput(selector, regex) {
    const input = document.querySelector(selector);
    const isValid = regex.test(input.value.trim());
    input.classList.toggle("invalid", !isValid);
    return isValid;
  }
   
  const isNameValid = validateInput('input[name="name"]', nameRegex);
  const isSurnameValid = validateInput('input[name="surname"]', nameRegex);
  const isBirthdayValid = validateInput('input[name="birthdate"]', birthdateRegex);
  const isAddressValid = validateInput('textarea[name="address"]', addressRegex);

  if (!isNameValid || !isSurnameValid || !isBirthdayValid || !isAddressValid) {
    form.classList.remove("hidden");
    return;
  }
//data
  const formData = {
    name: nameValue,
    surname: surnameValue,
    birthday: birthdayValue,
    gender: GenderValue,
    city: cityValue,
    address: addressValue,
    languages: languageNames,
  };
  //create table and fill it with data

  const headerRow = document.createElement("tr");
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  data.appendChild(headerRow);

  const valueRow = document.createElement("tr");
  for (let key in formData) {
    const td = document.createElement("td");
    td.textContent = formData[key];
    valueRow.appendChild(td);
  }
  data.appendChild(valueRow);
};
