# Ensamble canonico

## Resumen

El **ensamble canonico** describe un sistema que puede intercambiar energia con un reservorio termico, pero mantiene fijos el volumen $V$ y el numero de particulas $N$. Sus variables naturales son

$$
\boxed{T,\;V,\;N\ \text{fijos}} .
$$

La temperatura $T$ no se obtiene como una derivada de la entropia del sistema aislado, sino que es impuesta por el reservorio. La energia del sistema ya no esta fija: fluctua alrededor de un valor medio.

## Definicion

Si el sistema tiene microestados $i$ con energia $E_i$, la probabilidad canonica es

$$
p_i = \frac{e^{-\beta E_i}}{Z},
\qquad
\beta=\frac{1}{k_B T},
$$

donde la funcion de particion canonica es

$$
Z(T,V,N)=\sum_i e^{-\beta E_i}.
$$

En una descripcion clasica, la suma se reemplaza por una integral de espacio de fases:

$$
Z(T,V,N)
=
\frac{1}{h^{3N}N!}
\int d\Gamma\, e^{-\beta H(q,p)} .
$$

## Origen desde el microcanonico

Considere un sistema pequeno $S$ en contacto termico con un reservorio grande $R$. El sistema total $S+R$ esta aislado y tiene energia fija:

$$
E_{\mathrm{tot}} = E_i + E_R .
$$

La probabilidad de que $S$ este en el microestado $i$ es proporcional al numero de microestados disponibles para el reservorio:

$$
p_i \propto \Omega_R(E_{\mathrm{tot}}-E_i).
$$

Usando $S_R=k_B\ln\Omega_R$,

$$
p_i \propto
\exp\!\left[
\frac{1}{k_B}S_R(E_{\mathrm{tot}}-E_i)
\right].
$$

Si el reservorio es grande, expandimos su entropia alrededor de $E_{\mathrm{tot}}$:

$$
S_R(E_{\mathrm{tot}}-E_i)
\simeq
S_R(E_{\mathrm{tot}})
-
E_i
\left(\frac{\partial S_R}{\partial E_R}\right)_{V_R,N_R}.
$$

Como

$$
\left(\frac{\partial S_R}{\partial E_R}\right)_{V_R,N_R}
=
\frac{1}{T},
$$

se obtiene

$$
p_i \propto e^{-\beta E_i}.
$$

La constante de normalizacion es precisamente $Z$.

## Funcion de particion y energia libre

La funcion de particion no es solo una constante de normalizacion. Codifica la termodinamica del sistema. La energia libre de Helmholtz se obtiene como

$$
F(T,V,N)=-k_B T \ln Z(T,V,N).
$$

A partir de $F$ se recuperan las variables termodinamicas:

$$
\begin{aligned}
S &= -\left(\frac{\partial F}{\partial T}\right)_{V,N},\\[4pt]
P &= -\left(\frac{\partial F}{\partial V}\right)_{T,N},\\[4pt]
\mu &= \left(\frac{\partial F}{\partial N}\right)_{T,V}.
\end{aligned}
$$

## Energia media

La energia interna promedio es

$$
\langle E\rangle
=
\sum_i p_i E_i
=
-\frac{\partial \ln Z}{\partial \beta}.
$$

Tambien puede escribirse como

$$
\langle E\rangle
=
\frac{\partial(\beta F)}{\partial \beta}.
$$

## Fluctuaciones de energia

En el ensamble canonico la energia fluctua. Su varianza esta dada por

$$
\langle(\Delta E)^2\rangle
=
\langle E^2\rangle-\langle E\rangle^2
=
\frac{\partial^2 \ln Z}{\partial \beta^2}.
$$

Esta fluctuacion se relaciona con la capacidad calorifica a volumen constante:

$$
\langle(\Delta E)^2\rangle
=
k_B T^2 C_V,
\qquad
C_V =
\left(\frac{\partial \langle E\rangle}{\partial T}\right)_{V,N}.
$$

Para sistemas macroscopicos usuales, las fluctuaciones relativas decrecen como

$$
\frac{\sqrt{\langle(\Delta E)^2\rangle}}{\langle E\rangle}
\sim
N^{-1/2}.
$$

