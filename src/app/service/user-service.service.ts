import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare  const appUserUrl:String
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  createUser(userObj:any):Observable<any>{
    return this.http.post(appUserUrl+'createuser', userObj);
  }
}
