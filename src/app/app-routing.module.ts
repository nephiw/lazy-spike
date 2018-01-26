import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
