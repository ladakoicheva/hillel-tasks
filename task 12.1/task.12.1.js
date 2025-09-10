const button1 = document.querySelector(".prompt");
const button2 = document.querySelector(".redirect");
let link = "";
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

button1.addEventListener("click", () => {
  let input = prompt("send a link");
  if (input === ""||input === null) {
    alert("You didn't send a link");
    return;
  }else if (!urlRegex.test(input)) {
    alert("This is not a valid link");
    return;
  }
  else{
  link = input;
  }
});
button2.addEventListener("click", () => {
  if (link === ""|| link === null) {
    alert("Did not get your link  ");
    return;
  }
  window.location.href = link;
});
 