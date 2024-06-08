package com.springrest.springrest.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Task;
import com.springrest.springrest.services.TaskService;


@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	private TaskService taskService;
	
	@GetMapping("/home")
	public String home() {
		return "Welcome to Task Management Application";
	}
	
	//Retrieving all tasks.
	@GetMapping("/tasks")
	public List<Task> getTasks()
	{
		return this.taskService.getTasks();
	}
	
	//Retrieving a single task by its ID
	@GetMapping("/tasks/{id}")
	public Task getTask(@PathVariable String id)
	{
		return this.taskService.getTask(Long.parseLong(id));
	}
	
	//Creating a new task
	@PostMapping("/tasks")
	public Task addTask(@RequestBody Task tsk)
	{
		return this.taskService.addTask(tsk);
	}
	
	//Updating an existing task
	@PutMapping("/tasks/{id}")
	public Task updateTask(@PathVariable String id, @RequestBody Task tsk) {
		return this.taskService.updateTask(Long.parseLong(id), tsk);
	}
	
	//Deleting a task
	@DeleteMapping("/tasks/{id}")
	public void deleteTask(@PathVariable String id) {
		taskService.deleteTask(Long.parseLong(id));
	}
	

}
