// Selectors
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${taskText}
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
});

// Delete a task
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});
