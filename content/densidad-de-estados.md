# Densidad de estados

## Resumen

La **densidad de estados** $g(E)$ cuantifica cuántos estados cuánticos (o cuánto volumen de espacio de fases clásico) existen por unidad de intervalo de energía alrededor de $E$. Es el puente entre el espectro microscópico discreto de un sistema y las funciones termodinámicas suaves que lo describen macroscópicamente.

$$g(E) = \frac{d\Omega}{dE}$$

donde $\Omega(E)$ es el número total de estados con energía menor o igual a $E$. En el caso discreto,

$$g(E) = \sum_i \delta(E - E_i)$$

Casi todo cálculo en mecánica estadística involucra una integral sobre $g(E)$.

## Definición y variantes

**Suma de estados acumulada.** El número de microestados con energía en $[0,E]$ es

$$\Omega(E) = \int_0^E g(E')\,dE'$$

**Promedio microcanónico.** El valor esperado de un observable en el ensamble microcanónico puede escribirse como

$$\langle A \rangle = \frac{1}{g(E)\delta E}\sum_{E_i \in [E,E+\delta E]} A_i = \frac{\int_E^{E+\delta E} A(E')\,g(E')\,dE'}{g(E)\,\delta E}$$

**Función de partición canónica.** En el ensamble canónico, en lugar de sumar sobre microestados individuales se puede integrar sobre la DOS:

$$Z(\beta) = \int_0^\infty g(E)\,e^{-\beta E}\,dE$$

Esto es particularmente útil cuando $g(E)$ tiene una forma analítica conocida.

**Densidad de estados por unidad de volumen.** En física del estado sólido y sistemas extendidos se trabaja con la DOS **intensiva**:

$$\rho(\varepsilon) = \frac{g(\varepsilon)}{V}$$

con unidades de $[\text{energía}^{-1}\text{volumen}^{-1}]$.

## Ejemplos fundamentales

### Gas ideal monoatómico ($N$ partículas, 3D)

El espacio de fases de $N$ partículas en 3D tiene $6N$ dimensiones. El volumen de la esfera de energía $H \leq E$ en el espacio de momentos es proporcional a $E^{3N/2}$, de modo que

$$\Omega(E,V,N) = C_{N,V}\,E^{3N/2}$$

$$g(E,V,N) = C_{N,V}\,\frac{3N}{2}\,E^{3N/2-1} \propto E^{3N/2-1}$$

Para $N = 10^{23}$, esta función crece tan rápido con $E$ que está esencialmente concentrada en una región exponencialmente estrecha cerca del valor de equilibrio. Este crecimiento vertiginoso es la razón por la que la entropía $S = k_B \ln g \approx k_B \ln \Omega$ es una función creciente de $E$ en la mayoría de sistemas clásicos.

### Gas de Fermi libre en 3D (por unidad de volumen)

Los estados de una partícula libre en un cubo de lado $L$ son $\mathbf{k} = \frac{2\pi}{L}\mathbf{n}$, con degeneración de espín $g_s = 2$. Contando estados en el espacio $\mathbf{k}$:

$$\rho(\varepsilon) = \frac{(2m)^{3/2}}{2\pi^2\hbar^3}\,\sqrt{\varepsilon}$$

Este resultado es central en la teoría de metales: la DOS proporcional a $\sqrt{\varepsilon}$ explica la capacidad calorífica lineal en temperatura $C \propto T$ para electrones y la dependencia de la resistividad con la energía de Fermi.

### Oscilador armónico unidimensional

Los niveles de energía son $E_n = \hbar\omega(n + 1/2)$, igualmente espaciados. La DOS es

$$g(E) = \sum_{n=0}^\infty \delta(E - \hbar\omega(n+1/2)) = \frac{1}{\hbar\omega}\quad \text{(en el límite semiclásico)}$$

uniforme en energía. Este resultado justifica la regla de cuantización de Bohr–Sommerfeld: el espacio de fases entre dos niveles consecutivos vale exactamente $h$.

### Gas de electrones bidimensional (2DEG)

En 2D, el volumen de espacio $\mathbf{k}$ con $|\mathbf{k}| \leq k$ es proporcional a $k^2 \propto \varepsilon$, de modo que

$$\rho_{2D}(\varepsilon) = \frac{m}{\pi\hbar^2}\quad \text{(constante)}$$

Esta DOS plana es la que produce el efecto Hall cuántico: los niveles de Landau son deltas de Dirac enormemente degeneradas que emergen de una DOS de fondo plana cuando se aplica un campo magnético.

### Sólido de Einstein

$N$ osciladores independientes con frecuencia $\omega_0$. Los niveles de energía del sistema completo son $E_n = n\hbar\omega_0$ con degeneración $g_n = \binom{n+N-1}{N-1}$ (número de formas de distribuir $n$ cuantos entre $N$ osciladores). Para $N$ grande:

$$g(E) \approx \frac{1}{(N-1)!}\left(\frac{E}{\hbar\omega_0}\right)^{N-1} \cdot \frac{1}{\hbar\omega_0}$$

Esta es la DOS que, al tomar logaritmo, da la entropía del sólido de Einstein y reproduce la ley de Dulong-Petit a alta temperatura.

## Crecimiento exponencial y concentración

Para sistemas macroscópicos, $g(E)$ crece de forma extraordinariamente rápida con $E$. En el caso del gas ideal:

$$g(E) \propto E^{3N/2-1} \approx e^{\frac{3N}{2}\ln E}$$

Para $N = 10^{23}$, esto significa que si se duplica la energía, $g$ se multiplica por un factor del orden de $e^{10^{23}}$. Como consecuencia:

- El ensamble microcanónico tiene casi todo su peso en la capa de energía más alta accesible.
- La entropía $S = k_B \ln g$ es extensiva porque $\ln(E^{3N/2}) = \frac{3N}{2}\ln E \propto N$.
- La "anchura efectiva" de la distribución de energía en el ensamble canónico es $\delta E/\langle E\rangle \sim N^{-1/2}$: aunque el peso de $g(E)e^{-\beta E}$ parece una integral, está en realidad dominada por un entorno exponencialmente estrecho del valor medio.

## Singularidades de Van Hove

En sistemas con estructura de bandas (fonones, electrones en cristales), la DOS de una sola partícula es

$$g(\varepsilon) = \frac{V}{(2\pi)^d}\int_{BZ} \delta\!\left(\varepsilon - \varepsilon(\mathbf{k})\right)d^d k$$

Cerca de los puntos $\mathbf{k}_0$ donde $\nabla_{\mathbf{k}}\varepsilon(\mathbf{k}_0) = 0$ (extremos de banda, puntos silla), la DOS tiene **singularidades de Van Hove**: divergencias logarítmicas en 2D, discontinuidades de pendiente en 3D. Estas singularidades son observables en espectros de infrarrojo, Raman, y en la estructura fina de la conductividad eléctrica.

## DOS y la función de partición

La relación $Z(\beta) = \int g(E)e^{-\beta E}dE$ es una transformada de Laplace de la DOS. Esto tiene dos consecuencias prácticas:

1. **Cálculo de $Z$**: si se conoce $g(E)$ analíticamente (gas ideal, oscilador), la integral es directa.
2. **Inversión**: dado $Z(\beta)$ como función analítica, $g(E)$ se recupera mediante la transformada inversa de Laplace. Este es el fundamento del método de la colina de paso (saddle-point) para la conexión microcanónico–canónico.

## Fuentes para profundizar

- Pathria & Beale, *Statistical Mechanics*, cap. 1-2: cálculo detallado de $\Omega(E)$ y $g(E)$ para el gas ideal y el oscilador.
- Ashcroft & Mermin, *Solid State Physics*, caps. 2 y 8: DOS de Fermi libre y singularidades de Van Hove.
- Kittel, *Introduction to Solid State Physics*, cap. 5: DOS para fonones y electrones con ejemplos numéricos.
- Kardar, *Statistical Physics of Particles*, cap. 4: derivación general y aplicaciones al gas cuántico.

## Páginas relacionadas

- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Entropía de Boltzmann](#/entropia-de-boltzmann)
- [Función de partición](#/funcion-de-particion)
- [Sólido de Einstein](#/solido-de-einstein)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
