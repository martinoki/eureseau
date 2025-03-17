import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() data: { image: string; title: string; description: {type: string, text: string}[]; selected: boolean }[] = [];

  selectedItem: any;
  isExpanded = true;
  @Output() selectedItemEvent = new EventEmitter<any>();
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
    this.selectedItemEvent.emit(item);
  }
  // images = [
  //   'carousel/carousel1.png',
  //   'carousel/carousel2.png',
  //   'carousel/carousel3.png'
  // ];
}
