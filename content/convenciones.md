# Convenciones de notacion

## Convencion base

La wiki usa $k_B$ explicita por defecto. La temperatura inversa se define como

$$
\beta=\frac{1}{k_B T}.
$$

Si una pagina usa unidades con $k_B=1$, debe declararlo al inicio.

## Ensambles

$$
\begin{array}{c|c|c}
\text{Ensamble} & \text{Variables fijas} & \text{Potencial}\\
\hline
\text{Microcanonico} & E,V,N & S(E,V,N)\\
\text{Canonico} & T,V,N & F(T,V,N)\\
\text{Gran canonico} & T,V,\mu & \Phi(T,V,\mu)
\end{array}
$$

## Simbolos

| Simbolo | Significado |
|---|---|
| $N$ | Numero de particulas |
| $V$ | Volumen |
| $E$ | Energia |
| $T$ | Temperatura |
| $S$ | Entropia |
| $k_B$ | Constante de Boltzmann |
| $\beta$ | $1/(k_B T)$ |
| $\Omega$ | Numero de microestados o volumen de espacio de fases, segun contexto |
| $Z$ | Funcion de particion canonica |
| $\Xi$ | Gran funcion de particion |
| $F$ | Energia libre de Helmholtz |
| $\Phi$ | Potencial gran canonico |
| $\mu$ | Potencial quimico |

## Reglas editoriales

- Definir cada simbolo local en la pagina donde aparece.
- Evitar usar $\Omega$ para el potencial gran canonico; preferir $\Phi$.
- Usar $Z_N$ cuando sea necesario enfatizar que la funcion de particion canonica tiene $N$ fijo.
- Declarar si una suma es sobre microestados o sobre niveles de energia.
- Para ecuaciones largas, usar bloques LaTeX con `$$...$$`.

## Estilo de paginas

Cada pagina troncal deberia incluir:

1. Resumen.
2. Definicion.
3. Contexto fisico.
4. Ecuaciones principales.
5. Supuestos.
6. Errores comunes.
7. Paginas relacionadas.
8. Referencias si corresponde.

<!-- equalized-entry-length:start -->

## Apendice editorial: lectura tecnica y pedagogica

Este apendice sustituye la extension mecanica anterior por una lectura mas editorial. Su objetivo no es alargar la pagina, sino hacer que **Convenciones de notacion** pueda estudiarse como una entrada tecnica: primero se identifica el objeto matematico, despues se explica como se usa en calculos, y finalmente se separan los limites de validez de las intuiciones utiles. En esta pagina, el objeto central pertenece al area de **Recursos** y por tanto se debe leer en relacion con microestados, macroestados, medidas y restricciones.

La primera pregunta pedagogica es: que problema resuelve esta nocion? En mecanica estadistica casi nunca se introduce un concepto solo para nombrar algo. Se introduce porque permite reducir muchos grados de libertad a una cantidad controlable. En **Convenciones de notacion**, esa reduccion debe dejar claro que se promedia, que se conserva, que fluctua y que escala domina. Una lectura tecnica minima debe poder responder, sin ambiguedad, cuales son los estados admisibles, que peso recibe cada estado y que observable se quiere predecir.

$$
\begin{aligned}
\text{objeto} &:\quad microestados, macroestados, medidas y restricciones,\\
\text{observables} &:\quad entropia, temperatura, presion y potencial quimico,\\
\text{herramientas} &:\quad conteo de estados, maximizacion de entropia y comparacion de ensambles.
\end{aligned}
$$

La ecuacion clave de la entrada debe entenderse como una pieza dentro de este esquema, no como una receta aislada. Si se modifica la medida, el Hamiltoniano, las condiciones de borde, el protocolo externo o el reservorio, cambia tambien el significado de la formula. Esta es una regla editorial importante para toda la wiki: una ecuacion sin contexto puede ser correcta y aun asi pedagogicamente inutil.

## Formalismo minimo

El formalismo minimo consiste en escribir una variable microscopica $x$, una regla de peso $w(x)$, una normalizacion y un observable. En equilibrio, $w(x)$ suele depender de una energia. Fuera del equilibrio, puede depender de una trayectoria completa, de una tasa de transicion o de una accion dinamica. En modelos de red, $x$ representa configuraciones discretas; en gases y fluidos, representa puntos del espacio de fases; en sistemas cuanticos, representa estados o numeros de ocupacion.

$$
\begin{aligned}
Z &= \sum_x w(x),\\
p(x) &= \frac{w(x)}{Z},\\
\langle A\rangle &= \sum_x A(x)p(x),\\
\operatorname{Var}(A) &= \langle A^2\rangle-\langle A\rangle^2.
\end{aligned}
$$

Para **Convenciones de notacion**, esta escritura debe especializarse usando la estructura propia del tema. La identidad orientadora de esta entrada puede resumirse como

$$
\Omega(E)=\int d\Gamma\,\delta(E-H(\Gamma)),\qquad S=k_B\ln\Omega
$$

La utilidad de escribir el formalismo de esta manera es que obliga a revisar normalizacion, dimensiones y variables fijas. Si $Z$ es una funcion de particion, su logaritmo genera potenciales. Si $Z$ es una normalizacion de trayectorias, su logaritmo puede generar cumulantes dinamicos. Si la suma no converge, o si el peso no es positivo cuando deberia representar probabilidades, hay que reinterpretar el problema antes de calcular.

## Derivacion guiada

Una derivacion pedagogica no intenta mostrar todos los detalles tecnicos de una monografia. Su funcion es revelar que supuestos sostienen el resultado. Una derivacion limpia de **Convenciones de notacion** suele seguir cuatro pasos. Primero, se define el conjunto de estados o trayectorias. Segundo, se imponen restricciones macroscopicas. Tercero, se obtiene una distribucion o ecuacion efectiva. Cuarto, se extraen observables y se comprueba que los limites conocidos se recuperan.

$$
\begin{aligned}
\text{estados} &\longrightarrow \text{restricciones},\\
\text{restricciones} &\longrightarrow p(x)\ \text{o}\ P[\Gamma],\\
p(x) &\longrightarrow \langle A\rangle,\ \operatorname{Var}(A),\ C(t),\\
\langle A\rangle &\longrightarrow \text{prediccion fisica}.
\end{aligned}
$$

El punto delicado esta en la segunda flecha. Imponer energia fija no es lo mismo que imponer temperatura fija; imponer estacionariedad no es lo mismo que imponer equilibrio; imponer una tasa de transicion no es lo mismo que imponer una distribucion final. Por eso una entrada bien redactada debe separar con cuidado definicion, hipotesis y consecuencia. La definicion dice que objeto se estudia; la hipotesis dice bajo que condiciones se lo calcula; la consecuencia dice que observable o criterio se obtiene.

## Interpretacion fisica

La interpretacion fisica debe evitar dos extremos. El primero es reducir el tema a una formula. El segundo es explicarlo solo con palabras vagas. La ruta intermedia es asociar cada simbolo con una operacion fisica: una suma cuenta posibilidades, una derivada mide una respuesta, una delta impone una restriccion, una corriente mide transferencia, una correlacion mide memoria o cooperatividad.

