import { animate } from '@angular/animations';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';
import { trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  isExpanded = true;
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;

  toggleCollapse() {
    this.isExpanded = !this.isExpanded;
  }
  titulares = [
    {
      nombre: 'Dr. Jorge Eduardo Pedreira',
      cargo: 'Titular y fundador del estudio',
      imagen: 'papa_tere.png',
      description:
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
    },
    {
      nombre: 'Dra. Maria Teresa Pedreira',
      cargo: 'Especialista en derecho laboral y asesoramiento de empresas',
      imagen: 'mama_tere.png',
      description:
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
    },
    {
      nombre: 'Dra. Teresa E. Felix de Pedreira',
      cargo: 'Doctora en derecho societario',
      imagen: 'tere.png',
      description:
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
    },
  ];

  selectedTitular = this.titulares[0];

  selectTitular(titular: any) {
    this.selectedTitular = titular;
    this.scrollTarget.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
