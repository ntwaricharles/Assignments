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
  renderTodos();
}

// Function to Render Todos
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
      <span class="todo-title ${todo.completed ? "completed" : ""}">
        ${todo.title}
      </span>
      <div class="todo-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        <span class="due-date">${new Date(todo.dueDate).toLocaleString()}</span>
      </div>
    `;

    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => {
      const updatedTitle = prompt("Enter the updated title:");
      const updatedDescription = prompt("Enter the updated description:");
      const updatedDueDate = prompt("Enter the updated due date (YYYY-MM-DDTHH:mm):");

      if (updatedTitle && updatedDescription && updatedDueDate) {
        todo.title = updatedTitle;
        todo.description = updatedDescription;
        todo.dueDate = updatedDueDate;
        renderTodos();
      }
    });

    deleteBtn.addEventListener("click", () => {
      const index = todos.findIndex((t) => t.id === todo.id);
      todos.splice(index, 1);
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


todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();