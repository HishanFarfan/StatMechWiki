# Espacio de fases

## Resumen

El **espacio de fases** $\mathcal{M}$ de un sistema mecánico clásico es el espacio de todos sus microestados posibles: cada punto representa el estado dinámico completo del sistema en un instante dado. Para $N$ partículas en tres dimensiones, es una variedad de dimensión $6N$ con coordenadas $(q_1,\ldots,q_N, p_1,\ldots,p_N)$.

La evolución temporal del sistema es una curva en $\mathcal{M}$ determinada por las ecuaciones de Hamilton. La mecánica estadística describe la **distribución** de probabilidad sobre $\mathcal{M}$, en lugar de una trayectoria individual.

## Definición y estructura

Para $N$ partículas con posiciones $q_i \in \mathbb{R}^3$ y momenta $p_i \in \mathbb{R}^3$:

$$\mathcal{M} = \mathbb{R}^{6N}, \qquad \Gamma = (q_1,\ldots,q_N,\,p_1,\ldots,p_N)$$

El elemento de volumen natural es

$$d\Gamma = d^{3N}q\,d^{3N}p$$

En mecánica clásica, $\mathcal{M}$ tiene estructura **simpléctica**: existe una forma bilineal antisimétrica no degenerada $\omega = \sum_i dq_i \wedge dp_i$ que se conserva bajo el flujo hamiltoniano. Esta estructura es la que hace que la dinámica conserve el volumen (teorema de Liouville).

## Dinámica hamiltoniana

El Hamiltoniano $H: \mathcal{M} \to \mathbb{R}$ genera el flujo:

$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \qquad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

Esto define un campo vectorial $X_H$ en $\mathcal{M}$ cuyas líneas integrales son las trayectorias del sistema. La energía se conserva: $H(\Gamma(t)) = E$ para todo $t$, de modo que la trayectoria está confinada a la hipersuperficie de energía

$$\Sigma_E = \{\Gamma \in \mathcal{M} : H(\Gamma) = E\}$$

de dimensión $6N-1$.

## Paréntesis de Poisson

Para dos observables $A(\Gamma)$ y $B(\Gamma)$, el paréntesis de Poisson es

$$\{A, B\} = \sum_i \left(\frac{\partial A}{\partial q_i}\frac{\partial B}{\partial p_i} - \frac{\partial A}{\partial p_i}\frac{\partial B}{\partial q_i}\right)$$

Las ecuaciones de Hamilton se escriben $\dot{A} = \{A, H\}$. Una cantidad $A$ se conserva si y solo si $\{A, H\} = 0$.

## Medida de Liouville y factor de normalización

El teorema de Liouville dice que el flujo hamiltoniano preserva el volumen en $\mathcal{M}$: si $\mathcal{R}(0)$ es cualquier región del espacio de fases, el volumen de $\mathcal{R}(t) = \Phi^t(\mathcal{R}(0))$ es el mismo para todo $t$.

Para definir una **medida de probabilidad** adimensional y comparar con resultados cuánticos, se divide por $h^{3N}N!$:

$$d\mu = \frac{d^{3N}q\,d^{3N}p}{h^{3N}\,N!}$$

- **$h^{3N}$**: el volumen mínimo de celda de espacio de fases es $h^3$ por partícula (principio de incertidumbre). Sin este factor, el "número de microestados" tiene unidades y la entropía $S = k_B\ln\Omega$ es indefinida salvo una constante arbitraria.
- **$N!$**: partículas idénticas no son distinguibles físicamente. La configuración $(q_1,p_1,q_2,p_2,\ldots)$ y $(q_2,p_2,q_1,p_1,\ldots)$ corresponden al mismo estado físico. Dividir por $N!$ evita contarla $N!$ veces.

## Visualización: el oscilador armónico

Para una única partícula en 1D con $H = p^2/2m + m\omega^2 q^2/2$, el espacio de fases es el plano $(q, p)$. Las trayectorias son **elipses** de energía constante:

$$\frac{p^2}{2mE} + \frac{m\omega^2 q^2}{2E} = 1$$

El semieje en $q$ es $\sqrt{2E/m\omega^2}$ y en $p$ es $\sqrt{2mE}$. El área encerrada es $\pi \cdot\sqrt{2mE}\cdot\sqrt{2E/m\omega^2} = 2\pi E/\omega$. Por cuantización de Bohr-Sommerfeld, esta área debe ser $nh$ para el $n$-ésimo nivel de energía, lo que reproduce $E_n = n\hbar\omega$.

