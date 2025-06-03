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
      id: 1,
      nombre: 'Dr. Jorge Eduardo Pedreira',
      cargo: 'Titular y fundador del estudio',
      imagen: 'papa_tere_enhanced.png',
      description: [
        {
          type: 'list',
          text: [
            'Miembro Comité Auditoria BANCO CAJA DE AHORRO S.A. (28/09/99 - 2000)',
            'BANCO CAJA DE AHORRO S.A.  Director (24/06/99 - 2000)',
            'CAJA VIDA S.A.  Director.  (15/09/99 - 2000)',
            'CAJA DE SEGUROS S.A.  Director.  (15/09/99 - 2000)',
            'CAJA DE AHORRO Y SEGURO S.A.  Director.  (05/04/99 - 2000)',
            'CENTRO HISPANO BANCO S.A. - MONTEVIDEO- URUGUAY.  Director.  (27/09/1994 - 1996)',
            'COINTEL S.A. Controlante de Telefónica de Argentina.  Director. (1992 - 1995)',
            'BANCO POPULAR ARGENTINO.  Gerente General Adjunto.  (1990 - 29/02/1996)',
            'Apoderado del BANCO CENTRAL HISPANOAMERICANO S.A.  MADRID, ESPAÑA.',
            'BANCO POPULAR ARGENTINO.  Director Secretario del Comité Ejecutivo.',
            'BANCO POPULAR ARGENTINO.  Director.  (1987 - 29/02/96)',
            'BANCO POPULAR ARGENTINO S.A.  Abogado Jefe.  (1982 - 1987)',
            'BANCO CENTRAL S.A. -MADRID- ESPAÑA.  Representante.  (1990 - 1995)',
            'Banco Central S.A. MADRID ESPAÑA.  Asesor Jurídico de los Servicios Jurídicos  Internacionales. (1979 - 1996)',
          ],
        },
        { type: 'title', text: ['Actividad Pública:'] },
        {
          type: 'list',
          text: [
            'Miembro del  Comité de Auditoria del BANCO CAJA  S.A.',
            'Director por el Estado Nacional en: la CAJA DE AHORRO Y SEGURO S.A. y sus controladas SEGUROS S.A., VIDA S.A. Y BANCO CAJA DE AHORRO S.A.  (05/99, 06/99 y 07/99)',
            'Director Ejecutivo de la ENTIDAD BINACIONAL YACYRETÁ. (27/01/1997 al 01/02/1999)',
            'JUEZ DE PRIMERA INSTANCIA. (1973 - 1976)',
            'Jefe de Asesores SECRETARIA DE SALUD PÚBLICA DE LA CIUDAD  DE BUENOS AIRES. (Hasta 1973)',
            'FERROCARRILES ARGENTINOS.  Asuntos Gremiales. (Hasta 1963)',
            'Director Abogado Jefe del INSTITUTO ARGENTINO DE LA VIVIENDA. (Hasta 1988)',
            'Socio del COMITÉ DE ABOGADOS DE BANCOS DE LA REPUBLICA ARGENTINA (1982/2011)',
            'Miembro de la ASOCIACIÓN DE RECTORES DE LA ENSEÑANZA PRIVADA DE LA REPÚBLICA ARGENTINA.',
            'Miembro del COMITÉ DE ABOGADOS DE BANCOS DE LA REPÚBLICA ARGENTINA. ',
            'Miembro del EURSÈAU AN INTERNATIONAL NETWORK OF LAWYERS.',
            'Profesor Titular de Geografía Económica y Política. (1966 - 1975)',
            'Profesor Titular de Historia de las Instituciones Políticas. (1966 - 1975)',
          ],
        },
      ],
    },
    {
      id: 2,
      nombre: 'Dra. Maria Teresa Pedreira',
      cargo: 'Especialista en asesoramiento de empresas',
      imagen: 'tere_enhanced.png',
      description: [
        {
          type: 'list',
          text: [
            'Seminario “Actualización en Propiedad Horizontal”.',
            'Seminario “Ejecución de expensas y sus alcances”.',
            'Seminario “Temas de derecho de propiedad Horizontal”.',
            'Seminario Debate sobre “Narcotráfico y el Crimen Organizado”.',
            'Miembro Oyente y Asistente colaborador de las “XVI JORNADAS NACIONALES DE DERECHO CIVIL”.',
            'Coaching Jurídico ',
            'Ciclo Conferencias sobre “LA AUTONOMÍA DE LA CIUDAD DE BUENOS AIRES”.',
            'Jornadas de Bioética realizadas en la Universidad Católica Argentina.',
            'Conferencia sobre “La Eutanasia y su incidencia jurídica”.',
            'Seminario realizado por el Colegio Público de Abogados de la Capital Federal sobre “los Aspectos Notariales y Registrales en el Proyecto de Reforma del Código Civil”.',
            'Seminario de Derecho Laboral,',
            "Saint Joseph's University of Philadelphia, PENNSYLVANIA.",
            'Asistente a ANNUAL MEETING OF EURESEAU IN UDINE, ITALIA. (11/1999)',
            'Asistente a ANNUAL MEETING OF EURESEAU IN ROTTERDAM HOLANDA.  (05/2000)',
            'Anfitriona reunion ANUUAL MEETING IN BUENOS AIRES (2001)',
            'Anfitriona reunion ANUUAL MEETING IN BUENOS AIRES (2023)',
            'Asistente a ANNUAL MEETING OF EURESEAU IN BERLIN.  (04/2024)',
          ],
        },
      ],
    },
    {
      id: 3,
      nombre: 'Dra. Teresa E. Felix de Pedreira',
      cargo:
        'Especialista en derecho societario, comercial y asesoramiento de empresas.',
      imagen: 'mama_tere_enhanced.png',
      description: [
        {
          type: 'text',
          text: [
            'En el área financiera y bancaria, nuestro estudio ofrece asesoría integral a entidades financieras, empresas y particulares. Nos especializamos en la estructuración de préstamos, financiamiento corporativo, garantías, reestructuración de deudas y cumplimiento normativo. Nuestro equipo de abogados cuenta con una vasta experiencia en la negociación de contratos financieros, así como en la resolución de disputas derivadas de estas operaciones. Además, brindamos apoyo en procesos regulatorios y ante organismos de control. Trabajamos en estrecha colaboración con nuestros clientes para asegurar soluciones efectivas, personalizadas y en cumplimiento con la legislación vigente.',
          ],
        },
      ],
    },
  ];

  eureseauText = [
    // 'Nuestra misión es ofrecer asesoría y representación legal de primer nivel para abordar los desafíos y las oportunidades en el entorno laboral. Con una sólida experiencia en derecho laboral, nuestro equipo de abogados se especializa en proporcionar soluciones estratégicas y personalizadas en temas como conflictos laborales, negociaciones colectivas, y protección de derechos de los trabajadores.',
    // 'Nos enorgullece nuestra capacidad para combinar un profundo conocimiento jurídico con un enfoque humano y comprometido, garantizando que cada cliente reciba la atención y el respaldo necesarios para alcanzar sus objetivos. En Eureseau, su tranquilidad y éxito en el ámbito laboral son nuestra prioridad.',
    'Nos enorgullece nuestra capacidad para combinar un profundo conocimiento jurídico con un enfoque humano y comprometido, garantizando que cada cliente reciba la atención y el respaldo necesarios para alcanzar sus objetivos.',
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
