# Arar Labs — sitio web

Sitio de una sola página para **Arar Labs**, la división de software y datos de Arar.
Producción: **https://labs.arar.com.co**

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript, modo estricto |
| Estilos | Tailwind CSS 3 |
| Tipografía | Archivo (titulares) + Source Serif 4 (texto) vía `next/font` |
| Hosting | Vercel (estático — la página no tiene backend) |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

## Estructura

```
app/          layout, página y estilos globales
components/   una sección por componente, más Section y Reveal
content/      site.ts — todo el texto del sitio, tipado
prototype/    maqueta estática previa (referencia de diseño, no se despliega)
```

**Todo el copy vive en `content/site.ts`.** Cambiar una frase no debería obligar a tocar
un componente. Los componentes no llevan texto embebido.

## Diseño

Dirección **editorial**: tinta sobre papel, un solo tema claro. La paleta es corta
a propósito — dos tintas, dos líneas y un acento óxido.

- Titulares en Archivo extrabold, escala grande y tracking negativo.
- Rótulos numerados (`01`–`06`) bajo reglas gruesas: el número marca el orden del argumento.
- Servicios en rejilla de tres columnas; los cuatro pasos del método como fichas
  separadas por filetes.
- **Una sola banda invertida** (tinta a toda página) en *Por qué importa*. Es el
  único momento fuerte y se gasta una vez.

El orden de las secciones es el argumento: problema → qué hacemos → cómo funciona →
prueba → por qué importa → siguiente paso.

## Accesibilidad y rendimiento

- **Cero JavaScript de cliente.** No hay componentes `'use client'`, ni imágenes,
  ni scripts de terceros. La única animación es CSS al cargar.
- `prefers-reduced-motion` respetado: sin animación y sin scroll suave.
- Foco visible en todo elemento interactivo.
- Los adornos de la reja son `aria-hidden` y se ocultan en móvil.

## Pendientes antes de publicar

- [ ] Confirmar `email` en `content/site.ts` (hoy `labs@arar.com.co`)
- [ ] Confirmar o quitar `responder` (hoy `Daniel Junco`)
- [ ] Confirmar el piso de precio del diagnóstico (hoy COP 8 millones, en `content/site.ts`)
- [ ] Añadir trabajo real de cliente en `proof` — hoy solo está Fiel, producto propio
- [ ] Rellenar `legalName` y `nit` en `content/site.ts` — un comprador colombiano los busca
- [ ] Rellenar `responderLinkedIn` — es la señal de confianza más barata que tenemos
- [ ] Añadir los años de operación de Arar en `proof.parent.meta`
- [ ] Apuntar `labs.arar.com.co` a Vercel (CNAME)
- [ ] Añadir analítica si se quiere (Plausible o Vercel Analytics)

## Reglas de contenido

No se inventan clientes, testimonios, cifras, certificaciones ni alianzas.
Fiel se describe como producto propio en piloto, porque eso es lo que es.
