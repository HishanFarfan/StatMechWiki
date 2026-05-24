# Sólido de Debye

## Resumen

El **sólido de Debye** (1912) modela un sólido cristalino como un medio elástico continuo con $3N$ modos normales de vibración (fonones) con densidad de estados $g(\omega)\propto\omega^2$, truncada en una frecuencia de corte $\omega_D$. Reproduce correctamente la ley $C\propto T^3$ a bajas temperaturas, en contraste con el sólido de Einstein que predice un decaimiento exponencial.

## Motivación: el fracaso de Einstein a bajas temperaturas

El sólido de Einstein predice $C_V \propto (T_E/T)^2 e^{-T_E/T}$, que decae exponencialmente a bajas temperaturas. Los experimentos muestran $C_V \propto T^3$. La discrepancia se debe a que los modos acústicos de larga longitud de onda tienen frecuencias arbitrariamente bajas ($\omega \to 0$ cuando $k \to 0$) y no están capturados por una frecuencia única $\omega_E$.

## Modelo: densidad de estados de Debye

Debye aproxima el sólido como un medio elástico continuo isotrópico con velocidad del sonido $v$. El número de modos entre $\omega$ y $\omega + d\omega$ es

$$
g(\omega) = \frac{9N}{\omega_D^3}\,\omega^2, \qquad 0 \leq \omega \leq \omega_D,
$$

normalizada para que $\int_0^{\omega_D} g(\omega)\,d\omega = 3N$ (hay $3N$ modos en total: 2 transversales + 1 longitudinal).

La **frecuencia de Debye** $\omega_D$ se fija por la condición de normalización. En términos de la densidad numérica $n = N/V$:

$$
\omega_D = v_s\left(6\pi^2 n\right)^{1/3},
$$

donde $v_s$ es una velocidad media efectiva combinando modos longitudinales y transversales. La **temperatura de Debye** es

$$
T_D = \frac{\hbar\omega_D}{k_B}.
$$

## Energía interna

Cada modo de frecuencia $\omega$ es un oscilador cuántico con energía media $\hbar\omega(\langle n\rangle + \frac{1}{2})$. La energía total es

$$
\langle E\rangle
=
\int_0^{\omega_D} g(\omega)\,\hbar\omega\left(\frac{1}{e^{\hbar\omega/k_BT}-1}+\frac{1}{2}\right)d\omega.
$$

Ignorando la energía de punto cero (constante) y usando el cambio de variable $x = \hbar\omega/k_BT$:

$$
\langle E\rangle
=
9Nk_BT\left(\frac{T}{T_D}\right)^3
\int_0^{T_D/T}\frac{x^3}{e^x-1}\,dx.
$$

## Capacidad calorífica

$$
C_V
=
9Nk_B\left(\frac{T}{T_D}\right)^3
\int_0^{T_D/T}\frac{x^4 e^x}{(e^x-1)^2}\,dx.
$$

Esta es la **función de Debye** $D(T_D/T)$.

### Límite de alta temperatura ($T \gg T_D$)

Para $x \ll 1$, el integrando se aproxima por $x^2$:

$$
C_V \to 3Nk_B \qquad \text{(ley de Dulong-Petit)}.
$$

### Límite de baja temperatura ($T \ll T_D$)

El límite superior $T_D/T \to \infty$; la integral converge a $\int_0^\infty x^3/(e^x-1)\,dx = \pi^4/15$:

$$
\langle E\rangle \approx \frac{3\pi^4}{5}Nk_BT\left(\frac{T}{T_D}\right)^3,
\qquad
C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{T_D}\right)^3.
$$

La ley $C_V\propto T^3$ reproduce exactamente los datos experimentales a bajas temperaturas.

## Temperaturas de Debye de algunos sólidos

| Sólido | $T_D$ (K) | Comportamiento a 300 K |
|---|---|---|
| Diamante | 2230 | $T < T_D$: régimen cuántico, $C \ll 3Nk_B$ |
| Silicio | 645 | cerca del cruce |
| Aluminio | 428 | $T \sim T_D$: transición |
| Cobre | 343 | $T \sim T_D$ |
| Plata | 225 | $T > T_D$: Dulong-Petit |
| Plomo | 105 | $T \gg T_D$: completamente clásico |

En los metales, hay además la contribución electrónica $C_e \propto T$ (gas de Fermi degenerado), que domina a temperaturas muy bajas ($T \ll 1\ \text{K}$) donde $T^3$ ya es despreciable.

## Entropía a baja temperatura

$$
S = \frac{4\pi^4}{5}Nk_B\left(\frac{T}{T_D}\right)^3 \to 0 \quad (T \to 0),
$$

en acuerdo con el tercer principio de la termodinámica.

## Limitaciones del modelo de Debye

1. **Dispersión no lineal**: en cristales reales $\omega(k)$ no es lineal para $k$ cercano al borde de la zona de Brillouin. La aproximación $\omega = v_s k$ solo es válida para $k \ll \pi/a$.

2. **Anisotropía**: Debye asume un medio isótropo con velocidad única. Cristales no cúbicos tienen velocidades diferentes en distintas direcciones.

3. **Contribución electrónica**: en metales, los electrones de conducción contribuyen $C_e = \gamma T$ con $\gamma = \pi^2 k_B^2 g(\epsilon_F)/3$. A bajas $T$, $C_V = \gamma T + AT^3$.

4. **Fonones ópticos**: en sólidos con base (≥2 átomos por celda unidad), hay ramas ópticas con frecuencias altas. El modelo de Debye solo captura las ramas acústicas.

5. **Efectos anharmónicos**: a temperaturas altas, las vibraciones no son perfectamente armónicas. Esto causa expansión térmica y conductividad térmica finita, fenómenos ausentes en el modelo de Debye.

## Fuentes para profundizar

- Debye, "Zur Theorie der spezifischen Wärmen", *Annalen der Physik* 39, 789 (1912): el artículo original.
- Kittel, *Introduction to Solid State Physics*, cap. 5: modelos de Einstein y Debye, densidad de fonones, comparación con datos.
- Kardar, *Statistical Physics of Particles*, cap. 6: derivación del modelo de Debye en el contexto de gases cuánticos y fonones.
- Ashcroft & Mermin, *Solid State Physics*, cap. 23: fonones en sólidos reales, dispersión de fonones y correcciones al modelo de Debye.

## Páginas relacionadas

- [Sólido de Einstein](#/solido-de-einstein)
- [Densidad de estados](#/densidad-de-estados)
- [Fonones](#/fonones)
- [Oscilador armónico](#/oscilador-armonico)
- [Gas de Fermi](#/gas-de-fermi)
- [Ley de Planck](#/ley-de-planck)
