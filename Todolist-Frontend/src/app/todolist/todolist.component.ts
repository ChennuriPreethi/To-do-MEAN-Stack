import { Component, OnInit } from '@angular/core';
import { ToDoService } from './ToDo_Services/to-do.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  title="To-Do List";
  isdone:boolean;
  name:string;
  description:any;
  date:any;
  submitted = false;
  ToDoTask:any;
  id:any;
  list:any[]=[];
  newItem:string;
  filteredTask = [];
  records:any;
  constructor(private tS:ToDoService, private fB:FormBuilder, private rT:Router,private arT:ActivatedRoute) { }  
  ngOnInit(): void {

    this.ToDoTask = this.fB.group({
      name: [this.name, Validators.required],
      description: [this.description,Validators.required],
      date: [this.date,Validators.required]
    });

    this.tS.getAllRecord().subscribe((data: any) => {
      this.list = data;
    });


    // this.id = this.arT.snapshot.paramMap.get('id');
    // console.log(this.id);
    // if(this.id !== null)
    // {
    //   var eT;
    //   this.tS.getTask(this.id).subscribe((data)=>{
    //     eT = data
    //     console.log(eT);
    //     this.editTask(eT)
    //   });
    // }
  }
  get f() { 
    return this.ToDoTask.controls; 
  }


  addTask(){  
    this.tS.addrecord(this.ToDoTask.value).subscribe((data) => {
      console.log(data);  
      this.list = data;
    });
    alert('Task Saved...!!');
    this.ToDoTask.reset()  
  }

  // editTask(_id:any){
  //   console.log(_id);
  //   this.tS.getTask=_id;
  // }
}
