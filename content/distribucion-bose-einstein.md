# Distribución de Bose-Einstein

## Resumen

La **distribución de Bose-Einstein** da el número medio de partículas que ocupan un modo de energía $\epsilon$ en un gas de bosones idénticos en equilibrio a temperatura $T$ y potencial químico $\mu$. Permite ocupaciones arbitrariamente altas por estado, en contraste con la distribución de Fermi-Dirac.

## Derivación desde el ensamble gran canónico

Para un modo bosónico con energía $\epsilon_\alpha$, los estados posibles son $n_\alpha = 0, 1, 2, \ldots$ La función de gran partición del modo es una serie geométrica:

$$
\Xi_\alpha = \sum_{n=0}^\infty e^{-\beta(\epsilon_\alpha-\mu)n} = \frac{1}{1 - e^{-\beta(\epsilon_\alpha-\mu)}},
$$

convergente si $\epsilon_\alpha > \mu$. El número medio de ocupación es

$$
\langle n_\alpha\rangle = -\frac{1}{\beta}\frac{\partial\ln\Xi_\alpha}{\partial\epsilon_\alpha} = \frac{1}{e^{\beta(\epsilon_\alpha-\mu)} - 1}.
$$

## Propiedades y límites

**Restricción sobre $\mu$**: para que $\langle n_\alpha\rangle > 0$, se necesita $\epsilon_\alpha > \mu$ para todo $\alpha$. Si el estado fundamental tiene energía $\epsilon_0 = 0$ (referencia), entonces $\mu \leq 0$.

**Límite clásico** ($e^{\beta(\epsilon-\mu)} \gg 1$): $\langle n\rangle \approx e^{-\beta(\epsilon-\mu)}$ → Maxwell-Boltzmann.

**Alta ocupación** ($\epsilon \to \mu^+$): $\langle n\rangle \to \infty$ → base de la condensación de Bose-Einstein.

**Alta temperatura** (a densidad fija): $\mu \to -\infty$, todas las ocupaciones son pequeñas → régimen clásico.

## Dispersión de ocupación

La varianza de la ocupación en el modo $\alpha$ es

$$
\langle(\Delta n_\alpha)^2\rangle = \langle n_\alpha\rangle(\langle n_\alpha\rangle + 1).
$$

Para bosones, la fluctuación relativa es $\sqrt{\langle n\rangle + 1}/\sqrt{\langle n\rangle} \approx 1$ cuando $\langle n\rangle \gg 1$: las fluctuaciones son del mismo orden que la ocupación media (bunching bosónico).

## Casos con $\mu = 0$: fotones y fonones

Las partículas que no se conservan (se crean y destruyen libremente) tienen $\mu = 0$ en equilibrio. La distribución se simplifica a

$$
\langle n(\epsilon)\rangle = \frac{1}{e^{\beta\epsilon} - 1}.
$$

- **Fotones**: $\epsilon = \hbar\omega$, lleva a la distribución de Planck para la radiación de cuerpo negro.
- **Fonones**: $\epsilon = \hbar\omega_k$, lleva al sólido de Einstein/Debye.
- **Magnones** (cuantos de ondas de espín en ferromagnéticos): igual forma.

## Condensación y divergencia de $\langle n_0 \rangle$

Cuando $\mu \to 0^-$ a temperatura fija, la ocupación del estado fundamental $\epsilon_0 = 0$ diverge:

$$
\langle n_0\rangle = \frac{1}{e^{-\beta\mu} - 1} \approx \frac{k_BT}{|\mu|} \to \infty.
$$

Esto marca el inicio de la condensación de Bose-Einstein: una fracción macroscópica de las partículas ocupa el estado de mínima energía.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 7: distribución de Bose-Einstein, gas ideal de Bose y condensación.
- Pathria & Beale, *Statistical Mechanics*, cap. 7: gas de Bose, propiedades termodinámicas y BEC.
- Blundell & Blundell, *Concepts in Thermal Physics*, cap. 26: distribución de Bose-Einstein con énfasis en fotones y fonones.

## Páginas relacionadas

- [Estadísticas cuánticas](#/estadisticas-cuanticas)
- [Números de ocupación](#/numeros-de-ocupacion)
- [Condensación de Bose-Einstein](#/condensacion-bose-einstein)
- [Ley de Planck](#/ley-de-planck)
- [Distribución de Fermi-Dirac](#/distribucion-fermi-dirac)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
