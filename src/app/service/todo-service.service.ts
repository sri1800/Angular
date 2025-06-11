import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare  const appTodoUrl:String

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  getAllTodos(userId:string, name: string): Observable<any>{
    const params = new HttpParams();
    params.set('userId', userId);

    return (this.http.get(appTodoUrl+"data"));
  }

  deleteTodo(todoId: BigInt): Observable<any>{
    return this.http.delete(appTodoUrl+'delete/'+todoId);
  }

  updateTodo(todoId: BigInt,todoObj:any):Observable<any>{
    return this.http.put(appTodoUrl+'update/'+todoId,todoObj);
  }

  createTodo(todoObj:any):Observable<any>{
    return this.http.post(appTodoUrl+'create', todoObj);
  }

  getATodo(todoId:BigInt):Observable<any>{
    return this.http.get(appTodoUrl+'data/'+todoId);
  }
}