# Entropía de Boltzmann

## Resumen

La **entropía de Boltzmann** asigna un valor de entropía a un macroestado contando cuántos microestados son compatibles con él:

$$S_B = k_B \ln \Omega$$

donde $\Omega$ es el número de microestados accesibles y $k_B = 1.380\times10^{-23}\ \text{J/K}$ es la constante de Boltzmann. Esta fórmula —grabada en la tumba de Boltzmann en Viena— conecta el mundo microscópico (conteo de configuraciones) con el mundo macroscópico (entropía termodinámica de Clausius).

## Por qué el logaritmo

Si dos sistemas independientes $A$ y $B$ tienen respectivamente $\Omega_A$ y $\Omega_B$ microestados, el sistema compuesto tiene

$$\Omega_{AB} = \Omega_A \cdot \Omega_B$$

porque cada configuración de $A$ puede combinarse con cualquier configuración de $B$. La entropía termodinámica es extensiva: $S_{AB} = S_A + S_B$. La única función que convierte productos en sumas es el logaritmo:

$$k_B\ln(\Omega_A \cdot \Omega_B) = k_B\ln\Omega_A + k_B\ln\Omega_B$$

El logaritmo no es una elección arbitraria: es la consecuencia de pedir extensividad y compatibilidad con la termodinámica de Clausius.

## Macroestados, microestados y equilibrio

En un sistema aislado con $E$, $V$, $N$ fijos, el **macroestado de equilibrio** es aquel que maximiza $\Omega$ (y por tanto $S_B$) bajo las restricciones dadas. Esto es el **postulado de igual probabilidad a priori**: todos los microestados accesibles son igualmente probables, y por eso el estado más probable es el de mayor $\Omega$.

La diferencia entre un macroestado fuera del equilibrio y el de equilibrio puede ser absurda en $\Omega$:

$$\frac{P_{\text{eq}}}{P_{\text{no eq}}} = \frac{\Omega_{\text{eq}}}{\Omega_{\text{no eq}}} = e^{(S_{\text{eq}}-S_{\text{no eq}})/k_B}$$

Para un gas de $N = 10^{23}$ moléculas, una diferencia de entropía de solo $1\ \text{J/K}$ corresponde a una razón de probabilidad de $e^{1/k_B} \approx e^{7\times10^{22}}$. Los estados fuera del equilibrio son tan improbables que nunca los observamos.

## Ejemplos concretos

### Sistema de $N$ espines de dos niveles

$N$ espines independientes, cada uno con energía $+\varepsilon$ (↑) o $-\varepsilon$ (↓). Si se fija el número de espines hacia arriba en $n$, la energía es $E = (2n - N)\varepsilon$ y el número de microestados es el coeficiente binomial:

$$\Omega(n) = \binom{N}{n} = \frac{N!}{n!(N-n)!}$$

Usando la aproximación de Stirling $\ln N! \approx N\ln N - N$:

$$S = k_B \ln \Omega = -k_B N\left[\frac{n}{N}\ln\frac{n}{N} + \frac{N-n}{N}\ln\frac{N-n}{N}\right]$$

En términos de $x = n/N$ (fracción de espines ↑), esto es la entropía binaria $S = Nk_B H_2(x)$ donde $H_2(x) = -x\ln x - (1-x)\ln(1-x)$. El máximo está en $x = 1/2$ (desorden máximo, igual número de ↑ y ↓), con $S_{\max} = Nk_B\ln 2$.

### Gas ideal clásico: la fórmula de Sackur-Tetrode

El cálculo completo de $\Omega$ para un gas ideal monoatómico de $N$ partículas en volumen $V$ con energía $E$ da, después de incluir $h^{3N}N!$ en el denominador (para regularizar la medida clásica e imponer indistinguibilidad):

$$S = Nk_B\left[\ln\!\left(\frac{V}{N}\left(\frac{4\pi mE}{3Nh^2}\right)^{3/2}\right) + \frac{5}{2}\right]$$

Esta es la **fórmula de Sackur-Tetrode** (1911-1912). Tiene varias propiedades notables:
- Es **extensiva**: si $N \to 2N$, $V \to 2V$, $E \to 2E$, entonces $S \to 2S$.
- Derivando respecto a $E$ da $1/T = \partial S/\partial E = 3Nk_B/(2E)$, es decir $E = \frac{3}{2}Nk_BT$.
- Derivando respecto a $V$ da $P/T = \partial S/\partial V = Nk_B/V$, es decir $PV = Nk_BT$.
- Fue el primer cálculo que reprodujo cuantitativamente entropías absolutas medidas experimentalmente.

### Sólido de Einstein

$N$ osciladores con $q$ cuantos de energía distribuidos entre ellos:

$$\Omega = \binom{q+N-1}{N-1} \approx \left(\frac{q+N}{N}\right)^N\left(\frac{q+N}{q}\right)^q$$

Para $q/N \gg 1$ (alta temperatura), $S \to Nk_B[1 + \ln(q/N)]$, recuperando el límite clásico Dulong-Petit. Para $q \ll N$, $S \to Nk_B\ln(eN/q)$.

