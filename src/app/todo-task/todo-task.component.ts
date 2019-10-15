import { Component, OnInit} from '@angular/core';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }

  remove(task: string) {
this.tasksService.remove(task);
  }

  done(task: string) {
    this.tasksService.done(task);

  }
  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
  getWeight(): string{
    return this.tasksList.length >= 5 ? '700' : '500';
  }
}
