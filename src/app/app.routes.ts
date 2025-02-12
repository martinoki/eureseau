import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'about-us', title: 'About Us', component: AboutUsComponent },
  { path: '**', title: 'Home', component: HomeComponent },
];
