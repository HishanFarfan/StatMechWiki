# Microestado

## Resumen

Un **microestado** es la especificación microscópica más completa posible de un sistema físico dentro de un marco teórico dado. Conocer el microestado equivale a conocer toda la información dinámica disponible: posiciones y momenta de todas las partículas en mecánica clásica, o el vector de estado en mecánica cuántica.

La mecánica estadística surge precisamente porque no podemos conocer ni necesitamos conocer el microestado exacto: en cambio, asignamos probabilidades a los microestados compatibles con la información macroscópica disponible.

## Microestado clásico

En mecánica clásica, el microestado de un sistema de $N$ partículas es un punto en el **espacio de fases** $\mathcal{M}$:

$$\Gamma = (q_1, \ldots, q_N,\, p_1, \ldots, p_N) \in \mathbb{R}^{6N}$$

donde $q_i \in \mathbb{R}^3$ son las posiciones y $p_i \in \mathbb{R}^3$ son los momenta de la partícula $i$. El espacio de fases tiene dimensión $6N$.

Bajo las ecuaciones de Hamilton,

$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \qquad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

el microestado evoluciona de forma determinista y continua. La trayectoria $\Gamma(t)$ está unívocamente determinada por $\Gamma(0)$.

**Ejemplo.** Un gas de argón con $N = 10^{23}$ átomos tiene un microestado en $\mathbb{R}^{6\times10^{23}}$. Especificar ese punto con la precisión de un Ångström en posición requeriría más información que la que cabe en todos los discos duros del mundo. Ni siquiera en principio es accesible.

## Microestado cuántico

En mecánica cuántica, el microestado es un **estado puro** $|\psi\rangle$ en el espacio de Hilbert $\mathcal{H}$, o más generalmente una **matriz densidad** $\hat{\rho}$. Para sistemas en equilibrio se trabaja típicamente con estados propios del Hamiltoniano:

$$\hat{H}|n\rangle = E_n|n\rangle$$

El microestado es entonces uno de los $|n\rangle$. En este contexto, el "conteo de microestados" es literalmente un conteo de autovalores: $\Omega(E)$ es la degeneración del nivel $E$ o, en sistemas con espectro continuo, el número de autovalores en un intervalo $[E, E+\Delta E]$.

**Ejemplo.** Para $N$ espines-$\frac{1}{2}$ independientes, el espacio de Hilbert tiene dimensión $2^N$. Los microestados son vectores $|\sigma_1, \sigma_2, \ldots, \sigma_N\rangle$ con $\sigma_i \in \{\uparrow, \downarrow\}$. Con energía fija $E = (n_\uparrow - n_\downarrow)\varepsilon/2$, el número de microestados es $\binom{N}{n_\uparrow}$.

## El problema del conteo: $h^{3N}$ y el factor $N!$

En mecánica clásica, el espacio de fases es continuo y la noción de "número de microestados" requiere una medida:

$$d\mu = \frac{d^{3N}q\,d^{3N}p}{h^{3N}\,N!}$$

Los dos factores tienen justificaciones distintas:

**$h^{3N}$**: en mecánica cuántica, el principio de incertidumbre $\Delta q_i \Delta p_i \geq \hbar$ establece que no se pueden localizar partículas en una celda de espacio de fases más pequeña que $\sim h^3$ por partícula. En el límite clásico, esto regulariza la medida: el "número de microestados clásicos" en un volumen $\Delta\Gamma$ es $\Delta\Gamma / h^{3N}$. Sin esta normalización, $S = k_B\ln\Omega$ tendría una constante aditiva arbitraria y dependiente de las unidades.

**$N!$**: en mecánica clásica, permutar dos partículas idénticas produce técnicamente un punto diferente del espacio de fases, pero físicamente el mismo estado (las partículas no tienen etiquetas observables). Dividir por $N!$ corrige esta sobrecontabilización. Sin este factor, la entropía del gas ideal no es extensiva (paradoja de Gibbs). En mecánica cuántica, la indistinguibilidad está incorporada en la simetría del estado: los bosones usan estados simétricos y los fermiones estados antisimétricos, y el factor $N!$ emerge automáticamente del conteo correcto.

## Cuántos microestados hay: estimaciones de magnitud

La cantidad de microestados en sistemas macroscópicos es astronómica. Para $N$ espines:

$$\Omega \leq 2^N \sim 10^{3\times10^{22}} \quad (N=10^{23})$$

Para el gas ideal monoatómico:

$$\Omega(E,V,N) \propto V^N E^{3N/2}$$

Ambas expresiones son funciones de $N$ que crecen incomparablemente más rápido que cualquier potencia. Esta proliferación de microestados tiene dos consecuencias importantes:

1. **La entropía es extensiva**: $S = k_B\ln\Omega \propto N$.
2. **Las fluctuaciones son pequeñas**: la distribución de probabilidad sobre microestados está tan concentrada alrededor del macroestado de equilibrio que la desviación típica de cualquier observable intensivo escala como $1/\sqrt{N}$.

## Microestado vs. macroestado

La relación entre los dos niveles es muchos-a-uno: cada macroestado (especificado por unas pocas variables como $E$, $V$, $N$, $M$) corresponde a un número enorme de microestados. La mecánica estadística postula que, en equilibrio, todos los microestados compatibles con el macroestado dado son igualmente probables.

| Nivel | Descripción | Número de variables | Ejemplo |
|---|---|---|---|
| Microestado | Posiciones y momenta de todas las partículas | $6N \sim 10^{24}$ | $\Gamma = (q_1,p_1,\ldots,q_N,p_N)$ |
| Macroestado | Variables termodinámicas | 2–5 | $(E, V, N)$ o $(T, P, N)$ |

Un gas de nitrógeno a temperatura ambiente en 1 litro tiene $N \approx 2.7\times10^{22}$ moléculas y un número de microestados del orden de $10^{10^{22}}$. Toda esa información se resume en dos números: $T = 293\ \text{K}$ y $P = 101\ \text{kPa}$.

## Accesibilidad y restricciones

No todos los microestados son relevantes: el **ensamble** elige qué microestados son "accesibles" según las restricciones físicas impuestas.

- **Ensamble microcanónico** $(E, V, N)$ fijos: solo los microestados con energía en $[E, E+\Delta E]$.
- **Ensamble canónico** $(T, V, N)$ fijos: todos los microestados, con peso $e^{-\beta E_i}/Z$.
- **Gran canónico** $(T, V, \mu)$ fijos: microestados con cualquier $N$, con peso $e^{-\beta(E_i - \mu N_i)}/\Xi$.

## Fuentes para profundizar

- Reif, *Fundamentals of Statistical and Thermal Physics*, cap. 2: introducción al espacio de fases y microestados con ejemplos de espines y gas ideal.
- Kardar, *Statistical Physics of Particles*, cap. 1: definición rigurosa del espacio de fases, medida de Liouville y conteo de estados.
- Landau & Lifshitz, *Statistical Physics*, §1-4: perspectiva más concisa y formal sobre el espacio de fases y la función de distribución estadística.

## Páginas relacionadas

- [Macroestado](#/macroestado)
- [Espacio de fases](#/espacio-de-fases)
- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Entropía de Boltzmann](#/entropia-de-boltzmann)
- [Densidad de estados](#/densidad-de-estados)
- [Paradoja de Gibbs](#/paradoja-de-gibbs)
