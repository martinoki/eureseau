import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-practice-areas',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './practice-areas.component.html',
  styleUrl: './practice-areas.component.scss',
})
export class PracticeAreasComponent {
  data = [
    {
      image: 'practice-areas/briefcase.png',
      title: 'ADMINISTRACION FINANCIERA Y ASESORAMIENTO EMPRESARIO.',
      description: [
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
        'Nuestra experiencia abarca también la asesoría en fusiones y adquisiciones en el sector financiero, el desarrollo de productos bancarios y el análisis de riesgos financieros. Nos mantenemos actualizados en las últimas regulaciones del sector y las implicancias legales de las innovaciones financieras como fintech y criptoactivos. Nuestro compromiso es ofrecer soluciones ágiles y efectivas que permitan a nuestros clientes operar con seguridad jurídica en mercados cada vez más complejos.',
      ],
    },
    {
      image: 'practice-areas/bank.png',
      title: 'AREA FINANCIERA Y BANCARIA.',
      description: [
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
        'Nuestra experiencia abarca también la asesoría en fusiones y adquisiciones en el sector financiero, el desarrollo de productos bancarios y el análisis de riesgos financieros. Nos mantenemos actualizados en las últimas regulaciones del sector y las implicancias legales de las innovaciones financieras como fintech y criptoactivos. Nuestro compromiso es ofrecer soluciones ágiles y efectivas que permitan a nuestros clientes operar con seguridad jurídica en mercados cada vez más complejos.',
      ],
    },
    {
      image: 'practice-areas/handshake.png',
      title: 'AREA SOCIETARIA.',
      description: [
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
        'Nuestra experiencia abarca también la asesoría en fusiones y adquisiciones en el sector financiero, el desarrollo de productos bancarios y el análisis de riesgos financieros. Nos mantenemos actualizados en las últimas regulaciones del sector y las implicancias legales de las innovaciones financieras como fintech y criptoactivos. Nuestro compromiso es ofrecer soluciones ágiles y efectivas que permitan a nuestros clientes operar con seguridad jurídica en mercados cada vez más complejos.',
      ],
    },
  ];
}