Para un sistema no integrable (por ejemplo, el péndulo doble), las trayectorias en el espacio de fases pueden ser caóticas: sensibles a las condiciones iniciales y densa en regiones del espacio.

## Ensamble estadístico como distribución en $\mathcal{M}$

Una distribución estadística es una función densidad de probabilidad $\rho(\Gamma, t) \geq 0$ con

$$\int \rho(\Gamma, t)\,d\mu = 1$$

La evolución de $\rho$ está dada por la **ecuación de Liouville**:

$$\frac{\partial\rho}{\partial t} = \{\rho, H\} = -\sum_i\left(\frac{\partial\rho}{\partial q_i}\dot{q}_i + \frac{\partial\rho}{\partial p_i}\dot{p}_i\right)$$

que es equivalente a $d\rho/dt = 0$ (la densidad es constante a lo largo de las trayectorias). El equilibrio estadístico corresponde a $\partial\rho/\partial t = 0$, es decir, $\{\rho, H\} = 0$: cualquier función de $H$ es una distribución de equilibrio. Los ensambles estándar son:

| Ensamble | $\rho(\Gamma)$ | Condición |
|---|---|---|
| Microcanónico | $\delta(H-E)/\Omega$ | $E$, $V$, $N$ fijos |
| Canónico | $e^{-\beta H}/Z$ | $T$, $V$, $N$ fijos |
| Gran canónico | $e^{-\beta(H-\mu N)}/\Xi$ | $T$, $V$, $\mu$ fijos |

## Recurrencia de Poincaré

Para sistemas con espacio de fases de volumen finito (por ejemplo, partículas en una caja), el **teorema de Poincaré** garantiza que casi toda trayectoria vuelve arbitrariamente cerca de su punto inicial después de algún tiempo. Esto parece contradecir la irreversibilidad termodinámica, pero el **tiempo de recurrencia** escala como $\sim e^N$: para $N = 10^{23}$, es incomparablemente mayor que la edad del universo. La segunda ley opera en escalas de tiempo físicamente accesibles.

## Espacio de fases cuántico: la distribución de Wigner

La generalización cuántica del espacio de fases usa la **función de Wigner**:

$$W(q,p) = \frac{1}{\pi\hbar}\int_{-\infty}^{\infty} \langle q-x|\hat\rho|q+x\rangle\, e^{2ipx/\hbar}\,dx$$

$W(q,p)$ es una cuasidistribución de probabilidad: está normalizada y sus marginales en $q$ y $p$ son las distribuciones de posición y momento correctas, pero puede tomar valores negativos. Las regiones de negatividad son una firma de no-clasicidad cuántica.

## Errores comunes

- **Confundir espacio de fases con espacio de configuraciones**: el espacio de configuraciones es solo la mitad ($q_1,\ldots,q_N$); el espacio de fases incluye también los momenta.
- **Omitir $h^{3N}$ y $N!$**: sin ellos, $\ln\Omega$ tiene una constante aditiva ambigua y la entropía no es extensiva.
- **Pensar que Liouville implica ergodicidad**: Liouville dice que el volumen se conserva; ergodicidad es una propiedad mucho más específica sobre qué regiones visita la trayectoria.
- **Tratar $d\Gamma$ como si fuera invariante sin verificar**: en coordenadas generalizadas, la medida puede cambiar de forma (aunque la forma simpléctica $\omega^{\wedge N}$ es invariante).

## Fuentes para profundizar

- Goldstein, *Classical Mechanics*, cap. 9: transformaciones canónicas, paréntesis de Poisson y estructura simpléctica.
- Kardar, *Statistical Physics of Particles*, cap. 3: espacio de fases, medida de Liouville, distribuciones de equilibrio.
- Arnold, *Mathematical Methods of Classical Mechanics*: la perspectiva geométrica moderna del espacio de fases como variedad simpléctica.
- Tabor, *Chaos and Integrability in Nonlinear Dynamics*: espacio de fases en sistemas integrables y caóticos, toros KAM.

## Páginas relacionadas

- [Microestado](#/microestado)
- [Teorema de Liouville](#/teorema-de-liouville)
- [Hipótesis ergódica](#/hipotesis-ergodica)
- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Función de partición](#/funcion-de-particion)
