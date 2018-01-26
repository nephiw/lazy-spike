import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AboutModalComponent } from '../about-modal/about-modal.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
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
      title: 'About modal component!'
    };
    this.bsModalRef = this.modalService.show(AboutModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