En **Convenciones de notacion**, la pregunta fisica central es que mecanismo vuelve relevante a entropia, temperatura, presion y potencial quimico. Si domina la energia, la distribucion favorece estados de baja energia. Si domina la entropia, la degeneracion puede compensar costos energeticos. Si domina una corriente, el estado estacionario no se caracteriza solo por probabilidades, sino tambien por ciclos, flujos y disipacion. Si domina una longitud de correlacion, el tamano del sistema y las condiciones de borde dejan de ser detalles secundarios.

$$
\begin{aligned}
\text{valor medio} &\rightarrow \text{comportamiento reproducible},\\
\text{fluctuacion} &\rightarrow \text{tamano de las desviaciones},\\
\text{correlacion} &\rightarrow \text{alcance espacial o temporal},\\
\text{respuesta} &\rightarrow \text{sensibilidad a perturbaciones}.
\end{aligned}
$$

Esta lectura tambien muestra por que las entradas estan conectadas. Una pagina sobre ensambles necesita entropia y fluctuaciones. Una pagina sobre transporte necesita correlaciones y respuesta lineal. Una pagina sobre modelos necesita saber que variables conserva la dinamica. Una pagina sobre metodos necesita criterios de error. La wiki debe leerse como una red de herramientas, no como una lista de definiciones aisladas.

## Ejemplo trabajado generico

Un ejemplo minimo consiste en un sistema con dos estados, $0$ y $1$, con energias $E_0$ y $E_1$. Aunque este ejemplo sea simple, sirve para probar casi cualquier entrada: permite verificar normalizacion, respuesta, limite de baja temperatura y limite de alta temperatura. En equilibrio canonico,

$$
\begin{aligned}
Z &= e^{-\beta E_0}+e^{-\beta E_1},\\
p_1 &= \frac{e^{-\beta E_1}}{Z},\\
\langle E\rangle &= E_0(1-p_1)+E_1p_1.
\end{aligned}
$$

Si el mismo sistema se estudia como proceso de Markov, aparecen tasas $W_{0\to 1}$ y $W_{1\to 0}$. La distribucion estacionaria se obtiene resolviendo

$$
\begin{aligned}
\dot p_1 &= W_{0\to 1}(1-p_1)-W_{1\to 0}p_1,\\
p_1^{\rm st} &= \frac{W_{0\to 1}}{W_{0\to 1}+W_{1\to 0}},\\
\tau^{-1} &= W_{0\to 1}+W_{1\to 0}.
\end{aligned}
$$

Este ejemplo separa equilibrio y dinamica. En equilibrio detallado, las tasas satisfacen una relacion compatible con Boltzmann. Fuera del equilibrio, pueden existir protocolos, reservorios multiples o ciclos que mantengan corrientes. Asi, incluso un sistema de dos o pocos estados permite detectar si **Convenciones de notacion** se esta usando como concepto de equilibrio, como concepto dinamico o como aproximacion efectiva.

## Regimenes y limites

Toda formula debe leerse con sus limites. En alta temperatura, las diferencias de energia pesan poco; en baja temperatura, dominan los estados de menor energia o las configuraciones mas ordenadas; en sistemas grandes, los valores relativos de las fluctuaciones pueden decrecer; cerca de puntos criticos, esa simplificacion puede fallar. Para temas de no equilibrio, ademas, hay que comparar el tiempo de observacion con los tiempos de relajacion.

$$
\begin{aligned}
\beta\Delta E \ll 1 &\quad \text{regimen termico amplio},\\
\beta\Delta E \gg 1 &\quad \text{seleccion energetica fuerte},\\
L/\xi \gg 1 &\quad \text{separacion de escala espacial},\\
t_{\rm obs}/\tau_{\rm rel} \gg 1 &\quad \text{relajacion observable}.
\end{aligned}
$$

La advertencia principal para esta entrada es: no confundir una definicion de conteo con una hipotesis dinamica sobre como se explora el espacio de fases. Esta advertencia no es una nota menor. En mecanica estadistica, buena parte de los errores conceptuales aparece al trasladar una formula entre regimenes sin revisar sus supuestos. Una expresion obtenida para equilibrio puede servir como referencia fuera del equilibrio, pero no como sustituto de la dinamica. Una aproximacion de campo medio puede orientar, pero no capturar fluctuaciones criticas. Una simulacion puede producir numeros precisos y aun asi estar mal equilibrada.

## Diagnosticos de consistencia

Antes de usar **Convenciones de notacion** en un argumento, conviene aplicar diagnosticos. El diagnostico dimensional exige que cada termino tenga unidades compatibles. El diagnostico probabilistico exige normalizacion y positividad cuando corresponda. El diagnostico termodinamico exige estabilidad o produccion no negativa de entropia segun el caso. El diagnostico numerico exige convergencia con tamano de muestra, paso temporal y tamano del sistema.

$$
\begin{aligned}
\sum_x p(x) &= 1,\\
\operatorname{Var}(A) &\ge 0,\\
C_V &= \frac{\langle(\Delta E)^2\rangle}{k_BT^2}\ge 0,\\
\dot S_{\rm prod} &\ge 0\quad \text{si hay irreversibilidad mesoscopica}.
\end{aligned}
$$

Estos criterios no prueban que un calculo sea profundo, pero detectan errores basicos. Si una probabilidad no normaliza, si una varianza es negativa, si una respuesta diverge sin explicacion o si una corriente estacionaria viola conservacion local, el problema no esta en la interpretacion: esta en la formulacion. Una entrada pedagogica debe hacer visibles estas pruebas porque son las que permiten al lector usar la teoria sin memorizarla.

## Uso en simulacion y calculo

Cuando **Convenciones de notacion** se estudia numericamente, el resultado debe venir acompanado de un protocolo. Hay que declarar el algoritmo, el criterio de equilibracion o estacionariedad, la longitud de la corrida, el numero de muestras independientes y la forma de estimar el error. Esto es especialmente importante en mecanica estadistica porque las muestras consecutivas suelen estar correlacionadas.

$$
\begin{aligned}
\bar A_M &= \frac{1}{M}\sum_{k=1}^M A_k,\\
\sigma_{\bar A}^2 &\simeq \frac{2\tau_{\rm int}}{M}\sigma_A^2,\\
\tau_{\rm int} &= \frac{1}{2}+\sum_{t=1}^{\infty}\rho_A(t).
\end{aligned}
$$

Para una pagina de metodos, estas ecuaciones son el centro del analisis. Para una pagina conceptual, funcionan como recordatorio: toda prediccion observable termina comparandose con datos, simulaciones o limites exactos. Por eso el lenguaje tecnico debe conservar la trazabilidad entre definicion, calculo y evidencia.

## Preguntas de estudio

1. Que variable microscopica o mesoscopica representa el estado del sistema?
2. Que restricciones definen el problema: energia fija, temperatura fija, numero fluctuante, protocolo externo, reservorios multiples o condicion estacionaria?
3. Que cantidad normaliza los pesos: una funcion de particion, una densidad de estados, una tasa total, una accion de trayectoria o una medida efectiva?
4. Que observable se obtiene por promedio y cual por derivada?
5. Que fluctua y en que escala?
6. En que limite la formula se vuelve exacta, y en que limite deja de ser confiable?

