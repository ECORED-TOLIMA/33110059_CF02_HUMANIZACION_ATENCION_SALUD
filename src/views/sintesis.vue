<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda la atención humanizada desde el fortalecimiento de las habilidades propias del talento humano en salud. A partir de la comprensión de la atención humanizada, se reflexiona sobre el sentido de vida y la importancia de las relaciones interpersonales que se establecen entre el personal de la salud, la persona atendida, su red de apoyo y la organización, reconociendo su impacto en la calidad del cuidado. Asimismo, se profundiza en la gestión centrada en la persona mediante el análisis de los antecedentes y fundamentos del modelo de atención centrada en la persona, su aplicación práctica y las experiencias desarrolladas en Colombia, promoviendo una atención integral que respete la dignidad, la autonomía y las necesidades individuales en los distintos contextos de salud.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis del componente formativo Atención humanizada y habilidades centradas en la persona, se desarrolla de manera progresiva, comenzando con la identificación y fortalecimiento de habilidades personales clave para la atención humanizada, como el trabajo colaborativo, el liderazgo y la empatía. A continuación, se profundiza en la atención humanizada como un enfoque que reconoce el sentido de vida y valora las interacciones entre el personal de la salud, la persona atendida, su red de apoyo y la organización. El recorrido concluye con la gestión centrada en la persona, mediante la revisión de sus antecedentes, la comprensión del modelo de atención centrada en la persona y el análisis de experiencias aplicadas en Colombia, orientadas a consolidar prácticas de cuidado más integrales y coherentes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
