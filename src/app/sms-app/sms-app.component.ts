import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrls: ['./sms-app.component.css']
})
export class SmsAppComponent implements OnInit {
  nametextarea:string = '';
  msgnumber: number = 200;
  constructor() { }

  ngOnInit(): void {
  }

  

}
