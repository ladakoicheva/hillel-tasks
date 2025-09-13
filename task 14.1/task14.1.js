let content = [
  {
    text: "Наш код — як кава зранку: інколи гіркий, але без нього життя не працює.",
    author: "Марина",
    job: "Front-End розробниця",
    img: "/task 14.1/img/1.png",
  },
  {
    text: "Коли пишеш код о третій ночі й він запускається з першого разу — це не баг, це диво.",
    author: "Антон",
    job: "Back-End інженер",
    img: "/task 14.1/img/5.png",
  },
  {
    text: "Ми не просто пишемо програми, ми створюємо маленькі світи, де навіть console.log має значення.",
    author: "Олег",
    job: "Full-Stack девелопер",
    img: "/task 14.1/img/4.png",
  },
  {
    text: "У нашій команді деплой на прод — це не стрес, а свято. Ну, майже завжди.",
    author: "Іра",
    job: "DevOps",
    img: "/task 14.1/img/3.png",
  },
  {
    text: "Більшість проблем вирішується перезапуском. Якщо ні — пиши нам.",
    author: "Максим",
    job: "QA інженер",
    img: "/task 14.1/img/2.png",
  },
];

let currentIndex = 0;
let image, textElement, authorElement, jobElement, textBlock;
let dots, prevBtn, nextBtn; 

function updateSlide(index) {
  image.src = content[index].img;
  textElement.textContent = content[index].text;
  authorElement.textContent = content[index].author;
  jobElement.textContent = content[index].job;

  updateDots(index);
  updateButtons(index); 
}

function updateDots(index) {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function updateButtons(index) {
  
  if (index === content.length - 1) {
    nextBtn.classList.add("hidden");
  } else {
    nextBtn.classList.remove("hidden");
  }

  
  if (index === 0) {
    prevBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
  }
}

function generateContent() {
  image = document.querySelector(".img");
  nextBtn = document.querySelector(".next");
  prevBtn = document.querySelector(".prev");
  textBlock = document.querySelector(".text-content");
  textElement = document.createElement("p");
  authorElement = document.createElement("h3");
  jobElement = document.createElement("p");

  textBlock.appendChild(textElement);
  textBlock.appendChild(authorElement);
  textBlock.appendChild(jobElement);

  let dotsContainer = document.querySelector(".dots");

  content.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlide(currentIndex);
    });
    dotsContainer.appendChild(dot);
  });

  dots = document.querySelectorAll(".dot");

  updateSlide(currentIndex);

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex + 1;
    updateSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex - 1;
    updateSlide(currentIndex);
  });
}

generateContent();
