import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private db: NgxIndexedDBService) { 
    
  }

  addEmployee(employee:Employee){
   return this.db.add('Employees',employee)
  }

  editEmployee(employee:Employee){
    return this.db.update('Employees',employee)
  }

  deleteEmployee(employeeId:number){
    return this.db.delete('Employees',employeeId)
  }

  getEmployee(employeeId:number){
    return  this.db.getByID('Employees',employeeId)
  }

  getAllEmployee(){
    return this.db.getAll<Employee>('Employees')
  }
}
