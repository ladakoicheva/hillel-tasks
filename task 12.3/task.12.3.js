const taskList = document.querySelector(".list");
const taskInput = document.querySelector(".task");
const addTaskBtn = document.querySelector(".add");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete-btn">X</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);


taskList.addEventListener('click', (todo) => {
    if (todo.target.tagName === "BUTTON") {
      todo.target.parentElement.remove();
    }
})