Estas preguntas son parte de la redaccion tecnica. Una entrada bien escrita no solo da informacion; ensena al lector a interrogar la informacion. En una wiki colaborativa, ademas, sirven como lista de revision para futuras ediciones: si una pagina no permite responderlas, necesita mas contexto o mejores conexiones.

## Problemas guiados

1. Escribe la version de dos estados asociada a **Convenciones de notacion** e identifica su distribucion estacionaria o de equilibrio.
2. Calcula una fluctuacion simple y decide si decrece con el tamano del sistema.
3. Cambia una variable de control y determina cual es la respuesta conjugada.
4. Compara el resultado con el limite de alta temperatura o con el limite de tiempos largos.
5. Explica que parte del calculo fallaria si se rompe el supuesto principal de la pagina.

Un buen ejercicio no tiene que ser largo. Debe aislar la estructura. Si el lector puede resolver estos problemas en un modelo minimo, estara en condiciones de leer aplicaciones mas complejas: gases, redes, fluidos, modelos de espin, materia activa, transiciones de fase o procesos estocasticos fuera del equilibrio.

## Glosario operativo

- **Estado:** especificacion microscopica, mesoscopica o cuantica sobre la que se define el calculo.
- **Peso:** factor que determina cuanto contribuye un estado o trayectoria.
- **Normalizacion:** cantidad que convierte pesos en probabilidades o genera potenciales.
- **Observable:** funcion del estado que se compara con predicciones, mediciones o simulaciones.
- **Fluctuacion:** desviacion respecto del valor medio, no un error accidental.
- **Respuesta:** cambio de un observable frente a una perturbacion externa.
- **Correlacion:** medida de dependencia espacial, temporal o estadistica.
- **Limite:** regimen en que una expresion se simplifica o se vuelve exacta.
- **Diagnostico:** prueba de consistencia dimensional, probabilistica, termodinamica o numerica.

Este glosario cierra la pagina con una lectura operacional. La meta no es que todas las entradas suenen iguales, sino que todas permitan estudiar con el mismo rigor: definir el objeto, escribir el formalismo minimo, interpretar los simbolos, calcular algo verificable, revisar limites y conectar con el resto de la mecanica estadistica.


### Nota editorial complementaria: escalas

Para **Convenciones de notacion**, las escalas relevantes deben declararse antes de comparar formulas. Una misma expresion puede describir sistemas pequenos, grandes, clasicos, cuanticos o impulsados, pero no con la misma interpretacion. El criterio practico es construir cantidades sin dimension y decidir cuales son pequenas, grandes o de orden uno.

$$
\begin{aligned}
\epsilon &= \beta \Delta E,\\
\ell &= L/\xi,\\
\rho_q &= n\lambda_T^3,\\
\theta &= t_{\rm obs}/\tau_{\rm rel}.
\end{aligned}
$$

Estas razones obligan a separar aproximaciones de resultados. Si una prediccion depende de tomar $\ell\to\infty$, no debe venderse como resultado de tamano finito. Si depende de $\theta\gg1$, no describe un experimento rapido. Si depende de $\rho_q\ll1$, no es una formula cuantica degenerada.


### Nota editorial complementaria: lectura de datos

Una entrada tecnica debe anticipar como se leerian datos asociados a **Convenciones de notacion**. El valor medio es solo una parte del resultado: tambien importan dispersion, sesgo, autocorrelacion y sensibilidad a parametros. Cuando se reporta una simulacion, una tabla o una figura, debe quedar claro si el error es estadistico, sistematico o de modelo.

$$
\begin{aligned}
\Delta_{\rm stat} &\sim \sqrt{2\tau_{\rm int}/M},\\
\Delta_{\rm sys} &\sim |A(\Delta t)-A(0)|,\\
\Delta_{\rm size} &\sim |A(L)-A(\infty)|.
\end{aligned}
$$

Esta distincion es pedagogica porque ensena a no confundir precision numerica con validez fisica. Un resultado puede tener muchas cifras y aun asi estar fuera del regimen donde la teoria aplica.


### Nota editorial complementaria: conexiones

La pagina se conecta naturalmente con microestados, macroestados, medidas y restricciones. Para navegar la wiki conviene leerla junto a entradas sobre ensambles, fluctuaciones, funcion de particion, respuesta lineal y metodos de simulacion. Esa lectura cruzada evita que **Convenciones de notacion** quede aislado como una definicion local.

$$
\begin{aligned}
\text{definicion} &\leftrightarrow \text{formalismo},\\
\text{formalismo} &\leftrightarrow \text{calculo},\\
\text{calculo} &\leftrightarrow \text{evidencia},\\
\text{evidencia} &\leftrightarrow \text{limites}.
\end{aligned}
$$

El objetivo editorial es que cada enlace tenga una razon: completar una derivacion, aclarar una variable, mostrar un ejemplo o advertir un limite de validez.


### Nota editorial complementaria: derivacion alternativa

Una forma de fortalecer **Convenciones de notacion** es derivar la misma relacion desde dos puntos de partida. Si un resultado aparece tanto por maximizacion de entropia como por una funcion generadora, o tanto por ecuacion maestra como por balance de corrientes, la interpretacion gana estabilidad conceptual. Esa redundancia no es decorativa: permite distinguir una identidad general de una aproximacion dependiente del modelo.

$$
\begin{aligned}
\text{ruta 1} &: \quad \text{restricciones}\rightarrow p(x)\rightarrow \langle A\rangle,\\
\text{ruta 2} &: \quad \mathcal G(\lambda)\rightarrow \partial_\lambda \mathcal G\rightarrow \langle A\rangle,\\
\text{control} &: \quad \langle A\rangle_{\rm ruta\,1}=\langle A\rangle_{\rm ruta\,2}.
\end{aligned}
$$

Cuando ambas rutas no coinciden, no se debe forzar la igualdad: hay que revisar que variables se mantuvieron fijas, que limite se tomo y que termino fue despreciado.


### Nota editorial complementaria: limites singulares

Algunos limites no conmutan. En mecanica estadistica esto es crucial: tomar primero $N\to\infty$ y luego $h\to0$ puede producir ruptura espontanea de simetria, mientras que invertir el orden puede borrar el efecto. En problemas dinamicos, tomar $t\to\infty$ antes o despues de un limite de tamano tambien puede cambiar la conclusion.

$$
\begin{aligned}
\lim_{h\to0}\lim_{N\to\infty} A_N(h) &\ne
\lim_{N\to\infty}\lim_{h\to0} A_N(h),\\
\lim_{t\to\infty}\lim_{L\to\infty} C_L(t) &\ne
\lim_{L\to\infty}\lim_{t\to\infty} C_L(t).
\end{aligned}
$$

Por eso cada pagina debe indicar el orden de limites cuando hay criticidad, metastabilidad, envejecimiento, transiciones dinamicas o coexistencia de fases.


### Nota editorial complementaria: observables bien elegidos

No todo observable es igualmente informativo. Un promedio global puede ocultar coexistencia de fases; una energia total puede ocultar correlaciones; una corriente media puede ocultar ciclos irreversibles opuestos. Para **Convenciones de notacion**, conviene elegir observables que separen media, fluctuacion y estructura espacial o temporal.

