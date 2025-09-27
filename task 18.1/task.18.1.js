
let timerElement = document.getElementById("timer");
let timerInterval; 


function startTimer() {
 
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  let start = prompt("Введіть час у форматі 00:00");
  if (!start || !start.includes(":")) {
    alert("Невірний формат!");
    return;
  }
  
  let [min, sec] = start.split(":").map(Number);

  if (isNaN(min) || isNaN(sec) || min < 0 || sec < 0 || sec > 59) {
      alert("Невірне числове значення!");
      return;
  }
  
  let totalSeconds = min * 60 + sec;

 
  updateTimerDisplay(totalSeconds);


  timerInterval = setInterval(() => {
    totalSeconds = tick(totalSeconds); 
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Час вийшов! 🔔";
    }
  }, 1000);
}

function updateTimerDisplay(totalSeconds) {
    let m = Math.floor(totalSeconds / 60);
    let s = totalSeconds % 60;
   
    timerElement.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function tick(currentSeconds) {
    if (currentSeconds > 0) {
        currentSeconds--;
        updateTimerDisplay(currentSeconds);
    }
    return currentSeconds;
}

