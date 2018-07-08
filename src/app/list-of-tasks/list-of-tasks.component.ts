import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { MatCheckboxChange } from '../../../node_modules/@angular/material';

@Component({
  selector: 'list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css']
})
export class ListOfTasksComponent implements OnInit {

  public tasks: Array<Task>;
  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getAllTaks();

    this.taskService.changedList.subscribe(listOfTasks => {
      if(listOfTasks) {
        this.tasks = listOfTasks;
      }
    }, error => console.log(error));
  }

  taskChecked(task: Task, event: MatCheckboxChange) {
    task.isDone = event.checked;
    this.taskService.updateTaskStatus(task);
  }
}
