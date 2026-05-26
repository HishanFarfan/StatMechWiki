# Números de ocupación

## Resumen

La **representación de números de ocupación** (segunda cuantización) describe sistemas de partículas idénticas especificando cuántas partículas ocupan cada modo de una partícula, en vez de etiquetar las partículas individualmente. Es el lenguaje natural de la mecánica estadística cuántica y la teoría cuántica de campos.

## Microestado en representación de ocupación

Para un sistema de partículas idénticas con modos de una partícula $\{|\alpha\rangle\}$ y energías $\{\epsilon_\alpha\}$, el microestado es

$$
|n_1, n_2, n_3, \ldots\rangle,
$$

donde $n_\alpha$ es el número de partículas en el modo $\alpha$. Las restricciones son:

- **Bosones**: $n_\alpha \in \{0, 1, 2, 3, \ldots\}$ (sin límite).
- **Fermiones**: $n_\alpha \in \{0, 1\}$ (principio de Pauli).

La energía total y el número total de partículas son

$$
E = \sum_\alpha n_\alpha\,\epsilon_\alpha, \qquad N = \sum_\alpha n_\alpha.
$$

## Operadores de creación y destrucción

Los operadores $\hat{a}^\dagger_\alpha$ (creación) y $\hat{a}_\alpha$ (destrucción) actúan sobre el espacio de Fock:

$$
\hat{a}^\dagger_\alpha|\ldots, n_\alpha, \ldots\rangle \propto |\ldots, n_\alpha+1, \ldots\rangle, \qquad \hat{a}_\alpha|\ldots, n_\alpha, \ldots\rangle \propto |\ldots, n_\alpha-1, \ldots\rangle.
$$

El **operador de número** es $\hat{n}_\alpha = \hat{a}^\dagger_\alpha\hat{a}_\alpha$, con $\hat{n}_\alpha|n_\alpha\rangle = n_\alpha|n_\alpha\rangle$.

Las relaciones de conmutación/anticonmutación codifican la estadística:

$$
[\hat{a}_\alpha,\,\hat{a}^\dagger_\beta] = \delta_{\alpha\beta} \qquad \text{(bosones)},
$$

$$
\{\hat{a}_\alpha,\,\hat{a}^\dagger_\beta\} = \delta_{\alpha\beta} \qquad \text{(fermiones)}.
$$

Para fermiones, $\{\hat{a}_\alpha, \hat{a}_\alpha\} = 0$ implica $\hat{a}^2_\alpha = 0$: no se pueden crear dos fermiones en el mismo modo (principio de Pauli automático).

## Hamiltoniano en representación de ocupación

Para partículas no interactuantes:

$$
\hat{H} = \sum_\alpha \epsilon_\alpha\,\hat{n}_\alpha.
$$

Con interacciones de dos cuerpos $V(\mathbf{r}-\mathbf{r}')$:

$$
\hat{H} = \sum_\alpha \epsilon_\alpha\hat{n}_\alpha + \frac{1}{2}\sum_{\alpha\beta\gamma\delta} V_{\alpha\beta\gamma\delta}\,\hat{a}^\dagger_\alpha\hat{a}^\dagger_\beta\hat{a}_\delta\hat{a}_\gamma,
$$

donde $V_{\alpha\beta\gamma\delta} = \langle\alpha\beta|V|\gamma\delta\rangle$ son los elementos de matriz del potencial.

## Espacio de Fock

El espacio de Fock es la unión directa de todos los espacios de $N$ partículas:

$$
\mathcal{F} = \bigoplus_{N=0}^\infty \mathcal{H}^{(N)}_{\pm},
$$

donde $\mathcal{H}^{(N)}_+$ es el espacio simétrico (bosones) y $\mathcal{H}^{(N)}_-$ el antisimétrico (fermiones). El estado de vacío $|0\rangle$ cumple $\hat{a}_\alpha|0\rangle = 0$ para todo $\alpha$.

## Función de partición gran canónica

En el ensamble gran canónico, el hamiltoniano efectivo es $\hat{K} = \hat{H} - \mu\hat{N}$. Como los modos son independientes (sin interacciones), la función de gran partición factoriza:

$$
\Xi = \text{Tr}\!\left(e^{-\beta\hat{K}}\right) = \prod_\alpha \Xi_\alpha,
$$

con

$$
\Xi_\alpha^{\text{bos}} = \frac{1}{1 - e^{-\beta(\epsilon_\alpha-\mu)}}, \qquad \Xi_\alpha^{\text{fer}} = 1 + e^{-\beta(\epsilon_\alpha-\mu)}.
$$

De donde se derivan directamente las distribuciones de Bose-Einstein y Fermi-Dirac.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 6: microestados cuánticos, números de ocupación y la factorización de $\Xi$.
- Fetter & Walecka, *Quantum Theory of Many-Particle Systems*, cap. 1: segunda cuantización, espacio de Fock y operadores de campo.
- Pathria & Beale, *Statistical Mechanics*, cap. 5: formulación general de los gases cuánticos en representación de ocupación.

## Páginas relacionadas

- [Estadísticas cuánticas](#/estadisticas-cuanticas)
- [Distribución de Bose-Einstein](#/distribucion-bose-einstein)
- [Distribución de Fermi-Dirac](#/distribucion-fermi-dirac)
- [Ensamble gran canónico](#/ensamble-gran-canonico)
- [Indistinguibilidad](#/indistinguibilidad)
- [Matriz densidad](#/matriz-densidad)
