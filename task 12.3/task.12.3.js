const taskList = document.querySelector(".list");
const taskInput = document.querySelector(".task");
const addTaskBtn = document.querySelector(".add");
tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete-btn" data-index="${index}">X</button>`;
    taskList.appendChild(li);
  });
}
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  tasks.push(taskText); 
  renderTasks(); 
  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskList.addEventListener("click", (todo) => {
  if (todo.target.classList.contains("delete-btn")) {
       const index = todo.target.dataset.index;
       tasks.splice(index, 1); 
       renderTasks();  
  }
});
