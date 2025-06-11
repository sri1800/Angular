import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from '../service/todo-service.service';
import { error } from 'console';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {
  
  todos:any;
  userId:string="";
  name: string = "";
  deleteMessage: string="";
  constructor(private activateRoute: ActivatedRoute, private todoService: TodoServiceService,private route:Router){}

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(queryParams=>{
      this.userId = queryParams['userId'];
    });
    this.activateRoute.params.subscribe(pathParams=>{
      this.name = pathParams['name'];
    });
    this.todoService.getAllTodos(this.userId, this.name).subscribe({
      next: (successResponse)=>{
        this.todos = successResponse;
      },
      error: (error)=>{
        console.error(error);
      }
    });
  }

addTodo(id=-1) {
 this.route.navigate(["/todo",id]);
}

updateTodo(id: BigInt) {
  this.route.navigate(["/todo",id]);
}

deleteTodo(id: BigInt): void{
   this.todoService.deleteTodo(id).subscribe({
    next: (res)=>{
      this.todos.splice(this.todos.indexOf(id), 1);
      this.deleteMessage = "Todo has been deleted";
    },error:(error)=>{
      console.error(error);
    }
   });
 }
}
