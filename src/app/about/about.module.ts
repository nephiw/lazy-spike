import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutModalComponent } from './about-modal/about-modal.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  entryComponents: [
    AboutModalComponent
  ],
  declarations: [
    AboutComponent,
    AboutPageComponent,
    AboutModalComponent
  ]
})
export class AboutModule { }
