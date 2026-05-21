# Publicar la wiki con KaTeX

Google Sites no renderiza Markdown ni KaTeX de forma nativa. La solucion recomendada es publicar esta carpeta `web/` como sitio estatico y usar Google Sites como portada o pagina institucional.

## Opcion recomendada: GitHub Pages

1. Crear un repositorio, por ejemplo `StatMechWiki`.
2. Subir el contenido de esta carpeta `web/` al repositorio.
3. En GitHub, ir a `Settings > Pages`.
4. Elegir `Deploy from a branch`.
5. Seleccionar la rama principal y la carpeta raiz.
6. Guardar.

La URL quedara parecida a:

```text
https://usuario.github.io/StatMechWiki/
```

## Opcion simple: Netlify o Cloudflare Pages

Subir la carpeta como sitio estatico. No necesita build step.

## Flujo editorial

1. Editar `content/*.md`.
2. Probar localmente con:

```powershell
python -m http.server 8765
```

3. Abrir:

```text
http://localhost:8765
```

4. Subir cambios al hosting.

## En Google Sites

Agregar un boton o enlace principal hacia la wiki publicada. Google Sites puede mantener:

- presentacion del proyecto;
- integrantes;
- contacto;
- enlaces a documentos administrativos;
- enlace a la wiki matematica con KaTeX.
