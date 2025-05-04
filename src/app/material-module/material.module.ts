import { NgModule } from '@angular/core';
import {  DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
const dbConfig : DBConfig = {
name : 'RealTimeInnovationDb',
version : 1,
objectStoresMeta : [{
  store : 'Employees',
  storeConfig : {keyPath : 'id' , autoIncrement : true},
  storeSchema : [
    {name : 'name' , keypath : 'name' , options: {unique : false}},
    {name : 'role' , keypath : 'role' , options: {unique : false}},
    {name : 'ideleted' , keypath : 'ideleted' , options: {unique : false}},
    {name : 'dateOfJoining' , keypath : 'dateOfJoining' , options: {unique : false}},
    {name : 'endDate' , keypath : 'endDate' , options: {unique : false}}
  ]
}]

}
@NgModule({
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatTableModule
  ],
  imports:[ NgxIndexedDBModule.forRoot(dbConfig)
     ],
  providers:[DatePipe,MatNativeDateModule,MatDatepickerModule]
})
export class MaterialModule { }
