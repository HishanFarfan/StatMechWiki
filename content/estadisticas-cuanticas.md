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

## Paginas relacionadas

- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Gas ideal clasico](#/gas-ideal-clasico)
- [Potencial quimico](#/potencial-quimico)
- [Funcion de particion](#/funcion-de-particion)

