# Sólido de Einstein

## Resumen

El **sólido de Einstein** (1907) modela un sólido cristalino como $N$ osciladores armónicos cuánticos independientes, todos con la misma frecuencia $\omega$. Fue el primer modelo cuántico de un sólido y resolvió el misterio de por qué el calor específico del diamante caía a bajas temperaturas, en contradicción con la ley de Dulong-Petit clásica.

## Hamiltoniano y función de partición

Cada átomo oscila en tres dimensiones. Con $3N$ osciladores de frecuencia $\omega_E$, la función de partición total es

$$Z = Z_1^{3N}, \qquad Z_1 = \sum_{n=0}^\infty e^{-\beta\hbar\omega_E(n+1/2)} = \frac{e^{-\beta\hbar\omega_E/2}}{1-e^{-\beta\hbar\omega_E}}$$

Usando $x = \beta\hbar\omega_E = T_E/T$ donde $T_E = \hbar\omega_E/k_B$ es la **temperatura de Einstein**:

$$Z_1 = \frac{e^{-x/2}}{1-e^{-x}}, \qquad \ln Z_1 = -\frac{x}{2} - \ln(1-e^{-x})$$

$$Z = Z_1^{3N} \implies \ln Z = 3N\left[-\frac{x}{2} - \ln(1-e^{-x})\right]$$

## Energía interna

$$\langle E\rangle = -\frac{\partial\ln Z}{\partial\beta} = 3N\hbar\omega_E\left(\langle n\rangle + \frac{1}{2}\right), \quad \langle n\rangle = \frac{1}{e^x - 1}$$

El número de ocupación de Planck $\langle n\rangle = 1/(e^{\hbar\omega_E/k_BT}-1)$ es el resultado que comparte con la distribución de Bose-Einstein (los cuantos de vibración son bosones).

**Límite de alta temperatura** ($T \gg T_E$, es decir $x \ll 1$):
$$\langle n\rangle \approx \frac{k_BT}{\hbar\omega_E}, \qquad \langle E\rangle \approx 3Nk_BT$$
→ ley de Dulong-Petit clásica.

**Límite de baja temperatura** ($T \ll T_E$, $x \gg 1$):
$$\langle E\rangle \approx \frac{3}{2}N\hbar\omega_E + 3N\hbar\omega_E\,e^{-T_E/T}$$
El término constante es la energía del punto cero; el segundo decae exponencialmente.

## Capacidad calorífica

$$C_V = \frac{\partial\langle E\rangle}{\partial T} = 3Nk_B\left(\frac{T_E}{T}\right)^2\frac{e^{T_E/T}}{(e^{T_E/T}-1)^2}$$

Esta es la **función de Einstein**. Sus propiedades:

- **Alta temperatura**: $C_V \to 3Nk_B$ (Dulong-Petit). Para $T \gg T_E$, todos los modos vibracionales están activos.
- **Baja temperatura**: $C_V \propto (T_E/T)^2 e^{-T_E/T} \to 0$ más rápido que cualquier potencia.
- **Máximo a temperatura finita**: no hay máximo (función monotónicamente creciente hacia la saturación $3Nk_B$).

## Temperatura de Einstein para algunos sólidos

| Sólido | $T_E$ (K) | $C_V(300\text{ K})$ / $3Nk_B$ |
|---|---|---|
| Diamante | 1320 | 0.43 |
| Silicio | 625 | 0.93 |
| Cobre | 244 | ≈ 1.00 |
| Plomo | 88 | ≈ 1.00 |

Einstein ajustó su modelo al calor específico del diamante con $T_E = 1325\ \text{K}$ (1907), obteniendo el primer acuerdo entre mecánica cuántica y datos termodinámicos.

## Entropía y energía libre

$$F = -k_BT\ln Z = 3N\left[\frac{\hbar\omega_E}{2} + k_BT\ln(1-e^{-x})\right]$$

$$S = -\frac{\partial F}{\partial T} = 3Nk_B\left[\frac{x}{e^x-1} - \ln(1-e^{-x})\right]$$

**A $T=0$**: $S \to 0$ (tercer principio de la termodinámica). El sólido de Einstein satisface automáticamente la ley cero de Nernst: la entropía se anula en el cero absoluto porque el estado fundamental no está degenerado.

## Limitación: la ley de Debye $C \propto T^3$

El sólido de Einstein predice $C_V \propto e^{-T_E/T}$ a bajas temperaturas, un decaimiento exponencial. Los experimentos muestran $C_V \propto T^3$. La discrepancia se debe a que Einstein asignó la misma frecuencia a todos los modos. En realidad, los modos acústicos de larga longitud de onda tienen frecuencias bajas ($\omega \propto k$) y contribuyen significativamente a bajas temperaturas.

El [sólido de Debye](#/solido-de-debye) corrige esto usando una distribución de frecuencias $g(\omega) \propto \omega^2$ hasta una frecuencia máxima de corte $\omega_D$, y reproduce la ley $C \propto T^3$.

## Conexión con el ensamble microcanónico

El sólido de Einstein fue el modelo con el que Boltzmann y Einstein conectaron el ensamble microcanónico con la cuantización. El número de microestados de $N$ osciladores con $q$ cuantos de energía total es:

$$\Omega(q,N) = \binom{q+N-1}{N-1}$$

Esto es exactamente el número de maneras de distribuir $q$ objetos idénticos en $N$ cajas. La entropía microcanónica $S = k_B\ln\Omega$ reproduce los mismos resultados que el cálculo canónico en el límite termodinámico.

## Fuentes para profundizar

- Einstein, "Die Plancksche Theorie der Strahlung und die Theorie der spezifischen Wärme", *Annalen der Physik* 22, 180 (1907): el artículo original.
- Schroeder, *An Introduction to Thermal Physics*, cap. 3: sólido de Einstein tratado desde el ensamble microcanónico, muy didáctico.
- Kardar, *Statistical Physics of Particles*, cap. 6: sólido de Einstein y Debye en el contexto de gases cuánticos y fonones.
- Kittel, *Introduction to Solid State Physics*, cap. 5: modelos de fonones, Einstein vs. Debye, comparación con datos.

## Páginas relacionadas

- [Sistema de dos niveles](#/sistema-de-dos-niveles)
- [Sólido de Debye](#/solido-de-debye)
- [Distribución de Boltzmann](#/distribucion-de-boltzmann)
- [Función de partición](#/funcion-de-particion)
- [Densidad de estados](#/densidad-de-estados)
- [Fonones](#/fonones)
