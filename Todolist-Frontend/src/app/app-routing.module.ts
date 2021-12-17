import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoTaskListComponent } from './to-do-task-list/to-do-task-list.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {
    path:'',
    component:TodolistComponent
  },
  
 {
  path:"addTask",
  component:TodolistComponent
 },
  {
    path:"viewTask",
    component:ToDoTaskListComponent
  },
  {
    path:"todolist/:id",
    component:TodolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
