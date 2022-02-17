
// Get Dom Elements
const form = document.querySelector('form');
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById('todos');

//const todoData = [];
const existingTodos = JSON.parse(localStorage.getItem('todos'));
const todoData = existingTodos || [];

todoData.forEach(todo => {
    addTodo(todo);
})

function addTodo(todoText) {
    todoData.push(todoText);
    const li = document.createElement('li');
    li.innerHTML = todoText;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
}

//Events
form.onsubmit = (event) => {
    event.preventDefault();
    addTodo(input.value);
}

