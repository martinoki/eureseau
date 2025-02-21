import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() images: { image: string; date: string; description: string }[] = [];
  // images = [
  //   'carousel/carousel1.png',
  //   'carousel/carousel2.png',
  //   'carousel/carousel3.png'
  // ];
}
