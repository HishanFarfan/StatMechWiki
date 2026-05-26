# Condensación de Bose-Einstein

## Resumen

La **condensación de Bose-Einstein** (BEC) es una transición de fase en la que una fracción macroscópica de bosones ocupa el estado de mínima energía por debajo de una temperatura crítica $T_c$. Es una consecuencia directa de la estadística de Bose-Einstein y no requiere interacciones.

## Mecanismo: saturación de los estados excitados

A temperatura fija, el número de bosones que puede alojarse en los estados excitados ($\epsilon > 0$) tiene un máximo, alcanzado cuando $\mu \to 0^-$:

$$
N_{\text{exc}}^{\max}(T) = \int_0^\infty \frac{g(\epsilon)}{e^{\beta\epsilon}-1}\,d\epsilon.
$$

Para el gas libre en 3D, con $g(\epsilon) = \frac{2\pi(2m)^{3/2}}{h^3}V\sqrt{\epsilon}$:

$$
N_{\text{exc}}^{\max}(T) = \frac{V}{\lambda_T^3}\,\zeta\!\left(\tfrac{3}{2}\right), \qquad \zeta\!\left(\tfrac{3}{2}\right) \approx 2.612,
$$

donde $\lambda_T = h/\sqrt{2\pi mk_BT}$ es la longitud de onda térmica.

Cuando $N > N_{\text{exc}}^{\max}(T)$, el exceso de partículas **no cabe** en los estados excitados y se acumula en el estado fundamental: comienza la BEC.

## Temperatura crítica

La condición $N = N_{\text{exc}}^{\max}(T_c)$ da

$$
T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3} \approx \frac{3.31\hbar^2 n^{2/3}}{mk_B}.
$$

Equivalentemente, la condensación ocurre cuando $n\lambda_T^3 = \zeta(3/2) \approx 2.612$: los paquetes de onda se superponen.

## Fracción condensada

Para $T < T_c$, con $\mu = 0$ exactamente:

$$
\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}.
$$

A $T = 0$: todos los bosones están en el estado fundamental ($N_0 = N$). En $T = T_c$: $N_0 = 0$, comienza la condensación al bajar la temperatura.

## Termodinámica del condensado

Por debajo de $T_c$, $\mu = 0$ y toda la termodinámica proviene de los modos excitados. La energía es

$$
\langle E\rangle = \frac{3}{2}k_BT\frac{V}{\lambda_T^3}\zeta\!\left(\tfrac{5}{2}\right), \qquad \zeta\!\left(\tfrac{5}{2}\right) \approx 1.342,
$$

y el calor específico $C_V \propto T^{3/2}$ para $T < T_c$ (en 3D).

La transición es de **segundo orden** (continua): $N_0/N$ va a cero continuamente en $T_c$. No hay calor latente, pero hay una discontinuidad en $C_V$.

## Realización experimental

- **$^4$He líquido**: transición λ a $T_\lambda = 2.17$ K a presión atmosférica. Debajo, el helio se vuelve superfluido (viscosidad cero). La BEC es parcial (~10%) por las interacciones fuertes.
- **Gases ultrafríos** (1995): Cornell & Wieman (rubidio $^{87}$Rb) y Ketterle (sodio $^{23}$Na) lograron BEC en gases atómicos diluidos con $T_c \sim 100$ nK. Las interacciones son pequeñas y la teoría de gas ideal aplica bien. Premio Nobel 2001.

## BEC en 2D y 1D

En 2D, la densidad de estados es constante: $N_{\text{exc}}^{\max}$ diverge para cualquier $T > 0$ (integral $\int d\epsilon/(e^\epsilon-1)$ diverge en 2D). No hay verdadera BEC en 2D en el límite termodinámico; en cambio hay una **transición de Berezinskii-Kosterlitz-Thouless** (BKT) con suprafluido de cuasi-orden de largo alcance.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 7: saturación de estados excitados, temperatura crítica, termodinámica del condensado.
- Pitaevskii & Stringari, *Bose-Einstein Condensation* (2003): tratamiento teórico completo incluyendo interacciones.
- Ketterle, Nobel Lecture (2001): descripción experimental de la BEC en gases atómicos ultrafríos.

## Páginas relacionadas

- [Distribución de Bose-Einstein](#/distribucion-bose-einstein)
- [Estadísticas cuánticas](#/estadisticas-cuanticas)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
- [Densidad de estados](#/densidad-de-estados)
- [Potencial químico](#/potencial-quimico)
- [Gas de Fermi](#/gas-de-fermi)
