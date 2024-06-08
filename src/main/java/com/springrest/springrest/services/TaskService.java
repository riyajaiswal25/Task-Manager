package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Task;

public interface TaskService {

	public List<Task> getTasks();
	
	public Task getTask(long id);
	
	public Task addTask(Task tsk);
	
	public Task updateTask(long id, Task tsk);
	
	public void deleteTask(long id);

}
