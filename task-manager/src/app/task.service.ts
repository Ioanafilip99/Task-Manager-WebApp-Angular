import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import {WebRequestService} from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  // send a web request to create a new list
  createList(title: string) {
    return this.webReqService.post('lists', {title});
  }

  getLists() {
    return this.webReqService.get('lists');
  }

  // send a web request to update a list
  updateList(id: string, title: string) {
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  // send a web request to create a new task
  createTask(title: string, listId: string) {
    return this.webReqService.post(`lists/${listId}/tasks`, {title});
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  // send a web request to update a list
  updateTask(listId: string, taskId: string, title: string) {
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }
}
