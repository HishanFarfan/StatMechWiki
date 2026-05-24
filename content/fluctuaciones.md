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

## Ejemplo: fluctuaciones de energía en un gas ideal

Para $N$ partículas monoatómicas con $\langle E\rangle = \frac{3}{2}Nk_BT$ y $C_V = \frac{3}{2}Nk_B$:

$$\langle(\Delta E)^2\rangle = k_BT^2 C_V = \frac{3}{2}Nk_B^2T^2$$

$$\frac{\sqrt{\langle(\Delta E)^2\rangle}}{\langle E\rangle} = \sqrt{\frac{2}{3N}} \approx \frac{1}{\sqrt{N}}$$

Para $N = 10^{23}$: la fluctuación relativa es $\sim 10^{-12}$, completamente inapreciable.

## Fluctuaciones en sistemas pequeños: los teremas de Jarzynski y Crooks

Para sistemas pequeños fuera del equilibrio, las fluctuaciones se vuelven centrales. El **teorema de fluctuación de Crooks** (1999) establece que la probabilidad de absorber trabajo $+W$ en un proceso es exponencialmente mayor que la de liberarlo:

$$\frac{P_F(+W)}{P_R(-W)} = e^{\beta(W - \Delta F)}$$

donde $\Delta F$ es la diferencia de energía libre. La identidad de Jarzynski $\langle e^{-\beta W}\rangle = e^{-\beta\Delta F}$ sigue directamente. Estas relaciones permiten medir diferencias de energía libre desde experimentos fuera del equilibrio (p.ej., estirar una proteína con pinzas ópticas).

## Errores comunes

- **Fluctuación ≠ error experimental**: las fluctuaciones son físicas, no imprecisiones de medición.
- **Ensamble equivocado**: la fórmula $\langle(\Delta E)^2\rangle = k_BT^2C_V$ solo vale en el canónico; en el microcanónico la energía no fluctúa.
- **Ignorar fluctuaciones en sistemas pequeños**: para $N \sim 10$–$100$, las fluctuaciones relativas son del 10–30% y no pueden despreciarse.
- **Confundir divergencia de $\chi$ con inestabilidad**: en el punto crítico $\chi \to \infty$ es una señal de correlaciones de largo alcance, no de inestabilidad del ensamble.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 4: fluctuaciones en los distintos ensambles.
- Reichl, *A Modern Course in Statistical Physics*, cap. 5: relaciones de fluctuación-disipación.
- Crooks, "Entropy production fluctuation theorem...", *Phys. Rev. E* 60, 2721 (1999): el teorema de fluctuación moderno.

## Páginas relacionadas

- [Ensamble canónico](#/ensamble-canonico)
- [Ensamble gran canónico](#/ensamble-gran-canonico)
- [Equivalencia de ensambles](#/equivalencia-de-ensambles)
- [Función de partición](#/funcion-de-particion)
- [Susceptibilidad](#/susceptibilidad)
- [Compresibilidad](#/compresibilidad)
