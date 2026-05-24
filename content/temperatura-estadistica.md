# Temperatura estadística

## Resumen

La **temperatura estadística** se define a partir de la entropía de un sistema aislado:

$$\frac{1}{T} = \left(\frac{\partial S}{\partial E}\right)_{V,N}$$

Esta definición no es un postulado: se deriva del principio de maximización de la entropía al poner dos sistemas en contacto térmico. Conecta la descripción microscópica (conteo de microestados) con la propiedad macroscópica que gobierna el flujo de calor.

## Derivación desde el contacto térmico

Considera dos sistemas $A$ y $B$ que pueden intercambiar energía pero tienen volúmenes y números de partículas fijos. La energía total es $E = E_A + E_B = \text{cte}$. El número total de microestados del sistema combinado es

$$\Omega(E_A) = \Omega_A(E_A)\,\Omega_B(E - E_A)$$

El equilibrio térmico corresponde al valor de $E_A$ que maximiza $\Omega$ (o equivalentemente $S = S_A + S_B$). La condición de máximo es

$$\frac{\partial \ln\Omega_A}{\partial E_A} = \frac{\partial \ln\Omega_B}{\partial E_B}$$

$$\frac{1}{k_B}\frac{\partial S_A}{\partial E_A} = \frac{1}{k_B}\frac{\partial S_B}{\partial E_B}$$

Definiendo $1/T \equiv (\partial S/\partial E)_{V,N}$, la condición de equilibrio es $T_A = T_B$. Si $T_A \neq T_B$ inicialmente, la entropía crece cuando fluye energía desde el sistema caliente hacia el frío, hasta que los dos lleguen al mismo $T$.

## El parámetro $\beta$

En la práctica es más común trabajar con

$$\beta = \frac{1}{k_BT}$$

que aparece naturalmente en los pesos de Boltzmann $e^{-\beta E}$, en el ensamble canónico y en la función de partición. El parámetro $\beta$ tiene unidades de inverso de energía y puede interpretarse como la "pendiente" de $\ln\Omega$ frente a $E$:

$$\beta = \frac{\partial \ln\Omega}{\partial E} = \frac{1}{k_B}\frac{\partial S}{\partial E}$$

Para la mayoría de sistemas clásicos con $N$ grande, $\Omega \propto E^{\alpha N}$ con $\alpha$ de orden 1, de modo que $\beta \sim \alpha N/E$ y $T \sim E/(\alpha Nk_B)$: la temperatura es proporcional a la energía por partícula. Esto es la base del teorema de equipartición.

## Ejemplos de cálculo

### Gas ideal monoatómico

$$S = Nk_B\left[\frac{3}{2}\ln E + \ldots\right] \implies \frac{1}{T} = \frac{\partial S}{\partial E} = \frac{3Nk_B}{2E}$$

$$\implies E = \frac{3}{2}Nk_BT$$

Resultado: cada grado de libertad traslacional contribuye $\frac{1}{2}k_BT$ a la energía.

### Sistema de $N$ espines de dos niveles

Con $n$ espines en el estado de energía $+\varepsilon$ y $N-n$ en $-\varepsilon$:

$$S = k_B\ln\binom{N}{n} \approx -Nk_B\left[x\ln x + (1-x)\ln(1-x)\right], \quad x = n/N$$

La energía es $E = (2n-N)\varepsilon$, de modo que $x = (1 + E/N\varepsilon)/2$ y

$$\frac{1}{T} = \frac{\partial S}{\partial E} = \frac{\partial S}{\partial x}\frac{\partial x}{\partial E} = \frac{k_B}{2\varepsilon}\ln\frac{1-x}{x}$$

Invirtiendo:

$$T = \frac{2\varepsilon}{k_B\ln[(N-n)/n]}$$

