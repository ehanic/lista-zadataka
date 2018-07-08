import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { MatDialog } from '../../../node_modules/@angular/material';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent implements OnInit {

  public task: Task = new Task();
  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit() {
    this.taskService.throwError.subscribe(error => {
      if (error) {
        this.dialog.open(ErrorDialogComponent, {
          data: error,
          width: '600px',
          height: '200px'
        });
      }
    });
  }

  public addTask() {
    this.taskService.addNewTask(this.task);
    this.task = new Task();
  }

}
