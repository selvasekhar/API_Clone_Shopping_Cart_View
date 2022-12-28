import { Component, OnInit } from '@angular/core';

interface User{
  name:string;
  email:string;
  password:string;
  desiginaton:string;
  bio:string;
  terms:string

}
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user:User= {
  name:'',
  email:'',
  password:'',
  desiginaton:'',
  bio:'',
  terms:'false',}

  constructor() { }

  ngOnInit(): void {
  }
  public submitbtn():void{
    console.log(this.user);
    alert('a')
  }
}
