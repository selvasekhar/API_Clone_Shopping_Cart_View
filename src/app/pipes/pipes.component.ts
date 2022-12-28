import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/Employee.model';
// src\app\models\Employee.ts
// src\app\models\Employee.ts
// D:\Angular\Nov_2022_New\angular_task\src\app\models\Employee.ts
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public employee:Employee={} as Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployee()
  }

}
