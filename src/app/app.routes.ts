import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: '**', title: 'Home', component: HomeComponent },
];
