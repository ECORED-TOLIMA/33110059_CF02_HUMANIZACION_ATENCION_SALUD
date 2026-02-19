<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconociendo las habilidades para una atención humanizada',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> analizar las habilidades personales y sociales que sustentan la atención humanizada en salud, con el fin de promover prácticas éticas, empáticas y centradas en la persona.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Las habilidades propias aplicadas en la atención humanizada permiten principalmente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la eficiencia administrativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reconocer a pacientes y familias como sujetos activos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Reducir la carga laboral.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Estandarizar procesos clínicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Reconocer a la persona como sujeto activo es la base de la atención humanizada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'El trabajo en equipo en salud se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Competencia entre profesionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dependencia jerárquica estricta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Interdependencia y confianza entre sus miembros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Autonomía individual aislada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La confianza y la interdependencia fortalecen el trabajo colaborativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'Una virtud de los equipos de alto desempeño es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centralización de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Claridad en la misión y visión institucional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Control individual del trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de la comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Tener claridad institucional orienta el trabajo colectivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La comunicación en el trabajo en equipo es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Opcional según el contexto.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Un elemento secundario.', esCorrecta: false },
            { id: 'c', texto: 'Exclusiva de los líderes.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La base de los equipos de trabajo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La comunicación es esencial para coordinar y cuidar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La motivación se entiende como:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Una obligación externa.', esCorrecta: false },
            { id: 'b', texto: 'Una recompensa económica.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Una fuerza orientada al logro de un propósito.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Un control organizacional.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La motivación impulsa el sentido y la acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'La automotivación se caracteriza por:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Depender de incentivos externos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Buscar satisfacción inmediata sin metas.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Evitar riesgos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Impulsar proactividad y mejora continua.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La automotivación fortalece la iniciativa personal.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'El estímulo externo se relaciona principalmente con:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Valores personales.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reconocimiento y recompensas del entorno.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Propósito de vida.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Autoconocimiento emocional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los estímulos externos refuerzan conductas positivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'El liderazgo transformacional se caracteriza por:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Participación y flexibilidad.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Control rígido.', esCorrecta: false },
            { id: 'c', texto: 'Autoridad vertical.', esCorrecta: false },
            { id: 'd', texto: 'Distancia emocional.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El liderazgo transformador promueve la participación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Un líder efectivo se distingue por:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actuar de manera individual.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Evitar la creatividad.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Generar confianza en su equipo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Delegar solo tareas simples.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La confianza es clave para liderar en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Según Chopra, aprender a ser líder implica:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir modelos tradicionales.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Ser catalizador del cambio.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Mantener jerarquías rígidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la reflexión personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El liderazgo nace de la transformación consciente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'La empatía, según Goleman, es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una reacción emocional automática.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una habilidad social aprendida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una cualidad innata e inmodificable.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Una técnica clínica.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La empatía se desarrolla y se practica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'En salud, la empatía permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acelerar procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar la participación del paciente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecer la comunicación y la confianza.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el contacto interpersonal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La empatía humaniza la relación de cuidado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La atención humanizada se centra en:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La persona y su dignidad.', esCorrecta: true },
            { id: 'b', texto: 'La enfermedad.', esCorrecta: false },
            { id: 'c', texto: 'El procedimiento técnico.', esCorrecta: false },
            { id: 'd', texto: 'La organización.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La persona es el eje del cuidado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El sentido de vida se relaciona directamente con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El salario.', esCorrecta: false },
            { id: 'b', texto: 'El rol jerárquico.', esCorrecta: false },
            {
              id: 'c',
              texto: 'El propósito personal y profesional.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'La antigüedad laboral.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El propósito orienta las acciones humanas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'El autoconocimiento permite al personal de salud:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ignorar sus emociones.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Actuar de manera inconsciente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regular emociones en situaciones complejas.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Delegar responsabilidades.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Conocerse fortalece el actuar ético.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Una relación interpersonal asertiva se fundamenta en:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Imposición.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Objetividad, respeto y tolerancia.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Autoridad profesional.', esCorrecta: false },
            { id: 'd', texto: 'Control emocional.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Estos principios favorecen relaciones humanizadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'La gestión centrada en la persona busca:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Optimizar costos.', esCorrecta: false },
            { id: 'b', texto: 'Estandarizar diagnósticos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Reconocer a la persona como eje del proceso.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Priorizar la enfermedad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Centrar la gestión en la persona dignifica la atención.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'Carl Rogers propuso:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El modelo biomédico.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La terapia centrada en la persona.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'La gestión hospitalaria.', esCorrecta: false },
            { id: 'd', texto: 'El enfoque conductual.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Rogers aportó una mirada integral del ser humano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'El modelo biopsicosocial reconoce:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo factores biológicos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La separación mente-cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La interacción entre lo biológico, psicológico y social.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La primacía del diagnóstico clínico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La salud es un proceso integral.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'Las experiencias en Colombia demuestran que:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La atención centrada en la persona es posible y sostenible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo aplica en grandes instituciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La humanización es teórica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No existen modelos aplicados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La humanización se construye con acciones reales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