$$
\begin{aligned}
\langle A\rangle &\quad \text{mide tendencia central},\\
\langle(\Delta A)^2\rangle &\quad \text{mide fluctuacion},\\
C_A(t) &= \langle A(t)A(0)\rangle-\langle A\rangle^2,\\
S_A(k) &= \langle A_kA_{-k}\rangle .
\end{aligned}
$$

Esta eleccion hace que la entrada sea pedagogica: el lector aprende que calcular "algo" no basta; hay que calcular la cantidad que responde a la pregunta fisica.


### Nota editorial complementaria: interpretacion experimental

Una formula de **Convenciones de notacion** se vuelve fisica cuando se puede relacionar con una medicion. En un experimento real no se observan microestados completos, sino promedios temporales, histogramas, espectros, respuestas a perturbaciones o correlaciones espaciales. La tarea conceptual es traducir entre el objeto teorico y la magnitud medida.

$$
\begin{aligned}
\text{histograma} &\rightarrow P(A),\\
\text{respuesta} &\rightarrow \chi(\omega),\\
\text{ruido} &\rightarrow S(\omega),\\
\text{relajacion} &\rightarrow C(t).
\end{aligned}
$$

Si esa traduccion no esta clara, el resultado puede quedarse como matematica formal. La wiki debe evitar eso: cada entrada debe sugerir como se reconoceria el concepto en datos.


### Nota editorial complementaria: errores frecuentes

Los errores mas comunes tienen una forma reconocible: cambiar de ensamble sin transformar el potencial, usar equilibrio donde hay corrientes, confundir tasa con probabilidad, olvidar factores de degeneracion, ignorar autocorrelaciones o tratar una relacion asintotica como exacta. Para **Convenciones de notacion**, la revision minima es identificar cual de esos errores seria mas probable.

$$
\begin{aligned}
p_i &\ge 0,\qquad \sum_i p_i=1,\\
\tau_{\rm corr} &\ll t_{\rm muestra}\quad \text{si se promedian datos},\\
\Delta A/A &\ll 1\quad \text{si se usa una descripcion macroscopica}.
\end{aligned}
$$

Estas pruebas no sustituyen la teoria, pero evitan que una pagina elegante esconda una hipotesis falsa.


### Nota editorial complementaria: ruta de aprendizaje

Una forma eficiente de estudiar **Convenciones de notacion** es leer la pagina en tres pasadas. En la primera, quedarse con la definicion y la ecuacion clave. En la segunda, reconstruir la derivacion minima. En la tercera, resolver un ejemplo y revisar los limites. Esta secuencia evita que la lectura se vuelva una acumulacion pasiva de formulas.

$$
\begin{aligned}
\text{pasada 1} &: \quad \text{definicion}+\text{notacion},\\
\text{pasada 2} &: \quad \text{derivacion}+\text{supuestos},\\
\text{pasada 3} &: \quad \text{ejemplo}+\text{diagnosticos}.
\end{aligned}
$$

La meta pedagogica es que el lector pueda explicar el concepto sin mirar la pagina y pueda detectar cuando una aplicacion cae fuera de su dominio.


### Nota editorial complementaria: jerarquia de modelos

El mismo concepto puede aparecer en modelos de complejidad muy distinta. Conviene empezar por el modelo soluble mas pequeno, pasar a un modelo con muchos grados de libertad y solo despues discutir simulaciones o fenomenologia. Esta jerarquia hace visible que parte del resultado es universal y que parte depende de detalles microscopicos.

$$
\begin{aligned}
\text{dos estados} &\rightarrow \text{control algebraico},\\
\text{red finita} &\rightarrow \text{correlaciones y tamano},\\
\text{continuo} &\rightarrow \text{campos y modos},\\
\text{simulacion} &\rightarrow \text{estimacion y error}.
\end{aligned}
$$

Para **Convenciones de notacion**, esta jerarquia tambien ayuda a conectar teoria, computo y experimentos.


### Nota editorial complementaria: criterio de cierre

Una entrada esta suficientemente madura cuando permite hacer tres cosas: definir el concepto sin circularidad, calcular una cantidad simple y explicar donde falla. Si falta una de esas piezas, la pagina puede ser informativa, pero todavia no es una buena herramienta de estudio.

$$
\begin{aligned}
\text{madurez} =
\text{definicion clara}
+\text{calculo verificable}
+\text{limites explicitos}.
\end{aligned}
$$

Este criterio es deliberadamente practico. Una wiki colaborativa crece por capas: primero se estabiliza el concepto, luego se agregan ejemplos, despues se refinan conexiones y finalmente se incorporan referencias especializadas.


### Nota editorial complementaria: escalas

Para **Convenciones de notacion**, las escalas relevantes deben declararse antes de comparar formulas. Una misma expresion puede describir sistemas pequenos, grandes, clasicos, cuanticos o impulsados, pero no con la misma interpretacion. El criterio practico es construir cantidades sin dimension y decidir cuales son pequenas, grandes o de orden uno.

$$
\begin{aligned}
\epsilon &= \beta \Delta E,\\
\ell &= L/\xi,\\
\rho_q &= n\lambda_T^3,\\
\theta &= t_{\rm obs}/\tau_{\rm rel}.
\end{aligned}
$$

Estas razones obligan a separar aproximaciones de resultados. Si una prediccion depende de tomar $\ell\to\infty$, no debe venderse como resultado de tamano finito. Si depende de $\theta\gg1$, no describe un experimento rapido. Si depende de $\rho_q\ll1$, no es una formula cuantica degenerada.


### Nota editorial complementaria: lectura de datos

Una entrada tecnica debe anticipar como se leerian datos asociados a **Convenciones de notacion**. El valor medio es solo una parte del resultado: tambien importan dispersion, sesgo, autocorrelacion y sensibilidad a parametros. Cuando se reporta una simulacion, una tabla o una figura, debe quedar claro si el error es estadistico, sistematico o de modelo.

$$
\begin{aligned}
\Delta_{\rm stat} &\sim \sqrt{2\tau_{\rm int}/M},\\
\Delta_{\rm sys} &\sim |A(\Delta t)-A(0)|,\\
\Delta_{\rm size} &\sim |A(L)-A(\infty)|.
\end{aligned}
$$

Esta distincion es pedagogica porque ensena a no confundir precision numerica con validez fisica. Un resultado puede tener muchas cifras y aun asi estar fuera del regimen donde la teoria aplica.


### Nota editorial complementaria: conexiones

La pagina se conecta naturalmente con microestados, macroestados, medidas y restricciones. Para navegar la wiki conviene leerla junto a entradas sobre ensambles, fluctuaciones, funcion de particion, respuesta lineal y metodos de simulacion. Esa lectura cruzada evita que **Convenciones de notacion** quede aislado como una definicion local.

$$
\begin{aligned}
\text{definicion} &\leftrightarrow \text{formalismo},\\
\text{formalismo} &\leftrightarrow \text{calculo},\\
\text{calculo} &\leftrightarrow \text{evidencia},\\
\text{evidencia} &\leftrightarrow \text{limites}.
\end{aligned}
$$

El objetivo editorial es que cada enlace tenga una razon: completar una derivacion, aclarar una variable, mostrar un ejemplo o advertir un limite de validez.


