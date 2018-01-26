import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeModalComponent } from './home/home-modal/home-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    HomeModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
