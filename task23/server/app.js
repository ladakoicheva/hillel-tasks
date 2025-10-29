
import express from "express";
import path from "path";
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientPath = path.join(__dirname, "..", "client");


const app = express();
const port = 5000; 


let todos = [

];
let nextId = 1;




app.use(express.json()); 
app.use(express.static(clientPath)); 


app.post("/api/todos", (req, res) => {
  const { title, description, priority, status } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const newTodo = {
    id: nextId++,
    title,
    description: description || "",
    priority: priority || "medium",
    status: status || "todo",
  };
  todos.push(newTodo);
  console.log("Created new todo:", newTodo);
  res.status(201).json(newTodo);
});


app.get("/api/todos", (req, res) => {
  console.log("Sending all todos");
  res.json(todos);
});


app.get("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});


app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex !== -1) {
    const originalTodo = todos[todoIndex];
    const updatedTodo = { ...originalTodo, ...req.body, id: originalTodo.id };
    todos[todoIndex] = updatedTodo;
    console.log("Updated todo:", updatedTodo);
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});


app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    console.log("Deleted todo with id:", id);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});


app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  console.log(`Клієнт доступний тут: http://localhost:${port}`);
});
