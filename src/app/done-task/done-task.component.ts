import { Component, OnInit } from "@angular/core";
import { TasksService } from "../service/tasks.service";

@Component({
  selector: "app-done-task",
  templateUrl: "./done-task.component.html",
  styleUrls: ["./done-task.component.scss"]
})
export class DoneTaskComponent implements OnInit {
  tasksDone: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<string>) => {
      this.tasksDone = tasks;
    });
  }

  ngOnInit() {}
}
