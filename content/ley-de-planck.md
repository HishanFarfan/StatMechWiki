# Ley de Planck

## Resumen

La **ley de Planck** describe la distribución espectral de la radiación de equilibrio (cuerpo negro) a temperatura $T$. Fue la primera aplicación histórica de la cuantización de la energía (Planck, 1900) y resolvió la «catástrofe ultravioleta» de la física clásica. Desde el punto de vista estadístico moderno, es la distribución de Bose-Einstein para fotones con $\mu = 0$.

## Derivación estadística

La cavidad en equilibrio a temperatura $T$ contiene modos electromagnéticos con frecuencias $\omega$ y dos polarizaciones. La densidad de modos en 3D es

$$
g(\omega) = \frac{V\omega^2}{\pi^2 c^3}.
$$

Los fotones son bosones con $\mu = 0$ (no se conservan: se emiten y absorben libremente). La ocupación media por modo es

$$
\langle n(\omega)\rangle = \frac{1}{e^{\hbar\omega/k_BT} - 1}.
$$

La densidad de energía espectral (energía por unidad de volumen y de frecuencia angular) es

$$
u(\omega,T) = \frac{\hbar\omega^3}{\pi^2 c^3}\frac{1}{e^{\hbar\omega/k_BT}-1}.
$$

## La ley en longitud de onda

En función de la longitud de onda $\lambda = 2\pi c/\omega$:

$$
u(\lambda,T) = \frac{8\pi hc}{\lambda^5}\frac{1}{e^{hc/\lambda k_BT}-1}.
$$

## Límites

**Rayleigh-Jeans** ($\hbar\omega \ll k_BT$): $\langle n\rangle \approx k_BT/\hbar\omega$,

$$
u(\omega,T) \approx \frac{k_BT\omega^2}{\pi^2 c^3}.
$$

Predicción clásica; diverge para $\omega \to \infty$ (catástrofe ultravioleta). Planck la corrigió cuantizando la energía.

**Wien** ($\hbar\omega \gg k_BT$): $\langle n\rangle \approx e^{-\hbar\omega/k_BT}$,

$$
u(\omega,T) \approx \frac{\hbar\omega^3}{\pi^2 c^3}e^{-\hbar\omega/k_BT}.
$$

## Ley de desplazamiento de Wien

El máximo de $u(\lambda,T)$ ocurre en

$$
\lambda_{\max}T = \frac{hc}{4.965\,k_B} \approx 2898\ \mu\text{m}\cdot\text{K}.
$$

Aplicaciones: la estrella solar ($T \approx 5800$ K) emite máximo en $\lambda_{\max} \approx 500$ nm (visible). El fondo cósmico de microondas ($T = 2.725$ K) tiene $\lambda_{\max} \approx 1.06$ mm.

## Ley de Stefan-Boltzmann

Integrando la densidad de energía total:

$$
u(T) = \int_0^\infty u(\omega,T)\frac{d\omega}{2\pi} = \frac{\pi^2 k_B^4}{15\hbar^3 c^3}\,T^4 \equiv \frac{4\sigma}{c}\,T^4,
$$

donde $\sigma = 5.67\times10^{-8}\ \text{W/(m}^2\text{K}^4)$ es la **constante de Stefan-Boltzmann**. La potencia emitida por un cuerpo negro es $P = \sigma A T^4$.

La presión de radiación es $P_{\text{rad}} = u(T)/3$, relevante en el interior de estrellas masivas.

## Resolución histórica de la catástrofe ultravioleta

La física clásica (Rayleigh-Jeans) predice una densidad de energía total infinita. Planck (1900) postuló que la energía de cada oscilador se transfiere en múltiplos de $\hbar\omega$. Einstein (1905) generalizó esto a cuantos de luz (fotones). La distribución de Planck confirma que la cuantización de la radiación es un resultado de la estadística bosónica con $\mu = 0$, no de un postulado ad hoc.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 6: radiación de cuerpo negro como gas de fotones, derivación de $u(\omega,T)$.
- Planck, "Über das Gesetz der Energieverteilung im Normalspektrum", *Ann. Phys.* 4, 553 (1901): el artículo original.
- Kittel & Kroemer, *Thermal Physics*, cap. 4: radiación de cuerpo negro, ley de Stefan-Boltzmann y aplicaciones astrofísicas.

## Páginas relacionadas

- [Distribución de Bose-Einstein](#/distribucion-bose-einstein)
- [Estadísticas cuánticas](#/estadisticas-cuanticas)
- [Densidad de estados](#/densidad-de-estados)
- [Sólido de Debye](#/solido-de-debye)
- [Números de ocupación](#/numeros-de-ocupacion)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
