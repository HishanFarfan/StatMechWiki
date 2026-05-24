# Principio de máxima entropía

## Resumen

El **principio de máxima entropía** (MaxEnt, de Jaynes 1957) dice que, dada una información parcial sobre un sistema, la distribución de probabilidad más honesta es aquella que maximiza la entropía de Shannon–Gibbs

$$S = -k_B\sum_i p_i\ln p_i$$

sujeta a las restricciones que representa la información disponible. Ningún sesgo se introduce más allá de lo que los datos imponen.

Este principio unifica la mecánica estadística con la inferencia bayesiana: los ensambles microcanónico, canónico y gran canónico no son postulados independientes sino casos especiales de MaxEnt con distintas restricciones.

## El problema de inferencia

Dado un sistema con microestados $\{1, 2, \ldots, M\}$, queremos asignar probabilidades $\{p_i\}$ compatibles con la información que tenemos. Hay infinitas distribuciones compatibles con cualquier conjunto finito de restricciones. ¿Cuál elegir?

La respuesta de Jaynes: la distribución que asume **lo mínimo posible** más allá de los datos. Esta es la distribución que maximiza la entropía, porque cualquier otra distribución implica una "apuesta" sobre información que no tenemos.

## Derivación general

**Restricciones.** Se tienen $K$ restricciones de la forma

$$\sum_i p_i f_k(i) = F_k, \quad k = 1, \ldots, K$$

más la normalización $\sum_i p_i = 1$.

**Lagrangiano.** Se maximiza $S = -k_B\sum_i p_i\ln p_i$ con multiplicadores de Lagrange $\lambda_0, \lambda_1, \ldots, \lambda_K$:

$$\frac{\partial}{\partial p_j}\left[-k_B\sum_i p_i\ln p_i - \lambda_0\left(\sum_i p_i - 1\right) - \sum_k\lambda_k\left(\sum_i p_i f_k(i) - F_k\right)\right] = 0$$

$$-k_B(\ln p_j + 1) - \lambda_0 - \sum_k\lambda_k f_k(j) = 0$$

**Solución:**

$$p_j = \frac{1}{Z}\exp\!\left(-\sum_k \lambda_k f_k(j)\right), \quad Z = \sum_j \exp\!\left(-\sum_k \lambda_k f_k(j)\right)$$

Los multiplicadores $\lambda_k$ se determinan imponiendo que las restricciones se satisfagan.

## Los ensambles como casos de MaxEnt

### Microcanónico

**Restricción:** solo $\sum_i p_i = 1$ y que $E_i = E$ para todos los estados accesibles.

**Resultado:** $p_i = 1/\Omega$, distribución uniforme. MaxEnt sin información sobre la energía (más allá de que está en $[E, E+\Delta E]$) da la distribución uniforme: *todos los microestados son igualmente probables*.

### Canónico

**Restricción:** $\sum_i p_i = 1$ y $\sum_i p_i E_i = \langle E\rangle$.

**Resultado:** $p_i = e^{-\beta E_i}/Z$ con $Z = \sum_i e^{-\beta E_i}$. El multiplicador de Lagrange asociado a la energía resulta ser $\beta = 1/(k_BT)$.

### Gran canónico

**Restricciones:** $\sum_i p_i = 1$, $\sum_i p_i E_i = \langle E\rangle$, $\sum_i p_i N_i = \langle N\rangle$.

**Resultado:** $p_i = e^{-\beta(E_i - \mu N_i)}/\Xi$.

La jerarquía de ensambles es simplemente la jerarquía de información disponible: el ensamble correcto depende de qué restricciones impone el experimento, no de una elección arbitraria.

## Interpretación: probabilidad como estado de conocimiento

MaxEnt adopta la interpretación **bayesiana** de la probabilidad: $p_i$ no describe una frecuencia objetiva de ocurrencia, sino el **grado de creencia racional** en que el sistema está en el microestado $i$, dado lo que se sabe.

Esta interpretación resuelve un viejo debate: ¿por qué el ensamble canónico, si el sistema tiene energía *definida* (aunque desconocida)? MaxEnt responde: porque la distribución de Boltzmann es la que maximiza la entropía dada solo la información sobre $\langle E\rangle$. Si supiéramos $E$ exactamente, usaríamos el ensamble microcanónico.

En palabras de Jaynes: "la entropía no es una propiedad del sistema; es una propiedad del modelo probabilístico que usamos para describirlo."

## Ejemplo: distribución discreta sin supuesto dinámico

Un dado de seis caras. Si no sabemos nada: MaxEnt → $p_i = 1/6$ uniforme. Si se sabe que el promedio de la cara es $\langle i\rangle = 4$ (dado cargado), MaxEnt da

$$p_i = \frac{e^{-\lambda i}}{Z(\lambda)}, \quad Z(\lambda) = \sum_{i=1}^6 e^{-\lambda i}$$

donde $\lambda < 0$ se determina de $\sum_i i\,p_i = 4$. Esta distribución exponencial es la distribución de Boltzmann discreta: misma forma matemática que el ensamble canónico.

## Conexión con la teoría de la información

La entropía de Shannon $H = -\sum_i p_i\log_2 p_i$ mide en bits la **incertidumbre** sobre la distribución $\{p_i\}$. MaxEnt maximiza la incertidumbre: toma la distribución *menos* informativa que sea compatible con los datos.

Esta conexión entre información y termodinámica fue explorada por Shannon (1948), Jaynes (1957) y continúa siendo activa en el estudio de sistemas fuera del equilibrio, algoritmos de compresión y aprendizaje automático.

## Alcances y limitaciones

**MaxEnt funciona bien cuando:**
- Las restricciones son macroscópicas (valores medios de observables).
- El sistema está en equilibrio o en un estado estacionario.
- Se quiere la distribución más conservadora consistente con los datos.

**MaxEnt no responde:**
- Por qué el sistema llegó a ese estado (dinámica, historia).
- Si las restricciones elegidas son las relevantes físicamente.
- En sistemas fuera del equilibrio con historia dependiente del camino.

## Principio de mínima entropía relativa (Kullback-Leibler)

Una generalización de MaxEnt usa la **entropía relativa** (divergencia de Kullback-Leibler) cuando hay una distribución de referencia previa $q_i$:

$$D_{KL}(p\|q) = \sum_i p_i\ln\frac{p_i}{q_i}$$

El principio de **mínima información** (MinxEnt) minimiza $D_{KL}(p\|q)$ sujeto a las restricciones: actualiza la prior $q$ lo menos posible. MaxEnt estándar es el caso $q_i = \text{cte}$.

## Fuentes para profundizar

- Jaynes, E. T., "Information Theory and Statistical Mechanics", *Phys. Rev.* 106, 620 (1957): el artículo fundacional de MaxEnt en mecánica estadística.
- Jaynes, *Probability Theory: The Logic of Science* (2003): exposición completa de la interpretación bayesiana y MaxEnt.
- Cover & Thomas, *Elements of Information Theory*, cap. 2: entropía de Shannon, entropía relativa y sus propiedades.
- Pressé et al., "Principles of Maximum Entropy and Maximum Caliber in Statistical Physics", *Rev. Mod. Phys.* 85, 1115 (2013): revisión moderna de MaxEnt y sus extensiones.

## Páginas relacionadas

- [Entropía de Gibbs](#/entropia-de-gibbs)
- [Ensamble canónico](#/ensamble-canonico)
- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Ensamble gran canónico](#/ensamble-gran-canonico)
- [Entropía relativa](#/entropia-relativa)
