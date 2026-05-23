# Ensamble microcanonico

## Resumen

El **ensamble microcanonico** describe un sistema aislado en equilibrio. Sus variables macroscopicas fijas son la energia $E$, el volumen $V$ y el numero de particulas $N$. La idea central es que, si no hay informacion adicional que distinga unos microestados de otros, todos los microestados accesibles compatibles con $E,V,N$ se consideran igualmente probables.

## Definicion

Un sistema pertenece al ensamble microcanonico cuando no intercambia energia ni particulas con el exterior. El macroestado queda especificado por

$$
\boxed{E, V, N\ \text{fijos}}
$$

En una descripcion discreta, si hay $\Omega(E,V,N)$ microestados compatibles con esas restricciones, la probabilidad de cada microestado accesible $i$ es

$$
p_i =
  \begin{cases}
    \Omega(E,V,N)^{-1}, & i \in \Gamma(E,V,N),\\
    0, & i \notin \Gamma(E,V,N).
  \end{cases}
$$

Aqui $\Gamma(E,V,N)$ denota el conjunto de microestados compatibles con el macroestado especificado.

## Conteo clasico de estados

En una descripcion clasica, el conteo de estados se reemplaza por un volumen de espacio de fases. De forma esquematica,

$$
\Omega(E,V,N)=
\frac{1}{h^{3N}N!}
\int_{\substack{E \leq H(q,p) \leq E+\Delta E}}
d\Gamma .
$$

donde $H(q,p)$ es el Hamiltoniano, $d\Gamma$ es la medida de espacio de fases, $h^{3N}$ hace adimensional el volumen y $N!$ corrige la sobrecuenta de particulas indistinguibles.

La ventana $\Delta E$ debe ser macroscopicamente pequena, pero suficientemente grande para contener muchos microestados.

## Contexto fisico

El ensamble microcanonico es el punto de partida natural para la mecanica estadistica de equilibrio porque representa un sistema aislado. En termodinamica, un sistema aislado alcanza equilibrio maximizando la entropia bajo las restricciones conservadas. En mecanica estadistica, esa entropia se obtiene contando los microestados compatibles con el macroestado.

La conexion central es la entropia de Boltzmann:

$$
S(E,V,N) = k_B \ln \Omega(E,V,N).
$$

Esta expresion dice que la entropia mide cuantas realizaciones microscopicas corresponden al mismo estado macroscopico. Un macroestado con mayor $\Omega$ es mas probable porque puede realizarse de mas maneras.

## Ecuaciones principales

En el ensamble microcanonico, la entropia $S(E,V,N)$ es la funcion termodinamica fundamental:

$$
S(E,V,N)=k_B\ln \Omega(E,V,N).
$$

Las variables intensivas se obtienen como derivadas de la entropia:

$$
\begin{aligned}
\frac{1}{T}
  &= \left(\frac{\partial S}{\partial E}\right)_{V,N},\\[4pt]
\frac{P}{T}
  &= \left(\frac{\partial S}{\partial V}\right)_{E,N},\\[4pt]
-\frac{\mu}{T}
  &= \left(\frac{\partial S}{\partial N}\right)_{E,V}.
\end{aligned}
$$

La temperatura, la presion y el potencial quimico no se imponen desde fuera: se calculan a partir de $S(E,V,N)$.

## Derivacion minima de la temperatura

Considere dos sistemas aislados $A$ y $B$ que pueden intercambiar energia entre si, pero cuyo sistema total permanece aislado:

$$
E_{\text{tot}} = E_A + E_B.
$$

El numero total de microestados compatibles con una particion de energia $E_A$ es proporcional a

$$
\Omega_{\mathrm{tot}}(E_A)=
\Omega_A(E_A)\,
\Omega_B(E_{\mathrm{tot}}-E_A).
$$

El equilibrio corresponde al maximo de $\Omega_{\mathrm{tot}}$, o equivalentemente al maximo de la entropia total:

$$
S_{\mathrm{tot}}=
S_A(E_A)
+
S_B(E_{\mathrm{tot}}-E_A).
$$

La condicion de maximo es

$$
\frac{\partial S_{\mathrm{tot}}}{\partial E_A}=0.
$$

Como $E_B=E_{\mathrm{tot}}-E_A$, se obtiene

$$
\left(\frac{\partial S_A}{\partial E_A}\right)_{V_A,N_A}=
\left(\frac{\partial S_B}{\partial E_B}\right)_{V_B,N_B}.
$$

Esto motiva la definicion

$$
\frac{1}{T}=
\left(\frac{\partial S}{\partial E}\right)_{V,N}.
$$

