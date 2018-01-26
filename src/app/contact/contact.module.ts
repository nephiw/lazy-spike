import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  entryComponents: [
    ContactModalComponent
  ],
  declarations: [
    ContactComponent,
    ContactPageComponent,
    ContactModalComponent
  ]
})
export class ContactModule { }