Esto explica por que la energia parece practicamente fija en el limite termodinamico, aunque el ensamble canonico permita fluctuaciones.

## Distribucion de Boltzmann

Si un nivel de energia $E_a$ tiene degeneracion $g_a$, la probabilidad de observar ese nivel es

$$
P(E_a)
=
\frac{g_a e^{-\beta E_a}}{Z}.
$$

La degeneracion puede compensar parcialmente el factor exponencial. A baja temperatura dominan los estados de menor energia; a alta temperatura contribuyen muchos mas estados.

## Relacion con el ensamble microcanonico

El ensamble microcanonico fija $E$, mientras que el canonico fija $T$. Para sistemas grandes con interacciones de corto alcance, ambos producen la misma termodinamica de equilibrio. La relacion entre ambos puede expresarse mediante una transformada de Laplace aproximada:

$$
Z(\beta,V,N)
=
\int dE\, g(E,V,N)e^{-\beta E}.
$$

En el limite termodinamico, esta integral suele estar dominada por un punto de silla. Ese punto conecta la energia canonica promedio con la temperatura microcanonica:

$$
\beta
=
\frac{1}{k_B}
\left(\frac{\partial S}{\partial E}\right)_{V,N}.
$$

## Ejemplo: sistema de dos niveles

Considere un sistema con dos niveles, $E_0=0$ y $E_1=\epsilon$. La funcion de particion es

$$
Z = 1 + e^{-\beta\epsilon}.
$$

La energia media es

$$
\langle E\rangle
=
\frac{\epsilon e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}
=
\frac{\epsilon}{e^{\beta\epsilon}+1}.
$$

Este ejemplo muestra directamente como la temperatura controla la ocupacion de estados excitados.

## Supuestos importantes

- El sistema esta en equilibrio con un reservorio termico.
- El reservorio es suficientemente grande para mantener $T$ fija.
- El sistema no intercambia particulas con el exterior.
- El volumen y el numero de particulas se consideran fijos.
- Los microestados se ponderan por el factor de Boltzmann $e^{-\beta E_i}$.

## Errores comunes

- Confundir energia fija con energia media fija.
- Tratar $Z$ como una constante sin contenido fisico.
- Olvidar degeneraciones al pasar de microestados a niveles de energia.
- Usar el ensamble canonico para sistemas donde tambien fluctua el numero de particulas.
- Ignorar que las fluctuaciones de energia son parte de la definicion del ensamble.

## Ejemplo adicional: oscilador armónico cuántico

Para un oscilador 1D con $E_n = \hbar\omega(n+\tfrac{1}{2})$:

$$Z_1 = \sum_{n=0}^\infty e^{-\beta\hbar\omega(n+1/2)} = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}$$

$$\langle E\rangle = \hbar\omega\left(\frac{1}{e^{\beta\hbar\omega}-1} + \frac{1}{2}\right) = \hbar\omega\left(\langle n\rangle + \frac{1}{2}\right)$$

donde $\langle n\rangle = 1/(e^{\beta\hbar\omega}-1)$ es el número de ocupación de Planck. A alta temperatura ($k_BT \gg \hbar\omega$): $\langle E\rangle \to k_BT$ (equipartición). A baja temperatura: $\langle E\rangle \to \frac{1}{2}\hbar\omega$ (energía del punto cero).

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 4: derivación desde el reservorio, $Z$ para gas ideal y osciladores.
- Reif, *Fundamentals of Statistical and Thermal Physics*, cap. 6: ensamble canónico con énfasis en la física del reservorio.
- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 16: la energía libre de Helmholtz como función característica del ensamble canónico.
- Pathria & Beale, *Statistical Mechanics*, cap. 3: tratamiento riguroso incluyendo la conexión con el ensamble microcanónico.

## Páginas relacionadas

- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Función de partición](#/funcion-de-particion)
- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Distribución de Boltzmann](#/distribucion-de-boltzmann)
- [Reservorio térmico](#/reservorio-termico)
- [Ensamble gran canónico](#/ensamble-gran-canonico)
