# Energía de Fermi

## Resumen

La **energía de Fermi** $\epsilon_F$ es la energía del estado ocupado más alto en un gas de Fermi libre a temperatura cero. Define la escala de energía que separa el régimen degenerado ($k_BT \ll \epsilon_F$) del clásico ($k_BT \gg \epsilon_F$).

## Definición y derivación

A $T = 0$, la distribución de Fermi-Dirac es una función escalón: todos los estados con $\epsilon < \epsilon_F$ están llenos y los demás vacíos. La condición de normalización $N = \int_0^{\epsilon_F} g(\epsilon)\,d\epsilon$ con la densidad de estados 3D $g(\epsilon) = (3N/2\epsilon_F^{3/2})\sqrt{\epsilon}$ da

$$
\epsilon_F = \frac{\hbar^2}{2m}\left(3\pi^2 n\right)^{2/3},
$$

donde $n = N/V$ es la densidad numérica y el factor $3\pi^2$ incluye la degeneración de espín $g_s = 2$ para electrones ($s = 1/2$).

El **vector de onda de Fermi** $k_F = (3\pi^2 n)^{1/3}$ define la esfera de Fermi en el espacio $\mathbf{k}$.

## Valores numéricos para metales

| Metal | $n$ ($10^{28}\ \text{m}^{-3}$) | $\epsilon_F$ (eV) | $T_F$ ($10^4$ K) |
|---|---|---|---|
| Li | 4.7 | 4.7 | 5.5 |
| Na | 2.65 | 3.2 | 3.7 |
| Cu | 8.5 | 7.0 | 8.2 |
| Al | 18.1 | 11.7 | 13.6 |
| Fe | 17.0 | 11.1 | 13.0 |

A temperatura ambiente ($k_BT \approx 0.025\ \text{eV}$), la razón $k_BT/\epsilon_F \sim 10^{-3}$: los electrones en metales están completamente degenerados.

## Temperatura de Fermi

$$
T_F = \frac{\epsilon_F}{k_B} \approx (10^4\text{–}10^5)\ \text{K para metales}.
$$

El gas de electrones en metales está degenerado a temperatura ambiente porque $T \ll T_F$. Solo una fracción $\sim T/T_F$ de los electrones, aquellos en la capa de grosor $k_BT$ alrededor de $\epsilon_F$, participa en los procesos térmicos.

## Dependencia con la temperatura

La corrección de Sommerfeld al potencial químico es

$$
\mu(T) = \epsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{T}{T_F}\right)^2 - \frac{\pi^4}{80}\left(\frac{T}{T_F}\right)^4 + \ldots\right].
$$

A $T = 0$, $\mu = \epsilon_F$. Al aumentar $T$, $\mu$ disminuye ligeramente (los estados de alta energía se pueblan a expensas de los de baja energía).

## Energía total a $T = 0$

Integrando sobre todos los estados llenos:

$$
E_0 = \int_0^{\epsilon_F}\epsilon\,g(\epsilon)\,d\epsilon = \frac{3}{5}N\epsilon_F.
$$

Cada uno de los $N$ fermiones tiene, en promedio, $\frac{3}{5}\epsilon_F$ de energía cinética, incluso a $T = 0$.

## Fuentes para profundizar

- Kittel, *Introduction to Solid State Physics*, cap. 6: energía de Fermi, temperatura de Fermi y propiedades electrónicas de metales.
- Kardar, *Statistical Physics of Particles*, cap. 7: derivación de $\epsilon_F$ y la expansión de Sommerfeld.
- Ashcroft & Mermin, *Solid State Physics*, cap. 2: propiedades del gas de Fermi libre, teoría de Drude y Sommerfeld.

## Páginas relacionadas

- [Gas de Fermi](#/gas-de-fermi)
- [Distribución de Fermi-Dirac](#/distribucion-fermi-dirac)
- [Presión de degeneración](#/presion-de-degeneracion)
- [Densidad de estados](#/densidad-de-estados)
- [Estadísticas cuánticas](#/estadisticas-cuanticas)
