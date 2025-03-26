import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences = [
    {
      opened: true,
      description:
        '“Excelente atención y gran profesionalismo. Su asesoramiento a nuestra empresa es una parte muy importante para un crecimiento sostenido”.',
      name: 'Juan Manuel, Olivos',
      place: 'Provincia de Buenos Aires',
      name2: 'Juan Manuel',
      place2: 'Olivos, Provincia de Buenos Aires',
    },
    {
      opened: true,
      description:
        '“Todo el equipo del estudio o fue muy profesional y siempre mostró empatía hacia mi situación. Me explicaron todo de manera clara y siempre estuvieron disponibles para responder mis dudas. Gracias a ellos, logré resolver mi caso sin complicaciones.”',
      name: 'Mónica, ',
      place: 'Ciudad Autonoma de Buenos aires',
      name2: 'Mónica',
      place2: 'Ciudad Autonoma de Buenos aires',
    },
    {
      opened: true,
      description:
        '“I am very grateful to the law firm for its speed and efficiency. From the first moment they took care of everything and kept me informed about the progress of my case. I recommend them without hesitation”.',
      name: 'Gail, Palm Beach',
      place: 'Florida USA',
      name2: 'Gail',
      place2: 'Palm Beach, Florida USA',
    },
    {
      opened: true,
      description:
        '“Muy satisfecho con el servicio que recibí. A pesar de la distancia, con una comunicación fluida, permitió establecer nuestro proyecto en la Argentina y que siga creciendo”',
      name: 'Gabriela, Madrid',
      place: 'España',
      name2: 'Gabriela',
      place2: 'Madrid, España',
    },
    {
      opened: true,
      description:
        'Su calidez en la atención personalizada y su disposición para buscar soluciones me dieron tranquilidad durante todo el proceso. Son un equipo de confianza. Gracias!',
      name: 'Martin, ',
      place: 'Ciudad Autonoma de Buenos aires',
      name2: 'Martin',
      place2: 'Ciudad Autonoma de Buenos aires',
    },
  ];

  sections = [
    { initial: 0, final: 3 },
    { initial: 3, final: 5 },
  ];

  logos = [
    { src: 'experiences/companies/Telecentro.png', alt: 'Telecentro' },
    { src: 'experiences/companies/Noorten.png', alt: 'Noorten' },
    { src: 'experiences/companies/pastafrola.jpg', alt: 'Pastafrola' },
    { src: 'experiences/companies/buenas_manos.png', alt: 'Buenas Manos' },
    { src: 'experiences/companies/canal26.png', alt: 'Canal 26' },
    { src: 'experiences/companies/union_pel.png', alt: 'Union Pel' },
    { src: 'experiences/companies/asuni.png', alt: 'Asuni' },
    {
      src: 'experiences/companies/papelera_tucuman.png',
      alt: 'Papelera Tucuman',
    },
    { src: 'experiences/companies/ab_soluciones.png', alt: 'Ab Soluciones' },
    { src: 'experiences/companies/mastandrea.jpeg', alt: 'Mastandrea' },
    { src: 'experiences/companies/msf.jpeg', alt: 'MSF' },
  ];

  items = ['ITEM 1', 'ITEM 2', 'ITEM 3', 'ITEM 4', 'ITEM 5'];

  toggleExperience(experience: any) {
    experience.opened = !experience.opened;
  }
}
