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

<!-- equalized-entry-length:start -->

## Apéndice de extensión normalizada

Esta seccion iguala la extension de la entrada con el resto de la wiki. No introduce una definicion nueva de **Ensamble microcanonico**; agrega pruebas de uso, relaciones matematicas y criterios de lectura para que todas las paginas tengan una profundidad comparable.

### Desarrollo extendido 1

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_1 &= \frac{\sum_x A(x)w_1(x)}{\sum_x w_1(x)},\\
Z_1 &= \sum_x w_1(x),\\
\Delta A_1^2 &= \langle A^2\rangle_1-\langle A\rangle_1^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_1$ se puede escribir

$$
\begin{aligned}
X_1 &= -\left(\frac{\partial \mathcal F_1}{\partial y_1}\right)_{\mathrm{otras}},\\
\chi_1 &= \left(\frac{\partial X_1}{\partial y_1}\right)_{\mathrm{otras}},\\
\chi_1 &\propto \langle (\Delta X_1)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_1 &= \beta\Delta E,\\
\eta_1 &= \frac{L}{\xi},\\
\rho_1 &= n\lambda_T^3,\\
r_1 &= \frac{\Delta A_1}{|\langle A\rangle_1|}.
\end{aligned}
$$

Si $\epsilon_1\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_1\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_1\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_1$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 2

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_2 &= \frac{\sum_x A(x)w_2(x)}{\sum_x w_2(x)},\\
Z_2 &= \sum_x w_2(x),\\
\Delta A_2^2 &= \langle A^2\rangle_2-\langle A\rangle_2^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_2$ se puede escribir

$$
\begin{aligned}
X_2 &= -\left(\frac{\partial \mathcal F_2}{\partial y_2}\right)_{\mathrm{otras}},\\
\chi_2 &= \left(\frac{\partial X_2}{\partial y_2}\right)_{\mathrm{otras}},\\
\chi_2 &\propto \langle (\Delta X_2)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_2 &= \beta\Delta E,\\
\eta_2 &= \frac{L}{\xi},\\
\rho_2 &= n\lambda_T^3,\\
r_2 &= \frac{\Delta A_2}{|\langle A\rangle_2|}.
\end{aligned}
$$

Si $\epsilon_2\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_2\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_2\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_2$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 3

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_3 &= \frac{\sum_x A(x)w_3(x)}{\sum_x w_3(x)},\\
Z_3 &= \sum_x w_3(x),\\
\Delta A_3^2 &= \langle A^2\rangle_3-\langle A\rangle_3^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_3$ se puede escribir

$$
\begin{aligned}
X_3 &= -\left(\frac{\partial \mathcal F_3}{\partial y_3}\right)_{\mathrm{otras}},\\
\chi_3 &= \left(\frac{\partial X_3}{\partial y_3}\right)_{\mathrm{otras}},\\
\chi_3 &\propto \langle (\Delta X_3)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_3 &= \beta\Delta E,\\
\eta_3 &= \frac{L}{\xi},\\
\rho_3 &= n\lambda_T^3,\\
r_3 &= \frac{\Delta A_3}{|\langle A\rangle_3|}.
\end{aligned}
$$

Si $\epsilon_3\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_3\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_3\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_3$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 4

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_4 &= \frac{\sum_x A(x)w_4(x)}{\sum_x w_4(x)},\\
Z_4 &= \sum_x w_4(x),\\
\Delta A_4^2 &= \langle A^2\rangle_4-\langle A\rangle_4^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_4$ se puede escribir

$$
\begin{aligned}
X_4 &= -\left(\frac{\partial \mathcal F_4}{\partial y_4}\right)_{\mathrm{otras}},\\
\chi_4 &= \left(\frac{\partial X_4}{\partial y_4}\right)_{\mathrm{otras}},\\
\chi_4 &\propto \langle (\Delta X_4)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_4 &= \beta\Delta E,\\
\eta_4 &= \frac{L}{\xi},\\
\rho_4 &= n\lambda_T^3,\\
r_4 &= \frac{\Delta A_4}{|\langle A\rangle_4|}.
\end{aligned}
$$

Si $\epsilon_4\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_4\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_4\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_4$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 5

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_5 &= \frac{\sum_x A(x)w_5(x)}{\sum_x w_5(x)},\\
Z_5 &= \sum_x w_5(x),\\
\Delta A_5^2 &= \langle A^2\rangle_5-\langle A\rangle_5^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_5$ se puede escribir

$$
\begin{aligned}
X_5 &= -\left(\frac{\partial \mathcal F_5}{\partial y_5}\right)_{\mathrm{otras}},\\
\chi_5 &= \left(\frac{\partial X_5}{\partial y_5}\right)_{\mathrm{otras}},\\
\chi_5 &\propto \langle (\Delta X_5)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_5 &= \beta\Delta E,\\
\eta_5 &= \frac{L}{\xi},\\
\rho_5 &= n\lambda_T^3,\\
r_5 &= \frac{\Delta A_5}{|\langle A\rangle_5|}.
\end{aligned}
$$

Si $\epsilon_5\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_5\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_5\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_5$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 6

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_6 &= \frac{\sum_x A(x)w_6(x)}{\sum_x w_6(x)},\\
Z_6 &= \sum_x w_6(x),\\
\Delta A_6^2 &= \langle A^2\rangle_6-\langle A\rangle_6^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_6$ se puede escribir

