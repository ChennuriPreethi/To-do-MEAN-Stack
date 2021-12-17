import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  
  constructor(private http:HttpClient) { }
  addrecord(x:any) {
    return this.http.post<any>('http://localhost:9090/insertTask', x);
  }
  getAllRecord(){
    return this.http.get<any>('http://localhost:9090/viewTask');
  }

  getTask(_id:any){
    return this.http.get<any>(`http://localhost:9090/view/${_id}`);
  }

  updateTask(_id:any){
    return this.http.put(`http://localhost:9090/updateTask/${_id}`,_id);
  }

  deleteRecord(_id:string){
    return this.http.delete(`http://localhost:9090/deleteTask/${_id}`);
  }
}
