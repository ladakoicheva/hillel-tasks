let img = document.querySelector(".img");
let prev = document.querySelector(".prev-button");
let next = document.querySelector(".next-button");

let images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
let currentIndex = 0;


function switchSlide(step) {
  currentIndex += step;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  img.src = images[currentIndex];
}


let timer = setInterval(() => switchSlide(1), 3000);


prev.addEventListener("click", () => {
  clearInterval(timer); 
  switchSlide(-1); 
  timer = setInterval(() => switchSlide(1), 3000); 
});

next.addEventListener("click", () => {
  clearInterval(timer);
  switchSlide(1);
  timer = setInterval(() => switchSlide(1), 3000);
});


img.src = images[currentIndex];
