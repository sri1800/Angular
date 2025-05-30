import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name:string="";
  userId:string="";


  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.activeRoute.snapshot.params['name'];
    this.userId=this.activeRoute.snapshot.queryParams['userId'];
  }

}
