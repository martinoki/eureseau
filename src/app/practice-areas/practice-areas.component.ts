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
      image: 'practice-areas/briefcase.png',
      title: 'DERECHO LABORAL',
      description: [
        {
          type: 'text',
          text: 'Contamos con amplia trayectoria asesorando empresas y clientes en asuntos laborales,',
        },
        {
          type: 'bullet',
          text: 'Celebración de acuerdos de desvinculación, reorganizaciones, programas preventivos de crisis,',
        },
        {
          type: 'bullet',
          text: 'Armado de estructuras en capital humano acorde a legislación vigente,',
        },
        {
          type: 'bullet',
          text: 'Asuntos contenciosos, solución de controversias mediante procedimientos conciliatorios,',
        },
        {
          type: 'bullet',
          text: 'Cursos de capacitación en el área de capital humano empresarial,',
        },
        {
          type: 'bullet',
          text: 'Despidos, indemnizaciones, accidentes de trabajo.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/shop.png',
      title: 'COMERCIAL',
      description: [
        {
          type: 'bullet',
          text: 'Cartera morosa: Cobranza judicial o extrajudicial, recuperos y refinanciaciones. Control de gestión. Auditorías legales. Seguimiento.',
        },
        {
          type: 'bullet',
          text: 'Gestión judicial: Asesoramiento y defensa en litigios en que la empresa sea parte reclamante, demandada o vinculada.',
        },
        {
          type: 'text',
          text: 'Concursos y quiebras: Procedimiento ante deudores quebrados o concursados, verficación de créditos.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/paper.png',
      title: 'SUCESIONES',
      description: [
        {
          type: 'bullet',
          text: 'Asesoramiento en materia sucesoria, testamentaria, ab intestato, cesiones de derechos hereditarios.',
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
      image: 'practice-areas/building.png',
      title: 'PROPIEDAD HORIZONTAL',
      description: [
        {
          type: 'text',
          text: 'Nuestras oficinas poseen un área dedicada en forma personalizada a la atención de problemas jurídicos derivados de las relaciones consorciales en la Propiedad Horizontal. Ello comprende asesoramiento en todo lo que implica el órgano deliberativo (Asamblea) como administrativo,  relaciones laborales, consultas, gestiones de cobro extrajudiciales  y ejecuciones de expensas. Con mas de 100 Consorcio como clientes, brindando en forma continua la recuperación de las deudas de expensas.',
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
      image: 'practice-areas/justice.png',
      title: 'DAÑOS Y PERJUICIOS',
      description: [
        {
          type: 'bullet',
          text: 'Daños en materia contractual y extracontractual.',
        },
        {
          type: 'bullet',
          text: 'Accidentes de tránsito.',
        },
        {
          type: 'bullet',
          text: 'Evaluación y cuantificación del daño con especialistas.',
        },
        {
          type: 'bullet',
          text: 'Peritos de parte y Consultores Técnicos según sea la naturaleza del daño.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/build.png',
      title: 'DERECHO PENAL',
      description: [
        {
          type: 'text',
          text: 'El estudio cuenta con abogados penalistas especializados.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/hand_gear.png',
      title: 'SERVICIOS NOTORIALES',
      description: [
        {
          type: 'bullet',
          text: 'Constitución y redacción de estatutos de sociedades (nacionales y extranjeras), cesión de cuotas, incorporación, poderes.',
        },
        {
          type: 'bullet',
          text: 'Constitución de derechos reales e inmobiliarios, compraventas, donaciones, usufructos.',
        },
        {
          type: 'bullet',
          text: 'Certificaciones y legalizaciones.',
        },
        {
          type: 'bullet',
          text: 'Estudio de títulos, transmisiones de dominio, hipotecas, garantías.',
        },
        {
          type: 'bullet',
          text: 'Contratos fiduciarios, poderes, representaciones, testamentos, tasaciones.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/sheet.png',
      title: 'ASPECTOS GENERALES',
      description: [
        {
          type: 'bullet',
          text: 'Información estratégica y políticas generales de inversiones extranjeras: Mercosur, C.E.E.',
        },
        {
          type: 'bullet',
          text: 'Representación en Consejos de Administración, Directorios, Juntas, etc.',
        },
        {
          type: 'bullet',
          text: 'Arbitraje y mediación.',
        },
        {
          type: 'bullet',
          text: 'Derecho energético.',
        },
        {
          type: 'bullet',
          text: 'Propiedad Intelectual.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/global.png',
      title: 'MEDIO AMBIENTE',
      description: [
        {
          type: 'text',
          text: 'Asesoría legal y técnica en materia de derecho ambiental.',
        },
        {
          type: 'bullet',
          text: 'Asesoramiento en la obtención de permisos, autorizaciones y licencias ambientales.',
        },
        {
          type: 'bullet',
          text: 'Elaboración de estudios de impacto ambiental.',
        },
        {
          type: 'bullet',
          text: 'Defensa ante los tribunales.',
        },
        {
          type: 'bullet',
          text: 'Planificación ambiental.',
        },
        {
          type: 'bullet',
          text: 'Solución de controversias en la vía administrativa ambiental.',
        },
      ],
    },
    {
      selected: false,
      image: 'practice-areas/folder.png',
      title: 'CONTENCIOSO ADMINISTRATIVO',
      description: [
        {
          type: 'text',
          text: 'Asesoramiento integral en todo tipo de cuestiones relacionadas con el Derecho Administrativo en todas sus instancias y jurisdicciones.',
        },
        {
          type: 'text',
          text: 'Nuestro servicio comprende el análisis y encuadre legal de todo tipo de casos desde la sede administrativa.',
        },
        {
          type: 'text',
          text: 'Comprende la interposición de reclamos y recursos administrativos, así como la representación y patrocinio en acciones contencioso administrativas.',
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
