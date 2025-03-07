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
      imagen: 'papa_tere_enhanced.png',
      description:
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
    },
    {
      nombre: 'Dra. Maria Teresa Pedreira',
      cargo: 'Especialista en derecho laboral y asesoramiento de empresas',
      imagen: 'tere_enhanced.png',
      description:
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
    },
    {
      nombre: 'Dra. Teresa E. Felix de Pedreira',
      cargo: 'Doctora en derecho societario',
      imagen: 'mama_tere_enhanced.png',
      description:
        'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
    },
  ];

  eureseauText = [
    'Nuestra misión es ofrecer asesoría y representación legal de primer nivel para abordar los desafíos y las oportunidades en el entorno laboral. Con una sólida experiencia en derecho laboral, nuestro equipo de abogados se especializa en proporcionar soluciones estratégicas y personalizadas en temas como conflictos laborales, negociaciones colectivas, y protección de derechos de los trabajadores.',
    'Nos enorgullece nuestra capacidad para combinar un profundo conocimiento jurídico con un enfoque humano y comprometido, garantizando que cada cliente reciba la atención y el respaldo necesarios para alcanzar sus objetivos. En Eureseau, su tranquilidad y éxito en el ámbito laboral son nuestra prioridad.',
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
