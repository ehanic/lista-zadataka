import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';
import { TaskCounter } from '../models/taskCounter.model';

@Injectable()
export class TaskService {

    private listOfTasks: Array<Task> = [
        { name: 'Buy Milk', isDone: true },
        { name: 'Buy Bread', isDone: false }
    ];

    public changedList: BehaviorSubject<Array<Task>> = new BehaviorSubject<Array<Task>>(null);
    public throwError: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public taskCount: BehaviorSubject<TaskCounter> = new BehaviorSubject<TaskCounter>(null);

    constructor() {
        this.countTasks();
        this.insertRandomTask();
    }
    public getAllTaks(): Array<Task> {
        return this.listOfTasks;
    }

    public addNewTask(task: Task, throwError = true): void {
        const exsistTaks = this.listOfTasks.find(t => t.name === task.name);

        if (exsistTaks) {
            if (throwError) {
                this.throwError.next('Task with this name already exsists');
            }
        } else {
            this.listOfTasks.push(task);
            this.changedList.next(this.listOfTasks);
            this.countTasks();
        }
    }

    public updateTaskStatus(task: Task) {
        this.listOfTasks.forEach(t => {
            if (t.name === task.name) {
                t.isDone = task.isDone;
            } 
        });
        this.countTasks();
    }

    private insertRandomTask() {
        setInterval(() => {
            const task = new Task;
            task.name = "random task" + Math.floor(Math.random() * 100);
            task.isDone = false;
            this.addNewTask(task, false);
        }, 20000);
    }

    private countTasks() {
        const taskCounter = new TaskCounter();
        this.listOfTasks.forEach(task => {
            task.isDone ? taskCounter.finished += 1 : taskCounter.unfinished += 1;
        });

        this.taskCount.next(taskCounter);
    }

}