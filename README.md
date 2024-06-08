# Task Manager Application

## Description

The Task Manager Application is a web-based platform developed using Spring Boot for managing tasks efficiently. It allows users to create, view, update, and delete tasks easily.

## Features

### View Tasks

- Access the landing page to view a list of all tasks stored in the database.
- Each task is displayed with details such as ID, title, description, and due date.

### Fetch Task by ID

- Retrieve a specific task by providing its unique ID.
- Access detailed information about the task, including its title, description, and due date.

### Add New Task

- Create a new task by providing a title, description, and due date.
- Once added, the task will be included in the list of tasks displayed on the landing page.

### Update Task

- Modify an existing task by updating its title, description, or due date.
- Search for the task using its ID and provide the updated information.

### Delete Task

- Remove a task from the database by specifying its ID.
- Once deleted, the task will no longer appear in the list of tasks displayed on the landing page.

## Installation

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/your-username/task-manager.git

   ## Build and Run the Application

2. **Open Command Prompt or Terminal**: 
   - Open your command line interface (Command Prompt on Windows, Terminal on macOS/Linux).

3. **Navigate to the Project Directory**: 
   - Use the `cd` command to navigate to the directory where your project is located.

4. **Build the Project**:
   - Run the following command to build the project using Maven:
     ```bash
     mvn clean install
     ```

5. **Start the Application**:
   - After successfully building the project, start the application using the following command:
     ```bash
     mvn spring-boot:run
     ```
   - Alternatively, if you prefer to run the generated JAR file, use the command:
     ```bash
     java -jar target/task-manager.jar
     ```

## Access the Application

- Once the application is running, you can access it in your web browser by navigating to [http://localhost:8080](http://localhost:8080).



