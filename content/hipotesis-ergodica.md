# Hipótesis ergódica

## Resumen

La **hipótesis ergódica** responde una pregunta que está en el corazón de la mecánica estadística: ¿por qué podemos usar un promedio sobre un ensamble —una colección imaginaria de réplicas— para predecir el resultado de una única medición sobre un sistema que evoluciona en el tiempo?

La respuesta operativa es que, bajo ciertas condiciones, el **promedio temporal** de un observable $A$ a lo largo de una trayectoria muy larga coincide con el **promedio de ensamble** sobre la superficie de energía constante:

$$\bar{A} = \lim_{\tau\to\infty}\frac{1}{\tau}\int_0^\tau A\bigl(\Gamma(t)\bigr)\,dt = \langle A \rangle_{\text{mic}}$$

Esto justifica reemplazar la dinámica real —imposible de seguir para $N \sim 10^{23}$— por un cálculo estático de probabilidades uniformes sobre microestados accesibles.

## Formulación original de Boltzmann

Boltzmann (1871) imaginó que una trayectoria con energía fija $E$ recorre **todos** los puntos de la hipersuperficie $H(\Gamma)=E$ antes de repetirse. Si esto fuera cierto, la fracción de tiempo que el sistema pasa cerca de una región $d\Gamma$ sería proporcional al volumen de $d\Gamma$, lo que reproduce la medida microcanónica uniforme.

Este enunciado literal —que una sola trayectoria cubre toda la superficie— es matemáticamente imposible para sistemas continuos (una curva unidimensional no puede llenar una superficie de dimensión $\geq 2$). Plancherel y Rozental demostraron esto en 1913. La hipótesis en su forma original es falsa.

La versión moderna, debida a Birkhoff (1931), debilita el enunciado de forma precisa.

## Teorema ergódico de Birkhoff

Sea $(\mathcal{M}, \mu, \Phi^t)$ un espacio de medida invariante bajo el flujo hamiltoniano $\Phi^t$. El **teorema ergódico de Birkhoff** afirma que el límite

$$\bar{A}(\Gamma_0) = \lim_{\tau\to\infty}\frac{1}{\tau}\int_0^\tau A\!\left(\Phi^t(\Gamma_0)\right)dt$$

existe y es finito para $\mu$-casi todo punto inicial $\Gamma_0$. Además, $\bar{A}$ es invariante bajo el flujo.

Si el sistema es **ergódico** —es decir, si los únicos conjuntos invariantes tienen medida 0 o 1— entonces $\bar{A}$ es constante $\mu$-c.t.p. y por lo tanto igual a la media de ensamble:

$$\bar{A} = \int A\,d\mu = \langle A \rangle$$

La condición de ergodicidad dice en términos físicos que la hipersuperficie de energía **no puede descomponerse** en dos partes invariantes de medida positiva. El sistema visita cualquier región de medida positiva con la frecuencia correcta, aunque no visite cada punto.

## Cuando la hipótesis se cumple

La ergodicidad es difícil de probar en general. Los resultados positivos más sólidos son:

**Gas de esferas duras.** Sinai (1970) y Bunimovich–Sinai (1980) probaron que un sistema de $N \geq 2$ esferas duras en una caja es ergódico. La clave es que las colisiones elásticas son de tipo hiperbólico (localmente expansivas), lo que impide la existencia de toros invariantes.

**Sistemas caóticos.** En general, sistemas con exponentes de Lyapunov positivos y mezclantes son ergódicos. El caos no es suficiente por sí solo, pero la combinación de hiperbolicidad y ausencia de simetrías adicionales usualmente garantiza ergodicidad.

**Gases diluidos.** En el límite de densidad baja, los tiempos de relajación son cortos y la hipótesis funciona muy bien en la práctica, aunque la prueba rigurosa completa aún no existe para $N$ arbitrario.

## Cuando falla

La hipótesis ergódica falla en clases importantes de sistemas:

**Sistemas integrables.** Un sistema hamiltoniano con $N$ grados de libertad es **integrable** si tiene $N$ integrales de movimiento independientes en involución (constantes del movimiento). Por el teorema de Arnold–Liouville, el espacio de fases se folía en toros $N$-dimensionales invariantes. Una trayectoria queda confinada a su toro y nunca llega a todo el espacio de energía.

**Toros KAM.** El **teorema KAM** (Kolmogorov 1954, Arnold 1963, Moser 1962) dice que al perturbar un sistema integrable la mayoría de los toros invariantes no se destruyen, sino que se deforman. Para perturbaciones pequeñas, el espacio de fases es un entramado de toros supervivientes separados por capas caóticas delgadas. El sistema no es ergódico globalmente.

