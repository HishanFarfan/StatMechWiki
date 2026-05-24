# StatMechWiki web

Version estatica de la wiki con Markdown y KaTeX.

Estado actual: 208 entradas navegables, organizadas en fundamentos, ensambles, termodinamica estadistica, modelos, cuantica, transiciones y criticalidad, metodos, no equilibrio y recursos.

## Uso local

Desde esta carpeta:

```powershell
python -m http.server 8765
```

Luego abrir:

```text
http://localhost:8765
```

## Editar contenido

Las paginas viven en `content/*.md`. Las ecuaciones se escriben en LaTeX:

```markdown
$$
S(E,V,N)=k_B \ln \Omega(E,V,N)
$$
```

El estandar editorial de cada entrada esta en `docs/entry-standard.md`. Para evitar que las mejoras globales degraden las paginas, usar el auditor antes de reescribir en masa:

```powershell
node scripts/audit-entry-quality.js
```

La regla de trabajo recomendada es mejorar primero una entrada piloto, revisar el resultado y solo despues aplicar el patron a un grupo pequeno de paginas relacionadas.

## Publicacion

Esta carpeta se puede publicar en GitHub Pages, Netlify, Cloudflare Pages o cualquier hosting estatico. Google Sites puede quedar como portada que enlace a esta wiki.

## Validacion

Antes de publicar cambios, validar que:

- cada archivo enlazado desde `assets/app.js` existe en `content/`;
- los bloques `$$...$$` pasan por KaTeX;
- el flujo real `proteger math -> marked -> restaurar math -> KaTeX` no introduce errores.
