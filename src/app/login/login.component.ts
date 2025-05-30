import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 email="";
 password="";
 isLoginSuccess: boolean=true;

  constructor(private route:Router,private authService:AuthenticationServiceService){  }

  handlelogin() {
    const postData={
      email:this.email,
      password:this.password
    };
    this.authService.handleBEAuthenticaation(postData).subscribe({
      next:(successResponse)=>{
        const userId = successResponse.headers.get('userId'); 
        const firstname=successResponse.headers.get('Fname');

        console.log("userid: "+userId);      
        console.log("firstname : "+firstname);

       this.route.navigate(['/welcome',firstname],{queryParams:{userId:userId}});

      },
      error:(errorResponse)=>{
        console.log(errorResponse);
        this.isLoginSuccess=!this.isLoginSuccess;
      }
    })
 }

}
