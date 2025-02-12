import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  titulares = [
    {
      nombre: 'Dr. Jorge Eduardo Pedreira',
      cargo: 'Titular y fundador del estudio',
      imagen: 'papa_tere.png'
    },
    {
      nombre: 'Dra. Maria Teresa Pedreira',
      cargo: 'Especialista en derecho laboral y asesoramiento de empresas',
      imagen: 'mama_tere.png'
    },
    {
      nombre: 'Dra. Teresa E. Felix de Pedreira',
      cargo: 'Doctora en derecho societario',
      imagen: 'tere.png'
    }
  ];
}