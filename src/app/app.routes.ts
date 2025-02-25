import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { EureseauComponent } from './eureseau/eureseau.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'about-us', title: 'About Us', component: AboutUsComponent },
  {
    path: 'practice-areas',
    title: 'Area de Práctica',
    component: PracticeAreasComponent,
  },
  { path: 'eureseau', title: 'Eureseau', component: EureseauComponent },
  {
    path: 'experiences',
    title: 'Casos Notables',
    component: ExperiencesComponent,
  },
  { path: 'contact', title: 'Contacto', component: ContactComponent },
  { path: '**', title: 'Home', component: HomeComponent },
];
