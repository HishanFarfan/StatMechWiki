# Ensamble microcanonico

<!-- curated-entry -->

## Resumen

El **ensamble microcanonico** describe un sistema aislado en equilibrio, con energia $E$, volumen $V$ y numero de particulas $N$ fijos. Es el ensamble natural cuando el sistema total no intercambia energia, particulas ni volumen con el exterior. Su postulado operativo es que todos los microestados accesibles compatibles con las restricciones macroscopicas tienen la misma probabilidad.

La ecuacion central es la entropia de Boltzmann,

$$
S(E,V,N)=k_B\ln\Omega(E,V,N),
$$

donde $\Omega(E,V,N)$ cuenta los microestados accesibles. Desde esta funcion se recuperan temperatura, presion y potencial quimico como derivadas entropicas. Por eso el microcanonico es una entrada troncal: conecta conteo microscopico, equilibrio termico y termodinamica sin introducir todavia un reservorio de temperatura fija.

## Definicion

Un sistema esta en el ensamble microcanonico si el macroestado queda fijado por

$$
\boxed{E,\;V,\;N\ \text{fijos}} .
$$

En una descripcion discreta, sea $\Gamma(E,V,N)$ el conjunto de microestados compatibles con esas restricciones y sea $\Omega(E,V,N)=|\Gamma(E,V,N)|$. La distribucion microcanonica es

$$
p_i =
\begin{cases}
\Omega(E,V,N)^{-1}, & i\in\Gamma(E,V,N),\\
0, & i\notin\Gamma(E,V,N).
\end{cases}
$$

La equiprobabilidad no afirma que todos los estados imaginables del sistema sean igualmente probables. Afirma algo mas preciso: son equiprobables los estados **accesibles** que satisfacen las mismas restricciones macroscopicas.

## Notacion

- $E$: energia total fijada del sistema aislado.
- $V$: volumen fijo o parametro externo fijo.
- $N$: numero fijo de particulas.
- $\Gamma(E,V,N)$: region accesible del espacio de estados.
- $\Omega(E,V,N)$: numero de microestados accesibles o volumen adimensional de espacio de fases.
- $g(E)$: densidad de estados; no siempre coincide con $\Omega$.
- $k_B$: constante de Boltzmann.
- $\Delta E$: ventana energetica usada cuando la energia exacta define una superficie demasiado fina.

En sistemas clasicos, el conteo debe hacerse adimensional. Una convencion usual es

$$
\Omega(E,V,N)=
\frac{1}{h^{3N}N!}
\int_{E\le H(q,p)\le E+\Delta E} d\Gamma .
$$

El factor $h^{3N}$ fija la celda de espacio de fases y $N!$ evita sobrecontar particulas indistinguibles.

## Idea fisica

El microcanonico responde una pregunta concreta: si solo se conoce que el sistema esta aislado y tiene $E,V,N$ fijos, que distribucion de microestados representa mejor ese conocimiento? La respuesta es asignar igual peso a todas las realizaciones microscopicas compatibles.

La razon fisica no es que el sistema visite necesariamente todos los microestados en tiempos cortos. La razon estadistica es que, sin informacion adicional que distinga dos estados accesibles, no hay base para ponderar uno mas que otro. La dinamica real entra despues, al preguntar si el sistema explora efectivamente la region accesible; esa pregunta se conecta con ergodicidad, tiempos de mezcla y ruptura de ergodicidad.

## Formulacion matematica

La entropia fundamental es

$$
S(E,V,N)=k_B\ln \Omega(E,V,N).
$$

Las variables intensivas se obtienen derivando $S$ respecto de sus variables extensivas:

$$
\begin{aligned}
\frac{1}{T}
  &=\left(\frac{\partial S}{\partial E}\right)_{V,N},\\[4pt]
\frac{P}{T}
  &=\left(\frac{\partial S}{\partial V}\right)_{E,N},\\[4pt]
-\frac{\mu}{T}
  &=\left(\frac{\partial S}{\partial N}\right)_{E,V}.
\end{aligned}
$$

Para un observable $A_i$ definido en los microestados accesibles, el promedio microcanonico es

$$
\langle A\rangle_E
=
\frac{1}{\Omega(E,V,N)}
\sum_{i\in\Gamma(E,V,N)} A_i .
$$

En forma clasica, la suma se reemplaza por una integral restringida a la capa de energia:

$$
\langle A\rangle_E
=
\frac{
\int d\Gamma\,A(q,p)\,\delta(E-H(q,p))
}{
\int d\Gamma\,\delta(E-H(q,p))
}.
$$

## Derivacion o motivacion

Considere dos sistemas $A$ y $B$ que pueden intercambiar energia entre si, mientras el sistema total permanece aislado:

$$
E_{\rm tot}=E_A+E_B.
$$

El numero de microestados compatibles con que $A$ tenga energia $E_A$ es

$$
\Omega_{\rm tot}(E_A)
=
\Omega_A(E_A)\Omega_B(E_{\rm tot}-E_A).
$$

El equilibrio corresponde al valor de $E_A$ que maximiza $\Omega_{\rm tot}$, o equivalentemente

$$
S_{\rm tot}(E_A)
=
S_A(E_A)+S_B(E_{\rm tot}-E_A).
$$

La condicion de maximo es

$$
\frac{\partial S_{\rm tot}}{\partial E_A}=0,
$$

lo que implica

$$
\left(\frac{\partial S_A}{\partial E_A}\right)_{V_A,N_A}
=
\left(\frac{\partial S_B}{\partial E_B}\right)_{V_B,N_B}.
$$

