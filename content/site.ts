/**
 * Todo el texto del sitio vive aquí. Los componentes no llevan copy embebido:
 * cambiar una frase no debe obligar a tocar el layout.
 */

export const site = {
  name: 'Arar Labs',
  domain: 'labs.arar.com.co',
  city: 'Bogotá',
  email: 'labs@arar.com.co', // TODO: confirmar la dirección real
  responder: 'Daniel Junco', // TODO: confirmar o quitar
  responderRole: 'Ingeniero de software', // TODO: confirmar el cargo
  responderLinkedIn: '', // TODO: URL de LinkedIn — es el dato que más confianza da
  replyPromise: 'Respondemos en un día hábil.',
  parentUrl: 'https://arar.com.co',
  /** TODO: datos verificables. Un comprador colombiano los busca. */
  legalName: '', // p. ej. 'Arar Labs S.A.S.'
  nit: '', // p. ej. 'NIT 900.123.456-7'
} as const

export const hero = {
  eyebrow: 'Ingeniería de software y datos · Bogotá',
  // Alternativas consideradas, por si se quiere cambiar:
  //   'No todo problema de operación se resuelve con un sistema nuevo.'
  //   'Ingeniería para operaciones que crecieron más rápido que sus herramientas.'
  headline: 'El proceso primero. El software, si hace falta.',
  standfirst:
    'Entendemos cómo trabaja de verdad su operación, quitamos el trabajo manual que la frena y construimos únicamente lo que el negocio necesita. Un proyecto a la vez.',
  /** El respaldo va arriba: es el dato verificable más fuerte que tenemos. */
  backing:
    'Somos la división de software y datos de Arar, consultoría SAP para empresas grandes en Colombia.',
  primary: { label: 'Cómo funciona', href: '#como-funciona' },
  secondary: { label: 'Escríbanos', href: '#contacto' },
} as const

export const problem = {
  label: 'El problema',
  title: 'Casi nunca falta tecnología. Lo que pasa es que el negocio creció y nadie volvió a mirar cómo se mueve la información.',
  symptoms: [
    'El informe que pide la gerencia cada mes lo arma una persona a mano, y se demora tres días.',
    'Cada área tiene su propio archivo, y ninguno cuadra con el otro.',
    'El proceso funciona porque alguien se lo sabe de memoria — y esa persona algún día se va.',
    'Cotizó un ERP y el número no tenía ninguna relación con el tamaño del negocio.',
  ],
} as const

export const services = {
  label: 'Qué hacemos',
  title: 'Tres cosas.',
  items: [
    {
      name: 'Diagnóstico',
      meta: 'Dos semanas · precio cerrado',
      body: 'Miramos el proceso y los datos como funcionan de verdad, no como dice el manual. Queda un informe escrito: qué está roto, qué se arregla sin software y qué sí vale la pena construir.',
    },
    {
      name: 'Automatización',
      meta: 'Por proyecto · alcance cerrado',
      body: 'El trabajo que hoy alguien hace a mano: integraciones entre sistemas que no se hablan, herramientas internas, informes que se arman solos.',
    },
    {
      name: 'Software a la medida',
      meta: 'Web o móvil · entregado y documentado',
      body: 'La aplicación que el negocio necesita, construida sobre el proceso real y sobre los datos que ya tiene.',
    },
  ],
} as const

export const process = {
  label: 'Cómo funciona',
  title: 'Cuatro pasos, en este orden.',
  steps: [
    {
      name: 'Diagnóstico',
      meta: 'Semanas 1–2',
      body: 'Entramos al proceso, hablamos con quien lo ejecuta y revisamos los datos que ya tiene. Precio cerrado desde COP 8 millones.',
    },
    {
      name: 'Decisión',
      meta: 'Con el informe en la mano',
      body: 'Usted decide qué hacer. Si la conclusión es que no necesita software, ahí termina el trabajo y el informe le sirve igual.',
    },
    {
      name: 'Construcción',
      meta: 'Alcance y precio cerrados',
      body: 'Nada empieza sin alcance definido. Un proyecto a la vez. Si nos equivocamos calculando, el problema es nuestro.',
    },
    {
      name: 'Entrega',
      meta: 'Sin amarres',
      body: 'Código, documentación y accesos. Todo suyo. Puede seguir con nosotros o con quien quiera.',
    },
  ],
} as const

export const proof = {
  label: 'Prueba',
  title: 'Lo que hemos construido.',
  work: {
    name: 'Fiel',
    meta: 'Producto propio · en piloto en Bogotá',
    body: 'Programa de fidelización para cadenas de tiendas de barrio. Una tarjeta digital para el cliente y, para el dueño, la respuesta a una pregunta que hoy nadie le contesta: cuáles de sus clientes fieles se están yendo, y de cuál tienda. Lo construimos nosotros y hoy está en piloto.',
  },
  parent: {
    name: 'Arar',
    meta: 'Casa matriz', // TODO: añadir años de operación — 'Desde 20XX' da más confianza que cualquier adjetivo
    body: 'Arar es una consultoría SAP que trabaja con empresas grandes en Colombia. Arar Labs es su división de software y datos: Arar acompaña a las que ya viven en SAP; nosotros, a las que todavía no. La misma gente, el mismo estándar, otro tipo de problema.',
  },
  refusalsTitle: 'Lo que no hacemos',
  refusals: [
    'No alquilamos programadores por hora.',
    'No empezamos a construir sin diagnóstico.',
    'No vendemos licencias de nadie, ni somos partner de ningún fabricante.',
  ],
} as const

export const stakes = {
  label: 'Por qué importa',
  lines: [
    'Tres días al mes armando un informe son treinta y seis días al año.',
    'Un proceso que vive en la cabeza de una sola persona es un riesgo que nadie anotó en ninguna parte.',
    'Y un ERP comprado por miedo cuesta más que el problema que iba a resolver.',
  ],
  closing:
    'Arreglar esto no es un proyecto de tecnología. Es recuperar tiempo y quitar riesgo del negocio.',
} as const

export const contact = {
  label: 'Siguiente paso',
  title: 'Escríbanos con una línea sobre qué se está rompiendo.',
  body: 'En una llamada de veinte minutos sabemos si esto es para nosotros. Si no lo es, se lo decimos en esa misma llamada.',
} as const
