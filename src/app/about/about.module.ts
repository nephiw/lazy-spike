import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, AboutPageComponent]
})
export class AboutModule { }
