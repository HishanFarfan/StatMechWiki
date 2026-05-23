# Fuentes para enriquecer la wiki

Esta carpeta es para dejar libros, apuntes o PDFs que sirvan como fuentes de trabajo para mejorar las entradas de StatMechWiki.

## Estructura

- `books/`: coloca aqui PDFs, EPUBs o libros escaneados. Esta carpeta esta ignorada por Git para no publicar archivos grandes o con copyright.
- `extracted/`: notas, texto extraido temporalmente, tablas de capitulos o resummenes de trabajo. Tambien esta ignorada por Git.
- `manifest.md`: indice versionable de las fuentes que estas usando, con autor, titulo, edicion, tema y paginas/capitulos relevantes.

## Flujo recomendado

1. Copia los libros en `sources/books/`.
2. Agrega una entrada breve en `sources/manifest.md`.
3. Indica que paginas o capitulos quieres usar para una entrada concreta.
4. Se extrae solo el material necesario y se redacta en la wiki con parafrasis, referencias y ecuaciones verificadas.

Evita pegar texto largo literal en las entradas. La wiki debe sintetizar, explicar y conectar ideas, no reproducir libros.

