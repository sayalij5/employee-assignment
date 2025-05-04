import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';
import { ModalModule,BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CommonModalComponent,DynamicFormComponent,DynamicGridComponent],
  imports: [
    CommonModule, ModalModule.forRoot(),ReactiveFormsModule
  ],
  providers:[BsModalService],
  exports: [
    CommonModalComponent,DynamicFormComponent,DynamicGridComponent
  ]
})
export class SharedModule { }
