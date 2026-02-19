export default {
  global: {
    Name: 'Atención humanizada y habilidades centradas en la persona',
    Description:
      'Este componente formativo integra el desarrollo de habilidades del talento humano en salud con la humanización de la atención, fortaleciendo relaciones interpersonales y promoviendo modelos centrados en la persona. Desde el reconocimiento de fortalezas y áreas de mejora, se fomenta una atención integral, participativa y orientada al bienestar, la dignidad humana y el rol activo de pacientes, familias y comunidades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Habilidades propias aplicadas en la atención humanizada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Trabajo en equipo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Liderazgo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Empatía',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Atención humanizada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sentido de vida',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Relación interpersonal (personal de la salud - persona y su red de apoyo - organización)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión centrada en la persona',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Antecedentes del modelo de atención centrada en la persona',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelo de atención centrada en la persona',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Experiencias en Colombia',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Atención centrada en las personas',
      significado:
        'es un enfoque de atención que adopta conscientemente a individuos, cuidadores, familias y comunidades, desde la mirada de participantes y beneficiarios del sistema de salud, que responden a sus necesidades y preferencias de manera humana y holística. La atención centrada en las personas también requiere que las personas tengan la educación y el apoyo que necesitan para tomar decisiones y participar en su propio cuidado. Se organiza en torno a las necesidades de salud y expectativas de las personas en lugar de enfermedades, enfoques y prácticas de atención que ven a la persona como un todo con muchos niveles de necesidades y objetivos, con estas necesidades provenientes de sus propios determinantes sociales personales de la salud. (WHO, 2015).',
    },
    {
      termino: 'Atención continua',
      significado:
        'se brinda a las personas a lo largo del tiempo a lo largo de su vida. (WHO, 2015).',
    },
    {
      termino: 'Atención de alta calidad',
      significado:
        'atención segura, efectiva, centrada en las personas, oportuna, eficiente, equitativa e integrada. (WHO, 2015).',
    },
    {
      termino: 'Compromiso',
      significado:
        'involucrar a las personas y las comunidades en el diseño, la planificación y la prestación de servicios de salud, por ejemplo, permitirles tomar decisiones sobre la atención y las opciones de tratamiento o participar en la toma de decisiones estratégicas sobre cómo se gastan los recursos de salud. (WHO, 2015).',
    },
    {
      termino: 'Empoderamiento',
      significado:
        'el proceso de apoyar a las personas y las comunidades para que tomen el control de sus propias necesidades y resultados de salud; por ejemplo, en la adopción de comportamientos más saludables o la capacidad de autocontrol de enfermedades. (WHO, 2015).',
    },
    {
      termino: 'Habilidades sociales',
      significado:
        'este componente hace referencia a la capacidad de las personas para manejar las relaciones con los demás y conducirlos hacia la dirección que se desee.',
    },
    {
      termino: 'Interdisciplinario',
      significado:
        'actividad que se realiza en cooperación de varias disciplinas.',
    },
    {
      termino: 'Multidisciplinario',
      significado:
        'actividad que abarca o afecta a varias disciplinas. No necesariamente en cooperación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Borrell-Carrió, F. (2002). El modelo biopsicosocial en evolución. Medicina Clínica, 119, pp. 175–179.',
      link: '',
    },
    {
      referencia:
        'Borrell-Carrió, F. (2004). Entrevista clínica: habilidades de comunicación para profesionales de la salud. Barcelona: Elsevier España.',
      link: '',
    },
    {
      referencia:
        'Goleman, D. (1995). Inteligencia Emocional. Por qué es más importante que el cociente intelectual. Barcelona, España. Ediciones B, S.A.',
      link: '',
    },
    {
      referencia:
        'Instituto Internacional de Planeamiento de la Educación. (2000). Trabajo en Equipo, Módulo 09. Competencias para la profesionalización de la gestión educativa: diez módulos destinados a los responsables de los procesos de transformación educativa. pp. 6-9.',
      link: '',
    },
    {
      referencia:
        'Organización para la Excelencia de la Salud. (2017, 9 de junio). Atención Centrada en la Persona - Susan Frampton | Planetree. [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=9DImhwsbHw4&t=40s',
    },
    {
      referencia:
        'Phono critical care. (2020, 30 de agosto). Humanización de los servicios de salud en tiempos de Covid-19. [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=rS6HN01ZY8Y',
    },
    {
      referencia:
        'Rogers, C. R. (1951). Client-centered therapy: Its current practice, implications, and theory. Boston: Houghton Mifflin.',
      link: '',
    },
    {
      referencia:
        'The Health Foundation. (2015, 2 de febrero). Person-centred care made simple. [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=6Dk3CV-Wt38',
    },
    {
      referencia:
        'Toro Suarez L. Y. (2015). La importancia del trabajo en equipo en las organizaciones. Universidad Militar Nueva Granada.',
      link: '',
    },
    {
      referencia:
        'World Health Organization (WHO). (2015). Global Strategy on People Centered and Integrated Health Services. Interim report.',
      link: '',
    },
    {
      referencia:
        'World Health Organization (WHO). (2015). Global Strategy on People Centered and Integrated Health Services 2016-2026. Executive Summary, Placing people and communities at the centre of health services.',
      link: '',
    },
    {
      referencia:
        'World Health Organization (WHO). (2017, 21 de julio). WHO: What is people-centred care? [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=pj-AvTOdk2Q',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'John Edward Cruz',
          cargo: 'Experto temático',
          centro: 'Ministerio de Salud - Oficina de calidad',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },

        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
