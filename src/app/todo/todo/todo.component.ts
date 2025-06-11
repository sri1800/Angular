import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { TodoServiceService } from 'src/app/service/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

todoId:any;
userId:any;
todoObj: any={"name":"","description":"","endTime":new Date()};
buttonName="Add";

  constructor(private activateRoute:ActivatedRoute,private todoservice:TodoServiceService,private route:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{this.todoId=data['id'];});
    this.activateRoute.queryParams.subscribe(data=>{this.userId = data['userId']});
    if(this.todoId!=-1){
      this.todoservice.getATodo(this.todoId).subscribe({
        next:(res)=>{this.todoObj=res[0];
          console.log(this.todoObj);
        this.buttonName="Update";},
        error:(error)=>{
          console.error(error);
        }
      });
    }
  }


  saveTodo(form: NgForm) {
    if(form.valid){
      if(this.todoId!=-1){
        this.todoservice.updateTodo(this.todoId,this.todoObj).subscribe({
          next:(res)=>{
            this.route.navigate(['todos']);
          },error:(error)=>{
            console.error(error);
          }
        });
      }
      else{
        this.todoservice.createTodo(this.todoObj).subscribe({
          next:(res)=>{
            this.route.navigate(['todos']);
          },error:(error)=>{
            console.error(error);
          }
        });
      }
    }
}
}
