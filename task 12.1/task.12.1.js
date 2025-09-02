const button1 = document.querySelector(".prompt");
const button2 = document.querySelector(".redirect");
let link = "";
button1.addEventListener("click", () => {
  let input = prompt("send a link");
  link = input;
});
button2.addEventListener("click", () => {
  window.location.href = link;
});