## Entropía de Boltzmann vs. entropía de Gibbs

La entropía de Boltzmann $S_B = k_B\ln\Omega$ y la entropía de Gibbs $S_G = -k_B\sum_i p_i\ln p_i$ son la misma cosa en el ensamble microcanónico (donde todos los $p_i = 1/\Omega$ son iguales):

$$S_G = -k_B \sum_{i=1}^\Omega \frac{1}{\Omega}\ln\frac{1}{\Omega} = k_B\ln\Omega = S_B$$

Pero difieren en otros contextos:
- En el ensamble canónico, los $p_i$ no son uniformes y $S_G$ es la cantidad apropiada.
- $S_B$ se puede asignar a un microestado único si se define $\Omega$ como el volumen de espacio de fases "compatible" con ese microestado, pero esta definición es ambigua.
- En sistemas fuera del equilibrio, $S_B$ es más natural (definida por el macroestado actual), mientras que $S_G$ requiere especificar una distribución.

## El problema de la irreversibilidad

La fórmula $S = k_B\ln\Omega$ no explica por sí sola la irreversibilidad. Las ecuaciones de Hamilton son reversibles en el tiempo: si una trayectoria va de $\Gamma_A$ a $\Gamma_B$ en tiempo $t$, existe otra que va de $\Gamma_B$ a $\Gamma_A$ en el mismo tiempo. Entonces, ¿por qué $S$ solo aumenta?

La respuesta estadística: el **macroestado de equilibrio** tiene un $\Omega$ tan descomunalmente mayor que cualquier macroestado fuera del equilibrio que la dinámica, aunque reversible, casi siempre lleva hacia él. La irreversibilidad es estadística, no dinámica. La segunda ley es una ley de probabilidades abrumadoras, no de prohibición absoluta.

El **teorema H de Boltzmann** fue el primer intento de derivar la irreversibilidad desde la dinámica microscópica (usando la ecuación de Boltzmann para gases diluidos). Su contraparte moderna son los teoremas de fluctuación de Jarzynski, Crooks y Evans-Searles, que cuantifican la probabilidad de violaciones de la segunda ley en sistemas pequeños.

## El factor $N!$ y la paradoja de Gibbs

En el conteo clásico ingenuo, permutar dos partículas idénticas da un "microestado distinto" aunque el estado físico sea el mismo. Esto lleva a una entropía **no extensiva**:

$$S_{\text{incorrecto}} = Nk_B\ln V + f(E,N)$$

que viola $S(2E,2V,2N) = 2S(E,V,N)$. Gibbs resolvió esto dividiendo por $N!$ (número de permutaciones), lo que introduce el término $-k_B\ln N! \approx -Nk_B(\ln N - 1)$. Pero esto levanta una pregunta conceptual: ¿es la corrección por $N!$ un artificio clásico o refleja indistinguibilidad física real?

La mecánica cuántica responde definitivamente: partículas idénticas son **intrínsecamente** indistinguibles. Los estados cuánticos son (anti)simétricos bajo permutaciones, y el conteo cuántico correcto reproduce el factor $1/N!$ de forma natural. La paradoja de Gibbs es, en retrospectiva, una señal temprana de que la mecánica cuántica era necesaria.

## Versión continua

En mecánica clásica, el número de microestados en una capa de energía $[E, E+\Delta E]$ se define como

$$\Omega(E,V,N) = \frac{1}{h^{3N}N!}\int_{E \leq H(\Gamma) \leq E+\Delta E} d^{3N}q\,d^{3N}p$$

El factor $h^{3N}$ hace la expresión adimensional (el volumen mínimo de celda de espacio de fases, justificado por la mecánica cuántica). El factor $N!$ corrige la sobrecontabilización por indistinguibilidad. Aunque $\Omega$ depende de $\Delta E$, la contribución de $\ln(\Delta E)$ a $S$ es despreciable comparada con los términos extensivos para $N$ grande.

## Fuentes para profundizar

- Schroeder, *An Introduction to Thermal Physics*, caps. 2-3: conteo de microestados con ejemplos concretos (espines, gas ideal, sólido de Einstein).
- Kardar, *Statistical Physics of Particles*, cap. 4: derivación cuidadosa del espacio de fases, el factor $N!$ y la fórmula de Sackur-Tetrode.
- Jaynes, "Gibbs vs Boltzmann Entropies", *American Journal of Physics* 33, 391 (1965): análisis crítico de las diferencias entre $S_B$ y $S_G$.
- Lebowitz, "Boltzmann's Entropy and Time's Arrow", *Physics Today* 46(9), 32 (1993): la relación entre $S_B$ y el problema de la irreversibilidad.

## Páginas relacionadas

- [Microestado](#/microestado)
- [Macroestado](#/macroestado)
- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Entropía de Gibbs](#/entropia-de-gibbs)
- [Paradoja de Gibbs](#/paradoja-de-gibbs)
- [Densidad de estados](#/densidad-de-estados)
