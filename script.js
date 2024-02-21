// Get references to the elements 
const submit = document.getElementById('submit');
const newTask = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

// Disable the submit button by default
submit.disabled = true;

newTask.addEventListener('input', function() {
  submit.disabled = !this.value; 
});

document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const task = newTask.value; 

  // Create list item and add task
  const listItem = document.createElement('li');
  listItem.textContent = task; 

  // Add the list item to the list
  taskList.append(listItem); 

  // Clear the input field
  newTask.value = '';
  submit.disabled = true; 

  return false; 
});