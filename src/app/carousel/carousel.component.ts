import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [
    'carousel/carousel1.png',
    'carousel/carousel2.png',
    'carousel/carousel3.png'
  ];

}
