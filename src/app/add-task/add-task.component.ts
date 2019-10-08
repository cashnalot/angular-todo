import { TasksService } from './../service/tasks.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

newTask: string;

  constructor(private tasksService: TasksService) {

  }

  ngOnInit() {
  }

add() {
  this.tasksService.add(this.newTask)
  this.newTask = '';
}

}
