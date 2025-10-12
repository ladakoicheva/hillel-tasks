const myModalEl = document.getElementById("myModal");
//create modal
const myModal = new bootstrap.Modal(myModalEl);
const openModalBtn = document.querySelector(".btn-outline-primary");

openModalBtn.addEventListener("click", () => {
  myModal.show();
});

//init tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const toggleButton = document.getElementById("alert");
const alertElement = document.getElementById("myJsAlert");

toggleButton.addEventListener("click", () => {
  alertElement.classList.toggle("d-none");
});
//task2
const textElement = document.querySelector(".text");
const originalText = textElement.innerHTML;

let birthdate = prompt("Введіть свою дату народження у форматі ДД/ММ/РРРР");

if (birthdate) {
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(birthdate)) {
    let momentDate = moment(birthdate, "DD/MM/YYYY");
    let formatedDate = momentDate.format("YYYY-MM-DD");
    console.log(formatedDate);
    textElement.innerHTML = originalText;
  } else {
    textElement.innerHTML = "Невірний формат дати";
    alertElement.classList.toggle("d-none");
  }
} else {
  textElement.innerHTML = "Введення скасовано.";
  alertElement.classList.toggle("d-none");
}
