import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterLink } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  images = [
    {
      image: 'carousel/carousel2.png',
      date: '10 ABRIL, 2017',
      description: 'Evento internacional Eureseau realizado en Paris',
    },
    {
      image: 'carousel/carousel1.png',
      date: '5 ABRIL, 2017',
      description:
        'Evento comunicacional internacional. Conferencia en Sao Pablo',
    },
    {
      image: 'carousel/carousel3.png',
      date: '30 MARZO, 2023',
      description:
        'Congreso de estudios en Latinoamerica, liderado por un integrante de nuestro equipo.',
    },
  ];

  ngOnInit(): void {
    // const carouselElement = document.querySelector('#carouselExampleControls');
    //   if (carouselElement) {
    //     const carousel = new bootstrap.Carousel(carouselElement, {
    //       interval: 2000, // Duración de cada slide
    //       ride: 'carousel',
    //     });
    //   }
  }
}