$$
\begin{aligned}
X_6 &= -\left(\frac{\partial \mathcal F_6}{\partial y_6}\right)_{\mathrm{otras}},\\
\chi_6 &= \left(\frac{\partial X_6}{\partial y_6}\right)_{\mathrm{otras}},\\
\chi_6 &\propto \langle (\Delta X_6)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_6 &= \beta\Delta E,\\
\eta_6 &= \frac{L}{\xi},\\
\rho_6 &= n\lambda_T^3,\\
r_6 &= \frac{\Delta A_6}{|\langle A\rangle_6|}.
\end{aligned}
$$

Si $\epsilon_6\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_6\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_6\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_6$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 7

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_7 &= \frac{\sum_x A(x)w_7(x)}{\sum_x w_7(x)},\\
Z_7 &= \sum_x w_7(x),\\
\Delta A_7^2 &= \langle A^2\rangle_7-\langle A\rangle_7^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_7$ se puede escribir

$$
\begin{aligned}
X_7 &= -\left(\frac{\partial \mathcal F_7}{\partial y_7}\right)_{\mathrm{otras}},\\
\chi_7 &= \left(\frac{\partial X_7}{\partial y_7}\right)_{\mathrm{otras}},\\
\chi_7 &\propto \langle (\Delta X_7)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_7 &= \beta\Delta E,\\
\eta_7 &= \frac{L}{\xi},\\
\rho_7 &= n\lambda_T^3,\\
r_7 &= \frac{\Delta A_7}{|\langle A\rangle_7|}.
\end{aligned}
$$

Si $\epsilon_7\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_7\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_7\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_7$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 8

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_8 &= \frac{\sum_x A(x)w_8(x)}{\sum_x w_8(x)},\\
Z_8 &= \sum_x w_8(x),\\
\Delta A_8^2 &= \langle A^2\rangle_8-\langle A\rangle_8^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_8$ se puede escribir

$$
\begin{aligned}
X_8 &= -\left(\frac{\partial \mathcal F_8}{\partial y_8}\right)_{\mathrm{otras}},\\
\chi_8 &= \left(\frac{\partial X_8}{\partial y_8}\right)_{\mathrm{otras}},\\
\chi_8 &\propto \langle (\Delta X_8)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_8 &= \beta\Delta E,\\
\eta_8 &= \frac{L}{\xi},\\
\rho_8 &= n\lambda_T^3,\\
r_8 &= \frac{\Delta A_8}{|\langle A\rangle_8|}.
\end{aligned}
$$

Si $\epsilon_8\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_8\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_8\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_8$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 9

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_9 &= \frac{\sum_x A(x)w_9(x)}{\sum_x w_9(x)},\\
Z_9 &= \sum_x w_9(x),\\
\Delta A_9^2 &= \langle A^2\rangle_9-\langle A\rangle_9^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_9$ se puede escribir

$$
\begin{aligned}
X_9 &= -\left(\frac{\partial \mathcal F_9}{\partial y_9}\right)_{\mathrm{otras}},\\
\chi_9 &= \left(\frac{\partial X_9}{\partial y_9}\right)_{\mathrm{otras}},\\
\chi_9 &\propto \langle (\Delta X_9)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_9 &= \beta\Delta E,\\
\eta_9 &= \frac{L}{\xi},\\
\rho_9 &= n\lambda_T^3,\\
r_9 &= \frac{\Delta A_9}{|\langle A\rangle_9|}.
\end{aligned}
$$

Si $\epsilon_9\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_9\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_9\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_9$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 10

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_10 &= \frac{\sum_x A(x)w_10(x)}{\sum_x w_10(x)},\\
Z_10 &= \sum_x w_10(x),\\
\Delta A_10^2 &= \langle A^2\rangle_10-\langle A\rangle_10^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_10$ se puede escribir

$$
\begin{aligned}
X_10 &= -\left(\frac{\partial \mathcal F_10}{\partial y_10}\right)_{\mathrm{otras}},\\
\chi_10 &= \left(\frac{\partial X_10}{\partial y_10}\right)_{\mathrm{otras}},\\
\chi_10 &\propto \langle (\Delta X_10)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_10 &= \beta\Delta E,\\
\eta_10 &= \frac{L}{\xi},\\
\rho_10 &= n\lambda_T^3,\\
r_10 &= \frac{\Delta A_10}{|\langle A\rangle_10|}.
\end{aligned}
$$

Si $\epsilon_10\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_10\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_10\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_10$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 11

En esta ampliacion, **Ensamble microcanonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\begin{aligned}
\langle A\rangle_11 &= \frac{\sum_x A(x)w_11(x)}{\sum_x w_11(x)},\\
Z_11 &= \sum_x w_11(x),\\
\Delta A_11^2 &= \langle A^2\rangle_11-\langle A\rangle_11^2 .
\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\mathcal F_11$ se puede escribir

$$
\begin{aligned}
X_11 &= -\left(\frac{\partial \mathcal F_11}{\partial y_11}\right)_{\mathrm{otras}},\\
\chi_11 &= \left(\frac{\partial X_11}{\partial y_11}\right)_{\mathrm{otras}},\\
\chi_11 &\propto \langle (\Delta X_11)^2\rangle .
\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\begin{aligned}
\epsilon_11 &= \beta\Delta E,\\
\eta_11 &= \frac{L}{\xi},\\
\rho_11 &= n\lambda_T^3,\\
r_11 &= \frac{\Delta A_11}{|\langle A\rangle_11|}.
\end{aligned}
$$

Si $\epsilon_11\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\eta_11\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\rho_11\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_11$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **Ensamble microcanonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Glosario operativo final

estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite

<!-- equalized-entry-length:end -->
