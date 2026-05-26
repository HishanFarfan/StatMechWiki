# Gas de Fermi

## Resumen

El **gas de Fermi libre** es un sistema de $N$ fermiones idénticos no interactuantes confinados en un volumen $V$. A pesar de la ausencia de interacciones, su comportamiento a bajas temperaturas difiere radicalmente del gas clásico: la energía cinética, la presión y el calor específico están dominados por el principio de exclusión de Pauli.

## Estructura a $T = 0$: esfera de Fermi

Los estados de una partícula en una caja son planos de onda $\mathbf{k}$. Con degeneración de espín $g_s = 2s+1$, el número de estados con $|\mathbf{k}| < k$ es $g_s V k^3/(6\pi^2)$. La condición $N = g_s V k_F^3/(6\pi^2)$ da el **vector de onda de Fermi**:

$$
k_F = \left(\frac{6\pi^2 n}{g_s}\right)^{1/3}.
$$

Para electrones ($g_s = 2$): $k_F = (3\pi^2 n)^{1/3}$. La **energía de Fermi** es

$$
\epsilon_F = \frac{\hbar^2 k_F^2}{2m} = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}.
$$

## Densidad de estados y propiedades a $T = 0$

La densidad de estados para $\epsilon < \epsilon_F$ es

$$
g(\epsilon) = \frac{3N}{2\epsilon_F^{3/2}}\,\epsilon^{1/2}.
$$

**Energía total**:
$$
E_0 = \int_0^{\epsilon_F}\epsilon\,g(\epsilon)\,d\epsilon = \frac{3}{5}N\epsilon_F.
$$

**Presión de degeneración**:
$$
P_0 = \frac{2}{3}\frac{E_0}{V} = \frac{2}{5}n\epsilon_F = \frac{\hbar^2}{5m}(3\pi^2)^{2/3}n^{5/3}.
$$

## Propiedades a temperatura finita: expansión de Sommerfeld

Para $T \ll T_F$, la corrección térmica más importante a la energía es

$$
E(T) = E_0\left[1 + \frac{5\pi^2}{12}\left(\frac{T}{T_F}\right)^2 + \ldots\right],
$$

y el calor específico electrónico es

$$
C_V = \frac{\pi^2}{2}Nk_B\frac{T}{T_F} = \gamma\,T,
$$

con $\gamma = \pi^2 Nk_B/(2T_F)$ el **coeficiente de Sommerfeld**. A muy bajas temperaturas ($T \lesssim 10\ \text{K}$ en metales), $C_V = \gamma T + AT^3$ donde $\gamma T$ es la contribución electrónica y $AT^3$ la de fonones (Debye).

## Comparación: clásico vs. cuántico

| Propiedad | Gas ideal clásico | Gas de Fermi ($T \ll T_F$) |
|---|---|---|
| Energía | $\frac{3}{2}Nk_BT$ | $\frac{3}{5}N\epsilon_F$ |
| Presión | $Nk_BT/V$ | $\frac{2}{5}n\epsilon_F$ |
| $C_V$ | $\frac{3}{2}Nk_B$ | $\frac{\pi^2}{2}Nk_B(T/T_F)$ |
| $\mu$ | $k_BT\ln(n\lambda_T^3) < 0$ | $\epsilon_F > 0$ |

## Aplicaciones

- **Electrones en metales**: $T_F \sim 10^4$–$10^5$ K → completamente degenerados a temperatura ambiente. El calor específico electrónico $C_V = \gamma T$ es observable a $T < 10$ K (debajo de la contribución de fonones).
- **Helio-3** ($^3\text{He}$): fermión con $T_F \approx 2.7$ K → observable la degeneración a temperaturas del helio líquido.
- **Enanas blancas**: la presión de degeneración electrónica soporta la estrella contra el colapso gravitacional.
- **Estrellas de neutrones**: la presión de degeneración neutrónica.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 7: gas de Fermi libre, esfera de Fermi y expansión de Sommerfeld.
- Kittel, *Introduction to Solid State Physics*, cap. 6: modelo de Sommerfeld para electrones en metales.
- Ashcroft & Mermin, *Solid State Physics*, caps. 2-3: gas de Fermi libre, superficie de Fermi y calor específico electrónico.

## Páginas relacionadas

- [Energía de Fermi](#/energia-de-fermi)
- [Distribución de Fermi-Dirac](#/distribucion-fermi-dirac)
- [Presión de degeneración](#/presion-de-degeneracion)
- [Densidad de estados](#/densidad-de-estados)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
- [Estadísticas cuánticas](#/estadisticas-cuanticas)
