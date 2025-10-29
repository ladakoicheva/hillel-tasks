document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "/api/todos";
  const todoForm = document.getElementById("todo-form");
  const titleInput = document.getElementById("task-title");
  const descriptionInput = document.getElementById("task-description");
  const priorityInput = document.getElementById("task-priority");
  const statusInput = document.getElementById("task-status");
  const taskList = document.getElementById("task-list");

 
  async function fetchTodos() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Не вдалося завантажити завдання");
      }
      const todos = await response.json();

      taskList.innerHTML = ""; 

      if (todos.length > 0) {
      
        todos.forEach(renderTodo);
      } else {
       
        taskList.innerHTML = "<p>Поки що завдань немає.</p>";
      }
    } catch (error) {
      console.error("Помилка:", error);
      taskList.innerHTML = "<p>Не вдалося завантажити завдання.</p>";
    }
  }

 
  function renderTodo(todo) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.setAttribute("data-id", todo.id);

    let priorityClass = "";
    if (todo.priority === "high") priorityClass = "priority-high";
    if (todo.priority === "medium") priorityClass = "priority-medium";
    if (todo.priority === "low") priorityClass = "priority-low";

    li.innerHTML = `
      <div class="task-info">
          <h3>${todo.title}</h3>
          <p class="task-description">${todo.description || ""}</p>
          <div class="task-details">
              <span class="${priorityClass}">Пріоритет: ${todo.priority}</span>
              <span>Статус: ${todo.status}</span>
          </div>
      </div>
      <div class="task-actions">
          <button class="btn-delete">Видалити</button>
      </div>
    `;

    taskList.appendChild(li);
  }

  async function handleAddTodo(event) {
    event.preventDefault();

    const newTodoData = {
      title: titleInput.value,
      description: descriptionInput.value,
      priority: priorityInput.value,
      status: statusInput.value,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoData),
      });

      if (!response.ok) {
        throw new Error("Не вдалося додати завдання");
      }

      await fetchTodos();
     

     
      todoForm.reset();
      document.getElementById("task-priority").value = "medium";
      document.getElementById("task-status").value = "todo";
    } catch (error) {
      console.error("Помилка при створенні:", error);
    }
  }

  async function handleListClick(event) {
    if (event.target.classList.contains("btn-delete")) {
      const todoItem = event.target.closest(".task-item");
      const todoId = todoItem.getAttribute("data-id");

      if (!todoId) return;

      try {
        const response = await fetch(`${apiUrl}/${todoId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Не вдалося видалити завдання");
        }

       
        await fetchTodos();
    
      } catch (error) {
        console.error("Помилка при видаленні:", error);
      }
    }
  }


  fetchTodos(); 
  todoForm.addEventListener("submit", handleAddTodo);
  taskList.addEventListener("click", handleListClick);
});
