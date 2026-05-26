# Estadisticas cuanticas

## Resumen

Las **estadisticas cuanticas** describen sistemas de particulas indistinguibles. Dependiendo de la simetria del estado bajo intercambio de particulas, aparecen bosones o fermiones, con distribuciones de equilibrio distintas.

## Indistinguibilidad

En mecanica cuantica, particulas identicas no pueden etiquetarse fisicamente. Para dos particulas,

$$
\psi(x_1,x_2)
=
\pm \psi(x_2,x_1).
$$

El signo $+$ corresponde a bosones y el signo $-$ a fermiones.

## Bosones y fermiones

Los bosones pueden ocupar el mismo estado de una particula sin restriccion. Los fermiones obedecen el principio de exclusion de Pauli: cada estado de una particula puede ocuparse por a lo mas un fermion por estado cuantico disponible.

## Gran canonico por modo

Para un modo de energia $\epsilon_\alpha$, el peso gran canonico depende de

$$
e^{-\beta(\epsilon_\alpha-\mu)n_\alpha}.
$$

Para bosones,

$$
n_\alpha=0,1,2,\ldots
$$

y para fermiones,

$$
n_\alpha=0,1.
$$

## Distribucion de Bose-Einstein

Para bosones,

$$
\langle n_\alpha\rangle
=
\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}-1}.
$$

Para que el denominador sea positivo, se requiere usualmente

$$
\mu < \epsilon_0,
$$

donde $\epsilon_0$ es la energia del estado fundamental.

## Distribucion de Fermi-Dirac

Para fermiones,

$$
\langle n_\alpha\rangle
=
\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}+1}.
$$

A temperatura cero, esta distribucion se convierte en una funcion escalon:

$$
\langle n_\alpha\rangle
=
\begin{cases}
1, & \epsilon_\alpha < \epsilon_F,\\
0, & \epsilon_\alpha > \epsilon_F.
\end{cases}
$$

## Limite clasico

Cuando la ocupacion media es pequena,

$$
e^{\beta(\epsilon_\alpha-\mu)}\gg 1,
$$

ambas distribuciones se reducen a la forma de Maxwell-Boltzmann:

$$
\langle n_\alpha\rangle
\simeq
e^{-\beta(\epsilon_\alpha-\mu)}.
$$

## Parametro de degeneracion

El regimen clasico se obtiene cuando

$$
n\lambda_T^3\ll 1.
$$

Cuando $n\lambda_T^3$ no es pequeno, los efectos cuanticos de estadistica se vuelven importantes.

## Fenomenos asociados

- condensacion de Bose-Einstein;
- presion de degeneracion fermionica;
- capacidad calorifica electronica en metales;
- radiacion de cuerpo negro;
- gases atomicos ultrafrios.

## Errores comunes

- Usar Maxwell-Boltzmann para particulas cuanticas degeneradas.
- Confundir indistinguibilidad clasica corregida por $1/N!$ con estadistica cuantica completa.
- Olvidar la restriccion de Pauli para fermiones.
- Permitir $\mu$ mayor que la energia fundamental en un gas ideal de bosones.

## Teorema espín-estadística

El tipo de estadística está fijado por el espín de la partícula:

- **Bosones**: espín entero ($0, 1, 2, \ldots$). Ejemplos: fotones ($s=1$), piones ($s=0$), átomos de $^4$He ($s=0$), fonones.
- **Fermiones**: espín semientero ($\frac{1}{2}, \frac{3}{2}, \ldots$). Ejemplos: electrones, protones, neutrones ($s=\frac{1}{2}$), átomos de $^3$He ($s=\frac{1}{2}$).

Este resultado —probado en teoría cuántica de campos a partir de causalidad y Lorentz-invarianza— no tiene demostración simple en mecánica cuántica ordinaria.

## Tabla comparativa

| Propiedad | Bosones (BE) | Fermiones (FD) |
|---|---|---|
| Simetría de $\psi$ | simétrica | antisimétrica |
| Ocupación por estado | ilimitada | $0$ o $1$ |
| Distribución | $\langle n\rangle = 1/(e^{\beta(\epsilon-\mu)}-1)$ | $\langle n\rangle = 1/(e^{\beta(\epsilon-\mu)}+1)$ |
| Restricción sobre $\mu$ | $\mu < \epsilon_0$ | sin restricción |
| Efecto colectivo | condensación de Bose-Einstein | degeneración de Fermi |
| Ejemplos | fotones, fonones, $^4$He | electrones, protones, $^3$He |

## Espacios de Fock

El formalismo apropiado para partículas indistinguibles es el **espacio de Fock**: unión directa de todos los espacios de Hilbert de $N$ partículas,

$$
\mathcal{F} = \bigoplus_{N=0}^\infty \mathcal{H}^{(N)}.
$$

Los estados se etiquetan por los números de ocupación $|n_1, n_2, \ldots\rangle$ de cada modo. Los operadores de creación y destrucción $\hat{a}^\dagger_\alpha$, $\hat{a}_\alpha$ añaden o eliminan una partícula del modo $\alpha$ y satisfacen

$$
[\hat{a}_\alpha, \hat{a}^\dagger_\beta] = \delta_{\alpha\beta} \quad \text{(bosones)}, \qquad \{\hat{a}_\alpha, \hat{a}^\dagger_\beta\} = \delta_{\alpha\beta} \quad \text{(fermiones)}.
$$

El Hamiltoniano en representación de ocupación es $\hat{H} = \sum_\alpha \epsilon_\alpha \hat{n}_\alpha$ con $\hat{n}_\alpha = \hat{a}^\dagger_\alpha\hat{a}_\alpha$.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, caps. 6-7: estadísticas cuánticas en el ensamble gran canónico, gases de Bose y Fermi, cuerpo negro.
- Pathria & Beale, *Statistical Mechanics*, caps. 6-8: derivación sistemática de BE y FD, condensación y degeneración.
- Kittel & Kroemer, *Thermal Physics*, cap. 7: distribuciones cuánticas y sus límites.

## Páginas relacionadas

- [Números de ocupación](#/numeros-de-ocupacion)
- [Distribución de Bose-Einstein](#/distribucion-bose-einstein)
- [Distribución de Fermi-Dirac](#/distribucion-fermi-dirac)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
- [Indistinguibilidad](#/indistinguibilidad)
- [Ensamble gran canónico](#/ensamble-gran-canonico)
