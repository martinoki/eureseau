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
      selected: true,
      image: 'practice-areas/briefcase.png',
      title: 'ADMINISTRACION FINANCIERA Y ASESORAMIENTO EMPRESARIO',
      description: [
        {
          type: 'text',
          text: 'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
        },
        {
          type: 'text',
          text: 'Nuestra experiencia abarca también la asesoría en fusiones y adquisiciones en el sector financiero, el desarrollo de productos bancarios y el análisis de riesgos financieros. Nos mantenemos actualizados en las últimas regulaciones del sector y las implicancias legales de las innovaciones financieras como fintech y criptoactivos. Nuestro compromiso es ofrecer soluciones ágiles y efectivas que permitan a nuestros clientes operar con seguridad jurídica en mercados cada vez más complejos.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/bank.png',
      title: 'AREA FINANCIERA Y BANCARIA',
      description: [
        {
          type: 'bullet',
          text: 'Asesoramiento relacionado con problemas técnicos u operativos, interpretación y aplicación de normas del Banco Central y el Mercado de Valores, relacionado con:',
        },
        {
          type: 'bullet',
          text: 'Aspectos contables: análisis de los estados contables e información complementaria, relaciones técnicas. Cumplimiento de normas vigentes en materia de registración contable.',
        },
        {
          type: 'bullet',
          text: 'Cartera de créditos: asesoramiento y revisión en relación a las normativas del Banco Central.',
        },
        {
          type: 'text',
          text: 'Fraccionamiento del riesgo crediticio: Evaluación del riesgo crediticio. Clasificación de cartera, previsiones, capitales mínimos, liquidez y solvencia.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/handshake.png',
      title: 'AREA SOCIETARIA',
      description: [
        {
          type: 'bullet',
          text: 'Constitución de sociedades comerciales. Inscripción de sociedades extranjeras. Reforma de estatutos, empresas vinculadas. Emisión de obligaciones subordinadas, condiciones, procesos de emisión.',
        },
        {
          type: 'bullet',
          text: 'Adquisición o venta de paquetes de control, convenios, pacto de accionistas, sindicación de acciones, recaudos, fusiones, absorciones. Inversiones extranjeras, asesoramiento, inscripción, representación.',
        },
        {
          type: 'bullet',
          text: 'Redacción y asesoramiento en actas de Asambleas, directorios, representaciones ante las autoridades de contralor (de acuerdo al objeto y naturaleza de la Sociedad). Controles de legalidad, directores, síndicos, gerentes, requisitos normativos y legales.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/building.png',
      title: 'AREA CONTENCIOSA EJECUTIVA EN PROPIEDAD HORIZONTAL',
      description: [
        {
          type: 'bullet',
          text: 'Asesoramiento en materia sucesoria, Testamentaria, ab intestato, cesiones de derechos hereditarios.',
        },
        {
          type: 'bullet',
          text: 'Búsqueda de bienes.',
        },
        {
          type: 'bullet',
          text: 'Sucesiones en el extranjero.',
        },
        {
          type: 'bullet',
          text: 'Liquidación de bienes.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/medal.png',
      title: 'CONCURSOS Y QUIEBRAS',
      description: [
        {
          type: 'bullet',
          text: 'Constitución de sociedades comerciales. Inscripción de sociedades extranjeras. Reforma de estatutos, empresas vinculadas. Emisión de obligaciones subordinadas, condiciones, procesos de emisión.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/hammer.png',
      title: 'ASPECTOS CONTENCIOSOS EN MATERIA LABORAL, COMERCIAL Y CIVIL',
      description: [
        {
          type: 'bullet',
          text: 'Constitución de sociedades comerciales. Inscripción de sociedades extranjeras. Reforma de estatutos, empresas vinculadas. Emisión de obligaciones subordinadas, condiciones, procesos de emisión.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/paper.png',
      title: 'DERECHO SUCESORIO',
      description: [
        {
          type: 'bullet',
          text: 'Constitución de sociedades comerciales. Inscripción de sociedades extranjeras. Reforma de estatutos, empresas vinculadas. Emisión de obligaciones subordinadas, condiciones, procesos de emisión.',
        },
      ],
    },
  ];

  onSelectedItem(item: any) {
    this.data.forEach((data) => {
      data.selected = false;
    });
    item.selected = true;
  }
}
