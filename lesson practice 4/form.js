const cities = { ODS: "Odessa", KV: "Kiev", LV: "Lviv" };
const languages = {
  ENG: "English",
  SPN: "Spanish",
  UKR: "Ukrainian",
  GERM: "German",
};


const headers = [
  "Імʼя",
  "Прізвище",
  "Дата народження",
  "Адреса",
  "Стать",
  "Місто",
  "Мови",
];


const formFields = [
  {
    name: "name",
    selector: 'input[name="name"]',
    regex: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/,
    minLength: 1,
  },
  {
    name: "surname",
    selector: 'input[name="surname"]',
    regex: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/,
    minLength: 1,
  },
  {
    name: "birthdate",
    selector: 'input[name="birthdate"]',
    regex: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
    minLength: 1,
  },
  {
    name: "address",
    selector: 'textarea[name="address"]',
    regex: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9\s.,\-\/№]+$/,
    minLength: 5,
  },
];

const form = document.querySelector("form");
const data = document.querySelector(".data");
const saveButton = document.querySelector(".button");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  getFormData();
});

function getFormData() {
  const formData = {};
  let isValid = true;

  
  formFields.forEach((field) => {
    const input = document.querySelector(field.selector);
    const value = input.value.trim();
    const valid =
      field.regex.test(value) && value.length >= (field.minLength || 1);

    if (!valid) {
      input.classList.add("invalid");
      isValid = false;
    } else {
      input.classList.remove("invalid");
    }

    formData[field.name] = value;
  });

  
  const genderInput = document.querySelector('input[name="gender"]:checked');
  formData.gender = genderInput ? genderInput.value : "";

  const cityKey = document.querySelector("select[name='city']").value;
  formData.city = cities[cityKey];

  const checkedLanguages = document.querySelectorAll(
    'input[name="language"]:checked'
  );
  const languageValues = Array.from(checkedLanguages).map(
    (el) => languages[el.value]
  );
  formData.languages = languageValues.join(", ");

  if (!isValid) return;

  renderTable(formData);
}

function renderTable(formData) {

  form.classList.add("hidden");


  data.innerHTML = "";

 
  const headerRow = document.createElement("tr");
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  data.appendChild(headerRow);

  
  const valueRow = document.createElement("tr");

  
  const headerToKey = {
    Імʼя: "name",
    Прізвище: "surname",
    "Дата народження": "birthdate",
    Адреса: "address",
    Стать: "gender",
    Місто: "city",
    Мови: "languages",
  };

  headers.forEach((header) => {
    const td = document.createElement("td");
    const key = headerToKey[header];
    td.textContent = formData[key] || "";
    valueRow.appendChild(td);
  });

  data.appendChild(valueRow);
}
