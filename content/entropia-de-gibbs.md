# Entropía de Gibbs

## Resumen

La **entropía de Gibbs** (o entropía de Shannon en física) es una medida de la incertidumbre asociada a una distribución de probabilidad $\{p_i\}$ sobre microestados:

$$S_G = -k_B\sum_i p_i\ln p_i$$

A diferencia de la entropía de Boltzmann, que solo aplica cuando todos los microestados son igualmente probables, la entropía de Gibbs es válida para cualquier distribución. Es la entropía natural de los ensambles canónico y gran canónico.

## Definición y propiedades

**Discreta:**

$$S_G = -k_B\sum_i p_i\ln p_i$$

con la convención $0\ln 0 = 0$ (verificada por $\lim_{p\to 0^+}p\ln p = 0$).

**Continua:** para una densidad de probabilidad $\rho(\Gamma)$ en el espacio de fases:

$$S_G = -k_B\int \rho(\Gamma)\ln[\rho(\Gamma)\cdot\Delta\Gamma]\,d\Gamma$$

donde $\Delta\Gamma$ es el volumen de celda de referencia (típicamente $h^{3N}N!$) para hacer el argumento del logaritmo adimensional.

**Propiedades principales:**
- $S_G \geq 0$, con igualdad si y solo si $p_j = 1$ para algún $j$ (estado puro, certeza completa).
- $S_G$ es máxima para la distribución uniforme: $S_G^{\max} = k_B\ln M$ donde $M$ es el número de microestados accesibles.
- $S_G$ es cóncava: $S_G(\lambda p + (1-\lambda)q) \geq \lambda S_G(p) + (1-\lambda)S_G(q)$.
- $S_G$ es extensiva para sistemas independientes: $S_G(p_{AB}) = S_G(p_A) + S_G(p_B)$ si $A$ y $B$ son estadísticamente independientes.

## Relación con la entropía de Boltzmann

Si hay $\Omega$ microestados con probabilidades iguales $p_i = 1/\Omega$:

$$S_G = -k_B\sum_{i=1}^\Omega\frac{1}{\Omega}\ln\frac{1}{\Omega} = k_B\ln\Omega = S_B$$

La entropía de Boltzmann es el caso particular de la entropía de Gibbs cuando todos los estados accesibles son equiprobables.

Para distribuciones no uniformes, $S_G < k_B\ln\Omega$ (la certeza parcial siempre reduce la entropía).

## Entropía de Gibbs en el ensamble canónico

En el ensamble canónico, $p_i = e^{-\beta E_i}/Z$. Sustituyendo:

$$S_G = -k_B\sum_i p_i(-\beta E_i - \ln Z) = k_B\beta\langle E\rangle + k_B\ln Z$$

Como $F = -k_BT\ln Z = \langle E\rangle - TS_G$, esto es consistente con la relación termodinámica $F = E - TS$.

Derivando:

$$S_G = -\left(\frac{\partial F}{\partial T}\right)_{V,N}$$

La entropía de Gibbs coincide exactamente con la entropía termodinámica en el ensamble canónico.

## Entropía de Gibbs en el ensamble gran canónico

Con $p_i = e^{-\beta(E_i-\mu N_i)}/\Xi$:

$$S_G = k_B\beta(\langle E\rangle - \mu\langle N\rangle) + k_B\ln\Xi$$

Lo que coincide con $S = -(\partial\Omega/\partial T)_{V,\mu}$ donde $\Omega = -k_BT\ln\Xi$ es el gran potencial termodinámico.

## Entropía de Gibbs en evolución temporal

Un resultado fundamental (demostrado en la entrada del [Teorema de Liouville](#/teorema-de-liouville)) es que bajo la dinámica hamiltoniana, $S_G$ es **constante**:

$$\frac{dS_G}{dt} = 0$$

Esto parece contradecir la segunda ley. La resolución es que $S_G$ es la entropía de la distribución exacta de microstados, no la entropía termodinámica. La segunda ley opera sobre entropías "de grano grueso" (coarse-grained), que sí crecen porque el grano grueso proyecta la distribución exacta (que se vuelve más intrincada) sobre una descripción más simple.

## Entropía relativa (Kullback-Leibler)

La **divergencia de Kullback-Leibler** de $p$ respecto a $q$ es

$$D_{KL}(p\|q) = \sum_i p_i\ln\frac{p_i}{q_i} \geq 0$$

con igualdad si y solo si $p = q$. Se interpreta como la "información extra" ganada al descubrir que la distribución real es $p$ en lugar de $q$. La desigualdad $D_{KL} \geq 0$ es equivalente a la desigualdad de Jensen aplicada a $\ln$.

La entropía de Gibbs puede expresarse como:

$$S_G(p) = S_G^{\max} - k_B D_{KL}(p \| \text{uniforme})$$

donde $S_G^{\max} = k_B\ln M$. La entropía es máxima cuando la distribución es uniforme, y cualquier información adicional reduce la entropía.

## Entropía de von Neumann

El análogo cuántico de la entropía de Gibbs es la **entropía de von Neumann**:

$$S = -k_B\operatorname{Tr}(\hat\rho\ln\hat\rho) = -k_B\sum_n \lambda_n\ln\lambda_n$$

donde $\lambda_n$ son los valores propios del operador densidad $\hat\rho$. Se reduce a la entropía de Gibbs cuando $\hat\rho$ es diagonal en la base de energía. Para un estado puro $\hat\rho = |\psi\rangle\langle\psi|$, $S = 0$ (máxima información cuántica).

## Diferencias operativas con la entropía de Boltzmann

| Aspecto | Entropía de Boltzmann $S_B = k_B\ln\Omega$ | Entropía de Gibbs $S_G = -k_B\sum p_i\ln p_i$ |
|---|---|---|
| Se aplica a | Macroestados (sistemas aislados) | Cualquier distribución de probabilidad |
| Ensamble natural | Microcanónico | Canónico, gran canónico, o cualquier |
| En equilibrio | $S_B = S_G$ (si los microestados son equiprobables) | $S_G$ coincide con $S$ termodinámico |
| Fuera del equilibrio | Definida por el macroestado actual | Requiere especificar la distribución |

## Fuentes para profundizar

- Jaynes, "Information Theory and Statistical Mechanics", *Phys. Rev.* 106, 620 (1957): entropía de Gibbs como entropía de Shannon, base de MaxEnt.
- Cover & Thomas, *Elements of Information Theory*, caps. 2, 9: propiedades matemáticas de la entropía de Shannon, divergencia KL.
- Wehrl, "General Properties of Entropy", *Rev. Mod. Phys.* 50, 221 (1978): revisión completa de entropía de von Neumann y sus propiedades.

## Páginas relacionadas

- [Entropía de Boltzmann](#/entropia-de-boltzmann)
- [Principio de máxima entropía](#/principio-de-maxima-entropia)
- [Ensamble canónico](#/ensamble-canonico)
- [Teorema de Liouville](#/teorema-de-liouville)
- [Matriz densidad](#/matriz-densidad)
- [Entropía relativa](#/entropia-relativa)
