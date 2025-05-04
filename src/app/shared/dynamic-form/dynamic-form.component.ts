import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnChanges {
  dynamicForm:FormGroup = this.fb.group({});;
  @Input() formControlList:formConfig[]=[];
  constructor(private fb:FormBuilder){
  }
 ngOnInit(): void {
 }

 ngOnChanges(simplechange:SimpleChanges){
  console.log(simplechange)
if(simplechange['formControlList'] && this.formControlList.length>0){
console.log(simplechange)
this.initForm();
}
 }
 initForm(){
   const formGroup:any={};
   this.formControlList.forEach(item=>{
    formGroup[item.controlName] = this.fb.control( 
      item.value || '',
      item.validators || []);
   });
   this.dynamicForm = this.fb.group(formGroup);
 }

}
export interface formConfig{
  fieldType:string,
  fieldLabel:string,
  controlName:string,
  value?:any,
  validators?:any[]
}