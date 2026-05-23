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

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Como contribuir** sin introducir un modelo mas complicado que el necesario.

1. **Ruta de estudio inicial.** Un lector puede partir de microestado, pasar a entropia de Boltzmann y terminar en ensamble canonico. La aplicacion simple es comparar una moneda cargada con muchos lanzamientos: primero se enumeran estados, luego se define una distribucion y finalmente se calcula un promedio.
2. **Primer calculo.** Para un sistema de dos niveles con energias $0$ y $\epsilon$, la funcion de particion canonica es $$Z=1+e^{-\beta\epsilon}.$$ Esta formula basta para practicar normalizacion, energia media y limite de alta temperatura.
3. **Conexion con no equilibrio.** Una caminata aleatoria sesgada permite ver por que la wiki no termina en equilibrio: aunque las probabilidades puedan estabilizarse, una corriente persistente revela la dinamica.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
S(E,V,N)=k_B\ln\Omega(E,V,N)
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

La ruta que sugieren estas fuentes es construir primero el vocabulario de microestados, restricciones y promedios; despues introducir ensambles como distribuciones de probabilidad controladas; y solo al final comparar equilibrio, respuestas y procesos irreversibles. Esa secuencia evita presentar la mecanica estadistica como una lista de formulas desconectadas.

- Schroeder, *An Introduction to Thermal Physics*, caps. 1-3: para pasar de energia, conteo y entropia a temperatura, reservorios y equilibrio termico con modelos pequenos.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 3-4: para fijar probabilidad, microestados, macroestados, temperatura estadistica, ensambles y pesos de Boltzmann.
- Kardar, *Statistical Physics of Particles*, cap. 4: para ensambles microcanonico, canonico, Gibbs y gran canonico, incluyendo sistemas de dos niveles y gas ideal.
