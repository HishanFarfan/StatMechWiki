# Compresibilidad

## Resumen

La **compresibilidad** mide la respuesta relativa del volumen de un sistema ante un cambio de presión. Es una cantidad termodinámica de respuesta lineal directamente relacionada con las fluctuaciones del número de partículas en el ensamble gran canónico.

## Definiciones

**Compresibilidad isotérmica** (a $T$ constante):

$$
\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_{T,N} \geq 0.
$$

**Compresibilidad adiabática** (a $S$ constante):

$$
\kappa_S = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_{S,N} \geq 0.
$$

La relación entre ambas es

$$
\frac{\kappa_T}{\kappa_S} = \frac{C_P}{C_V} \equiv \gamma \geq 1.
$$

En el gas ideal: $\kappa_T = 1/P$ y $\kappa_S = 1/\gamma P$, con $\gamma = C_P/C_V = 5/3$ para gas monoatómico.

## Velocidad del sonido

La velocidad del sonido en un fluido se propaga adiabáticamente:

$$
v_s = \sqrt{\frac{1}{\rho\,\kappa_S}} = \sqrt{\frac{\gamma k_BT}{m}},
$$

donde $\rho = mn$ es la densidad másica. Para aire a 20°C: $v_s \approx 343\ \text{m/s}$. La compresibilidad isotérmica daría $v_s = \sqrt{k_BT/m}$, un valor incorrecto predicho por Newton (que no conocía la adiabaticidad de las ondas sonoras).

## Relación con fluctuaciones de $N$

En el ensamble gran canónico, las fluctuaciones del número de partículas están relacionadas con $\kappa_T$:

$$
\langle(\Delta N)^2\rangle = Nk_BT\kappa_T\,\frac{N}{V}.
$$

O equivalentemente,

$$
\kappa_T = \frac{v}{k_BT}\frac{\langle(\Delta N)^2\rangle}{N},
$$

donde $v = V/N$ es el volumen por partícula. Esta relación es una **relación de fluctuación-respuesta**: la susceptibilidad mecánica ($\kappa_T$) es proporcional a las fluctuaciones del observable conjugado ($N$).

## Módulo de compresibilidad

El inverso de la compresibilidad es el **módulo de compresibilidad** (bulk modulus):

$$
K = \frac{1}{\kappa_T} = -V\left(\frac{\partial P}{\partial V}\right)_{T,N}.
$$

Para sólidos, $K$ es del orden de GPa ($K_{\text{acero}} \approx 160\ \text{GPa}$, $K_{\text{agua}} \approx 2.2\ \text{GPa}$). Para gases a presión atmosférica, $K = \gamma P \approx 1.4 \times 10^5\ \text{Pa}$.

## Condición de estabilidad

La estabilidad mecánica requiere $\kappa_T \geq 0$: si la presión disminuyera al comprimir el sistema, cualquier fluctuación de densidad crecería exponencialmente (inestabilidad espinodal). La condición equivalente es

$$
\left(\frac{\partial^2 F}{\partial V^2}\right)_{T,N} = \frac{1}{V\kappa_T} \geq 0,
$$

es decir, $F$ es convexo en $V$.

## Divergencia en el punto crítico

En el punto crítico de un fluido, $\kappa_T$ diverge:

$$
\kappa_T \sim |T - T_c|^{-\gamma_c},
$$

con el exponente crítico $\gamma_c \approx 1.24$ (clase de universalidad de Ising 3D). Esta divergencia refleja la aparición de fluctuaciones de densidad a todas las escalas (dispersión de luz → opacidad crítica).

## Fuentes para profundizar

- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 8: estabilidad y compresibilidad.
- Kardar, *Statistical Physics of Particles*, cap. 4: relación fluctuación-respuesta para $N$.
- Landau & Lifshitz, *Statistical Physics I*, cap. 4: fluctuaciones termodinámicas y susceptibilidades.

## Páginas relacionadas

- [Fluctuaciones](#/fluctuaciones)
- [Potencial gran canónico](#/potencial-gran-canonico)
- [Estabilidad termodinámica](#/estabilidad-termodinamica)
- [Susceptibilidad](#/susceptibilidad)
- [Ecuación de estado](#/ecuacion-de-estado)
- [Capacidad calorífica](#/capacidad-calorifica)
