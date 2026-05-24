# Paradoja de Gibbs

## Resumen

La **paradoja de Gibbs** es la aparente contradicción que surge al calcular la entropía de mezcla de dos gases ideales idénticos usando la fórmula clásica sin corrección por indistinguibilidad. La fórmula predice un aumento de entropía al mezclar dos porciones del mismo gas —lo que viola la extensividad y el sentido físico. La resolución es que partículas idénticas son indistinguibles: hay que dividir por $N!$.

## El experimento pensado

Considera una caja con una partición en el medio. A la izquierda hay $N$ moléculas de gas A a temperatura $T$ y densidad $n$; a la derecha hay $N$ moléculas de gas A **idéntico** a la misma $T$ y $n$. Se retira la partición.

**Resultado experimental:** nada observable ocurre. La presión, temperatura y densidad son las mismas en ambos lados antes y después. La entropía termodinámica no cambia: $\Delta S = 0$.

## La paradoja

La entropía de un gas ideal clásico *sin* la corrección de Gibbs es

$$S_{\text{incorrecto}}(E,V,N) = Nk_B\left[\frac{3}{2}\ln E + \ln V + \text{cte}\right]$$

donde la constante no depende de $N$. Al mezclar los dos gases:

$$S_{\text{mezcla}} = 2\cdot S_{\text{incorrecto}}\!\left(\tfrac{E_{\text{tot}}}{2}, \tfrac{V_{\text{tot}}}{2}, N\right) = 2Nk_B\left[\frac{3}{2}\ln\frac{E_{\text{tot}}}{2} + \ln\frac{V_{\text{tot}}}{2} + \text{cte}\right]$$

$$S_{\text{inicial}} = S_{\text{izq}} + S_{\text{der}} = 2Nk_B\left[\frac{3}{2}\ln\frac{E_{\text{tot}}}{2} + \ln\frac{V_{\text{tot}}}{2} + \text{cte}\right] = S_{\text{mezcla}}$$

Hasta aquí parece que $\Delta S = 0$. Sin embargo, el cálculo real de $\Omega$ para el sistema combinado *sin* $N!$ da

$$S_{\text{total, incorrecto}} = 2Nk_B\left[\frac{3}{2}\ln E + \ln V + \text{cte}\right]$$

$$S_{\text{inicial}} = 2Nk_B\left[\frac{3}{2}\ln\frac{E_{\text{tot}}}{2} + \ln\frac{V_{\text{tot}}}{2} + \text{cte}\right]$$

$$\Delta S = S_{\text{total}} - S_{\text{inicial}} = 2Nk_B\ln\frac{V_{\text{tot}}}{V_{\text{tot}}/2} = 2Nk_B\ln 2 > 0$$

Hay un "aumento de entropía" de $2Nk_B\ln 2$ al mezclar dos porciones del mismo gas, que contradice el resultado experimental.

## La entropía de mezcla de gases distintos

Cuando los dos gases son **distinguibles** (A ≠ B), el aumento de entropía al mezclar es real y medible:

$$\Delta S_{\text{mezcla}} = -Nk_B\sum_\alpha x_\alpha\ln x_\alpha$$

donde $x_\alpha = N_\alpha/N_{\text{total}}$ es la fracción molar del componente $\alpha$. Para dos gases con $N_A = N_B = N$:

$$\Delta S_{\text{mezcla}} = 2Nk_B\ln 2$$

Esta entropía de mezcla es correcta y tiene consecuencias físicas: diferencia de presión osmótica, reducción del punto de congelación, aumento del punto de ebullición.

## La resolución: corrección de Gibbs

Al dividir $\Omega$ por $N!$ (para cada especie), la entropía se convierte en

$$S_{\text{correcto}}(E,V,N) = Nk_B\left[\frac{3}{2}\ln\frac{E}{N} + \ln\frac{V}{N} + \text{cte}\right]$$

Ahora $S$ es **extensiva**: $S(2E,2V,2N) = 2S(E,V,N)$ y la entropía de mezcla de dos gases idénticos es exactamente cero.

Esta es la **fórmula de Sackur-Tetrode** (1911-1912):

$$S = Nk_B\left[\ln\!\left(\frac{V}{N}\left(\frac{4\pi mE}{3Nh^2}\right)^{3/2}\right) + \frac{5}{2}\right]$$

## La naturaleza de la resolución

Gibbs introdujo el factor $N!$ como una corrección pragmática para restaurar la extensividad. Pero la justificación fundamental llegó con la mecánica cuántica: las partículas idénticas son intrínsecamente indistinguibles porque no existen "etiquetas" que las distingan. El estado físico de $N$ partículas idénticas no cambia al permutarlas.

El debate sobre el significado preciso de la paradoja y su resolución continúa en la literatura moderna:

- **Vista epistémica (Jaynes):** la paradoja es un problema de conteo incorrecto. La entropía no es una propiedad del gas sino de nuestra descripción de él. Gases "idénticos" deberían siempre dar $\Delta S = 0$ porque no podemos detectar la mezcla.

- **Vista ontológica (van Kampen):** la indistinguibilidad es un hecho físico sobre partículas cuánticas. El factor $N!$ refleja la realidad de que las permutaciones no son observables.

Ambas vistas dan el mismo resultado operativo.

## El caso intermedio: gases casi idénticos

¿Qué pasa cuando los dos gases son "casi" iguales pero no idénticos (por ejemplo, isótopos de la misma especie)? La entropía de mezcla tiene que dar $\Delta S = 2Nk_B\ln 2$ para gases distinguibles y $\Delta S = 0$ para gases idénticos. ¿Hay una transición continua?

La respuesta es no: la entropía de mezcla da un salto discontinuo (de $2Nk_B\ln 2$ a 0) en el límite en que los gases pasan de "distinguibles" a "indistinguibles". Este es el **paradox of indistinguishability**: en mecánica cuántica, la identidad de las partículas es binaria, no gradual.

## Fuentes para profundizar

- Jaynes, "The Gibbs Paradox", en *Maximum Entropy and Bayesian Methods* (1992): la perspectiva epistémica, con análisis detallado del conteo.
- van Kampen, "The Gibbs Paradox", en *Essays in Theoretical Physics* (1984): la perspectiva ontológica.
- Kardar, *Statistical Physics of Particles*, cap. 4: el cálculo de Ω con y sin factor $N!$.

## Páginas relacionadas

- [Indistinguibilidad](#/indistinguibilidad)
- [Entropía de Boltzmann](#/entropia-de-boltzmann)
- [Entropía de mezcla](#/entropia-de-mezcla)
- [Gas ideal clásico](#/gas-ideal-clasico)
- [Microestado](#/microestado)
