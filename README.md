# StatMechWiki web

Version estatica de la wiki con Markdown y KaTeX.

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

## Publicacion

Esta carpeta se puede publicar en GitHub Pages, Netlify, Cloudflare Pages o cualquier hosting estatico. Google Sites puede quedar como portada que enlace a esta wiki.
