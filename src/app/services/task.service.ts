import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL : string = "https://localhost:7042/tasks";

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task : Task) : Observable<Task> {
    return this.http.delete<Task>(this.apiURL + "/" + task.taskId);
  }

  updateTaskReminder(task : Task) : Observable<Task> {
    return this.http.put<Task>(this.apiURL + "/" + task.taskId, task, httpOptions);
  }

  addTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }
}
