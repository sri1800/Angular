import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

declare const appUrl:String
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient){  }

  handleBEAuthentication(postData:any){
    return (this.http.post(appUrl+'login', postData, {headers : {'Content-Type': 'application/json'}, observe: 'response'}).pipe(
      map(data=>{
         const token = data.headers.get('Authorization');
         const userId = data.headers.get('userId');

         if(token && userId){
          sessionStorage.setItem("user_id", userId);
          sessionStorage.setItem("Auth_token", token);
         }
         return data;
      }) 
    ));
  }

  isUserLoggedIn(){
    return sessionStorage.getItem("Auth_token");
  }

  isAuthenticationTokenAvailable(): string| null{
    if(this.isUserLoggedIn()){
      return sessionStorage.getItem("Auth_token") ;
    }
    return null;
  }

  logoutUser(){
    sessionStorage.removeItem("Auth_token");
    sessionStorage.removeItem("user_id");
  }
}
