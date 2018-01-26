import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
