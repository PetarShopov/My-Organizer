import { AppComponent } from './../app.component';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ITask } from './task';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: ITask[];
  private errorMessage: any;
  private currentUser = sessionStorage.getItem('username');

  constructor(
    private taskService: TaskService,
  private router: Router) {
    this.tasks = [];
   }

   ngOnInit() {
    this.taskService.getTasks()
    .subscribe(
      tasks => this.tasks = tasks,
      error => this.errorMessage = <any>error
    );
  }

  deleteCurrentTask(_id: string) {
      this.taskService.deleteTask(_id)
          .subscribe(
              userInfo => {
                this.router.navigate(['/Tasks']);
              },
              () => {
                console.log('Error occurred');
              }
          );
  }
}