Esta igualdad motiva la definicion microcanonica de temperatura:

$$
\frac{1}{T}
=
\left(\frac{\partial S}{\partial E}\right)_{V,N}.
$$

La temperatura no se impone desde fuera; aparece como la condicion de equilibrio entre sistemas que comparten una energia total fija.

## Convenciones sobre la energia

Hay dos convenciones frecuentes. La primera cuenta estados dentro de una ventana,

$$
E\le H(q,p)\le E+\Delta E.
$$

La segunda usa la densidad de estados sobre la superficie de energia,

$$
g(E)=
\frac{1}{h^{3N}N!}
\int d\Gamma\,\delta(E-H(q,p)).
$$

En el limite termodinamico suelen producir la misma termodinamica intensiva para sistemas ordinarios. En sistemas finitos, o en modelos con espectros muy discretos, la diferencia puede ser visible. Por eso una entrada o calculo debe declarar que objeto usa: $\Omega(E)$, $\Omega_{\le E}$ o $g(E)$.

## Supuestos y regimen de validez

- El sistema total esta aislado.
- Las restricciones macroscopicas relevantes son $E,V,N$.
- La medida de conteo de microestados esta definida.
- Los microestados accesibles no se distinguen mediante informacion adicional.
- El equilibrio puede describirse mediante promedios sobre la region accesible.
- El limite termodinamico permite reemplazar detalles finitos por funciones suaves.

La equivalencia con el ensamble canonico requiere cuidado. Suele funcionar para sistemas grandes con interacciones de corto alcance, pero puede fallar en sistemas pequenos, sistemas con interacciones de largo alcance, regiones de coexistencia de fases o problemas donde las fluctuaciones son el observable principal.

## Ejemplos

1. **Tres espines aislados con energia fija.** Suponga tres espines no interactuantes en campo, con energia proporcional al numero de espines excitados. Si la energia fija exige exactamente un espin excitado, hay tres microestados accesibles: $100$, $010$ y $001$. Entonces $\Omega=3$ y cada configuracion tiene probabilidad $1/3$. Esta es una aplicacion microcanonica: se fija energia, no temperatura.

2. **Gas ideal aislado.** Un gas en una caja rigida y aislada tiene $N$ y $V$ fijos. Si la energia total $E$ tambien esta fijada, el problema estadistico es calcular el volumen de espacio de fases compatible con esa energia. A partir de $\Omega(E,V,N)$ se obtiene $S(E,V,N)$ y luego la ecuacion de estado mediante derivadas como $P/T=(\partial S/\partial V)_{E,N}$.

3. **Dos solidos de Einstein en contacto.** Dos solidos aislados en conjunto comparten un numero total fijo de cuantos de energia. Si un solido tiene $q_A$ cuantos y el otro $q_{\rm tot}-q_A$, el peso de esa particion es $\Omega_A(q_A)\Omega_B(q_{\rm tot}-q_A)$. El equilibrio aparece en la particion que maximiza ese producto, no porque una temperatura externa haya sido impuesta.

## Errores comunes

- Confundir energia fija con temperatura fija. El microcanonico fija $E$; el canonico fija $T$.
- Usar pesos de Boltzmann $e^{-\beta E_i}$ dentro de una definicion microcanonica.
- Olvidar que la equiprobabilidad vale solo dentro de la region accesible.
- No declarar si $\Omega$ significa numero de estados en una ventana, volumen acumulado o densidad de estados.
- Suponer equivalencia de ensambles en sistemas finitos sin revisar fluctuaciones.
- Ignorar el factor $N!$ cuando se cuenta un gas clasico de particulas indistinguibles.

## Relacion con otras entradas

El ensamble microcanonico depende de [microestado](#/microestado), [macroestado](#/macroestado), [espacio de fases](#/espacio-de-fases), [densidad de estados](#/densidad-de-estados) y [entropia de Boltzmann](#/entropia-de-boltzmann). Se compara directamente con [ensamble canonico](#/ensamble-canonico), [ensamble gran canonico](#/ensamble-gran-canonico) y [equivalencia de ensambles](#/equivalencia-de-ensambles).

Tambien es el punto de partida para discutir [temperatura estadistica](#/temperatura-estadistica), [hipotesis ergodica](#/hipotesis-ergodica), [limite termodinamico](#/limite-termodinamico) y [fluctuaciones](#/fluctuaciones).

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

- Kardar, *Statistical Physics of Particles*, cap. 4: derivacion formal de los ensambles clasicos, sistemas de dos niveles, gas ideal y conexion con el canonico.
- Schroeder, *An Introduction to Thermal Physics*, caps. 2-3: conteo de microestados, solido de Einstein, entropia y definicion estadistica de temperatura.
- Blundell y Blundell, *Concepts in Thermal Physics*, cap. 4 y caps. 19-21: microestados, macroestados, ensambles, funcion de particion y gas ideal.
- Pathria y Beale, *Statistical Mechanics*: tratamiento avanzado del ensamble microcanonico y condiciones de equivalencia.

## Paginas relacionadas

- [Microestado](#/microestado)
- [Macroestado](#/macroestado)
- [Espacio de fases](#/espacio-de-fases)
- [Densidad de estados](#/densidad-de-estados)
- [Entropia de Boltzmann](#/entropia-de-boltzmann)
- [Ensamble canonico](#/ensamble-canonico)
- [Equivalencia de ensambles](#/equivalencia-de-ensambles)
