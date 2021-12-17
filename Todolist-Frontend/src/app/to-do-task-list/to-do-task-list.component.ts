import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoService } from '../todolist/ToDo_Services/to-do.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-to-do-task-list',
  templateUrl: './to-do-task-list.component.html',
  styleUrls: ['./to-do-task-list.component.css']
})
export class ToDoTaskListComponent implements OnInit {
  
  list:any[]=[];
  constructor(private tS:ToDoService, private rT:Router,private fB:FormBuilder) { }

  ngOnInit(): void {
    this.tS.getAllRecord().subscribe((data: any) => {
      this.list = data;
    });
  }

  delTask(_id:string){
    if(confirm(`Are you sure to delete this task?`)==true){
      this.tS.deleteRecord(_id).subscribe((res)=>{
        console.log(res);
        
      }) 
      alert("Deleted Successfully");
    }
  }

  // editTask(_id:string) {
  //   this.rT.navigate(['/todolist',_id])
  // }


}
