import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  images = [
    {
      image: 'carousel/carousel1.png',
      date: '10 ABRIL, 2017',
      description: 'Evento internacional Eureseau realizado en Paris',
    },
    {
      image: 'carousel/carousel2.png',
      date: '10 ABRIL, 2017',
      description: 'Evento internacional Eureseau realizado en Paris',
    },
    {
      image: 'carousel/carousel3.png',
      date: '10 ABRIL, 2017',
      description: 'Evento internacional Eureseau realizado en Paris',
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
