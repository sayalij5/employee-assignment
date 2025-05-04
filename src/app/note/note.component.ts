import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModalComponent, ModalConfig } from '../shared/common-modal/common-modal.component';
import { formConfig } from '../shared/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit{
  @ViewChild('commonModal', { static: false }) commonModal!: CommonModalComponent;
  modalConfigDto:ModalConfig={modalType:'',modalTitle:''};
  formList:formConfig[]=[{controlName:'note',fieldType:'text',fieldLabel:'Note',value:'yes note added ok'}];
  constructor(){
    console.log(this.formList)
  }
  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    console.log('commonModal is', this.commonModal);
  }
  openModal(){
    this.modalConfigDto.modalTitle="Add Note";
    this.modalConfigDto.modalType="Informational"
    this.commonModal.showChildModal()
  }
}