En equilibrio termico, dos sistemas tienen la misma temperatura porque sus derivadas entropicas respecto de la energia son iguales.

## Ventana de energia

En sistemas clasicos o con espectro discreto denso, el ensamble microcanonico suele definirse usando una pequena ventana de energia:

$$
E \leq H(q,p) \leq E+\Delta E .
$$

La ventana $\Delta E$ debe cumplir dos condiciones practicas:

- ser pequena en la escala macroscopica de la energia total;
- ser suficientemente grande para contener muchos microestados.

En el limite termodinamico, los resultados termodinamicos no deberian depender sensiblemente de la eleccion precisa de $\Delta E$.

## Superficie versus volumen de energia

Algunos textos definen $\Omega$ como el volumen de espacio de fases con energia menor o igual a $E$:

$$
\Omega_{\leq}(E)=
\frac{1}{h^{3N}N!}
\int_{H(q,p)\leq E} d\Gamma .
$$

Otros usan una densidad de estados sobre la superficie de energia:

$$
g(E)=
\frac{1}{h^{3N}N!}
\int d\Gamma\,
\delta\!\left(E-H(q,p)\right) .
$$

Ambas convenciones pueden llevar a la misma termodinamica en sistemas grandes, pero no son identicas en sistemas finitos. Por eso una pagina tecnica debe declarar que convencion esta usando.

## Relacion con otros ensambles

El ensamble microcanonico fija $E$. El ensamble canonico fija $T$ y permite fluctuaciones de energia. Para sistemas grandes con interacciones de corto alcance, ambos ensambles suelen ser equivalentes para cantidades termodinamicas promedio.

La equivalencia puede fallar, o requerir cuidado, en:

- sistemas pequenos;
- sistemas con interacciones de largo alcance;
- regiones de transicion de fase;
- problemas donde las fluctuaciones son observables centrales.

## Ejemplo conceptual: gas aislado

Un gas ideal en una caja rigida y aislada tiene $N$ y $V$ fijos. Si ademas la energia total $E$ esta fija, el estado macroscopico corresponde al ensamble microcanonico. La pregunta estadistica central es cuantos microestados microscopicos de posiciones y momentos son compatibles con esa energia total.

A partir de ese conteo se obtiene $S(E,V,N)$, y desde $S$ se recuperan $T$, $P$ y otras variables termodinamicas.

## Supuestos importantes

- El sistema total esta aislado.
- Las cantidades $E,V,N$ se mantienen fijas.
- Los microestados accesibles compatibles con las restricciones son equiprobables.
- Se ha definido una medida adecuada para contar microestados.
- El sistema tiene una dinamica o mecanismo fisico que permite explorar la region accesible relevante del espacio de fases.

## Errores comunes

- Confundir energia fija con temperatura fija. En el microcanonico se fija $E$, no $T$.
- Suponer que todos los microestados son igualmente probables en cualquier ensamble.
- Ignorar la ventana de energia $\Delta E$.
- Usar formulas canonicas sin justificar equivalencia de ensambles.
- Confundir $\Omega$ como numero de microestados con otros usos de la letra $\Omega$, como el potencial gran canonico en algunos textos.

## Preguntas guia

- Que significa que un sistema este aislado?
- Como se cuentan microestados en un sistema clasico?
- Por que la entropia es logaritmica en $\Omega$?
- Como aparece la temperatura si no se impone desde fuera?
- Cuando se puede reemplazar el microcanonico por el canonico?

## Coherencia dentro de la wiki

Dentro del mapa general, **Ensamble microcanonico** queda reservado para la idea precisa de la nocion de Ensamble microcanonico. Su papel local es mostrar que variables se fijan, cuales fluctuan y que normalizacion gobierna los promedios. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{restricciones}\longrightarrow p_i\longrightarrow Z\ \text{o}\ \Omega\longrightarrow \langle A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Ensamble microcanonico y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Ensambles**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Microestado](#/microestado)
- [Macroestado](#/macroestado)
- [Espacio de fases](#/espacio-de-fases)
- [Entropia de Boltzmann](#/entropia-de-boltzmann)
- [Ensamble canonico](#/ensamble-canonico)
- [Funcion de particion](#/funcion-de-particion)

## Referencias recomendadas

- Pathria y Beale, *Statistical Mechanics*, capitulos iniciales sobre ensambles.
- Huang, *Statistical Mechanics*, tratamiento de microcanonico y conexion termodinamica.
- Kardar, *Statistical Physics of Particles*, introduccion a ensambles y conteo de estados.
- Callen, *Thermodynamics and an Introduction to Thermostatistics*, para la estructura termodinamica de $S(E,V,N)$.
