# Paramagnetismo

## Resumen

El **paramagnetismo** es la respuesta magnética de un sistema de momentos magnéticos independientes ante un campo externo $B$. Cada momento tiende a alinearse con el campo (energía mínima), pero la agitación térmica favorece el desorden. El resultado es una magnetización que crece con $B$ y decrece con $T$.

Es uno de los modelos más limpios de mecánica estadística: exactamente soluble, con física rica y aplicaciones directas en resonancia magnética, sales paramagnéticas y física cuántica de espines.

## Modelo: espín $J$ en campo magnético

Un ion con momento angular total $J$ (en unidades de $\hbar$) en un campo $B$ tiene $2J+1$ estados con energías

$$E_m = -g\mu_B m B, \qquad m = -J, -J+1, \ldots, J$$

donde $g$ es el factor de Landé y $\mu_B = e\hbar/2m_e = 9.274\times10^{-24}\ \text{J/T}$ es el magnetón de Bohr.

La función de partición de un ion es

$$Z_1 = \sum_{m=-J}^{J} e^{\beta g\mu_B mB} = \frac{\sinh\!\left[(2J+1)\frac{x}{2J}\right]}{\sinh\!\left[\frac{x}{2J}\right]}$$

donde $x = J g\mu_B B / k_BT$ es el parámetro de saturación. La magnetización por ion es

$$\langle\mu_z\rangle = k_BT\frac{\partial\ln Z_1}{\partial B} = g\mu_B J\,B_J(x)$$

donde $B_J(x)$ es la **función de Brillouin**:

$$B_J(x) = \frac{2J+1}{2J}\coth\!\left(\frac{(2J+1)x}{2J}\right) - \frac{1}{2J}\coth\!\left(\frac{x}{2J}\right)$$

## Caso espín $\frac{1}{2}$ ($J = \frac{1}{2}$, $g = 2$)

Es el caso más común y didáctico. Los dos estados son $m = \pm\frac{1}{2}$ con energías $E_\pm = \mp\mu_B B$:

$$Z_1 = e^{\beta\mu_B B} + e^{-\beta\mu_B B} = 2\cosh(\beta\mu_B B)$$

$$\langle\mu_z\rangle = \mu_B\tanh(\beta\mu_B B)$$

Para $N$ momentos independientes, la **magnetización total** es

$$M = N\mu_B\tanh\!\left(\frac{\mu_B B}{k_BT}\right)$$

y la función de Brillouin se reduce a $B_{1/2}(x) = \tanh(x)$.

## Límites y la ley de Curie

**Saturación** ($\mu_B B \gg k_BT$): $\tanh(x) \to 1$, todos los momentos alineados, $M \to N\mu_B$.

**Límite lineal — ley de Curie** ($\mu_B B \ll k_BT$): $\tanh(x) \approx x$:

$$M \approx \frac{N\mu_B^2 B}{k_BT} = \frac{C B}{T}$$

donde $C = N\mu_B^2/k_B$ es la **constante de Curie**. La susceptibilidad es

$$\chi = \frac{\mu_0 M}{B} = \frac{\mu_0 C}{T} \quad \text{(ley de Curie)}$$

La ley de Curie ($\chi \propto 1/T$) es la señal más directa del paramagnetismo y permite determinar el número de momentos magnéticos por unidad de volumen.

Para espín $J$ general, $C = N g^2 \mu_B^2 J(J+1)/(3k_B)$.

## Temperatura de saturación

El cruce entre el régimen lineal y el de saturación ocurre en $k_BT^* \sim \mu_B B$:

$$T^* = \frac{\mu_B B}{k_B}$$

Para $B = 1\ \text{T}$: $T^* \approx 0.67\ \text{K}$. A temperatura ambiente, los espines están lejos de la saturación ($\mu_B B / k_BT \approx 2\times10^{-3}$) y la ley de Curie es exacta.

## Energía y capacidad calorífica

$$\langle E\rangle = -N\mu_B B\tanh(\beta\mu_B B)$$

$$C = Nk_B\left(\frac{\mu_B B}{k_BT}\right)^2 \text{sech}^2\!\left(\frac{\mu_B B}{k_BT}\right)$$

Esta capacidad calorífica tiene el **pico de Schottky** a $k_BT \approx 0.83\,\mu_B B$: un máximo en $C(T)$ que aparece cuando la energía térmica es comparable con la separación entre niveles. Es una señal característica de sistemas de dos niveles, observable en sales paramagnéticas.

## Enfriamiento adiabático por desmagnetización

Si se reduce $B$ adiabáticamente (manteniendo $S$ constante), la temperatura disminuye. Esto se llama **enfriamiento adiabático por desmagnetización** y es uno de los métodos más potentes para alcanzar temperaturas por debajo de 1 K.

La entropía del sistema de espines en campo $B$ es

$$S(T,B) = Nk_B\left[\ln(2\cosh u) - u\tanh u\right], \quad u = \frac{\mu_B B}{k_BT}$$

Manteniendo $S$ constante al reducir $B$: $u = \mu_B B/k_BT = \text{cte}$, de modo que $T \propto B$. Reducir $B$ por un factor 10 reduce $T$ por un factor 10.

## Paramagnetos reales: ley de Curie-Weiss

En materiales reales, las interacciones entre momentos modifican la ley de Curie:

$$\chi = \frac{C}{T - \theta_C}$$

donde $\theta_C$ es la temperatura de Curie-Weiss. Para $\theta_C > 0$: transición ferromagnética a $T_C = \theta_C$. Para $\theta_C < 0$: comportamiento antiferromagnético. Para $\theta_C = 0$: paramagnetismo puro (momentos no interactuantes).

La ley de Curie-Weiss se deriva del modelo de campo medio (teoría de Weiss) o del modelo de Ising en aproximación de campo medio.

## Fuentes para profundizar

- Schroeder, *An Introduction to Thermal Physics*, cap. 3: paramagnetismo de espín-1/2 con cálculo detallado de $M(T,B)$ y pico de Schottky.
- Blundell, *Magnetism in Condensed Matter* (2001): tratamiento completo desde paramagnetismo hasta ferromagnetismo, incluyendo la función de Brillouin para $J$ arbitrario.
- Kittel, *Introduction to Solid State Physics*, cap. 11: paramagnetismo de Pauli, ley de Curie-Weiss, y materiales reales.
- Kardar, *Statistical Physics of Particles*, cap. 4: paramagnetismo en el contexto del ensamble canónico y la función de partición.

## Páginas relacionadas

- [Sistema de dos niveles](#/sistema-de-dos-niveles)
- [Función de partición](#/funcion-de-particion)
- [Distribución de Boltzmann](#/distribucion-de-boltzmann)
- [Temperatura estadística](#/temperatura-estadistica)
- [Modelo de Ising](#/modelo-de-ising)
- [Gas de Fermi](#/gas-de-fermi)
