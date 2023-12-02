let taskList = [];

function showAddTaskForm() {
    hideAllForms();
    document.getElementById('addTaskForm').style.display = 'block';
}

function showMarkAsCompleteForm() {
    hideAllForms();
    document.getElementById('markAsCompleteForm').style.display = 'block';
}

function showRemoveTaskForm() {
    hideAllForms();
    document.getElementById('removeTaskForm').style.display = 'block';
}

function viewTasks() {
    hideAllForms();
    displayTasks();
}

function hideAllForms() {
    document.getElementById('addTaskForm').style.display = 'none';
    document.getElementById('markAsCompleteForm').style.display = 'none';
    document.getElementById('removeTaskForm').style.display = 'none';
}

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    if (title && description && dueDate) {
        const newTask = { title, description, dueDate, isComplete: false };
        taskList.push(newTask);
        alert('Task added successfully!');
        clearAddTaskForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function markTaskAsComplete() {
    const index = document.getElementById('completeTaskIndex').value;

    if (isValidIndex(index)) {
        taskList[index].isComplete = true;
        alert('Task marked as complete!');
        clearMarkAsCompleteForm();
    } else {
        alert('Invalid index. Please enter a valid index.');
    }
}

function removeTask() {
    const index = document.getElementById('removeTaskIndex').value;

    if (isValidIndex(index)) {
        taskList.splice(index, 1);
        alert('Task removed!');
        clearRemoveTaskForm();
    } else {
        alert('Invalid index. Please enter a valid index.');
    }
}

function exitApplication() {
    alert('Exiting the To-Do List Application. Goodbye!');
    clearAllForms();
}

function displayTasks() {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    if (taskList.length === 0) {
        taskListContainer.innerHTML = '<p>No tasks available.</p>';
    } else {
        for (let i = 0; i < taskList.length; i++) {
            const task = taskList[i];
            const taskItem = document.createElement('li');
            const iconClass = task.isComplete ? 'fas fa-check-circle' : 'far fa-circle';
            taskItem.innerHTML = `<i class="${iconClass}" onclick="toggleTaskCompletion(${i})"></i> 
                                  Title: ${task.title}, 
                                  Description: ${task.description}, 
                                  Due Date: ${task.dueDate}, 
                                  Complete: ${task.isComplete ? 'Yes' : 'No'}
                                  <i class="fas fa-trash-alt" onclick="removeTask(${i})"></i>`;
            taskListContainer.appendChild(taskItem);
        }
    }

    document.getElementById('tasks').style.display = 'block';
}

function removeTask(index) {
    if (isValidIndex(index)) {
        taskList.splice(index, 1);
        alert('Task removed!');
        displayTasks();
    } else {
        alert('Invalid index. Please enter a valid index.');
    }
}

function isValidIndex(index) {
    return index >= 0 && index < taskList.length;
}

function clearAddTaskForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
}

function clearMarkAsCompleteForm() {
    document.getElementById('completeTaskIndex').value = '';
}

function clearRemoveTaskForm() {
    document.getElementById('removeTaskIndex').value = '';
}

function clearAllForms() {
    clearAddTaskForm();
    clearMarkAsCompleteForm();
    clearRemoveTaskForm();
    hideAllForms();
}
