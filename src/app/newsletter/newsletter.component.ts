import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent {
  newsletterData: any[] = [
    {
      section: 'JURISPRUDENCIA',
      pages: [
        {
          date: '15/05/2025',
          title:
            'La falta de pago de créditos quirografarios verificados con acuerdo homologado habilita a solicitar la declaración de quiebra.',
          text: `El superior tribunal provincial rechazó el recurso de la Administración Federal de Ingresos Públicos contra una sentencia que no hizo lugar a la quiebra con fundamento en que se impedía la continuación del giro comercial de una empresa, por considerar que no se trataba de una sentencia definitiva a los fines de la apertura de la vía extraordinaria provincial, ya que el organismo fiscal podía alcanzar la debida custodia de su crédito en otro proceso. <br />
          <b>La Corte descalificó la sentencia con base en la doctrina de la arbitrariedad.</b> <br />
          Consideró, en primer lugar, que el tribunal local desestimó el recurso extraordinario de inconstitucionalidad con fundamento en que la AFIP podía obtener la tutela de sus derechos en el marco de otro proceso o solicitando nuevamente la quiebra pero sin ponderar debidamente que, a la luz de la normativa aplicable, la falta de pago de créditos quirografarios exigibles verificados en el marco de un concurso preventivo con acuerdo preventivo homologado habilita a solicitar, sin más, la declaración de quiebra del deudor (artículo 63, ley 24.522).<br />
Agregó que la AFIP, en su carácter de acreedor concursal, tiene las mismas prerrogativas que los restantes acreedores; participar del procedimiento obligatorio, colectivo y universal verificando sus créditos, obteniendo su cobro y recurriendo a las vías que la ley concursal acuerda en caso de falta de pago.<br />
Concluyó así que le asistía razón a la recurrente pues la sentencia había prescindido de considerar cuestiones oportunamente propuestas y conducentes, a la vez que se había apartado de la solución que prevé la normativa vigente sin dar fundamentos suficientes, por lo que correspondía su descalificación.<br />
ARYSA S.R.L. Y OTRO s/CONCURSO PREVENTIVO POR CONVERSION -HOY QUIEBRA
CSJ 001959/2021/CS001`,
        },
        {
          date: '08/05/2025',
          title: 'Hábeas data: incompetencia del fuero federal si no se trata de bases públicas de información o interconectadas en redes interjurisdiccionales',
          text: `
La actora promovió acción de hábeas data a fin de obtener que un banco le brinde la información que posee en sus bases de datos respecto de su persona y rectifique los mismos en caso de existir un error o inexactitud.<br />
La Cámara Nacional de Apelaciones en lo Civil y Comercial Federal confirmó la decisión del juez de primera instancia que había declarado la incompetencia del fuero y ordenado la remisión de los autos a la justicia nacional en lo comercial.<br />
Ante el recurso extraordinario interpuesto por la demandante la Corte confirmó este pronunciamiento.
Expresó que la Ley 25.326 de Protección de los Datos Personales solo establece la competencia de excepción en los casos en que se persigue eliminar datos o contenidos que obran en bases públicas de información o interconectadas en redes interjurisdiccionales, lo que no ocurría en el caso.<br />
AYALA, ANDREA FABIANA c/ BANCO DE SERVICIOS Y TRANSACCIONES SA s/HABEAS DATA (ART. 43 C.N.)
CCF 005536/2021/CS001`
        },
        {
          date: '26/05/2025',
          title: 'La intervención de la Justicia del Trabajo según el plazo aludido en la Resolución 298/17 de la SRT',
          text: `En la causa "Q. B., M. N. c/La Segunda ART S.A. s/Accidente" la Sala VIII de la Cámara Nacional de Apelaciones del Trabajo consideró que condicionar la intervención de la Justicia del Trabajo al plazo aludido en la Resolución 298/17 de la SRT, a los efectos de la revisión de los actos emanados del Servicio de Homologación, "constituye un exceso reglamentario inconstitucional que atenta contra el derecho al acceso a la justicia y a la tutela judicial efectiva".<br /><br />
Ello, toda vez que "sin la posibilidad de una revisión, producida en el marco de un proceso judicial, en el cual las cuestiones se ventilen ante el juez natural, imparcial, con la extensión que prevé nuestro sistema normativo y contemplando lo puntualizado por nuestro Más Alto Tribunal", los jueces consideraron que no solo se vulnerarían derechos constitucional y convencionalmente contemplados a favor del trabajador, sino que también se afectaría la validez misma de la resolución administrativa, "pues su eficacia se encuentra supeditada a la posibilidad de su revisión judicial posterior, plena y suficiente".<br /><br />
Por ello, en el caso, donde la parte actora luego de haber transitado la instancia administrativa por divergencia en la determinación de la incapacidad, en lugar de recurrir mediante el procedimiento establecido en la Resolución 298/2017 de la SRT, inicia demanda directa ante la Justicia Nacional del Trabajo, "corresponde declarar la inconstitucionalidad del artículo 16 de la Resolución 298/2017 de la S.R.T, revocar la resolución apelada y habilitar la vía judicial".<br /><br />
El pasado 21 de mayo los Dres. Pesino y González revocaron la resolución apelada y declararon la aptitud del Tribunal para entender en la cuestión`
        }
      ],
    },
    {
      section: 'LEGISLACIóN',
      pages: [{
        title: 'LEY 27.740',
        text: `Esta ley, sancionada el 18 de abril de 2024, aprueba el acuerdo celebrado entre los Estados partes del Mercosur para eliminar el cobro de cargos de roaming internacional a los usuarios finales.
Este acuerdo establece las pautas para el servicio de itinerancia internacional (roaming) entre los proveedores de telecomunicaciones que presten servicios de telecomunicaciones de telefonía móvil, mensajería y datos móviles.<br /><br />
Los proveedores de telecomunicaciones deberán aplicar a sus usuarios que usen los servicios de roaming en el territorio de otro Estado parte del Mercosur los mismos precios que cobren en su país, de acuerdo con la modalidad y plan contratado. Esto se aplica también para comunicaciones de voz, mensajería y acceso a internet.<br /><br />
Asimismo, la relación entre los precios cobrados al usuario y los precios de los acuerdos entre proveedores deberá ser razonable, para que los acuerdos sean convenientes para las partes.`
      },
      {
        title: 'LEY 27.736 - VIOLENCIA DIGITAL',
        text: `
Esta ley, sancionada el 10 de octubre de 2023, modifica la ley 26.485 de protección integral a las mujeres para proteger los derechos y bienes digitales de las mujeres, y su desenvolvimiento y permanencia en el espacio digital.
La norma incluye entre los derechos protegidos por la ley 26.485 al respeto por la dignidad, reputación e identidad de las mujeres en los espacios digitales.<br /><br />
Se modifica lo que la ley 26.485 entendía por violencia contra las mujeres, para incluir la violencia ejercida en espacios digitales.<br /><br />
Se define, entonces, a la violencia contra las mujeres a toda conducta, por acción u omisión, basada en razones de género, que, de manera directa o indirecta, tanto en el ámbito público como en el privado, en el espacio analógico digital, basada en una relación desigual de poder, afecte su vida, libertad, dignidad, integridad física, psicológica, sexual, económica o patrimonial, participación política, como así también su seguridad personal. Se incluye a la violencia llevada adelante por el Estado o sus agentes.<br /><br />
Por su parte, se considera violencia indirecta a toda conducta, acción, omisión, disposición, criterio o práctica discriminatoria que ponga a la mujer en desventaja con respecto al varón.<br /><br />
La ley incluye a la violencia digital dentro de las formas en que se manifiestan los distintos tipos de violencia contra las mujeres.`
      }
    ]
    }
  ];
}
