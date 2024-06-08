document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const fetchAllTasksBtn = document.getElementById('fetchAllTasksBtn');
    const getTaskForm = document.getElementById('getTaskForm');
    const addTaskForm = document.getElementById('addTaskForm');
    const updateTaskForm = document.getElementById('updateTaskForm');
    const deleteTaskForm = document.getElementById('deleteTaskForm');
    const singleTaskDetails = document.getElementById('singleTaskDetails');

    // Fetch all tasks
    fetchAllTasksBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:8080/tasks');
            const tasks = await response.json();
            console.log(tasks);
            displayTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    });

    // Get a single task by ID
    getTaskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const taskId = document.getElementById('getTaskId').value;
        try {
            const response = await fetch(`/tasks/${taskId}`);
            const task = await response.json();
            displaySingleTask(task);
        } catch (error) {
            console.error('Error fetching task:', error);
        }
    });

    // Add a new task
    addTaskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newTask = {
            id: document.getElementById('newTaskId').value,
            name: document.getElementById('newTaskName').value,
            description: document.getElementById('newTaskDescription').value
        };
        try {
            const response = await fetch('/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask)
            });
            if (response.ok) {
                fetchAllTasksBtn.click();
                addTaskForm.reset();
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    });

    // Update an existing task
    updateTaskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const updatedTask = {
            id: document.getElementById('updateTaskId').value,
            name: document.getElementById('updateTaskName').value,
            description: document.getElementById('updateTaskDescription').value
        };
        try {
            const response = await fetch(`/tasks/${updatedTask.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTask)
            });
            if (response.ok) {
                fetchAllTasksBtn.click();
                updateTaskForm.reset();
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    });

    // Delete a task
    deleteTaskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const taskId = document.getElementById('deleteTaskId').value;
        try {
            const response = await fetch(`/tasks/${taskId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchAllTasksBtn.click();
                deleteTaskForm.reset();
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    });

    // Display all tasks
    const displayTasks = (tasks) => {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="task-title">${task.name}</span>
                <div>
                    <button onclick="viewTask(${task.id})">View</button>
                    <button onclick="editTask(${task.id})">Edit</button>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    };

    // Display a single task
    const displaySingleTask = (task) => {
        singleTaskDetails.innerHTML = `
            <p><strong>ID:</strong> ${task.id}</p>
            <p><strong>Name:</strong> ${task.name}</p>
            <p><strong>Description:</strong> ${task.description}</p>
        `;
        singleTaskDetails.classList.remove('hidden');
    };
});

// View a task (Placeholder function to show detailed task view)
function viewTask(id) {
    document.getElementById('getTaskId').value = id;
    document.getElementById('getTaskForm').dispatchEvent(new Event('submit'));
}

// Edit a task (Placeholder function to show task details in edit form)
function editTask(id) {
    fetch(`/tasks/${id}`)
        .then(response => response.json())
        .then(task => {
            document.getElementById('updateTaskId').value = task.id;
            document.getElementById('updateTaskName').value = task.name;
            document.getElementById('updateTaskDescription').value = task.description;
            document.getElementById('updateTaskSection').scrollIntoView();
        })
        .catch(error => console.error('Error fetching task:', error));
}

// Delete a task (Placeholder function to delete a task)
function deleteTask(id) {
    document.getElementById('deleteTaskId').value = id;
    document.getElementById('deleteTaskForm').dispatchEvent(new Event('submit'));
}