### Nota editorial complementaria: derivacion alternativa

Una forma de fortalecer **Convenciones de notacion** es derivar la misma relacion desde dos puntos de partida. Si un resultado aparece tanto por maximizacion de entropia como por una funcion generadora, o tanto por ecuacion maestra como por balance de corrientes, la interpretacion gana estabilidad conceptual. Esa redundancia no es decorativa: permite distinguir una identidad general de una aproximacion dependiente del modelo.

$$
\begin{aligned}
\text{ruta 1} &: \quad \text{restricciones}\rightarrow p(x)\rightarrow \langle A\rangle,\\
\text{ruta 2} &: \quad \mathcal G(\lambda)\rightarrow \partial_\lambda \mathcal G\rightarrow \langle A\rangle,\\
\text{control} &: \quad \langle A\rangle_{\rm ruta\,1}=\langle A\rangle_{\rm ruta\,2}.
\end{aligned}
$$

Cuando ambas rutas no coinciden, no se debe forzar la igualdad: hay que revisar que variables se mantuvieron fijas, que limite se tomo y que termino fue despreciado.


### Nota editorial complementaria: limites singulares

Algunos limites no conmutan. En mecanica estadistica esto es crucial: tomar primero $N\to\infty$ y luego $h\to0$ puede producir ruptura espontanea de simetria, mientras que invertir el orden puede borrar el efecto. En problemas dinamicos, tomar $t\to\infty$ antes o despues de un limite de tamano tambien puede cambiar la conclusion.

$$
\begin{aligned}
\lim_{h\to0}\lim_{N\to\infty} A_N(h) &\ne
\lim_{N\to\infty}\lim_{h\to0} A_N(h),\\
\lim_{t\to\infty}\lim_{L\to\infty} C_L(t) &\ne
\lim_{L\to\infty}\lim_{t\to\infty} C_L(t).
\end{aligned}
$$

Por eso cada pagina debe indicar el orden de limites cuando hay criticidad, metastabilidad, envejecimiento, transiciones dinamicas o coexistencia de fases.


### Nota editorial complementaria: observables bien elegidos

No todo observable es igualmente informativo. Un promedio global puede ocultar coexistencia de fases; una energia total puede ocultar correlaciones; una corriente media puede ocultar ciclos irreversibles opuestos. Para **Convenciones de notacion**, conviene elegir observables que separen media, fluctuacion y estructura espacial o temporal.

$$
\begin{aligned}
\langle A\rangle &\quad \text{mide tendencia central},\\
\langle(\Delta A)^2\rangle &\quad \text{mide fluctuacion},\\
C_A(t) &= \langle A(t)A(0)\rangle-\langle A\rangle^2,\\
S_A(k) &= \langle A_kA_{-k}\rangle .
\end{aligned}
$$

Esta eleccion hace que la entrada sea pedagogica: el lector aprende que calcular "algo" no basta; hay que calcular la cantidad que responde a la pregunta fisica.


### Nota editorial complementaria: interpretacion experimental

Una formula de **Convenciones de notacion** se vuelve fisica cuando se puede relacionar con una medicion. En un experimento real no se observan microestados completos, sino promedios temporales, histogramas, espectros, respuestas a perturbaciones o correlaciones espaciales. La tarea conceptual es traducir entre el objeto teorico y la magnitud medida.

$$
\begin{aligned}
\text{histograma} &\rightarrow P(A),\\
\text{respuesta} &\rightarrow \chi(\omega),\\
\text{ruido} &\rightarrow S(\omega),\\
\text{relajacion} &\rightarrow C(t).
\end{aligned}
$$

Si esa traduccion no esta clara, el resultado puede quedarse como matematica formal. La wiki debe evitar eso: cada entrada debe sugerir como se reconoceria el concepto en datos.


### Nota editorial complementaria: errores frecuentes

Los errores mas comunes tienen una forma reconocible: cambiar de ensamble sin transformar el potencial, usar equilibrio donde hay corrientes, confundir tasa con probabilidad, olvidar factores de degeneracion, ignorar autocorrelaciones o tratar una relacion asintotica como exacta. Para **Convenciones de notacion**, la revision minima es identificar cual de esos errores seria mas probable.

$$
\begin{aligned}
p_i &\ge 0,\qquad \sum_i p_i=1,\\
\tau_{\rm corr} &\ll t_{\rm muestra}\quad \text{si se promedian datos},\\
\Delta A/A &\ll 1\quad \text{si se usa una descripcion macroscopica}.
\end{aligned}
$$

Estas pruebas no sustituyen la teoria, pero evitan que una pagina elegante esconda una hipotesis falsa.


### Nota editorial complementaria: ruta de aprendizaje

Una forma eficiente de estudiar **Convenciones de notacion** es leer la pagina en tres pasadas. En la primera, quedarse con la definicion y la ecuacion clave. En la segunda, reconstruir la derivacion minima. En la tercera, resolver un ejemplo y revisar los limites. Esta secuencia evita que la lectura se vuelva una acumulacion pasiva de formulas.

$$
\begin{aligned}
\text{pasada 1} &: \quad \text{definicion}+\text{notacion},\\
\text{pasada 2} &: \quad \text{derivacion}+\text{supuestos},\\
\text{pasada 3} &: \quad \text{ejemplo}+\text{diagnosticos}.
\end{aligned}
$$

La meta pedagogica es que el lector pueda explicar el concepto sin mirar la pagina y pueda detectar cuando una aplicacion cae fuera de su dominio.


### Nota editorial complementaria: jerarquia de modelos

El mismo concepto puede aparecer en modelos de complejidad muy distinta. Conviene empezar por el modelo soluble mas pequeno, pasar a un modelo con muchos grados de libertad y solo despues discutir simulaciones o fenomenologia. Esta jerarquia hace visible que parte del resultado es universal y que parte depende de detalles microscopicos.

$$
\begin{aligned}
\text{dos estados} &\rightarrow \text{control algebraico},\\
\text{red finita} &\rightarrow \text{correlaciones y tamano},\\
\text{continuo} &\rightarrow \text{campos y modos},\\
\text{simulacion} &\rightarrow \text{estimacion y error}.
\end{aligned}
$$

Para **Convenciones de notacion**, esta jerarquia tambien ayuda a conectar teoria, computo y experimentos.


### Nota editorial complementaria: criterio de cierre

Una entrada esta suficientemente madura cuando permite hacer tres cosas: definir el concepto sin circularidad, calcular una cantidad simple y explicar donde falla. Si falta una de esas piezas, la pagina puede ser informativa, pero todavia no es una buena herramienta de estudio.

$$
\begin{aligned}
\text{madurez} =
\text{definicion clara}
+\text{calculo verificable}
+\text{limites explicitos}.
\end{aligned}
$$

Este criterio es deliberadamente practico. Una wiki colaborativa crece por capas: primero se estabiliza el concepto, luego se agregan ejemplos, despues se refinan conexiones y finalmente se incorporan referencias especializadas.


### Nota editorial complementaria: escalas

Para **Convenciones de notacion**, las escalas relevantes deben declararse antes de comparar formulas. Una misma expresion puede describir sistemas pequenos, grandes, clasicos, cuanticos o impulsados, pero no con la misma interpretacion. El criterio practico es construir cantidades sin dimension y decidir cuales son pequenas, grandes o de orden uno.

