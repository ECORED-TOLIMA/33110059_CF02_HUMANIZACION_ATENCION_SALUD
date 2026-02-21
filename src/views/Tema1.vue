<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Habilidades propias aplicadas en la atención humanizada
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/tema1/img1.svg" alt="Icono 1")
      .col-lg-9.mb-4.mb-lg-0
        .row.justify-content-center.mb-3
          .col-lg-1.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img.img-fluid(src="@/assets/curso/temas/tema1/img2.svg" alt="Icono 1")
          .col-lg-11
            p.mb-0(data-aos="fade-left") Estas habilidades hacen referencia a las capacidades personales y sociales que el talento humano en salud emplea para brindar una atención centrada en la persona. Además, permiten reconocer a pacientes, familias y redes de apoyo como sujetos activos, con dimensiones emocionales, sociales y culturales que influyen en el proceso de atención.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-left")  Entre las habilidades más relevantes se encuentran el trabajo en equipo, el liderazgo y la empatía, las cuales favorecen relaciones respetuosas, cooperación interdisciplinaria y toma de decisiones orientadas al bienestar. Su adecuada aplicación contribuye a generar confianza, mejorar la experiencia del usuario y fortalecer la calidad del servicio.
    p.mb-0 Aunque tienen una base individual, estas habilidades pueden desarrollarse y fortalecerse, mediante la reflexión sobre la práctica, el autoconocimiento y el aprendizaje colectivo. Su integración en la atención en salud promueve respuestas éticas y humanizadas, orientadas a la dignidad y a las necesidades reales de las personas.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2  1.1	Trabajo en equipo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p.mb-5 Para comprender la importancia del trabajo en equipo en la vida humana y en la atención en salud, se invita a acceder al siguiente pódcast, un espacio de reflexión que aborda esta habilidad como un pilar fundamental de la humanización. A lo largo de este contenido, se analiza cómo el trabajo en equipo permite la construcción del bien común, desde las interacciones cotidianas hasta los escenarios organizacionales más complejos. Asimismo, se reflexiona sobre su presencia constante en la vida en sociedad y su impacto en la calidad de la atención en salud, destacando la articulación de personas, roles y procesos como un sistema interdependiente orientado al cuidado, el bienestar y la dignidad humana:
        .BMG4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-6.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/tema1/img3.svg" alt="Icono 1")
            .col-lg-8
              
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="Pódcast"
                  :audio="require('@/assets/actividad/audio/Podcast_Instruccional_CF02_33110059_Trabajo en equipo.wav')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
      .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/tema1/img4.jpg" alt="Icono 1")
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Virtudes en el trabajo de equipo
    p.mb-4 El IIPE (Instituto Internacional de Planeamiento de la Educación, 2000) determina algunas características de los equipos de alto desempeño:

    .tarjeta--BMG1.p-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-6.mb-4.mb-lg-0
          figure(data-aos="zoom-in")
            img.img-fluid(src="@/assets/curso/temas/tema1/img5.jpg" alt="Icono 1")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Tener claridad en la misión y visión institucional.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Organización del trabajo.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Conciencia de lo medular que resulta para una organización cuidar al máximo las reuniones de trabajo.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Capacidad institucional para enfrentar las dificultades y convertirlos en oportunidades.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Valor por la experiencia y la creatividad del personal de salud.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Fortalecimiento en la organización en aumentar su capacidad de comunicación y el liderazgo en su personal.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Promocionar altos grados de autonomía y responsabilidad en el personal de salud.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Establecimiento de altos estándares de calidad de los servicios, la planeación, los procesos y resultados.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Generación de estrategias de monitoreo y seguimiento de los objetivos formulados.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Establecer criterios de evaluación del desempeño individual y grupal en conocimiento de todos.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 La autonomía de los equipos de trabajo en la posibilidad de participar en diferentes proyectos.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Fomentar la conciencia de la importancia de la formación y la capacitación continua, del conocimiento compartido, del apoyo de carácter reflexivo, de incentivar el profesionalismo y responsabilidad.
            li
              i.fas.fa-briefcase-medical
              p.mb-0 Asignación de presupuesto en generar lineamientos y políticas en favor del recurso humano y de formación.
    p.mb-4 Se reconoce el beneficio en que se favorece, no solo para la organización, sino para el equipo, ya que genera un ambiente de confianza, respeto y colaboración apropiado en cada ámbito, bien sea laboral o personal. Un equipo funciona sobre la base objetiva de oferta y demanda de servicios y de una base subjetiva como es: la interdependencia y confianza entre sus miembros del equipo de trabajo.
    .tarjeta.color-acento-botones.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              h3.mb-1 Trabajo en equipo
              p El siguiente video, relaciona las características del trabajo en equipo mencionadas, aplicándolas de una manera muy específica y representativa.
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=3n1gHAbsGfg')" target="_blank" type="application/pdf")
                span Abrir video
                i.fas.fa-file-download

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Principios básicos del trabajo en equipo para aplicar en atención en salud
    p.mb-4 “Los buenos profesionales hacen buenos equipos, pero también buenos equipos hacen buenos profesionales, lo cual supone un enriquecimiento social” (Borrell-Carrió, 2004). A continuación, se presentan algunos principios básicos para aplicar en la atención en salud:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
        h5.text-center Comunicación
        p.text-center La comunicación como base de los equipos de trabajo.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
        h5.text-center Liderazgo
        p.text-center Fomenta el liderazgo de sus participantes.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
        h5.text-center Objetivos
        p.text-center El equipo debe conocer y aceptar los objetivos.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
        h5.text-center Responsabilidad
        p.text-center Todo integrante del equipo debe tener claro, cuál es su responsabilidad y el trabajo que le fue asignado.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
        h5.text-center Cooperación
        p.text-center Todos los integrantes del equipo deben cooperar de manera activa y solidaria.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop')
        h5.text-center Comunicación interna
        p.text-center Un equipo debe tener buena comunicación interna.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')
        h5.text-center Conocimiento mutuo
        p.text-center Los miembros de los equipos deben conocer las actividades que desarrollan cada uno de ellos.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
        h5.text-center Valoración
        p.text-center Brindar estímulos en el equipo, no dedicarse a castigar las debilidades.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Motivación

    .row.justify-content-center.mb-3
      .col-lg-1.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/tema1/img15.svg" alt="Icono 1")
      .col-lg-11
        p.mb-0(data-aos="fade-left") Un factor importante en crear un ambiente favorable de trabajo en equipo y el logro de los objetivos en la atención en salud humanizada, es la motivación, la cual juega un papel importante, entendiéndola como una fuerza direccionada al logro de un propósito, que, al ser alcanzado, habrá de generar satisfacción. La motivación tiene que ver con el optimismo, el cual es una capacidad de seguir adelante y de continuar persiguiendo los objetivos a pesar de las adversidades.

    p.mb-4(data-aos="fade-left") La motivación puede ser generada por los procesos mentales individuales (automotivación) o provenir del entorno (estímulo externo). Ambos procesos se destacan por:[
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul mb-4")
      .row(titulo="Automotivación ")
        .col-lg-8.order-2.order-lg-1
          p.mb-0 Se caracteriza por realizar una acción con el fin de tener satisfacción percibida en el momento. Las personas con automotivación, tienden a ser más organizadas, más proactivas y tener habilidades de gestión, tienden a una mejor autoestima y confianza. Estas capacidades influyen en tomar diferentes riesgos, en contemplar la mejora continua, en realizar esfuerzos adicionales para lograr los objetivos, en buscar oportunidades continuamente, en querer lidiar con los reveses y continuar persistiendo a conseguir la meta a pesar de los obstáculos.

        .col-lg-4.col-12.mb-4.mb-lg-4.order-1.order-lg-2
          figure(data-aos="zoom-in")
            img.img-fluid(src="@/assets/curso/temas/tema1/img16.jpg" alt="Icono 1")
      .row(titulo="Estímulo externo")
        .col-lg-8.order-2.order-lg-1
          p.mb-0 Se caracteriza por realizar una acción con el fin de obtener algún tipo de recompensa. Las personas que responden al estímulo externo orientan su conducta a partir de incentivos ofrecidos por el entorno, como reconocimientos, recompensas económicas, ascensos o retroalimentación positiva. Estos estímulos favorecen el cumplimiento de metas, refuerzan comportamientos deseados y aumentan el compromiso con las tareas asignadas. Asimismo, puede promover la constancia, la mejora del desempeño y la adherencia a normas y objetivos institucionales.

        .col-lg-4.col-12.mb-4.mb-lg-4.order-1.order-lg-2
          figure(data-aos="zoom-in")
            img.img-fluid(src="@/assets/curso/temas/tema1/img17.jpg" alt="Icono 1")
    p.mb-4 La siguiente imagen, explica todo el proceso que tiene que ver con la motivación y las diversas acciones en donde está presente:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="15%" y="40%" numero="+")
            p.mb-0 Se caracteriza por realizar una acción con el fin de obtener algún tipo de recompensa.
          .tarjeta.color-acento-botones.p-3(x="85%" y="40%" numero="+")
            p.mb-0 Se caracteriza por realizar una acción con el fin de tener satisfacción percibida en el momento. Los motivadores intrínsecos incluyen el amor, divertirse, estar interesado y desafiarse.
          .tarjeta.color-acento-botones.p-3(x="9%" y="62%" numero="+")
            p.mb-0 El resultado satisfactorio o logro son estímulos que pueden provenir del entorno (estímulo externo) o puede ser generado por los procesos mentales individuales (automotivación), que incentivan alcanzar las metas propuestas, sean personales o laborales.
          .tarjeta.color-acento-botones.p-3(x="91%" y="62%" numero="+")
            p.mb-0 La motivación tiene que ver con el optimismo, el cual es una capacidad de seguir adelante y de continuar persiguiendo los objetivos a pesar de las adversidades.
          .tarjeta.color-acento-botones.p-3(x="15%" y="84%" numero="+")
            p.mb-0 El rendimiento y la calidad del trabajo precisa una dependencia en la satisfacción laboral de cada persona.
          .tarjeta.color-acento-botones.p-3(x="85%" y="84%" numero="+")
            p.mb-0 Lograr el éxito en una organización, con equipos de trabajo comprometidos, puede ser sinónimo de una mayor productividad y logros alcanzados. Cuando se tiene en cuenta la motivación del talento humano.
      .col-lg-10.movil
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/tema1/img18_1.svg" alt="Icono 1")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Lograr el éxito en una organización con equipos de trabajo comprometidos se traduce en mayor productividad y resultados alcanzados. Sin embargo, el rendimiento y la calidad del trabajo dependen directamente de la satisfacción laboral de cada persona. Por consiguiente, comprender los factores de motivación facilita la creación de un ambiente donde la automotivación pueda florecer.
    p.mb-0 Es importante tener presente que la motivación es fundamental en las personas líderes, ya que tienden a inspirar a los demás con sus acciones. Los líderes efectivos no actúan solos, sino a través de su equipo. Por este motivo, entender las motivaciones de quienes trabajan con ellos es una competencia clave para dirigir de manera eficaz.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2  1.2	Liderazgo
    .row.justify-content-center.mb-3
      .col-lg-1.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/tema1/img19.svg" alt="Icono 1")
      .col-lg-11
        p.mb-0(data-aos="fade-left") El trabajo en equipo en salud tiene como uno de sus principios el liderazgo, el reconocimiento de la importancia en las acciones que realiza la otra persona, sin importar la profesión o la escala jerárquica, pues el fin es el bien común. Según Bryman (1996) citado por Toro (2015, pp. 11-12): “el liderazgo transformacional presenta una connotación orientada a la participación y flexibilidad de los procesos de la organización”.
    
    .BMG1.px-lg-4.p-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.col-6.mb-4.mb-lg-0
          figure(data-aos="zoom-in")
            img.img-fluid(src="@/assets/curso/temas/tema1/img20.svg" alt="Icono 1")
        .col-lg-7.mb-4.mb-lg-0
          p Por lo anterior, los líderes se caracterizan por:
          ul.lista-ul

            li
              i.fas.fa-briefcase-medical
              p.mb-0 Transmitir entusiasmo y motivación a su equipo.

            li
              i.fas.fa-briefcase-medical
              p.mb-0 Enfocarse en conseguir los objetivos organizacionales.

            li
              i.fas.fa-briefcase-medical
              p.mb-0 Incentivar la creatividad, la innovación en las funciones, acciones y medidas.

            li
              i.fas.fa-briefcase-medical
              p.mb-0 Generar un valor agregado a sus resultados, individuales o grupales.

            li
              i.fas.fa-briefcase-medical
              p.mb-0 Tener variedad de conocimiento experiencial.

            li
              i.fas.fa-briefcase-medical
              p.mb-0 Generar confianza en su equipo.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Aprendiendo a ser un líder
    p Chopra (2005) citado por Toro (2015, pp. 13-14) afirma que: “se aprende a ser un líder siendo catalizador del cambio y de transformación. Los grandes líderes responden con creatividad, visión y sentido de la unidad, sin importar la magnitud del problema. La inspiración y la unidad del grupo se logran al comprender las jerarquías de necesidades”. 
    p.mb-4 Por consiguiente y tomando como referencia al autor, se deben tener en cuenta las siguientes acciones para tener un buen liderazgo:

    .tarjeta--BMG4.p-5
      .tarjeta.tarjeta--gris.p-4
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-lg-7.col-10.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/tema1/img21.jpg" alt="Imagen decorativa")
            .col-lg-5.mb-4.mb-md-0
              h5  Mirar y escuchar con todos los sentidos
              p.mb-0 Sin juzgar, usa el corazón, obedece a los sentimientos y al alma. Respondiendo con visión y creatividad.
          .row(titulo="")
            .col-lg-7.col-10.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/tema1/img22.jpg" alt="Imagen decorativa")
            .col-lg-5.mb-4.mb-md-0
              h5  Delegar
              p.mb-0 Esto procede del autogobierno. Es un proceso orientado que eleva al mismo nivel al líder y sus seguidores.
          .row(titulo="")
            .col-lg-7.col-10.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/tema1/img23.jpg" alt="Imagen decorativa")
            .col-lg-5.mb-4.mb-md-0
              h5  Concienciar
              p.mb-0 Conoce las preguntas que hay detrás de cada reto: ¿Quién es? ¿Qué se quiere? ¿Cuál es el objetivo vital? El líder debe plantearse estas cuestiones e inspirar a sus seguidores para que se las planteen ellos mismos.
          .row(titulo="")
            .col-lg-7.col-10.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/tema1/img24.jpg" alt="Imagen decorativa")
            .col-lg-5.mb-4.mb-md-0
              h5  Actuar
              p.mb-0 Es responsable de las promesas que se hace, es persistente, pero también capaz de celebrar y ver cualquier situación con flexibilidad y humor.
          .row(titulo="")
            .col-lg-7.col-10.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/tema1/img25.jpg" alt="Imagen decorativa")
            .col-lg-5.mb-4.mb-md-0
              h5  Ser libre emocionalmente
              p.mb-0 El líder está por encima del melodrama, libre de la toxicidad emocional para comprender las necesidades de los demás sin miedo, sin depresión y sin los nocivos residuos de la competitividad.
          .row(titulo="")
            .col-lg-7.col-10.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/tema1/img26.jpg" alt="Imagen decorativa")
            .col-lg-5.mb-4.mb-md-0
              h5  Ser responsable
              p.mb-0 Demuestra iniciativa, asume los retos maduros, no los inútiles, teniendo integridad y viviendo de acuerdo con los valores.
          .row(titulo="")
            .col-lg-7.col-10.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/tema1/img27.jpg" alt="Imagen decorativa")
            .col-lg-5.mb-4.mb-md-0
              h5  Sincronía
              p.mb-0 Ingrediente misterioso de la inconsciencia que todos los grandes líderes tienen. Es la capacidad de crear la buena suerte y encontrar las reservas de poder, que llevan a un líder más allá de los resultados previstos. Es la capacidad de conectar una necesidad con una respuesta del alma.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2  1.3	Empatía
    p.mb-4 Para conocer de manera directa lo que trata la empatía, es preciso ingresar al siguiente video, el cual explica sobre esta capacidad humana y contextualiza al respecto:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1401" height="788" src="https://www.youtube.com/embed/UMhL2StwD2M" title="Empatía" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/tema1/img28.png" alt="Icono 1")
      .col-lg-9.mb-4.mb-lg-0
        .row.mb-4
          .col-lg-5.d-lg-block.d-none
            figure(data-aos="zoom-in")
              img.img-fluid(src="@/assets/curso/temas/tema1/img29.svg" alt="Icono 1")
          .col-lg-7
            .tarjeta.color-secundario
              p.mb-0 Goleman (1995) considera la empatía como una habilidad social, desarrollada como la capacidad de reconocer sentimientos, necesidades, realidades e intereses de los demás. Autores como Haydé Martinez en su artículo “Hacia una comunicación efectiva y humanista en ámbitos de salud” reconoce la empatía como elemento fundamental en las relaciones interpersonales en la cotidianidad de los sistemas de salud.
        p.mb-0 En síntesis, la empatía trasciende la comprensión emocional para convertirse en una práctica consciente que orienta la forma de relacionarse con los demás. Reconocer sentimientos, necesidades y contextos permite fortalecer la comunicación, generar confianza y favorecer interacciones respetuosas y humanizadas. En los escenarios de salud, la empatía se consolida como una habilidad esencial que contribuye a una atención centrada en la persona, promoviendo vínculos más éticos, sensibles y comprometidos con la dignidad humana.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
