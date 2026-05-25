# Susceptibilidad

## Resumen

La **susceptibilidad** mide la respuesta de un parámetro de orden ante su campo conjugado. En magnetismo, es la respuesta de la magnetización $M$ al campo $h$; en dieléctricos, la de la polarización $P$ al campo eléctrico. Está directamente relacionada con las fluctuaciones del parámetro de orden y diverge en los puntos críticos.

## Definición general

Para un sistema con parámetro de orden $M$ y campo conjugado $h$:

$$
\chi = \left(\frac{\partial M}{\partial h}\right)_T.
$$

En magnetismo, si el Hamiltoniano incluye $-hM$, la susceptibilidad magnética es

$$
\chi = \beta\langle(\Delta M)^2\rangle = \frac{\langle M^2\rangle - \langle M\rangle^2}{k_BT}.
$$

Esta es una **relación de fluctuación-respuesta**: la susceptibilidad es proporcional a la varianza del parámetro de orden.

## Susceptibilidad magnética

La susceptibilidad magnética volumétrica se define como $\chi_m = \mu_0\,\partial M/\partial B$ (en SI). Tipos de respuesta magnética:

| Material | $\chi_m$ | Origen |
|---|---|---|
| Diamagnético | $-10^{-6}$ a $-10^{-5}$ | Corrientes de Lenz inducidas |
| Paramagnético | $+10^{-6}$ a $+10^{-3}$ | Momentos magnéticos independientes |
| Ferromagnético | $+10^2$ a $+10^6$ | Momentos alineados colectivamente |

**Ley de Curie** (paramagnético ideal): $\chi = C/T$ con $C = N\mu_B^2 g^2 J(J+1)/3k_B$.

**Ley de Curie-Weiss**: $\chi = C/(T - T_c)$ con temperatura de Curie $T_c > 0$ para ferromagnéticos.

## Susceptibilidad dieléctrica

Para un dieléctrico lineal, $\mathbf{P} = \epsilon_0\chi_e\mathbf{E}$, con $\chi_e = \epsilon_r - 1$. La susceptibilidad dieléctrica también cumple una relación de fluctuación-respuesta con las fluctuaciones de polarización, relevante en espectroscopía.

## Relación con la longitud de correlación

En sistemas con fluctuaciones espaciales, la susceptibilidad se relaciona con la longitud de correlación $\xi$:

$$
\chi \propto \int\!\langle\delta M(\mathbf{r})\,\delta M(\mathbf{0})\rangle\,d^3r \sim \xi^{2-\eta},
$$

donde $\eta$ es un exponente de anomalía de dimensión. Cerca del punto crítico, $\xi\to\infty$ y $\chi\to\infty$.

## Divergencia crítica

En una transición de fase continua (punto crítico a $T_c$, $h=0$):

$$
\chi \sim |T - T_c|^{-\gamma_c},
$$

con exponente crítico $\gamma_c$ universal (depende solo de la clase de universalidad, no de los detalles microscópicos). Valores:

| Clase de universalidad | $\gamma_c$ |
|---|---|
| Campo medio | 1 |
| Ising 2D | 7/4 |
| Ising 3D | ≈ 1.24 |
| XY 3D | ≈ 1.32 |

La divergencia de $\chi$ es directamente observable en experimentos de neutrones, rayos X y susceptibilidad AC.

## Suma de regla f y relación de Kramers-Kronig

La susceptibilidad dinámica $\chi(\omega)$ cumple las relaciones de Kramers-Kronig (causalidad) y la suma de regla $f$:

$$
\int_0^\infty \omega\,\text{Im}\,\chi(\omega)\,d\omega = \text{cte}.
$$

Estas relaciones conectan la respuesta en frecuencia con las propiedades de equilibrio.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 4: relación fluctuación-susceptibilidad en el ensamble canónico.
- Chaikin & Lubensky, *Principles of Condensed Matter Physics*, cap. 4: susceptibilidades, correlaciones y puntos críticos.
- Blundell, *Magnetism in Condensed Matter*, cap. 2: susceptibilidad magnética, Curie, Curie-Weiss y paramagnetismo de Pauli.

## Páginas relacionadas

- [Fluctuaciones](#/fluctuaciones)
- [Compresibilidad](#/compresibilidad)
- [Paramagnetismo](#/paramagnetismo)
- [Modelo de Ising](#/modelo-de-ising)
- [Exponentes críticos](#/exponentes-criticos)
- [Longitud de correlación](#/longitud-de-correlacion)
