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
      description:
        '“Excelente atención y gran profesionalismo. Su asesoramiento a nuestra empresa es una parte muy importante para un crecimiento sostenido”.',
      name: 'Juan Manuel, Olivos',
      place: 'Provincia de Buenos Aires',
    },
    {
      description:
        '“Todo el equipo del estudio o fue muy profesional y siempre mostró empatía hacia mi situación. Me explicaron todo de manera clara y siempre estuvieron disponibles para responder mis dudas. Gracias a ellos, logré resolver mi caso sin complicaciones.”',
      name: 'Mónica, ',
      place: 'Ciudad Autonoma de Buenos aires',
    },
    {
      description:
        '“I am very grateful to the law firm for its speed and efficiency. From the first moment they took care of everything and kept me informed about the progress of my case. I recommend them without hesitation”.',
      name: 'Gail, Palm Beach',
      place: 'Florida USA',
    },
    {
      description:
        '“Muy satisfecho con el servicio que recibí. A pesar de la distancia, con una comunicación fluida, permitió establecer nuestro proyecto en la Argentina y que siga creciendo”',
      name: 'Gabriela, Madrid',
      place: 'España',
    },
    {
      description:
        'Su calidez en la atención personalizada y su disposición para buscar soluciones me dieron tranquilidad durante todo el proceso. Son un equipo de confianza. Gracias!',
      name: 'Martin, ',
      place: 'Ciudad Autonoma de Buenos aires',
    },
  ];

  items = ['ITEM 1', 'ITEM 2', 'ITEM 3', 'ITEM 4', 'ITEM 5'];
}
