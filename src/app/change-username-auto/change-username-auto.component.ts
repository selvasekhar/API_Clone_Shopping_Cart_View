import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-change-username-auto',
  templateUrl: './change-username-auto.component.html',
  styleUrls: ['./change-username-auto.component.css']
})
export class ChangeUsernameAutoComponent implements OnInit {
  username:string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

  // updateInput(event:any){
  //   this.username = event.target.value
  // }

}