**Paradoja de Fermi–Pasta–Ulam (1955).** Una cadena de osciladores no lineales acoplados debería termalizar (ergodicidad) pero en cambio muestra recurrencias quasi-periódicas. La energía vuelve repetidamente al modo inicial en lugar de distribuirse uniformemente. Este resultado fue sorprendente y motivó décadas de investigación sobre ergodicidad y solitones.

**Vidrios y sistemas de relajación lenta.** En un vidrio, $\tau_{\text{rel}} \gg \tau_{\text{obs}}$: el sistema nunca tiene tiempo de explorar el espacio de fases accesible en la escala de la observación. La ergodicidad se rompe de forma efectiva aunque no matemáticamente.

**Condensados de Bose–Einstein y sistemas integrables cuánticos.** Sistemas cuánticos con muchos modos conservados (p.ej. el gas de Bose 1D) no termalizan en el sentido habitual. En cambio alcanzan estados descritos por un **ensamble de Gibbs generalizado** que incorpora todas las cargas conservadas.

## Ergodicidad vs. mezcla

La ergodicidad garantiza que los promedios temporales convergean al promedio de ensamble, pero no dice nada sobre la **velocidad** de convergencia. La propiedad más fuerte es la **mezcla** (mixing):

$$\lim_{t\to\infty} \mu\!\left(\Phi^t(A) \cap B\right) = \mu(A)\,\mu(B)$$

Un sistema mezclante es ergódico, pero no al revés. La mezcla implica que las funciones de correlación decaen:

$$\lim_{t\to\infty}\langle A(0)\,B(t)\rangle = \langle A\rangle\langle B\rangle$$

Esta condición es la que realmente garantiza que un sistema **termalice**: que las correlaciones entre el estado inicial y el estado tardío se pierdan. Para fines prácticos de mecánica estadística, mezcla es la condición relevante.

## ¿Es la ergodicidad necesaria para la mecánica estadística?

No. Este punto es sutil y frecuentemente mal entendido.

La mecánica estadística funciona incluso para sistemas que **no** son ergódicos. La razón es el argumento de **tipicidad**: para $N \gg 1$, la inmensa mayoría del volumen de la hipersuperficie de energía corresponde a estados que dan los mismos valores de observables macroscópicos. No importa qué microestado específico tenga el sistema: si fue elegido "al azar" (en el sentido de la medida microcanónica), casi con certeza exhibirá las propiedades termodinámicas predichas.

La ergodicidad es una condición *suficiente* para justificar los promedios de ensamble. La tipicidad es la condición *real* (más débil y más general) que subyace al fundamento de la mecánica estadística.

En palabras de Lebowitz: no necesitamos que la dinámica sea ergódica, sino que los estados típicos (la aplastante mayoría) sean indistinguibles macroscópicamente. Un sistema puede pasar toda su existencia en una región de medida microscópica de la hipersuperficie y aun así comportarse termodinámicamente de manera correcta, siempre que esa región sea macroscópicamente representativa.

## Recurrencia de Poincaré

Un resultado clásico de Poincaré (1890) afirma que cualquier sistema hamiltoniano con espacio de fases de volumen finito regresa, con probabilidad 1, arbitrariamente cerca de su estado inicial, después de un tiempo suficientemente largo (**tiempo de recurrencia de Poincaré**).

Este resultado parece contradecir el crecimiento irreversible de la entropía. La resolución es de escala: el tiempo de recurrencia para $N \sim 10^{23}$ partículas es astronomicamente mayor que la edad del universo ($t_{\text{rec}} \sim e^N$). La termodinámica describe lo que ocurre en tiempos físicamente accesibles, no en el límite matemático de $t\to\infty$.

## Fuentes para profundizar

- Khinchin, *Mathematical Foundations of Statistical Mechanics* (1949): demostración rigurosa del teorema ergódico y sus implicaciones para mecánica estadística, nivel matemático avanzado.
- Gallavotti, *Statistical Mechanics: A Short Treatise* (1999): perspectiva moderna sobre ergodicidad, mezcla y fundamentos.
- Sinai, *Ergodic Theory* (1976): la referencia técnica para el teorema de ergodicidad del gas de esferas duras.
- Bricmont, "Science of Chaos or Chaos in Science?" (1995): ensayo accesible sobre el problema de la irreversibilidad y el papel real de la ergodicidad.
- Goldstein & Lebowitz, "On the (Boltzmann) Entropy of Non-Equilibrium Systems", *Physica D* 193 (2004): argumento de tipicidad explicado con precisión.

## Páginas relacionadas

- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Microestado](#/microestado)
- [Espacio de fases](#/espacio-de-fases)
- [Entropía de Boltzmann](#/entropia-de-boltzmann)
- [Teorema de Liouville](#/teorema-de-liouville)
