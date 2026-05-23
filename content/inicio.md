# Wiki de Mecanica Estadistica

Esta wiki reune conceptos, resultados, modelos y metodos centrales de la mecanica estadistica en espanol. El objetivo no es reemplazar un libro de texto, sino construir una referencia navegable y colaborativa.

> Esta version usa Markdown y KaTeX, por lo que las ecuaciones se escriben en LaTeX y se renderizan correctamente.

## Estado actual

La wiki contiene actualmente **208 entradas desarrolladas**. Cubre fundamentos, ensambles, termodinamica estadistica, modelos, estadistica cuantica, transiciones de fase, metodos y no equilibrio.

## Punto de partida

1. [Microestado](#/microestado)
2. [Macroestado](#/macroestado)
3. [Espacio de fases](#/espacio-de-fases)
4. [Entropia de Boltzmann](#/entropia-de-boltzmann)
5. [Entropia de Gibbs](#/entropia-de-gibbs)
6. [Ensamble microcanonico](#/ensamble-microcanonico)
7. [Ensamble canonico](#/ensamble-canonico)
8. [Funcion de particion](#/funcion-de-particion)
9. [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)
10. [Ensamble gran canonico](#/ensamble-gran-canonico)

## Ideas centrales

Una conexion fundamental entre conteo microscopico y termodinamica es

$$
S(E,V,N)=k_B\ln\Omega(E,V,N).
$$

Otra conexion central relaciona la funcion de particion canonica con la energia libre:

$$
F(T,V,N)=-k_B T\ln Z(T,V,N).
$$

## Como usar esta wiki

Usa el [mapa de la wiki](#/mapa) para navegar por areas. Cada pagina busca ser autocontenida en lo esencial: definicion, ecuacion clave, interpretacion fisica, limites de validez y enlaces relacionados.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Inicio** sin introducir un modelo mas complicado que el necesario.

1. **Ruta de estudio inicial.** Un lector puede partir de microestado, pasar a entropia de Boltzmann y terminar en ensamble canonico. La aplicacion simple es comparar una moneda cargada con muchos lanzamientos: primero se enumeran estados, luego se define una distribucion y finalmente se calcula un promedio.
2. **Primer calculo.** Para un sistema de dos niveles con energias $0$ y $\epsilon$, la funcion de particion canonica es $$Z=1+e^{-\beta\epsilon}.$$ Esta formula basta para practicar normalizacion, energia media y limite de alta temperatura.
3. **Conexion con no equilibrio.** Una caminata aleatoria sesgada permite ver por que la wiki no termina en equilibrio: aunque las probabilidades puedan estabilizarse, una corriente persistente revela la dinamica.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
S(E,V,N)=k_B\ln\Omega(E,V,N).
$$
