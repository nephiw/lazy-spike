import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  public openModal() {
    const initialState = {
      list: [
        'One',
        'Two',
        'Three',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ContactModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
