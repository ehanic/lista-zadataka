import { Component, OnInit } from '@angular/core';
import { TaskCounter } from '../models/taskCounter.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public taskCounter;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.taskCount.subscribe(taskCounter => {
      this.taskCounter = taskCounter;
    });
  }

}
