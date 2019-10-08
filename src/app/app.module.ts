import { TasksService } from './service/tasks.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DoneTaskComponent,
    TodoTaskComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