Para $n < N/2$ (mayoría en el estado de baja energía), $T > 0$. Para $n > N/2$, $T < 0$. Véase [Temperatura negativa](#/ensamble-microcanonico) en la entrada del ensamble microcanónico.

### Oscilador armónico cuántico unidimensional

Con $N$ osciladores y $q$ cuantos de energía distribuidos:

$$S \approx Nk_B\left[(1+u)\ln(1+u) - u\ln u\right], \quad u = q/N$$

donde la energía es $E = q\hbar\omega$. Derivando:

$$T = \frac{\hbar\omega}{k_B\ln(1 + N/q)} = \frac{\hbar\omega/k_B}{\ln(1 + \hbar\omega N/E)}$$

En el límite $E \gg N\hbar\omega$ (alta temperatura): $T \approx E/(Nk_B)$, recuperando el límite clásico.

## Ley cero de la termodinámica

La definición $1/T = (\partial S/\partial E)_{V,N}$ reproduce automáticamente la ley cero: si $A$ está en equilibrio con $B$ y $B$ está en equilibrio con $C$, entonces $T_A = T_B$ y $T_B = T_C$ implica $T_A = T_C$. La temperatura así definida es transitiva porque es una propiedad de $S(E)$, no del par de sistemas.

## Escala de temperatura: Kelvin vs. energía

La escala Kelvin fija $k_B = 1.380\times10^{-23}\ \text{J/K}$. En física teórica y computacional es frecuente medir temperatura directamente en unidades de energía usando $\beta$ o trabajar con $T/T_c$ donde $T_c$ es una temperatura característica del sistema.

| Sistema | Temperatura característica | Valor |
|---|---|---|
| Gas ideal de He a STP | $k_BT$ | $\approx 25\ \text{meV}$ |
| Gas de electrones en Cu | Temperatura de Fermi $T_F$ | $\approx 80{,}000\ \text{K}$ |
| Modelo de Ising 2D | $T_c = 2J/(k_B\ln(1+\sqrt{2}))$ | (unidades de $J/k_B$) |
| Fotones del fondo cósmico | $T_{\text{CMB}}$ | $2.73\ \text{K}$ |

## Temperatura negativa

En sistemas con espectro de energía **acotado superiormente** (como los espines de dos niveles), es posible tener $\partial S/\partial E < 0$, lo que corresponde a $T < 0$. Esto no viola ningún principio: simplemente significa que al añadir energía al sistema, el número de microestados accesibles *disminuye*. Los sistemas con $T < 0$ están más "calientes" que cualquier sistema con $T > 0$: si se ponen en contacto, la energía fluye del sistema $T < 0$ al sistema $T > 0$.

El debate sobre si $T < 0$ es "real" o un artefacto de la convención de Boltzmann vs. Gibbs es activo en la literatura moderna (véase Dunkel & Hilbert, 2014, y la respuesta de Frenkel & Warren).

## Conexión con la teoría cinética

En la teoría cinética de gases (Maxwell, Boltzmann, 1860-1870), la temperatura se relaciona con la energía cinética media:

$$\frac{3}{2}k_BT = \left\langle\frac{p^2}{2m}\right\rangle$$

Esta relación es una consecuencia del teorema de equipartición, que a su vez se deriva de la definición estadística de $T$. Históricamente, la relación kinética se postuló primero; la definición estadística es la más fundamental.

## Fuentes para profundizar

- Schroeder, *An Introduction to Thermal Physics*, cap. 3: temperatura estadística, flujo de calor, equilibrio.
- Reif, *Fundamentals of Statistical and Thermal Physics*, cap. 3: derivación desde el contacto térmico.
- Ramsey, N. F., "Thermodynamics and Statistical Mechanics at Negative Absolute Temperatures", *Phys. Rev.* 103, 20 (1956): el artículo original sobre temperatura negativa.
- Dunkel, J. & Hilbert, S., "Consistent thermostatistics forbids negative absolute temperatures", *Nature Physics* 10, 67 (2014): el debate moderno.

## Páginas relacionadas

- [Entropía de Boltzmann](#/entropia-de-boltzmann)
- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Ensamble canónico](#/ensamble-canonico)
- [Distribución de Boltzmann](#/distribucion-de-boltzmann)
- [Teorema de equipartición](#/teorema-de-equiparticion)
