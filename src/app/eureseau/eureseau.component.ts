import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eureseau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eureseau.component.html',
  styleUrl: './eureseau.component.scss',
})
export class EureseauComponent {
  representatives = [
    {
      country: 'Argentina',
      representatives: {
        text: 'Pedreira, Felix & Pedreira & Asociados',
        link: '',
      },
    },
    {
      country: 'Austria',
      representatives: {
        text: 'Alix Frank Rechtsanwälte GmbH',
        link: '',
      },
    },
    {
      country: 'Bélgica',
      representatives: {
        text: 'LAWTREE Advocaten BV',
        link: '',
      },
    },
    {
      country: 'Brasil',
      representatives: {
        text: 'Bergamaschi & Bozzo Law Firm',
        link: '',
      },
    },
    {
      country: 'Bulgaria',
      representatives: {
        text: 'Dinova Rusev & Partners',
        link: '',
      },
    },
    {
      country: 'Colombia',
      representatives: {
        text: 'Acuña, Acuña & Bermudez',
        link: '',
      },
    },
    {
      country: 'Croacia',
      representatives: {
        text: 'Pećarević & Relić Attorneys at law',
        link: '',
      },
    },
    {
      country: 'Cyprus',
      representatives: {
        text: 'Pedreira, Felix & Pedreira & Asociados',
        link: '',
      },
    },
    {
      country: 'Francia',
      representatives: {
        text: 'Alix Frank Rechtsanwälte GmbH',
        link: '',
      },
    },
    {
      country: 'Alemania',
      representatives: {
        text: 'LAWTREE Advocaten BV',
        link: '',
      },
    },
    {
      country: 'Grecia',
      representatives: {
        text: 'Bergamaschi & Bozzo Law Firm',
        link: '',
      },
    },
    {
      country: 'Israel',
      representatives: {
        text: 'Dinova Rusev & Partners',
        link: '',
      },
    },
    {
      country: 'Italia',
      representatives: {
        text: 'Acuña, Acuña & Bermudez',
        link: '',
      },
    },
    {
      country: 'Malta',
      representatives: {
        text: 'Pećarević & Relić Attorneys at law',
        link: '',
      },
    },{
      country: 'Paises Bajos',
      representatives: {
        text: 'Pedreira, Felix & Pedreira & Asociados',
        link: '',
      },
    },
    {
      country: 'Noruega',
      representatives: {
        text: 'Alix Frank Rechtsanwälte GmbH',
        link: '',
      },
    },
    {
      country: 'Panamá',
      representatives: {
        text: 'LAWTREE Advocaten BV',
        link: '',
      },
    },
    {
      country: 'Polonia',
      representatives: {
        text: 'Bergamaschi & Bozzo Law Firm',
        link: '',
      },
    },
    {
      country: 'Protugal',
      representatives: {
        text: 'Dinova Rusev & Partners',
        link: '',
      },
    },
    {
      country: 'Rusia',
      representatives: {
        text: 'Acuña, Acuña & Bermudez',
        link: '',
      },
    },
    {
      country: 'Slovenia',
      representatives: {
        text: 'Pećarević & Relić Attorneys at law',
        link: '',
      },
    },
  ];

  events = [
    {
      title: 'EVENTO EURESEAU BERLIN',
      place: 'Berlin',
      date: 'Abril, 2024',
      image: 'berlin.png',
    },
    {
      title: 'COLOMBIA',
      place: 'Bogotá',
      date: 'Octubre, 2024',
      image: 'bogota.png',
    },
    {
      title: 'EVENTO COMUNICACIONAL CONFERENCIA',
      place: 'San Pablo',
      date: 'Octubre, 2019',
      image: 'brasil.png',
    },
    {
      title: 'ARGENTINA',
      place: 'Mendoza',
      date: '30 Mayo, 2023',
      image: 'mendoza.png',
    },
  ];

  column1: any[] = [];
  column2: any[] = [];
  column3: any[] = [];

  constructor() {
    const total = this.representatives.length;
    const chunkSize = Math.ceil(total / 3); // Equilibrar columnas

    // Asignar datos a las tres columnas
    this.column1 = this.representatives.slice(0, chunkSize);
    this.column2 = this.representatives.slice(chunkSize, chunkSize * 2);
    this.column3 = this.representatives.slice(chunkSize * 2, total);
  }
}