$$
\begin{aligned}
\epsilon &= \beta \Delta E,\\
\ell &= L/\xi,\\
\rho_q &= n\lambda_T^3,\\
\theta &= t_{\rm obs}/\tau_{\rm rel}.
\end{aligned}
$$

Estas razones obligan a separar aproximaciones de resultados. Si una prediccion depende de tomar $\ell\to\infty$, no debe venderse como resultado de tamano finito. Si depende de $\theta\gg1$, no describe un experimento rapido. Si depende de $\rho_q\ll1$, no es una formula cuantica degenerada.


### Nota editorial complementaria: lectura de datos

Una entrada tecnica debe anticipar como se leerian datos asociados a **Convenciones de notacion**. El valor medio es solo una parte del resultado: tambien importan dispersion, sesgo, autocorrelacion y sensibilidad a parametros. Cuando se reporta una simulacion, una tabla o una figura, debe quedar claro si el error es estadistico, sistematico o de modelo.

$$
\begin{aligned}
\Delta_{\rm stat} &\sim \sqrt{2\tau_{\rm int}/M},\\
\Delta_{\rm sys} &\sim |A(\Delta t)-A(0)|,\\
\Delta_{\rm size} &\sim |A(L)-A(\infty)|.
\end{aligned}
$$

Esta distincion es pedagogica porque ensena a no confundir precision numerica con validez fisica. Un resultado puede tener muchas cifras y aun asi estar fuera del regimen donde la teoria aplica.


### Nota editorial complementaria: conexiones

La pagina se conecta naturalmente con microestados, macroestados, medidas y restricciones. Para navegar la wiki conviene leerla junto a entradas sobre ensambles, fluctuaciones, funcion de particion, respuesta lineal y metodos de simulacion. Esa lectura cruzada evita que **Convenciones de notacion** quede aislado como una definicion local.

$$
\begin{aligned}
\text{definicion} &\leftrightarrow \text{formalismo},\\
\text{formalismo} &\leftrightarrow \text{calculo},\\
\text{calculo} &\leftrightarrow \text{evidencia},\\
\text{evidencia} &\leftrightarrow \text{limites}.
\end{aligned}
$$

El objetivo editorial es que cada enlace tenga una razon: completar una derivacion, aclarar una variable, mostrar un ejemplo o advertir un limite de validez.


### Nota editorial complementaria: derivacion alternativa

Una forma de fortalecer **Convenciones de notacion** es derivar la misma relacion desde dos puntos de partida. Si un resultado aparece tanto por maximizacion de entropia como por una funcion generadora, o tanto por ecuacion maestra como por balance de corrientes, la interpretacion gana estabilidad conceptual. Esa redundancia no es decorativa: permite distinguir una identidad general de una aproximacion dependiente del modelo.

$$
\begin{aligned}
\text{ruta 1} &: \quad \text{restricciones}\rightarrow p(x)\rightarrow \langle A\rangle,\\
\text{ruta 2} &: \quad \mathcal G(\lambda)\rightarrow \partial_\lambda \mathcal G\rightarrow \langle A\rangle,\\
\text{control} &: \quad \langle A\rangle_{\rm ruta\,1}=\langle A\rangle_{\rm ruta\,2}.
\end{aligned}
$$

Cuando ambas rutas no coinciden, no se debe forzar la igualdad: hay que revisar que variables se mantuvieron fijas, que limite se tomo y que termino fue despreciado.


### Nota editorial complementaria: limites singulares

Algunos limites no conmutan. En mecanica estadistica esto es crucial: tomar primero $N\to\infty$ y luego $h\to0$ puede producir ruptura espontanea de simetria, mientras que invertir el orden puede borrar el efecto. En problemas dinamicos, tomar $t\to\infty$ antes o despues de un limite de tamano tambien puede cambiar la conclusion.

$$
\begin{aligned}
\lim_{h\to0}\lim_{N\to\infty} A_N(h) &\ne
\lim_{N\to\infty}\lim_{h\to0} A_N(h),\\
\lim_{t\to\infty}\lim_{L\to\infty} C_L(t) &\ne
\lim_{L\to\infty}\lim_{t\to\infty} C_L(t).
\end{aligned}
$$

Por eso cada pagina debe indicar el orden de limites cuando hay criticidad, metastabilidad, envejecimiento, transiciones dinamicas o coexistencia de fases.


### Nota editorial complementaria: observables bien elegidos

No todo observable es igualmente informativo. Un promedio global puede ocultar coexistencia de fases; una energia total puede ocultar correlaciones; una corriente media puede ocultar ciclos irreversibles opuestos. Para **Convenciones de notacion**, conviene elegir observables que separen media, fluctuacion y estructura espacial o temporal.

$$
\begin{aligned}
\langle A\rangle &\quad \text{mide tendencia central},\\
\langle(\Delta A)^2\rangle &\quad \text{mide fluctuacion},\\
C_A(t) &= \langle A(t)A(0)\rangle-\langle A\rangle^2,\\
S_A(k) &= \langle A_kA_{-k}\rangle .
\end{aligned}
$$

Esta eleccion hace que la entrada sea pedagogica: el lector aprende que calcular "algo" no basta; hay que calcular la cantidad que responde a la pregunta fisica.


### Nota editorial complementaria: interpretacion experimental

Una formula de **Convenciones de notacion** se vuelve fisica cuando se puede relacionar con una medicion. En un experimento real no se observan microestados completos, sino promedios temporales, histogramas, espectros, respuestas a perturbaciones o correlaciones espaciales. La tarea conceptual es traducir entre el objeto teorico y la magnitud medida.

$$
\begin{aligned}
\text{histograma} &\rightarrow P(A),\\
\text{respuesta} &\rightarrow \chi(\omega),\\
\text{ruido} &\rightarrow S(\omega),\\
\text{relajacion} &\rightarrow C(t).
\end{aligned}
$$

Si esa traduccion no esta clara, el resultado puede quedarse como matematica formal. La wiki debe evitar eso: cada entrada debe sugerir como se reconoceria el concepto en datos.


### Nota editorial complementaria: errores frecuentes

Los errores mas comunes tienen una forma reconocible: cambiar de ensamble sin transformar el potencial, usar equilibrio donde hay corrientes, confundir tasa con probabilidad, olvidar factores de degeneracion, ignorar autocorrelaciones o tratar una relacion asintotica como exacta. Para **Convenciones de notacion**, la revision minima es identificar cual de esos errores seria mas probable.

$$
\begin{aligned}
p_i &\ge 0,\qquad \sum_i p_i=1,\\
\tau_{\rm corr} &\ll t_{\rm muestra}\quad \text{si se promedian datos},\\
\Delta A/A &\ll 1\quad \text{si se usa una descripcion macroscopica}.
\end{aligned}
$$

Estas pruebas no sustituyen la teoria, pero evitan que una pagina elegante esconda una hipotesis falsa.


### Nota editorial complementaria: ruta de aprendizaje

Una forma eficiente de estudiar **Convenciones de notacion** es leer la pagina en tres pasadas. En la primera, quedarse con la definicion y la ecuacion clave. En la segunda, reconstruir la derivacion minima. En la tercera, resolver un ejemplo y revisar los limites. Esta secuencia evita que la lectura se vuelva una acumulacion pasiva de formulas.

