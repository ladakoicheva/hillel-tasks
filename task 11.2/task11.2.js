const text = document.querySelector(".text");
const button = document.querySelector(".button");
let clickCount = 0;
let isColored = false;
const originalColor = getComputedStyle(text).color;

button.addEventListener("click", () => {
  clickCount++;
    if (!isColored) {
        isColored = true;
        text.style.color = "#ff0055";
        text.style.textShadow = "0 0 5px #ff0055, 0 0 10px #ff0055";
  } else {
        text.style.color = originalColor;
        text.style.textShadow = 'none';
        isColored = false;
  }
});
