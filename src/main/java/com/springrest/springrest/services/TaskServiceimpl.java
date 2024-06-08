package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.springrest.springrest.entities.Task;

@Service
public class TaskServiceimpl implements TaskService {

	List<Task> list;
	
	public TaskServiceimpl() {
		
		list = new ArrayList<>();
		list.add(new Task(123, "Update readme", "update the readme of the projects"));
		list.add(new Task(113, "Add dependencies", "Adding dependencies to the project"));
	}
	
	
	@Override
	public List<Task> getTasks() {
		// TODO Auto-generated method stub
		return list;
	}


	@Override
	public Task getTask(long id) {
		// TODO Auto-generated method stub
		Task t = null;
		for(Task tsk : list) {
			if(tsk.getId() == id) {
				t = tsk;
				break;
			}
		}
		return t;
	}


	@Override
	public Task addTask(Task tsk) {
		// TODO Auto-generated method stub
		list.add(tsk);
		return tsk;
	}


	@Override
	public Task updateTask(long id, Task tsk) {
		// TODO Auto-generated method stub
		for (int i = 0; i < list.size(); i++) {
	        Task existingTask = list.get(i);
	        if (existingTask.getId() == id) {
	            // Update the task details
	            existingTask.setName(tsk.getName());
	            existingTask.setDescription(tsk.getDescription());
	            return existingTask;
	        }
	    }
	    return null;
	}


	@Override
	public void deleteTask(long id) {
		// TODO Auto-generated method stub
		list.removeIf(task -> task.getId() == id);
	}

}