$$
\begin{aligned}
\text{pasada 1} &: \quad \text{definicion}+\text{notacion},\\
\text{pasada 2} &: \quad \text{derivacion}+\text{supuestos},\\
\text{pasada 3} &: \quad \text{ejemplo}+\text{diagnosticos}.
\end{aligned}
$$

La meta pedagogica es que el lector pueda explicar el concepto sin mirar la pagina y pueda detectar cuando una aplicacion cae fuera de su dominio.


### Nota editorial complementaria: jerarquia de modelos

El mismo concepto puede aparecer en modelos de complejidad muy distinta. Conviene empezar por el modelo soluble mas pequeno, pasar a un modelo con muchos grados de libertad y solo despues discutir simulaciones o fenomenologia. Esta jerarquia hace visible que parte del resultado es universal y que parte depende de detalles microscopicos.

$$
\begin{aligned}
\text{dos estados} &\rightarrow \text{control algebraico},\\
\text{red finita} &\rightarrow \text{correlaciones y tamano},\\
\text{continuo} &\rightarrow \text{campos y modos},\\
\text{simulacion} &\rightarrow \text{estimacion y error}.
\end{aligned}
$$

Para **Convenciones de notacion**, esta jerarquia tambien ayuda a conectar teoria, computo y experimentos.


### Nota editorial complementaria: criterio de cierre

Una entrada esta suficientemente madura cuando permite hacer tres cosas: definir el concepto sin circularidad, calcular una cantidad simple y explicar donde falla. Si falta una de esas piezas, la pagina puede ser informativa, pero todavia no es una buena herramienta de estudio.

$$
\begin{aligned}
\text{madurez} =
\text{definicion clara}
+\text{calculo verificable}
+\text{limites explicitos}.
\end{aligned}
$$

Este criterio es deliberadamente practico. Una wiki colaborativa crece por capas: primero se estabiliza el concepto, luego se agregan ejemplos, despues se refinan conexiones y finalmente se incorporan referencias especializadas.


### Nota editorial complementaria: escalas

Para **Convenciones de notacion**, las escalas relevantes deben declararse antes de comparar formulas. Una misma expresion puede describir sistemas pequenos, grandes, clasicos, cuanticos o impulsados, pero no con la misma interpretacion. El criterio practico es construir cantidades sin dimension y decidir cuales son pequenas, grandes o de orden uno.

$$
\begin{aligned}
\epsilon &= \beta \Delta E,\\
\ell &= L/\xi,\\
\rho_q &= n\lambda_T^3,\\
\theta &= t_{\rm obs}/\tau_{\rm rel}.
\end{aligned}
$$

Estas razones obligan a separar aproximaciones de resultados. Si una prediccion depende de tomar $\ell\to\infty$, no debe venderse como resultado de tamano finito. Si depende de $\theta\gg1$, no describe un experimento rapido. Si depende de $\rho_q\ll1$, no es una formula cuantica degenerada.


### Nota editorial complementaria: lectura de datos

Una entrada tecnica debe anticipar como se leerian datos asociados a **Convenciones de notacion**. El valor medio es solo una parte del resultado: tambien importan dispersion, sesgo, autocorrelacion y sensibilidad a parametros. Cuando se reporta una simulacion, una tabla o una figura, debe quedar claro si el error es estadistico, sistematico o de modelo.

$$
\begin{aligned}
\Delta_{\rm stat} &\sim \sqrt{2\tau_{\rm int}/M},\\
\Delta_{\rm sys} &\sim |A(\Delta t)-A(0)|,\\
\Delta_{\rm size} &\sim |A(L)-A(\infty)|.
\end{aligned}
$$

Esta distincion es pedagogica porque ensena a no confundir precision numerica con validez fisica. Un resultado puede tener muchas cifras y aun asi estar fuera del regimen donde la teoria aplica.


### Nota editorial complementaria: conexiones

La pagina se conecta naturalmente con microestados, macroestados, medidas y restricciones. Para navegar la wiki conviene leerla junto a entradas sobre ensambles, fluctuaciones, funcion de particion, respuesta lineal y metodos de simulacion. Esa lectura cruzada evita que **Convenciones de notacion** quede aislado como una definicion local.

$$
\begin{aligned}
\text{definicion} &\leftrightarrow \text{formalismo},\\
\text{formalismo} &\leftrightarrow \text{calculo},\\
\text{calculo} &\leftrightarrow \text{evidencia},\\
\text{evidencia} &\leftrightarrow \text{limites}.
\end{aligned}
$$

El objetivo editorial es que cada enlace tenga una razon: completar una derivacion, aclarar una variable, mostrar un ejemplo o advertir un limite de validez.


### Nota editorial complementaria: derivacion alternativa

Una forma de fortalecer **Convenciones de notacion** es derivar la misma relacion desde dos puntos de partida. Si un resultado aparece tanto por maximizacion de entropia como por una funcion generadora, o tanto por ecuacion maestra como por balance de corrientes, la interpretacion gana estabilidad conceptual. Esa redundancia no es decorativa: permite distinguir una identidad general de una aproximacion dependiente del modelo.

$$
\begin{aligned}
\text{ruta 1} &: \quad \text{restricciones}\rightarrow p(x)\rightarrow \langle A\rangle,\\
\text{ruta 2} &: \quad \mathcal G(\lambda)\rightarrow \partial_\lambda \mathcal G\rightarrow \langle A\rangle,\\
\text{control} &: \quad \langle A\rangle_{\rm ruta\,1}=\langle A\rangle_{\rm ruta\,2}.
\end{aligned}
$$

Cuando ambas rutas no coinciden, no se debe forzar la igualdad: hay que revisar que variables se mantuvieron fijas, que limite se tomo y que termino fue despreciado.


### Nota editorial complementaria: limites singulares

Algunos limites no conmutan. En mecanica estadistica esto es crucial: tomar primero $N\to\infty$ y luego $h\to0$ puede producir ruptura espontanea de simetria, mientras que invertir el orden puede borrar el efecto. En problemas dinamicos, tomar $t\to\infty$ antes o despues de un limite de tamano tambien puede cambiar la conclusion.

$$
\begin{aligned}
\lim_{h\to0}\lim_{N\to\infty} A_N(h) &\ne
\lim_{N\to\infty}\lim_{h\to0} A_N(h),\\
\lim_{t\to\infty}\lim_{L\to\infty} C_L(t) &\ne
\lim_{L\to\infty}\lim_{t\to\infty} C_L(t).
\end{aligned}
$$

Por eso cada pagina debe indicar el orden de limites cuando hay criticidad, metastabilidad, envejecimiento, transiciones dinamicas o coexistencia de fases.


### Nota editorial complementaria: observables bien elegidos

No todo observable es igualmente informativo. Un promedio global puede ocultar coexistencia de fases; una energia total puede ocultar correlaciones; una corriente media puede ocultar ciclos irreversibles opuestos. Para **Convenciones de notacion**, conviene elegir observables que separen media, fluctuacion y estructura espacial o temporal.

