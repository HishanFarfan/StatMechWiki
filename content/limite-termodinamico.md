# Límite termodinámico

## Resumen

El **límite termodinámico** es el régimen $N \to \infty$, $V \to \infty$ con densidad $n = N/V$ fija. En este límite, la mecánica estadística reproduce la termodinámica: las cantidades intensivas (temperatura, presión, densidad) se vuelven determinísticas, las fluctuaciones desaparecen y los ensambles microcanónico, canónico y gran canónico dan resultados equivalentes.

$$N \to \infty, \quad V \to \infty, \quad n = \frac{N}{V} = \text{cte}$$

Sin el límite termodinámico, gran parte de lo que se llama "termodinámica" —incluidas las transiciones de fase— no tiene sentido matemático riguroso.

## Por qué es necesario

La termodinámica funciona con funciones suaves de variables macroscópicas. Pero para un sistema finito, la función de partición es una suma o integral finita —siempre analítica en $\beta$ y otras variables externas. Las singularidades (discontinuidades, divergencias) que caracterizan las transiciones de fase solo aparecen en el límite $N \to \infty$.

**Ejemplo.** La función de partición del modelo de Ising en 1D es $Z = 2\left(2\cosh\beta J\right)^N$. Para $N$ finito, $Z$ es una función analítica de $\beta J$ y no hay transición de fase. Solo en $N \to \infty$ puede aparecer una singularidad (aunque en 1D la transición ocurre solo en $T = 0$).

## Extensividad y propiedades intensivas

En el límite termodinámico, la energía libre de Helmholtz satisface

$$F(T,V,N) = N\,f(T,n), \quad n = N/V$$

donde $f$ es la densidad de energía libre *por partícula*, que depende solo de las variables intensivas $T$ y $n$. Lo mismo ocurre con $E$, $S$, $G$, etc. Esto se llama **extensividad**:

$$F(\lambda N, \lambda V, T) = \lambda\, F(N, V, T) \quad \forall\lambda > 0$$

La extensividad no es gratuita: requiere que las interacciones sean de corto alcance (o que se suavicen adecuadamente para interacciones de largo alcance). Para la gravedad, la extensividad falla: la energía gravitacional de $N$ partículas escala como $N^2/R \propto N^{5/3}$, no como $N$.

## Fluctuaciones y la ley de grandes números

Para un observable extensivo $A$ (con $\langle A\rangle \propto N$), la varianza típica es

$$\frac{\sqrt{\text{Var}(A)}}{\langle A\rangle} \sim \frac{1}{\sqrt{N}}$$

En el límite termodinámico, las fluctuaciones relativas tienden a cero: las variables termodinámicas se vuelven "sharp". Esto justifica describir el estado macroscópico por un único valor de $E$, $V$, etc., en lugar de una distribución.

Para $N = 10^{23}$, $1/\sqrt{N} \sim 10^{-12}$: las fluctuaciones son absolutamente inapreciables en cualquier medición macroscópica.

## Equivalencia de ensambles

En el límite termodinámico, los tres ensambles principales dan las mismas predicciones para cantidades intensivas:

| Ensamble | Variables naturales | Función generatriz |
|---|---|---|
| Microcanónico | $E$, $V$, $N$ | $S(E,V,N) = k_B\ln\Omega$ |
| Canónico | $T$, $V$, $N$ | $F(T,V,N) = -k_BT\ln Z$ |
| Gran canónico | $T$, $V$, $\mu$ | $\Omega(T,V,\mu) = -k_BT\ln\Xi$ |

Fuera del límite termodinámico, los ensambles pueden diferir. En sistemas pequeños (nanopartículas, proteínas, moléculas individuales), el ensamble correcto depende del experimento concreto: microfluídica, trampa óptica, y espectroscopia de molécula individual usan "ensembles" distintos con resultados distintos.

## Equivalencia de ensambles y transiciones de fase

Cerca de una transición de fase de primer orden, la equivalencia de ensambles falla incluso en el límite $N \to \infty$. En el ensamble canónico, la densidad puede tomar cualquier valor en el intervalo de coexistencia (promedio de dos fases), mientras que en el gran canónico las dos fases coexisten con densidades discretas. Esta diferencia es real y observable.

## La teoría de Yang y Lee

Lee y Yang (1952) demostraron que las transiciones de fase del ensamble gran canónico corresponden a **ceros de la función gran partición** $\Xi(z)$ en el plano complejo de la fugacidad $z = e^{\beta\mu}$. Para $N$ finito, $\Xi$ es un polinomio en $z$ y sus raíces son complejas. En el límite $N \to \infty$, los ceros se acercan al eje real y "pinchan" la línea de valores reales, produciendo una singularidad: la transición de fase.

Este teorema conecta el límite termodinámico directamente con la estructura analítica de la función de partición.

## Cuando falla el límite termodinámico

**Sistemas con interacciones de largo alcance.** La gravedad y las interacciones coulombianas sin apantallamiento no son extensivas. Para sistemas auto-gravitantes (estrellas, galaxias), la entropía puede ser no extensiva y los ensambles pueden dar predicciones radicalmente distintas. Esto se manifiesta en la **gravothermal catastrophe** y en la "entropía de Bekenstein-Hawking" de agujeros negros.

**Sistemas finitos.** Nanopartículas, moléculas biológicas individuales, y sistemas cuánticos pequeños (pocos qubits) están gobernados por termodinámica de tamaño finito. Las correcciones a la extensividad son de orden $N^{-1/3}$ (efectos de superficie), $\ln N$ (correlaciones), etc.

**Puntos críticos.** En el punto crítico, la longitud de correlación $\xi \to \infty$ y los efectos de tamaño finito son importantes incluso para sistemas de $N \sim 10^6$. El **escalado de tamaño finito** (finite-size scaling) cuantifica cómo se redondean las singularidades en sistemas finitos.

**Sistemas con quenched disorder.** En vidrios, materiales amorfos y sistemas frustrados, el límite termodinámico puede existir pero ser no ergódico: hay muchos estados metaestables separados por barreras de energía libre que crecen con $N$.

## Fuentes para profundizar

- Ruelle, *Statistical Mechanics: Rigorous Results* (1969): la demostración rigurosa de que existe el límite termodinámico para interacciones de corto alcance estables.
- Yang & Lee, "Statistical Theory of Equations of State and Phase Transitions", *Phys. Rev.* 87, 404 (1952): el artículo original sobre ceros de la función de partición.
- Kardar, *Statistical Physics of Particles*, cap. 4: equivalencia de ensambles en el límite termodinámico.
- Gross, *Microcanonical Thermodynamics* (2001): termodinámica sin el límite termodinámico, aplicada a sistemas pequeños y auto-gravitantes.

## Páginas relacionadas

- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Equivalencia de ensambles](#/equivalencia-de-ensambles)
- [Fluctuaciones](#/fluctuaciones)
- [Transiciones de fase](#/transiciones-de-fase)
- [Entropía de Boltzmann](#/entropia-de-boltzmann)
