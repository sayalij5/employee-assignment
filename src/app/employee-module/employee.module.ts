import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { MaterialModule } from '../material-module/material.module';


const routes: Routes = [
  {path:'employee-list',component:EmployeeListComponent},
  {path:'employee-add',component:EmployeeAddComponent},
  {path:'employee-edit',component:EmployeeAddComponent}
];

@NgModule({
  declarations: [EmployeeListComponent,EmployeeAddComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),MaterialModule
  ]
})
export class EmployeeModule { }
