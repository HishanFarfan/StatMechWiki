# Sistema de dos niveles

## Resumen

El **sistema de dos niveles** es uno de los modelos mas simples de la mecanica estadistica. Tiene solo dos energias posibles y permite ver de forma transparente el papel de la temperatura.

## Definicion

Considere un sistema con niveles

$$
E_0=0,
\qquad
E_1=\epsilon.
$$

La funcion de particion canonica es

$$
Z=1+e^{-\beta\epsilon}.
$$

## Probabilidades

Las probabilidades de ocupacion son

$$
p_0=\frac{1}{1+e^{-\beta\epsilon}},
\qquad
p_1=\frac{e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}.
$$

Equivalentemente,

$$
p_1=\frac{1}{e^{\beta\epsilon}+1}.
$$

## Energia media

La energia media es

$$
\langle E\rangle
=
\epsilon p_1
=
\frac{\epsilon}{e^{\beta\epsilon}+1}.
$$

A baja temperatura, $\beta\epsilon\gg 1$, el sistema esta casi siempre en el estado fundamental. A alta temperatura, ambos niveles se ocupan casi por igual y $\langle E\rangle\to \epsilon/2$.

## Capacidad calorifica

La capacidad calorifica es

$$
C
=
\frac{\partial \langle E\rangle}{\partial T}
=
k_B(\beta\epsilon)^2
\frac{e^{\beta\epsilon}}{(e^{\beta\epsilon}+1)^2}.
$$

Esta funcion presenta un maximo conocido como anomalia de Schottky.

## Entropia

La entropia puede calcularse como

$$
S=-k_B(p_0\ln p_0+p_1\ln p_1).
$$

Tambien se obtiene desde

$$
S=k_B\ln Z+k_B\beta\langle E\rangle.
$$

## Sistema con degeneracion

Si el nivel excitado tiene degeneracion $g$, entonces

$$
Z=1+g e^{-\beta\epsilon}.
$$

La probabilidad de estar en algun estado excitado es

$$
P_1
=
\frac{g e^{-\beta\epsilon}}{1+g e^{-\beta\epsilon}}.
$$

## Aplicaciones

El modelo aparece como aproximacion en:

- espines $1/2$ en campo magnetico;
- defectos con dos configuraciones;
- sistemas atomicos con dos niveles relevantes;
- bits termicos;
- modelos pedagogicos de capacidad calorifica.

## Errores comunes

- Confundir probabilidad de un microestado con probabilidad de un nivel degenerado.
- Olvidar que el limite de alta temperatura no concentra toda la probabilidad en el nivel excitado.
- Aplicar el modelo de dos niveles cuando muchos niveles energeticos son accesibles.

## Pico de Schottky

La anomalía de Schottky es el máximo de $C(T)$ que aparece cuando la energía térmica $k_BT$ es comparable con la separación entre niveles $\epsilon$. El pico ocurre en

$$
k_BT^* \approx 0.42\,\epsilon \qquad \Longleftrightarrow \qquad \beta^*\epsilon \approx 2.40.
$$

El valor máximo es

$$
C_{\max} \approx 0.439\,k_B.
$$

A temperaturas bajas, $C \propto e^{-\epsilon/k_BT} \to 0$ porque el nivel excitado está desocupado. A temperaturas altas, $C \propto T^{-2} \to 0$ porque ambos niveles tienen la misma ocupación y ya no hay transferencia neta de energía. El pico es la firma experimental de que el sistema tiene solo dos niveles accesibles.

Ejemplos donde se observa:
- Sales paramagnéticas en campo magnético bajo ($\epsilon = 2\mu_B B$).
- Centros de color en diamante.
- Grupos OH en sólidos con dos posiciones de equilibrio.
- Núcleos atómicos con espín $I=1/2$ en resonancia magnética nuclear (RMN).

## Espín $\frac{1}{2}$ en campo magnético

El ejemplo canónico del sistema de dos niveles es un espín $\frac{1}{2}$ con momento magnético $\mu_B$ en un campo $B$. Los dos niveles son $E_\pm = \mp\mu_B B$, de modo que $\epsilon = 2\mu_B B$. La función de partición es

$$
Z = e^{\beta\mu_B B} + e^{-\beta\mu_B B} = 2\cosh(\beta\mu_B B).
$$

La magnetización de $N$ espines es

$$
M = N\mu_B \tanh(\beta\mu_B B),
$$

y la capacidad calorífica muestra el pico de Schottky a $k_BT^* \approx 0.83\,\mu_B B$.

Para $B = 1\ \text{T}$: $T^* \approx 0.55\ \text{K}$, lo que confirma que a temperatura ambiente el sistema está completamente en el régimen lineal (ley de Curie).

## Temperatura negativa

El sistema de dos niveles permite entender la temperatura negativa. Si se invierten las poblaciones —más ocupación en $E_1$ que en $E_0$— la temperatura es negativa:

$$
\frac{p_1}{p_0} = e^{-\beta\epsilon} > 1 \implies \beta < 0 \implies T < 0.
$$

Esto no viola la termodinámica; solo ocurre en sistemas con espectro acotado (energía máxima finita). Una inversión de población se consigue, por ejemplo, en láseres o en gases ultrafríos de átomos de rubidio en redes ópticas. En contacto térmico con un sistema ordinario, un sistema a $T < 0$ cede calor espontáneamente: los sistemas de temperatura negativa están "más calientes" que cualquier sistema a $T > 0$.

## Fuentes para profundizar

- Schroeder, *An Introduction to Thermal Physics*, cap. 3: sistema de dos niveles con derivación explícita de la anomalía de Schottky y múltiples realizaciones físicas.
- Kardar, *Statistical Physics of Particles*, cap. 4: sistema de dos niveles como introducción al ensamble canónico, con el espín-1/2 como ejemplo principal.
- Ramsey, "Thermodynamics and Statistical Mechanics at Negative Absolute Temperatures", *Phys. Rev.* 103, 20 (1956): el artículo que establece la termodinámica de temperatura negativa.

## Páginas relacionadas

- [Paramagnetismo](#/paramagnetismo)
- [Ensamble canónico](#/ensamble-canonico)
- [Función de partición](#/funcion-de-particion)
- [Distribución de Boltzmann](#/distribucion-de-boltzmann)
- [Temperatura estadística](#/temperatura-estadistica)
- [Fluctuaciones](#/fluctuaciones)
