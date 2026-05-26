# Distribución de Fermi-Dirac

## Resumen

La **distribución de Fermi-Dirac** da el número medio de partículas que ocupan un modo de energía $\epsilon$ en un gas de fermiones idénticos en equilibrio a temperatura $T$ y potencial químico $\mu$. La ocupación está acotada entre 0 y 1 por el principio de exclusión de Pauli.

## Derivación desde el ensamble gran canónico

Para un modo fermiónico con energía $\epsilon_\alpha$, los estados posibles son $n_\alpha = 0$ o $1$. La función de gran partición es

$$
\Xi_\alpha = 1 + e^{-\beta(\epsilon_\alpha-\mu)}.
$$

El número medio de ocupación es

$$
\langle n_\alpha\rangle = \frac{e^{-\beta(\epsilon_\alpha-\mu)}}{1 + e^{-\beta(\epsilon_\alpha-\mu)}} = \frac{1}{e^{\beta(\epsilon_\alpha-\mu)} + 1}.
$$

## Propiedades

**Valor en $\epsilon = \mu$**: $\langle n(\mu)\rangle = 1/2$ siempre, independientemente de $T$.

**Límite $T \to 0$** (función escalón de Heaviside):

$$
\langle n(\epsilon)\rangle \xrightarrow{T\to 0}
\begin{cases}
1 & \epsilon < \mu = \epsilon_F\\
0 & \epsilon > \mu = \epsilon_F
\end{cases}
$$

Todos los estados por debajo de la energía de Fermi $\epsilon_F$ están llenos; todos los estados por encima, vacíos.

**Anchura de la transición**: la distribución pasa de ~0.9 a ~0.1 en una franja de anchura $\sim 4k_BT$ centrada en $\epsilon_F$.

**Límite clásico** ($e^{\beta(\epsilon-\mu)} \gg 1$): $\langle n\rangle \approx e^{-\beta(\epsilon-\mu)}$ → Maxwell-Boltzmann.

## Varianza de la ocupación

$$
\langle(\Delta n_\alpha)^2\rangle = \langle n_\alpha\rangle(1 - \langle n_\alpha\rangle).
$$

Máxima en $\epsilon = \mu$ (valor $1/4$), nula en los extremos ($\langle n\rangle = 0$ o $1$). Las fluctuaciones de fermiones son **antibunching** (menores que las bosónicas).

## Expansión de Sommerfeld

Para $k_BT \ll \epsilon_F$, las integrales sobre la distribución de Fermi-Dirac se expanden en potencias de $(k_BT/\epsilon_F)^2$. Para una integral de la forma $I = \int_0^\infty \phi(\epsilon)\langle n(\epsilon)\rangle\,d\epsilon$:

$$
I = \int_0^{\epsilon_F}\phi(\epsilon)\,d\epsilon + \frac{\pi^2}{6}(k_BT)^2\phi'(\epsilon_F) + \frac{7\pi^4}{360}(k_BT)^4\phi'''(\epsilon_F) + \ldots
$$

Esta expansión da, para el gas de Fermi libre:

$$
\mu(T) \approx \epsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_BT}{\epsilon_F}\right)^2 + \ldots\right],
$$

$$
C_V \approx \frac{\pi^2}{2}Nk_B\frac{k_BT}{\epsilon_F} \propto T \qquad (T \ll T_F).
$$

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 7: distribución de Fermi-Dirac, expansión de Sommerfeld y gas de Fermi libre.
- Kittel, *Introduction to Solid State Physics*, cap. 6: distribución de Fermi-Dirac para electrones en metales, energía de Fermi y calor específico electrónico.
- Pathria & Beale, *Statistical Mechanics*, cap. 8: gas de Fermi libre, propiedades termodinámicas y correcciones de temperatura finita.

## Páginas relacionadas

- [Estadísticas cuánticas](#/estadisticas-cuanticas)
- [Números de ocupación](#/numeros-de-ocupacion)
- [Energía de Fermi](#/energia-de-fermi)
- [Gas de Fermi](#/gas-de-fermi)
- [Distribución de Bose-Einstein](#/distribucion-bose-einstein)
- [Presión de degeneración](#/presion-de-degeneracion)
