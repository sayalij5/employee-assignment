import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { CustomDatePickerComponent } from '../custom-date-picker/custom-date-picker.component';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  empForm: FormGroup;
  startDate: Date | null = null;
  title:string='Add';
  exampleHeader=CustomDatePickerComponent;
  selectedDate: string = '';
  calendarOpen = false;
  calendarOpen2 = false;

  toggleCalendar() {
    this.calendarOpen = !this.calendarOpen;
  }


  toggleCalendar2() {
    this.calendarOpen2 = !this.calendarOpen2;
  }

  setQuickDate(option: string,control:string) {
    const today = new Date();
    let newDate: Date;

    switch (option) {
      case 'today':
        newDate = today;
        this.setvalue(newDate.toISOString().split('T')[0],control);
        break;
      case 'nextMonday':
        newDate = this.getNextDay(today, 1);
        this.setvalue(newDate.toISOString().split('T')[0],control);
        break;
      case 'nextTuesday':
        newDate = this.getNextDay(today, 2);
        this.setvalue(newDate.toISOString().split('T')[0],control);
        break;
      case 'afterWeek':
        newDate = new Date(today.setDate(today.getDate() + 7));
        this.setvalue(newDate.toISOString().split('T')[0],control);
        break;
        case 'noDate':
        this.setvalue(null,control);
        break;
      default:
        newDate = today;
        this.setvalue(newDate.toISOString().split('T')[0],control);
    }

    
    this.calendarOpen = false;
    this.calendarOpen2 = false;
  }

  private getNextDay(date: Date, day: number): Date {
    const result = new Date(date);
    result.setDate(date.getDate() + ((7 + day - date.getDay()) % 7 || 7));
    return result;
  }
  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService, private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      let employeeId = params['id'];
      if (employeeId) {
       this.title='Edit';
        this.getDetails(employeeId);
      }
    });
    this.empForm = this.fb.group({
      name: [],
      email: [],
      role: [],
      joiningDate: [],
      endDate: [],
      id: [null]
    });
  }
  
  getDetails(employeeId: number) {
    this.empService.getEmployee(parseInt(employeeId.toString())).subscribe((data: any) => {
      this.empForm.patchValue({
        name: data.name,
        email: data.email,
        role: data.role,
        joiningDate: data.joiningDate,
        id: data.id,
        endDate:data.endDate
      });
      console.log(this.empForm.value)
    })
  }
  submit() {
    if (this.empForm.invalid) return;
    const formData = this.empForm.value;
    console.log(formData)
    if (formData.id == null) {
      delete formData.id
    }
    let data = formData;
    const saveOrUpdate = data.id
      ? this.empService.editEmployee(data)
      : this.empService.addEmployee(data);

    saveOrUpdate.subscribe();
    if(data.id == null){
      this.empForm.reset();
    }
    
    let text = data.id ?  'Record Updated successfully!' : 'Record Saved successfully!'
   alert(text);
  }

  setToday() {
    this.startDate = new Date();
  }
  setNextMonday() {
    this.startDate = new Date();
  }
  setNextTuesday() {
    this.startDate = new Date();
  }
  setAfterNextWeek() {
    this.startDate = new Date();
  }
  setvalue(event:any,control:string){
    this.empForm.get(control)?.setValue(event);
  }
  
}
