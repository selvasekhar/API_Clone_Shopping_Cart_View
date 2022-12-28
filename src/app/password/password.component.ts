import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
 public inputType:string='password'
 amount : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public show(event:any):void {
    event.target.checked ? this.inputType = 'text' : this.inputType= 'password';

  }
}
