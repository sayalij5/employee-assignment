import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employess:Employee[] = [];
  currentEmployee=[];
  previousEmployee=[];
  dataSource= new MatTableDataSource<any>();
  displayedColumns= ["name", "role", "email", "joiningDate","endDate","edit","delete"];
  constructor(private employeeService:EmployeeService,private route:Router){}
 ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAllEmployee().subscribe(data=>{
      this.employess=data;
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
    })
  }

  delete(id: number) {
    if (confirm('Are you sure want to delete employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
    }
  }

  update(employeeId: number) {
   this.route.navigate(['/employee-edit'],{queryParams: {id:employeeId}} );
  }
  
}
