import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {

  logfunction:boolean = true;
  ngOnInit(): void {
  }

  login(){
    this.logfunction = true
  }

  logout(){
    this.logfunction = false
  }

}
