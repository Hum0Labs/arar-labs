# Arar Labs — sitio web

Sitio de una sola página para **Arar Labs**, la división de software y datos de Arar.
Producción: **https://labs.arar.com.co**

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript, modo estricto |
| Estilos | Tailwind CSS 3 |
| Tipografía | Newsreader + IBM Plex Sans vía `next/font` (self-hosted en build) |
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

Tinta sobre papel, un solo tema (claro) por decisión. La paleta es corta a propósito:
dos tintas, dos líneas, un acento óxido que aparece tres veces en toda la página.

La idea visual es **la hoja de cálculo que se le quedó chica al negocio**: la reja del
héroe es una hoja de Excel con restos reales (`#¡REF!`, `BUSCARV`, `informe_final_v7_REAL.xlsx`)
que se disuelve a medida que el visitante baja y la página se vuelve estructura limpia.
La página hace lo que la empresa vende.

El orden de las secciones es el argumento: problema → qué hacemos → cómo funciona →
prueba → por qué importa → siguiente paso.

## Accesibilidad y rendimiento

- Sin imágenes ni JavaScript de terceros. Un solo componente cliente (`Reveal`).
- `prefers-reduced-motion` respetado: sin animación y sin scroll suave.
- Foco visible en todo elemento interactivo.
- Los adornos de la reja son `aria-hidden` y se ocultan en móvil.

## Pendientes antes de publicar

- [ ] Confirmar `email` en `content/site.ts` (hoy `labs@arar.com.co`)
- [ ] Confirmar o quitar `responder` (hoy `Daniel Junco`)
- [ ] Confirmar el piso de precio del diagnóstico (hoy COP 8 millones, en `content/site.ts`)
- [ ] Añadir trabajo real de cliente en `proof` — hoy solo está Fiel, producto propio
- [ ] Apuntar `labs.arar.com.co` a Vercel (CNAME)
- [ ] Añadir analítica si se quiere (Plausible o Vercel Analytics)

## Reglas de contenido

No se inventan clientes, testimonios, cifras, certificaciones ni alianzas.
Fiel se describe como producto propio en piloto, porque eso es lo que es.
