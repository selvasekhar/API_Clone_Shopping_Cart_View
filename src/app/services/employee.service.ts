import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee.model';
// import { Employee } from ;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  private employee: Employee = {
    sno: 'aaa1',
    name: 'john',
    age: 35,
    desiginaton: 'tech lead',
    doj: new Date(),
    salary:4500, 

  }
public getEmployee():Employee{
  return this.employee
}
ngOnInit(){
   // this.employee=this.EmployeeServices.get.Employee();
}
}
