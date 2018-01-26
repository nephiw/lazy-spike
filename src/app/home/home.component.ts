import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HomeModalComponent } from './home-modal/home-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    this.bsModalRef = this.modalService.show(HomeModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
