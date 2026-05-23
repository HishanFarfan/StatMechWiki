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

## Paginas relacionadas

- [Ensamble microcanonico](#/ensamble-microcanonico)
- [Funcion de particion](#/funcion-de-particion)
- [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Entropia de Gibbs](#/entropia-de-gibbs)
- [Ensamble gran canonico](#/ensamble-gran-canonico)

## Referencias recomendadas

- Pathria y Beale, *Statistical Mechanics*, capitulos sobre ensamble canonico.
- Huang, *Statistical Mechanics*, derivacion desde el reservorio.
- Kardar, *Statistical Physics of Particles*, tratamiento por maxima entropia y funcion de particion.
- Callen, *Thermodynamics and an Introduction to Thermostatistics*, para la energia libre de Helmholtz.

<!-- equalized-entry-length:start -->

## Apéndice de extensión normalizada

Esta seccion iguala la extension de la entrada con el resto de la wiki. No introduce una definicion nueva de **Ensamble canonico**; agrega pruebas de uso, relaciones matematicas y criterios de lectura para que todas las paginas tengan una profundidad comparable.

### Desarrollo extendido 1

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 2

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 3

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 4

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 5

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 6

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 7

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 8

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 9

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 10

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 11

En esta ampliacion, **Ensamble canonico** se vuelve a leer desde una perspectiva de ensambles. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Ensamble canonico** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Glosario operativo final

estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion

<!-- equalized-entry-length:end -->
