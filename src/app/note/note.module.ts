import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note.component';
import { MaterialModule } from '../material-module/material.module';
import { SharedModule } from '../shared/shared.module';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

const routes:Routes = [{path:'note-list',component:NoteComponent}]

@NgModule({
  declarations: [NoteComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  providers:[BsModalService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class NoteModule { }
