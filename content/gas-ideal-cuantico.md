# Gas ideal cuántico

## Resumen

Un **gas ideal cuántico** es un conjunto de $N$ partículas idénticas no interactuantes donde la indistinguibilidad cuántica altera radicalmente la termodinámica. Dependiendo del espín, se distinguen dos casos:

- **Bosones** (espín entero): cualquier número de partículas puede ocupar el mismo estado → distribución de Bose-Einstein.
- **Fermiones** (espín semientero): a lo sumo una partícula por estado (principio de exclusión de Pauli) → distribución de Fermi-Dirac.

El límite clásico $n\lambda_T^3 \ll 1$ recupera la distribución de Maxwell-Boltzmann; los efectos cuánticos aparecen cuando la longitud de onda térmica $\lambda_T$ es comparable con la separación entre partículas.

## Microestados y ensamble gran canónico

Para partículas idénticas, el microestado se especifica por el conjunto de números de ocupación $\{n_\alpha\}$ de cada estado de una partícula $\alpha$ (con energía $\epsilon_\alpha$), en vez de por las posiciones de cada partícula. La energía total y el número de partículas son

$$
E = \sum_\alpha n_\alpha \epsilon_\alpha, \qquad N = \sum_\alpha n_\alpha.
$$

El ensamble gran canónico con potencial químico $\mu$ factoriza sobre los modos:

$$
\ln\Xi = \mp\sum_\alpha \ln\!\left(1 \mp e^{-\beta(\epsilon_\alpha - \mu)}\right),
$$

donde el signo superior es para bosones y el inferior para fermiones.

## Número de ocupación medio

El número medio de partículas en el estado $\alpha$ es

$$
\langle n_\alpha \rangle = -\frac{1}{\beta}\frac{\partial\ln\Xi}{\partial\epsilon_\alpha}
= \frac{1}{e^{\beta(\epsilon_\alpha-\mu)}\mp 1}.
$$

- **Bose-Einstein** ($-$): $\langle n_\alpha\rangle \geq 0$, sin límite superior.
- **Fermi-Dirac** ($+$): $\langle n_\alpha\rangle \in [0,1]$ (exclusión de Pauli).

## Condición que fija $\mu$

El potencial químico se determina imponiendo el número de partículas:

$$
N = \sum_\alpha \langle n_\alpha\rangle = \int_0^\infty g(\epsilon)\,\langle n(\epsilon)\rangle\,d\epsilon,
$$

donde $g(\epsilon)$ es la densidad de estados. Para un gas libre en 3D:

$$
g(\epsilon) = \frac{4\pi(2m)^{3/2}}{h^3}V\,\epsilon^{1/2} \cdot g_s,
$$

con $g_s = 2s+1$ la degeneración de espín.

## Límite clásico y expansión virial

Cuando $e^{\beta(\epsilon-\mu)} \gg 1$ (equivalente a $n\lambda_T^3 \ll 1$), ambas distribuciones coinciden:

$$
\langle n_\alpha\rangle \approx e^{-\beta(\epsilon_\alpha-\mu)} \qquad \text{(Maxwell-Boltzmann)}.
$$

La primera corrección cuántica al gas ideal da la ecuación de estado:

$$
\frac{PV}{Nk_BT} = 1 \pm \frac{1}{4\sqrt{2}}\,n\lambda_T^3 + \ldots,
$$

donde $+$ es para fermiones (presión mayor que la clásica, por exclusión) y $-$ para bosones (presión menor, por bunching estadístico).

## Criterio de degeneración cuántica

| Condición | Régimen | Consecuencia |
|---|---|---|
| $n\lambda_T^3 \ll 1$ | clásico | Maxwell-Boltzmann |
| $n\lambda_T^3 \sim 1$ | transición | correcciones cuánticas |
| $n\lambda_T^3 \gg 1$ (bosones) | condensación | BEC, $\mu \to 0^-$ |
| $k_BT \ll \epsilon_F$ (fermiones) | degenerado | Gas de Fermi, $\mu \approx \epsilon_F$ |

Temperatura de degeneración para los electrones en cobre:

$$
T_F = \frac{\epsilon_F}{k_B} \approx 8\times10^4\ \text{K} \gg 300\ \text{K}
\implies \text{gas completamente degenerado a temperatura ambiente}.
$$

## Presión y potencial gran canónico

La presión se obtiene directamente de $\ln\Xi$:

$$
PV = k_BT\ln\Xi = \mp k_BT\sum_\alpha \ln\!\left(1\mp e^{-\beta(\epsilon_\alpha-\mu)}\right).
$$

A $T=0$, los fermiones tienen energía cinética finita (energía de Fermi $\epsilon_F$) y presión de degeneración $P_0 = \frac{2}{5}n\epsilon_F$, que sostiene las estrellas de neutrones contra el colapso gravitacional.

## Casos especiales con $\mu = 0$

Los **fonones** y **fotones** no se conservan (se crean y destruyen libremente), por lo que su potencial químico es $\mu = 0$. Sus distribuciones son Bose-Einstein con $\mu=0$:

$$
\langle n_\alpha\rangle = \frac{1}{e^{\beta\epsilon_\alpha} - 1}.
$$

Para fotones en una cavidad, esto lleva a la distribución de Planck y a la ley de Stefan-Boltzmann $u\propto T^4$.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, caps. 6-7: derivación sistemática de los gases de Bose y Fermi desde el ensamble gran canónico.
- Pathria & Beale, *Statistical Mechanics*, caps. 6-8: tratamiento riguroso de la condensación de Bose-Einstein y el gas de Fermi degenerado.
- Kittel, *Introduction to Solid State Physics*, caps. 6-7: gas de Fermi libre para electrones, energía de Fermi, calor específico electrónico.
- Blundell & Blundell, *Concepts in Thermal Physics*, caps. 26-29: gas de Bose, fotones, fonones y condensación.

## Páginas relacionadas

- [Gas ideal clásico](#/gas-ideal-clasico)
- [Distribución de Bose-Einstein](#/distribucion-bose-einstein)
- [Distribución de Fermi-Dirac](#/distribucion-fermi-dirac)
- [Condensación de Bose-Einstein](#/condensacion-bose-einstein)
- [Gas de Fermi](#/gas-de-fermi)
- [Ley de Planck](#/ley-de-planck)
- [Indistinguibilidad](#/indistinguibilidad)
- [Ensamble gran canónico](#/ensamble-gran-canonico)
