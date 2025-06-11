import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 constructor( public authService: AuthenticationServiceService){}

}
