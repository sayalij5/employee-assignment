import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrl: './common-modal.component.css'
})

export class CommonModalComponent {
  @Input() modalConfig!:ModalConfig;
  @Output() yesBtnClicked= new EventEmitter<any>();
  @Output() noBtnClicked= new EventEmitter<any>();
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;

 
  showChildModal(): void {
    console.log('Calling showChildModal()', this.childModal);
    this.childModal?.show();
  }
 
  hideChildModal(): void {
    this.childModal?.hide();
  }

  ngAfterViewInit(): void {
    console.log('childModal  is', this.childModal);
  }
  confirm(type:string){
    if(type=='yes'){
      this.yesBtnClicked.emit('yes');
    }else{
      this.noBtnClicked.emit('no');
    }
    this.hideChildModal();
  }
}
export interface ModalConfig  {
modalTitle?:string,
modalType:string,

}
