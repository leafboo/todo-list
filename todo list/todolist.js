"use strict";
let todoListDisplay = document.querySelector('.js-display-todo-list');
const todoList = [];
const input = document.querySelector('.js-input-todo-list')
document.querySelector('.js-add-button').addEventListener('click', () => { 
  if (input.value) {
    todoList.push(input.value);

    let df = new DocumentFragment();
    // create the todo
    let div = document.createElement('div');
    div.textContent = input.value;
    div.className = 'todo-row';
    df.appendChild(div);
    // create the delete button
    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.className = 'delete-button'
    div.appendChild(button);

    
    todoListDisplay.appendChild(df);
    input.value = '';
  }
  
});