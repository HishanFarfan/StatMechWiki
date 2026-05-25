# Capacidad calorífica

## Resumen

La **capacidad calorífica** mide cuánta energía se necesita para elevar la temperatura de un sistema en una unidad. Es una respuesta lineal directamente observable y conecta la termodinámica macroscópica con las fluctuaciones de energía microscópicas.

## Definiciones

A volumen constante:

$$
C_V = \left(\frac{\partial\langle E\rangle}{\partial T}\right)_{V,N} = \frac{\langle(\Delta E)^2\rangle}{k_BT^2} = k_B\beta^2\frac{\partial^2\ln Z}{\partial\beta^2}.
$$

A presión constante:

$$
C_P = \left(\frac{\partial H}{\partial T}\right)_{P,N}.
$$

La diferencia entre ambas:

$$
C_P - C_V = \frac{TV\alpha^2}{\kappa_T} \geq 0,
$$

donde $\alpha = (1/V)(\partial V/\partial T)_P$ y $\kappa_T = -(1/V)(\partial V/\partial P)_T$. Para el gas ideal: $C_P - C_V = Nk_B$.

## Conexión con fluctuaciones de energía

En el ensamble canónico, $C_V$ es proporcional a la varianza de la energía:

$$
C_V = \frac{\langle(\Delta E)^2\rangle}{k_BT^2}.
$$

Un $C_V$ grande indica que el sistema absorbe energía con poco cambio de $T$: sus grados de libertad almacenan energía eficientemente. Un $C_V$ divergente señala un punto crítico donde fluctuaciones de energía a todas las escalas coexisten.

## Ley de Dulong-Petit

Para sólidos clásicos, cada átomo contribuye con tres osciladores armónicos (dos grados cuadráticos cada uno):

$$
\langle E\rangle = 3Nk_BT \implies C_V = 3Nk_B \approx 25\ \text{J/(mol·K)}.
$$

Esta predicción es válida para muchos metales a temperatura ambiente: Al ($24.4$), Cu ($24.5$), Ag ($25.4$), Pb ($26.4$) J/(mol·K).

## Anomalía de Schottky

Sistemas con espectro discreto muestran un máximo de $C_V$ cuando $k_BT \sim \epsilon$ (separación entre niveles). Para un sistema de dos niveles:

$$
C_V = k_B\!\left(\frac{\epsilon}{k_BT}\right)^2 \frac{e^{\epsilon/k_BT}}{(e^{\epsilon/k_BT}+1)^2},
$$

con pico en $k_BT^* \approx 0.42\,\epsilon$. Aparece en sales paramagnéticas, defectos en cristales y espines nucleares.

## Congelamiento cuántico

A bajas temperaturas ($k_BT \ll \hbar\omega$), los modos cuánticos se congelan y su contribución a $C_V$ decae exponencialmente. Esto explica:

- La ley $C_V \propto T^3$ a muy bajas temperaturas (sólido de Debye: fonones acústicos con $\omega\to 0$).
- El decaimiento exponencial predicho por el sólido de Einstein ($C_V \propto e^{-T_E/T}$).
- El congelamiento de modos vibracionales en diatómicas: a 300 K, $C_V \approx \frac{5}{2}Nk_B$ (solo traslación+rotación), no $\frac{7}{2}Nk_B$ (incluye vibración).

## Divergencia en transiciones de fase

Cerca de una transición continua, $C_V$ diverge como

$$
C_V \sim |T - T_c|^{-\alpha_c}.
$$

Para el modelo de Ising 3D: $\alpha_c \approx 0.11$. La divergencia refleja fluctuaciones de energía a todas las escalas de longitud en el punto crítico.

## Fuentes para profundizar

- Schroeder, *An Introduction to Thermal Physics*, cap. 3: $C_V$ del sólido de Einstein, dos niveles, gas ideal.
- Kardar, *Statistical Physics of Particles*, cap. 4: $C_V$ desde la función de partición y relación con fluctuaciones.
- Kittel & Kroemer, *Thermal Physics*, cap. 4: equipartición, congelamiento cuántico y comparación $C_P$-$C_V$.

## Páginas relacionadas

- [Ensamble canónico](#/ensamble-canonico)
- [Fluctuaciones](#/fluctuaciones)
- [Teorema de equipartición](#/teorema-de-equiparticion)
- [Sólido de Einstein](#/solido-de-einstein)
- [Sólido de Debye](#/solido-de-debye)
- [Sistema de dos niveles](#/sistema-de-dos-niveles)
- [Compresibilidad](#/compresibilidad)
