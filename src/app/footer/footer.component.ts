import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  texts = [
    {
      title: 'Dirección',
      alt: 'Address',
      icon: 'address.png',
      text: `Calle Uruguay Nº 390, piso 15, Of. "F" y "G" C.P. (1015) - Ciudad Autónoma de Buenos Aires, Argentina`,
    },
    {
      title: 'Telefono',
      alt: 'Phone',
      icon: 'phone.png',
      text: '(5411) 4373-0861',
    },
    {
      title: 'Celulares de contacto',
      alt: 'Phone',
      icon: 'phone.png',
      text: '',
    },
    {
      title: 'Mail',
      alt: 'Mail',
      icon: 'mail.png',
      text: 'info@estudiopedreira.com.ar',
    },
  ];
}
