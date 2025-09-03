const text = document.querySelector(".text");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  text.classList.toggle("colored");
});
