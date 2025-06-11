import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
 email="";
 password="";
 isLoginSuccess: boolean=true;

  constructor(private route:Router,private authService:AuthenticationServiceService){  }
  ngOnInit(): void {
    sessionStorage.clear();
  }

  handlelogin() {
    const postData={
      email:this.email,
      password:this.password
    };
    this.authService.handleBEAuthentication(postData).subscribe({
      next:(successResponse)=>{
        this.isLoginSuccess=true;
        const userId = successResponse.headers.get('userId'); 
        const firstname=successResponse.headers.get('Fname');

       this.route.navigate(['/welcome',firstname],{queryParams:{userId:userId},replaceUrl:true});

      },
      error:(errorResponse)=>{
        console.log(errorResponse);
        this.isLoginSuccess=!this.isLoginSuccess;
      }
    })
 }

}
