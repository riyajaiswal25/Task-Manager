# Task Manager Application

## Description

The Task Manager Application is a web-based platform developed using Spring Boot for managing tasks efficiently. It allows users to create, view, update, and delete tasks easily.

## Landing Page
![Screenshot 2024-06-08 234720](https://github.com/riyajaiswal25/Task-Manager/assets/84279900/87d99b8a-8af6-408d-a555-c44c0d4dc44c)


## Features

### View Tasks

- Access the landing page to view a list of all tasks stored in the database.
- Each task is displayed with details such as id, name and description.

  ![Screenshot 2024-06-08 234834](https://github.com/riyajaiswal25/Task-Manager/assets/84279900/4506c433-cb8b-4af0-8474-2d6276bf09f6)


### Fetch Task by ID

- Retrieve a specific task by providing its unique ID.
- Access detailed information about the task, including its id, name and description.

  ![Screenshot 2024-06-08 234857](https://github.com/riyajaiswal25/Task-Manager/assets/84279900/64c8fd70-30c1-485c-a4e3-f18ab487961b)


### Add New Task

- Create a new task by providing a id, name and description.
- Once added, the task will be included in the list of tasks displayed on the landing page.

  ![Screenshot 2024-06-08 235022](https://github.com/riyajaiswal25/Task-Manager/assets/84279900/ff4275bb-833d-48a0-84f9-d4754a674a96)


### Update Task

- Modify an existing task by updating its id, name and description.
- Search for the task using its ID and provide the updated information.

  ![Screenshot 2024-06-08 235115](https://github.com/riyajaiswal25/Task-Manager/assets/84279900/25713f39-b256-4f34-a3dc-5a00042965bc)


### Delete Task

- Remove a task from the database by specifying its ID.
- Once deleted, the task will no longer appear in the list of tasks displayed on the landing page.
  ![Screenshot 2024-06-08 235127](https://github.com/riyajaiswal25/Task-Manager/assets/84279900/38bcc56c-4666-46f2-b209-47fbb8e84f98)


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



