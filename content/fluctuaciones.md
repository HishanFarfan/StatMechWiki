# Fluctuaciones

## Resumen

Las **fluctuaciones** son desviaciones espontaneas de una cantidad respecto de su valor medio dentro de un ensamble. Son inevitables en sistemas estadisticos y contienen informacion sobre la respuesta termodinamica.

## Definicion

Para un observable $A$, la fluctuacion respecto de su valor medio es

$$
\Delta A = A-\langle A\rangle.
$$

Su varianza es

$$
\langle(\Delta A)^2\rangle
=
\langle A^2\rangle-\langle A\rangle^2.
$$

## Fluctuaciones de energia

En el ensamble canonico,

$$
\langle E\rangle
=
-\frac{\partial \ln Z}{\partial \beta},
$$

y

$$
\langle(\Delta E)^2\rangle
=
\frac{\partial^2 \ln Z}{\partial \beta^2}.
$$

La relacion con la capacidad calorifica es

$$
\langle(\Delta E)^2\rangle
=
k_B T^2 C_V.
$$

Esto muestra que una respuesta termica grande implica fluctuaciones energeticas grandes.

## Fluctuaciones de numero de particulas

En el ensamble gran canonico,

$$
\langle N\rangle
=
\frac{1}{\beta}
\frac{\partial \ln \Xi}{\partial \mu},
$$

y

$$
\langle(\Delta N)^2\rangle
=
k_B T
\left(\frac{\partial \langle N\rangle}{\partial \mu}\right)_{T,V}.
$$

## Fluctuaciones relativas

Para sistemas macroscopicos usuales, una cantidad extensiva $A$ escala como $N$, mientras que su desviacion tipica escala como $\sqrt{N}$. Por tanto,

$$
\frac{\sqrt{\langle(\Delta A)^2\rangle}}{\langle A\rangle}
\sim
N^{-1/2}.
$$

Esta es la razon por la que las fluctuaciones relativas suelen ser despreciables en sistemas grandes, aunque sean fundamentales microscopicamente.

## Susceptibilidades

Las fluctuaciones estan relacionadas con derivadas de respuesta. Por ejemplo, si un campo externo $h$ se acopla a una variable $M$, la susceptibilidad suele tomar la forma

$$
\chi
=
\beta\langle(\Delta M)^2\rangle.
$$

Esta relacion es un ejemplo de conexion fluctuacion-respuesta.

## Cerca de puntos criticos

Cerca de una transicion continua, ciertas fluctuaciones pueden crecer de manera macroscopica. Por ejemplo, la susceptibilidad puede divergir:

$$
\chi \sim |T-T_c|^{-\gamma}.
$$

Esto indica que el sistema desarrolla correlaciones de largo alcance.

## Errores comunes

- Pensar que fluctuacion significa error experimental.
- Olvidar que el microcanonico, canonico y gran canonico permiten fluctuaciones de variables distintas.
- Despreciar fluctuaciones en sistemas pequenos.
- Usar formulas de fluctuacion fuera del ensamble correspondiente.

## Coherencia dentro de la wiki

Dentro del mapa general, **Fluctuaciones** queda reservado para la idea precisa de la nocion de Fluctuaciones. Su papel local es mostrar que variables se fijan, cuales fluctuan y que normalizacion gobierna los promedios. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{restricciones}\longrightarrow p_i\longrightarrow Z\ \text{o}\ \Omega\longrightarrow \langle A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Fluctuaciones y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Ensambles**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble canonico](#/ensamble-canonico)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Equivalencia de ensambles](#/equivalencia-de-ensambles)
- [Funcion de particion](#/funcion-de-particion)
