<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/intro/img1.jpg" alt="Imagen decorativa")
    p.mb-5 En este componente formativo se abordará el fortalecimiento de las habilidades propias del talento humano en salud como base para una atención humanizada, reconociendo su impacto en la calidad del cuidado y en las relaciones que se establecen entre el personal de salud, las personas, sus familias o redes de apoyo, así como las organizaciones. Se profundizará en competencias como el trabajo en equipo, el liderazgo y la empatía, entendidas como elementos clave para promover interacciones respetuosas, colaborativas y orientadas al bienestar integral.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Asimismo, se analizará la atención humanizada desde una perspectiva centrada en la persona, incorporando el sentido de vida y la relación interpersonal como ejes que dignifican el cuidado en salud. Este enfoque permitirá comprender la evolución y los fundamentos del modelo de atención centrada en la persona, así como su aplicación en el contexto colombiano, destacando experiencias que promueven la participación activa de individuos, familias y comunidades.
    p.mb-4 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1401" height="788" src="https://www.youtube.com/embed/BLeXAiF9ANw" title="Atención humanizada y habilidades centradas en la persona" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
