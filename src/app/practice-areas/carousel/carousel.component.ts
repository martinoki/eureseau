import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() data: { image: string; title: string; description: string[] }[] = [];

  selectedItem: any;
  isExpanded = true;
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;

  ngOnInit(): void {
    this.selectedItem = this.data[0];
  }

  selectItem(item: any) {
    this.selectedItem = item;
    this.scrollTarget.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  // images = [
  //   'carousel/carousel1.png',
  //   'carousel/carousel2.png',
  //   'carousel/carousel3.png'
  // ];
}