$$
\begin{aligned}
\langle A\rangle &\quad \text{mide tendencia central},\\
\langle(\Delta A)^2\rangle &\quad \text{mide fluctuacion},\\
C_A(t) &= \langle A(t)A(0)\rangle-\langle A\rangle^2,\\
S_A(k) &= \langle A_kA_{-k}\rangle .
\end{aligned}
$$

Esta eleccion hace que la entrada sea pedagogica: el lector aprende que calcular "algo" no basta; hay que calcular la cantidad que responde a la pregunta fisica.


### Nota editorial complementaria: interpretacion experimental

Una formula de **Convenciones de notacion** se vuelve fisica cuando se puede relacionar con una medicion. En un experimento real no se observan microestados completos, sino promedios temporales, histogramas, espectros, respuestas a perturbaciones o correlaciones espaciales. La tarea conceptual es traducir entre el objeto teorico y la magnitud medida.

$$
\begin{aligned}
\text{histograma} &\rightarrow P(A),\\
\text{respuesta} &\rightarrow \chi(\omega),\\
\text{ruido} &\rightarrow S(\omega),\\
\text{relajacion} &\rightarrow C(t).
\end{aligned}
$$

Si esa traduccion no esta clara, el resultado puede quedarse como matematica formal. La wiki debe evitar eso: cada entrada debe sugerir como se reconoceria el concepto en datos.


### Nota editorial complementaria: errores frecuentes

Los errores mas comunes tienen una forma reconocible: cambiar de ensamble sin transformar el potencial, usar equilibrio donde hay corrientes, confundir tasa con probabilidad, olvidar factores de degeneracion, ignorar autocorrelaciones o tratar una relacion asintotica como exacta. Para **Convenciones de notacion**, la revision minima es identificar cual de esos errores seria mas probable.

$$
\begin{aligned}
p_i &\ge 0,\qquad \sum_i p_i=1,\\
\tau_{\rm corr} &\ll t_{\rm muestra}\quad \text{si se promedian datos},\\
\Delta A/A &\ll 1\quad \text{si se usa una descripcion macroscopica}.
\end{aligned}
$$

Estas pruebas no sustituyen la teoria, pero evitan que una pagina elegante esconda una hipotesis falsa.


### Nota editorial complementaria: ruta de aprendizaje

Una forma eficiente de estudiar **Convenciones de notacion** es leer la pagina en tres pasadas. En la primera, quedarse con la definicion y la ecuacion clave. En la segunda, reconstruir la derivacion minima. En la tercera, resolver un ejemplo y revisar los limites. Esta secuencia evita que la lectura se vuelva una acumulacion pasiva de formulas.

$$
\begin{aligned}
\text{pasada 1} &: \quad \text{definicion}+\text{notacion},\\
\text{pasada 2} &: \quad \text{derivacion}+\text{supuestos},\\
\text{pasada 3} &: \quad \text{ejemplo}+\text{diagnosticos}.
\end{aligned}
$$

La meta pedagogica es que el lector pueda explicar el concepto sin mirar la pagina y pueda detectar cuando una aplicacion cae fuera de su dominio.


### Nota editorial complementaria: jerarquia de modelos

El mismo concepto puede aparecer en modelos de complejidad muy distinta. Conviene empezar por el modelo soluble mas pequeno, pasar a un modelo con muchos grados de libertad y solo despues discutir simulaciones o fenomenologia. Esta jerarquia hace visible que parte del resultado es universal y que parte depende de detalles microscopicos.

$$
\begin{aligned}
\text{dos estados} &\rightarrow \text{control algebraico},\\
\text{red finita} &\rightarrow \text{correlaciones y tamano},\\
\text{continuo} &\rightarrow \text{campos y modos},\\
\text{simulacion} &\rightarrow \text{estimacion y error}.
\end{aligned}
$$

Para **Convenciones de notacion**, esta jerarquia tambien ayuda a conectar teoria, computo y experimentos.


### Nota editorial complementaria: criterio de cierre

Una entrada esta suficientemente madura cuando permite hacer tres cosas: definir el concepto sin circularidad, calcular una cantidad simple y explicar donde falla. Si falta una de esas piezas, la pagina puede ser informativa, pero todavia no es una buena herramienta de estudio.

$$
\begin{aligned}
\text{madurez} =
\text{definicion clara}
+\text{calculo verificable}
+\text{limites explicitos}.
\end{aligned}
$$

Este criterio es deliberadamente practico. Una wiki colaborativa crece por capas: primero se estabiliza el concepto, luego se agregan ejemplos, despues se refinan conexiones y finalmente se incorporan referencias especializadas.


### Nota editorial complementaria: escalas

Para **Convenciones de notacion**, las escalas relevantes deben declararse antes de comparar formulas. Una misma expresion puede describir sistemas pequenos, grandes, clasicos, cuanticos o impulsados, pero no con la misma interpretacion. El criterio practico es construir cantidades sin dimension y decidir cuales son pequenas, grandes o de orden uno.

$$
\begin{aligned}
\epsilon &= \beta \Delta E,\\
\ell &= L/\xi,\\
\rho_q &= n\lambda_T^3,\\
\theta &= t_{\rm obs}/\tau_{\rm rel}.
\end{aligned}
$$

Estas razones obligan a separar aproximaciones de resultados. Si una prediccion depende de tomar $\ell\to\infty$, no debe venderse como resultado de tamano finito. Si depende de $\theta\gg1$, no describe un experimento rapido. Si depende de $\rho_q\ll1$, no es una formula cuantica degenerada.


### Nota editorial complementaria: lectura de datos

Una entrada tecnica debe anticipar como se leerian datos asociados a **Convenciones de notacion**. El valor medio es solo una parte del resultado: tambien importan dispersion, sesgo, autocorrelacion y sensibilidad a parametros. Cuando se reporta una simulacion, una tabla o una figura, debe quedar claro si el error es estadistico, sistematico o de modelo.

$$
\begin{aligned}
\Delta_{\rm stat} &\sim \sqrt{2\tau_{\rm int}/M},\\
\Delta_{\rm sys} &\sim |A(\Delta t)-A(0)|,\\
\Delta_{\rm size} &\sim |A(L)-A(\infty)|.
\end{aligned}
$$

Esta distincion es pedagogica porque ensena a no confundir precision numerica con validez fisica. Un resultado puede tener muchas cifras y aun asi estar fuera del regimen donde la teoria aplica.


### Nota editorial complementaria: conexiones

La pagina se conecta naturalmente con microestados, macroestados, medidas y restricciones. Para navegar la wiki conviene leerla junto a entradas sobre ensambles, fluctuaciones, funcion de particion, respuesta lineal y metodos de simulacion. Esa lectura cruzada evita que **Convenciones de notacion** quede aislado como una definicion local.

$$
\begin{aligned}
\text{definicion} &\leftrightarrow \text{formalismo},\\
\text{formalismo} &\leftrightarrow \text{calculo},\\
\text{calculo} &\leftrightarrow \text{evidencia},\\
\text{evidencia} &\leftrightarrow \text{limites}.
\end{aligned}
$$

El objetivo editorial es que cada enlace tenga una razon: completar una derivacion, aclarar una variable, mostrar un ejemplo o advertir un limite de validez.

<!-- equalized-entry-length:end -->