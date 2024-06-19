const addForm = document.getElementById("add-form");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("due-date");
const todoList = document.getElementById("todo-list");
const sortAscButton = document.getElementById("sort-asc");
const sortDescButton = document.getElementById("sort-desc");

// Initializing the Todos Array
let todos = [];

// Function to Add a Todo
function addTodo(title, description, dueDate) {
  const todo = {
    id: Date.now(),
    title,
    description,
    dueDate,
    completed: false,
  };

  todos.push(todo);
  saveTodos();
  renderTodos();
}

// Function to Render Todos
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.innerHTML = `
      <span class="todo-title ${todo.completed ? "completed" : ""}">
        ${todo.title}
      </span>
      <span class="todo-description ${todo.completed ? "completed" : ""}">
        ${todo.description}
      </span>
      <div class="todo-actions">
        <button class="complete-btn">${todo.completed ? "Uncomplete" : "Complete"}</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        <span class="due-date">${new Date(todo.dueDate).toLocaleString()}</span>
      </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos();
    });

    editBtn.addEventListener("click", () => {
      const updatedTitle = prompt("Enter the updated title:", todo.title);
      const updatedDescription = prompt("Enter the updated description:", todo.description);
      const updatedDueDate = prompt("Enter the updated due date (YYYY-MM-DDTHH:mm):", todo.dueDate);

      if (updatedTitle && updatedDescription && updatedDueDate) {
        todo.title = updatedTitle;
        todo.description = updatedDescription;
        todo.dueDate = updatedDueDate;
        saveTodos();
        renderTodos();
      }
    });

    deleteBtn.addEventListener("click", () => {
      const index = todos.findIndex((t) => t.id === todo.id);
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    todoList.appendChild(li);
  });
}

// Sorting Functions
function sortTodosAsc() {
  todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  renderTodos();
}

function sortTodosDesc() {
  todos.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
  renderTodos();
}

// Save and Load Todos from Local Storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }
}

// Form Submission Event Listener
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const dueDate = dueDateInput.value;

  if (title) {
    addTodo(title, description, dueDate);
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
  }
});

sortAscButton.addEventListener("click", sortTodosAsc);
sortDescButton.addEventListener("click", sortTodosDesc);

loadTodos();
renderTodos();
