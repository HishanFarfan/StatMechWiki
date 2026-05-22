# Como contribuir

## Principio general

Toda contribucion debe mejorar la claridad, la precision o la conectividad de la wiki. Una pagina corta pero correcta es preferible a una pagina larga con supuestos poco claros.

## Antes de editar

- Revisar si ya existe una pagina relacionada.
- Revisar las [convenciones de notacion](#/convenciones).
- Identificar el nivel esperado de la pagina.
- Agregar referencias cuando se use un resultado no elemental.
- Comprobar que las ecuaciones renderizan bien con KaTeX.

## Estructura recomendada

1. Resumen.
2. Definicion.
3. Contexto fisico.
4. Ecuaciones principales.
5. Derivacion minima, si corresponde.
6. Casos importantes.
7. Supuestos.
8. Errores comunes.
9. Paginas relacionadas.
10. Referencias.

## Ecuaciones

Usar bloques LaTeX para ecuaciones destacadas:

```markdown
$$
S(E,V,N)=k_B\ln\Omega(E,V,N)
$$
```

Para ecuaciones alineadas, preferir `aligned`:

```markdown
$$
\begin{aligned}
F &= E-TS,\\
dF &= -S\,dT-P\,dV+\mu\,dN.
\end{aligned}
$$
```

## Criterios de revision

- La pagina define sus simbolos.
- Las ecuaciones tienen condiciones de validez.
- Los enlaces internos apuntan a conceptos relevantes.
- No se mezclan convenciones incompatibles.
- Las afirmaciones tecnicas tienen respaldo bibliografico o derivacion.

## Flujo sugerido

1. Editar un archivo en `content/*.md`.
2. Probar localmente en el navegador.
3. Validar LaTeX con KaTeX.
4. Hacer commit.
5. Subir a GitHub Pages.
