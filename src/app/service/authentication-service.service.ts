import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare const appUrl:String
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient){  }

  handleBEAuthenticaation(postData: any) {
  return this.http.post(appUrl + 'login', postData, {
    headers: { 'Content-Type': 'application/json' },
    observe: 'response'
  });
}

}
