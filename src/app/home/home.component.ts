import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
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
