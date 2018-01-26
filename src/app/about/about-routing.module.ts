import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [{
  path: '', component: AboutComponent, children: [{
    path: 'aboutPage', component: AboutPageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
