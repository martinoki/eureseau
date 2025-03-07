import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactTexts = [
    {
      title: 'Dirección',
      alt: 'Address',
      icon: 'address_alt.png',
      text: `Calle Uruguay Nº 390, piso 15, Of. "F" y "G" C.P. (1015) - Ciudad Autónoma de Buenos Aires, Argentina`,
    },
    {
      title: 'Telefono',
      alt: 'Phone',
      icon: 'phone_alt.png',
      text: '(5411) 4373-0861',
    },
    {
      title: 'Celulares de contacto',
      alt: 'Phone',
      icon: 'phone_alt.png',
      text: '+54 1166594146',
    },
    {
      title: 'Mail',
      alt: 'Mail',
      icon: 'mail_alt.png',
      text: 'info@estudiopedreira.com.ar',
    },
  ];
}
