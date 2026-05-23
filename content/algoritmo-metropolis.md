# Algoritmo de Metropolis

## Resumen

**Algoritmo de Metropolis** es una entrada troncal de metodos dentro de la mecanica estadistica. Su papel principal se resume asi: regla de aceptacion que muestrea la distribucion de Boltzmann. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

En una lectura rapida, esta pagina responde tres preguntas. Primero, que se esta contando, promediando o aproximando. Segundo, bajo que variables se mantiene controlado el sistema. Tercero, que predicciones fisicas se obtienen cuando el concepto se inserta en un ensamble, un modelo o un limite termodinamico.

## Definicion operativa

En mecanica estadistica conviene definir **Algoritmo de Metropolis** por su uso operativo: regla de aceptacion que muestrea la distribucion de Boltzmann. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

Como metodo, **Algoritmo de Metropolis** es un procedimiento para calcular o aproximar propiedades estadisticas. La descripcion "regla de aceptacion que muestrea la distribucion de Boltzmann" identifica que problema computacional o analitico intenta resolver y que tipo de error debe controlarse.

Una definicion operativa siempre debe declarar el sistema, las variables fijas y la medida con la que se comparan estados. Si esas piezas no estan especificadas, dos expresiones formalmente parecidas pueden describir problemas fisicamente distintos.

## Idea fisica

La utilidad de este concepto aparece cuando se quiere pasar de una descripcion microscopica a una afirmacion macroscopica controlada. En la practica, fija que variables se consideran relevantes, que aproximaciones se estan usando y que cantidades pueden compararse entre modelos, simulaciones o experimentos.

La imagen fisica depende del metodo, pero el objetivo comun es convertir un problema de muchos grados de libertad en estimaciones controladas de observables, errores y tendencias con tamano del sistema.

Una buena prueba de comprension es preguntar que cambia si se modifica la energia, el volumen, la temperatura, el numero de particulas o el campo externo. Si la respuesta no es clara, probablemente falta identificar el ensamble natural o el potencial termodinamico correcto.

## Ecuacion clave

$$
P_{\mathrm{acc}}=\min\{1,e^{-\beta\Delta E}\}
$$

La ecuacion anterior debe leerse como una forma canonica de la entrada, no como la unica formulacion posible. En problemas concretos puede requerir condiciones de borde, factores de degeneracion, una medida de espacio de fases, una convencion de normalizacion o un limite termodinamico bien definido.

## Estructura matematica

El modo mas seguro de usar **Algoritmo de Metropolis** es insertarlo en la cadena completa que va desde pesos microscopicos hasta cantidades macroscopicas. En equilibrio, esa cadena suele tener cuatro piezas: una energia o accion efectiva, una medida sobre estados, una normalizacion y un conjunto de derivadas que producen observables.

$$
\begin{aligned}
I&=\int dx\,A(x)\pi(x),\\
\hat I_M&=\frac{1}{M}\sum_{k=1}^M A(x_k),\\
\hat I_M&\xrightarrow[M\to\infty]{} I
\end{aligned}
$$

Esta escritura compacta recuerda que el objeto central no flota solo. Si se cambia la medida $d\Gamma$, el Hamiltoniano $H$, las variables controladas o la normalizacion, cambia tambien la prediccion fisica. En problemas discretos, la integral se reemplaza por una suma; en problemas cuanticos, la traza sobre el espacio de Hilbert reemplaza el conteo clasico.

$$
\begin{aligned}
\pi(x)&=\frac{w(x)}{Z},\\
\sum_x \pi(x)W(x\to y)&=\pi(y),\\
\sum_y W(x\to y)&=1
\end{aligned}
$$

La normalizacion es mas que un detalle tecnico. Garantiza que los pesos se interpreten como probabilidades y permite convertir sumas microscopicas enormes en funciones termodinamicas suaves. Cuando la normalizacion diverge, cambia de signo o depende de cortes artificiales, la formulacion debe revisarse antes de extraer conclusiones fisicas.

## Notacion y variables

- $k_B$ es la constante de Boltzmann y fija la escala entre entropia y temperatura.
- $T$ es la temperatura absoluta; se usa tambien $\beta=1/(k_BT)$.
- $E$, $V$ y $N$ denotan energia, volumen y numero de particulas cuando el sistema es material.
- $Z$, $\Xi$ o funciones analogas representan sumas estadisticas que normalizan probabilidades.
- Los promedios $\langle A\rangle$ se toman sobre el ensamble o proceso estocastico que corresponda.

En esta wiki se intenta mantener explicitas las variables fijas. Esa practica evita confundir, por ejemplo, una derivada a volumen fijo con una derivada a presion fija, o una fluctuacion canonica con una restriccion microcanonica.

## Diccionario de derivadas

Muchas cantidades de mecanica estadistica se reconocen por las derivadas que generan. Por eso, despues de escribir la ecuacion principal, conviene preguntar que potencial esta disponible y que variables son naturales. Si una derivada se toma manteniendo fija la variable equivocada, el resultado puede tener las dimensiones correctas y aun asi ser fisicamente incorrecto.

$$
\begin{aligned}
F&=-k_BT\ln Z,\\
\langle E\rangle&=-\frac{\partial \ln Z}{\partial \beta},\\
\frac{\partial^2 \ln Z}{\partial \beta^2}&=\langle E^2\rangle-\langle E\rangle^2
\end{aligned}
$$

La primera linea identifica observables medios; la segunda suele identificar respuestas. Esta jerarquia es una de las razones por las que las funciones de particion son tan importantes: no solo normalizan probabilidades, sino que condensan energia, entropia, presion, potencial quimico y fluctuaciones en una sola funcion generadora.

## Escalas y cantidades sin dimension

Antes de aplicar una formula conviene construir razones sin dimension. En sistemas termicos aparecen naturalmente $\beta E$, $n\lambda_T^3$, $L/\xi$, $\Delta E/(k_BT)$ o $t/\tau$. Estas razones dicen si una aproximacion es clasica o cuantica, local o colectiva, estacionaria o transitoria.

$$
\begin{aligned}
\beta E&=\frac{E}{k_BT},\\
\lambda_T&=\frac{h}{\sqrt{2\pi m k_BT}},\\
\frac{\delta A}{\langle A\rangle}&\sim N^{-1/2}
\end{aligned}
$$

En la practica, una ecuacion se vuelve informativa cuando se sabe que termino domina. Si $\beta\Delta E\gg 1$, los estados excitados pueden estar suprimidos; si $L/\xi\gg 1$, el sistema puede parecer termodinamico; si $n\lambda_T^3\gtrsim 1$, la indistinguibilidad cuantica deja de ser una correccion pequena.

## Desarrollo minimo

El desarrollo establece primero la distribucion objetivo o la cantidad asintotica que se quiere estimar. Despues introduce una aproximacion, una dinamica de muestreo o una transformacion que hace viable el calculo.

Un desarrollo completo suele seguir el mismo patron. Se parte de un conjunto de microestados o trayectorias, se asignan pesos compatibles con la informacion disponible, se normaliza la distribucion y luego se obtienen observables por promedios. El contenido fisico aparece en las restricciones y en el limite donde esos promedios se vuelven reproducibles.

## Derivacion paso a paso

1. Se fija un espacio de estados $\Gamma$ o una base de estados $\{|i\rangle\}$.
2. Se escribe una funcion de energia, accion o tasa que ordena la relevancia estadistica de cada estado.
3. Se imponen restricciones macroscopicas mediante multiplicadores intensivos.
4. Se obtiene una distribucion normalizada.
5. Se calculan observables y respuestas como promedios o derivadas.

En forma esquematica, el procedimiento puede escribirse como

$$
\begin{aligned}
\Gamma,H,\{C_a\}&\longrightarrow p(x),\\
p(x)&=\frac{1}{\mathcal Z}\exp\!\left[-\sum_a \lambda_a C_a(x)\right],\\
\langle A\rangle&=\sum_x A(x)p(x)
\end{aligned}
$$

Este esquema ayuda a detectar donde entra la hipotesis principal. A veces la aproximacion esta en el Hamiltoniano, como en un modelo de red. Otras veces esta en el reemplazo de interacciones locales por un campo medio. En simulacion, puede estar en el muestreo: si la cadena de Markov no explora regiones importantes, los promedios no representan el ensamble buscado.

## Formula de control

Para usar **Algoritmo de Metropolis** de manera cuantitativa, se recomienda acompanar la ecuacion principal con una identidad de control: una relacion que deba cumplirse si el calculo esta bien normalizado y si las variables fijas se eligieron correctamente.

$$
\begin{aligned}
\pi(x)W(x\to y)&=\pi(y)W(y\to x),\\
P_{acc}&=\min\{1,e^{-\beta\Delta E}\},\\
\langle A\rangle&\approx \frac{1}{M}\sum_{k=1}^M A_k
\end{aligned}
$$

Estas identidades no siempre son el resultado final, pero son excelentes pruebas de consistencia. Si una simulacion viola una igualdad de normalizacion, si una respuesta sale con signo incompatible con estabilidad, o si una derivada no coincide con una fluctuacion esperada, conviene revisar el calculo antes de interpretar los datos.

## Interpretacion fisica

Un metodo siempre trae diagnosticos. No basta obtener un numero: hay que estimar convergencia, autocorrelaciones, sesgo sistematico, sensibilidad a parametros y compatibilidad con resultados exactos en limites conocidos.

La interpretacion correcta separa tres niveles. El nivel microscopico habla de configuraciones, energias, ocupaciones o trayectorias. El nivel estadistico habla de pesos, promedios, fluctuaciones y correlaciones. El nivel termodinamico habla de potenciales, ecuaciones de estado y estabilidad. **Algoritmo de Metropolis** es util precisamente porque permite moverse entre esos niveles sin perder de vista las hipotesis.

## Lectura de los terminos

Cada simbolo de la ecuacion principal debe poder explicarse fisicamente. Un factor exponencial suele representar competencia entre energia y entropia; una delta de Dirac impone una restriccion exacta; una suma sobre estados representa degeneracion; una derivada de un potencial representa una respuesta macroscopica.

$$
\begin{aligned}
\text{peso energetico}&: e^{-\beta E_i},\\
\text{degeneracion}&: g(E),\\
\text{restriccion exacta}&: \delta(E-H)
\end{aligned}
$$

Una lectura sana distingue entre cantidades extensivas e intensivas. Energia, entropia y numero de particulas crecen con el tamano del sistema. Temperatura, presion y potencial quimico no deben crecer al duplicar el sistema. Esta distincion es esencial para reconocer errores de escala.

## Limites utiles

Hay tres limites que se revisan con frecuencia. El primero es el limite de alta temperatura, donde $\beta$ es pequeno y las diferencias de energia pesan menos. El segundo es el limite de baja temperatura, donde dominan estados de energia baja o configuraciones ordenadas. El tercero es el limite de gran tamano, donde aparecen concentracion de la medida, equivalencia de ensambles o singularidades.

$$
\begin{aligned}
\beta\to 0&:\quad p_i\to \frac{1}{\Omega},\\
\beta\to\infty&:\quad p_i\to p_i^{(0)},\\
N\to\infty&:\quad \frac{\delta A}{A}\to 0
\end{aligned}
$$

Estos limites no son adornos. Sirven para comprobar que una expresion reproduce casos conocidos. Si el limite de alta temperatura no recupera desorden, si el limite de baja temperatura no selecciona estados fundamentales, o si el limite termodinamico no escala extensivamente, la formula necesita una revision.

## Uso tipico

1. Definir la distribucion objetivo o integral que **Algoritmo de Metropolis** debe estimar.
2. Elegir parametros numericos y criterios de convergencia.
3. Medir errores estadisticos y sistematicos por separado.
4. Validar contra casos exactos, limites conocidos o pruebas de consistencia.

## Procedimiento de calculo

Una receta practica para aplicar **Algoritmo de Metropolis** en un problema nuevo es la siguiente. Primero se escribe el modelo con sus parametros y unidades. Luego se identifica el ensamble natural. Despues se calcula la normalizacion, aunque sea de forma aproximada. Finalmente se derivan observables y se comparan con limites simples.

$$
\begin{aligned}
Z&=\sum_i e^{-\beta E_i},\\
F&=-k_BT\ln Z,\\
S&=-\left(\frac{\partial F}{\partial T}\right)_{V,N},\\
C_V&=\left(\frac{\partial \langle E\rangle}{\partial T}\right)_{V,N}
\end{aligned}
$$

Si la normalizacion exacta no se puede calcular, se puede usar una aproximacion de punto de silla, una expansion perturbativa, campo medio, diagonalizacion numerica, Monte Carlo o dinamica molecular. La eleccion del metodo debe justificarse por la escala del sistema y por la cantidad observable que se quiere estimar.

## Ejemplo de lectura

Supongamos que se tiene un modelo con Hamiltoniano conocido y se quiere predecir una cantidad observable. La estrategia es identificar primero las restricciones externas: energia fija, temperatura fija, potencial quimico fijo, presion fija o dinamica impuesta. Despues se elige la distribucion estadistica compatible con esas restricciones. En ese marco, **Algoritmo de Metropolis** entra como una herramienta para escribir pesos, estimar escalas o interpretar derivadas.

Si el sistema es pequeno, las fluctuaciones pueden ser comparables al valor medio. Si el sistema es grande y de corto alcance, muchas cantidades se concentran alrededor de su valor termodinamico. Esta diferencia explica por que una misma ecuacion puede funcionar como definicion exacta en un ensamble y como aproximacion macroscopica en otro.

## Ejemplo algebraico generico

Como ejemplo minimo, considera una cantidad $A(x)$ definida sobre microestados $x$. Si el peso estadistico es $w(x)$, el promedio y la fluctuacion se escriben como

$$
\begin{aligned}
\langle A\rangle&=\frac{\sum_x A(x)w(x)}{\sum_x w(x)},\\
\operatorname{Var}(A)&=\langle A^2\rangle-\langle A\rangle^2,\\
\delta A&=\sqrt{\operatorname{Var}(A)}
\end{aligned}
$$

La primera expresion da el valor medio que se compararia con una medicion repetida. La segunda mide dispersion. En equilibrio canonico, muchas respuestas se reducen a fluctuaciones de este tipo. Por ejemplo, una capacidad calorifica puede escribirse como una varianza de la energia; una susceptibilidad magnetica, como una varianza de la magnetizacion.

## Diagnosticos de consistencia

Para que una entrada de la wiki sea util en calculos reales, debe sugerir tambien diagnosticos. Los mas importantes son dimensionales, termodinamicos y estadisticos. Una expresion debe tener unidades correctas, debe respetar estabilidad y debe comportarse razonablemente al aumentar el numero de muestras o el tamano del sistema.

$$
\begin{aligned}
\sigma_{\bar A}^2&\approx \frac{2\tau_{int}}{M}\sigma_A^2,\\
\tau_{int}&=\frac{1}{2}+\sum_{t=1}^{\infty}\rho_A(t),\\
\epsilon_{sys}&=|\langle A\rangle_{\Delta}-\langle A\rangle|
\end{aligned}
$$

Estos diagnosticos no sustituyen una derivacion, pero reducen errores comunes. En particular, ayudan a encontrar factores de $N$, $V$, $h^{3N}$, $N!$, $k_B$ o $\beta$ que suelen perderse al pasar de una notacion compacta a un calculo explicito.

## Comparacion de regimenes

Una entrada tecnica debe indicar como cambia la interpretacion al moverse entre regimenes. En el regimen microscopico importan configuraciones individuales, niveles de energia, restricciones exactas y degeneraciones. En el regimen mesoscopico aparecen fluctuaciones grandes, tiempos de relajacion finitos y sensibilidad a condiciones de borde. En el regimen macroscopico dominan potenciales termodinamicos, ecuaciones de estado y respuestas suaves.

$$
\begin{aligned}
\text{microscopico}&:\quad x\in\Gamma,\ H(x),\ A(x),\\
\text{mesoscopico}&:\quad P(A),\ \operatorname{Var}(A),\ \tau_{rel},\\
\text{macroscopico}&:\quad F,\ S,\ P,\ \mu
\end{aligned}
$$

Esta comparacion es util porque evita aplicar una intuicion de un regimen a otro. Un sistema pequeno puede mostrar saltos y distribuciones anchas donde un sistema grande mostraria una curva suave. Un sistema cerca de una transicion continua puede comportarse como si no tuviera una escala caracteristica unica. Un sistema cuantico degenerado puede tener una respuesta dominada por el principio de exclusion o por ocupaciones colectivas, aunque una descripcion clasica parezca formalmente parecida.

Cuando se use **Algoritmo de Metropolis** en un calculo, conviene declarar explicitamente el regimen: clasico o cuantico, equilibrio o no equilibrio, finito o termodinamico, diluido o denso, lejos o cerca de una transicion. Esta declaracion no es burocratica; determina que terminos se pueden despreciar y que comparaciones son legitimas.

## Aproximaciones frecuentes

La mayor parte de los problemas interesantes no se resuelve exactamente. Por eso se introducen aproximaciones. Una aproximacion de campo medio reemplaza fluctuaciones locales por un valor promedio. Una aproximacion de punto de silla usa que, para $N$ grande, una integral queda dominada por el maximo de un exponente extensivo. Una expansion perturbativa supone que existe un parametro pequeno. Una simulacion de Monte Carlo reemplaza una suma imposible por un muestreo representativo.

$$
\begin{aligned}
\int dx\,e^{Nf(x)}&\simeq e^{Nf(x_*)}\sqrt{\frac{2\pi}{N|f''(x_*)|}},\\
A&=A_0+\epsilon A_1+\epsilon^2A_2+\cdots,\\
\langle A\rangle&\approx \frac{1}{M}\sum_{k=1}^{M}A(x_k)
\end{aligned}
$$

El punto importante es que cada aproximacion tiene una pregunta de control. En campo medio hay que preguntar cuando las fluctuaciones espaciales son pequenas. En punto de silla hay que revisar que el extremo sea estable y dominante. En perturbacion hay que identificar el parametro de expansion. En Monte Carlo hay que medir autocorrelaciones y errores. Sin estas preguntas, una aproximacion puede parecer rigurosa solo porque esta escrita con notacion compacta.

Para **Algoritmo de Metropolis**, la aproximacion adecuada depende de que aspecto fisico se quiere preservar. Si interesan exponentes criticos, no basta una aproximacion que destruya fluctuaciones de largo alcance. Si interesa una ecuacion de estado lejos de criticidad, una aproximacion de campo medio puede ser una primera descripcion razonable. Si interesa transporte, una teoria de equilibrio puede servir como punto de partida, pero no reemplaza la dinamica.

## Como leer resultados numericos

En simulaciones o calculos numericos, el resultado asociado a **Algoritmo de Metropolis** debe acompanarse de tamano del sistema, numero de muestras, criterio de convergencia y estimacion de error. Un valor numerico sin incertidumbre no permite distinguir entre una tendencia fisica y un artefacto de muestreo.

$$
\begin{aligned}
\bar A_M&=\frac{1}{M}\sum_{k=1}^{M}A_k,\\
\sigma_{\bar A}&\approx \sqrt{\frac{2\tau_{int}}{M}}\,\sigma_A,\\
O(L)&=O_\infty+aL^{-\omega}+\cdots
\end{aligned}
$$

Tambien conviene comparar diferentes tamanos. Si un observable cambia sistematicamente con $L$, hay efectos de tamano finito. Si cambia con el paso temporal o con el numero de muestras, hay error numerico o estadistico. Si cambia al modificar condiciones de borde, puede haber longitudes de correlacion grandes o una fase sensible a la geometria.

El resultado final debe expresarse como relacion, no solo como numero. Por ejemplo, decir que una susceptibilidad crece con $L$ informa mas que dar un valor aislado; decir que una energia libre por particula converge informa mas que listar energias totales. Esta forma de leer datos mantiene conectado el calculo con la termodinamica.

## Lectura avanzada

En una lectura mas avanzada, **Algoritmo de Metropolis** se entiende como parte de una red de equivalencias parciales. Una misma cantidad puede definirse por conteo, por maximacion de entropia, por derivadas de una funcion generadora o por un limite de grandes desviaciones. Estas formulaciones no siempre son intercambiables en sistemas finitos, pero explican por que la mecanica estadistica tiene tanta fuerza predictiva.

$$
\begin{aligned}
P_N(a)&\asymp e^{-NI(a)},\\
I(a)&\ge 0,\\
I(a_*)&=0,\\
\phi(\lambda)&=\lim_{N\to\infty}\frac{1}{N}\ln\langle e^{N\lambda a}\rangle
\end{aligned}
$$

La idea de grandes desviaciones es especialmente util: afirma que las probabilidades de fluctuaciones macroscopicas suelen caer exponencialmente con el tamano. Entonces el equilibrio no es un estado magico, sino el valor mas probable de una distribucion extremadamente concentrada. Cerca de criticalidad o con interacciones de largo alcance, esta concentracion puede fallar o cambiar de forma, y ahi aparecen fenomenos colectivos.

Esta perspectiva tambien aclara por que una wiki de mecanica estadistica no deberia organizarse solo como un formulario. Las formulas importan, pero importan porque expresan una estructura: pesos, restricciones, limites, escalamiento, respuestas y fluctuaciones. El objetivo de esta entrada es que el lector pueda reconocer esa estructura cuando encuentre **Algoritmo de Metropolis** en un libro, una simulacion o un articulo.

## Conexion con otros conceptos

Se conecta con modelos porque distintos modelos requieren tecnicas distintas. Tambien se conecta con fluctuaciones y funciones de correlacion, que suelen ser observables sensibles a errores de muestreo.

En particular, conviene revisar siempre como esta pagina se relaciona con la funcion de particion, con la entropia y con las fluctuaciones. Esas tres conexiones suelen bastar para ubicar el concepto dentro del mapa general de la mecanica estadistica.

## Relaciones con ensambles

Aunque **Algoritmo de Metropolis** no sea necesariamente un ensamble, casi siempre se entiende mejor al compararlo con las restricciones microcanonica, canonica y gran canonica. Las tres distribuciones prototipicas son

$$
\begin{aligned}
p_i^{(mc)}&=\frac{1}{\Omega(E,V,N)},\\
p_i^{(c)}&=\frac{e^{-\beta E_i}}{Z(T,V,N)},\\
p_i^{(gc)}&=\frac{e^{-\beta(E_i-\mu N_i)}}{\Xi(T,V,\mu)}
\end{aligned}
$$

La diferencia fisica esta en que se permite fluctuar. En el microcanonico la energia queda fijada; en el canonico fluctua la energia pero no el numero de particulas; en el gran canonico fluctuan energia y numero de particulas. Estas diferencias importan especialmente en sistemas pequenos, en coexistencia de fases y cerca de puntos criticos.

## Relacion con fluctuaciones

Las fluctuaciones no son ruido accidental: son parte de la prediccion. En mecanica estadistica, la misma teoria que entrega valores medios tambien predice varianzas, covarianzas y funciones de correlacion. Por eso cualquier calculo serio de **Algoritmo de Metropolis** deberia indicar que cantidad fluctua y en que escala.

$$
\begin{aligned}
\langle (\Delta E)^2\rangle&=k_BT^2C_V,\\
\langle (\Delta N)^2\rangle&=k_BT\left(\frac{\partial \langle N\rangle}{\partial \mu}\right)_{T,V},\\
G(r)&=\langle A(0)A(r)\rangle-\langle A\rangle^2
\end{aligned}
$$

Cuando las fluctuaciones relativas decrecen como $N^{-1/2}$, el comportamiento macroscopico se vuelve reproducible. Cuando no decrecen, o cuando una susceptibilidad diverge, el sistema esta avisando que hay correlaciones de largo alcance, criticidad, falta de auto-promediado o una restriccion termodinamica mal elegida.

## Supuestos y limites

Los metodos aproximados tienen sesgos propios. En simulacion, los riesgos tipicos son falta de equilibracion, autocorrelaciones largas, muestreo pobre de regiones raras y errores de tamano finito.

La mayoria de las formulas de esta pagina suponen equilibrio o una aproximacion controlada alrededor del equilibrio. Si se usan en sistemas pequenos, cerca de puntos criticos, con interacciones de largo alcance o fuera del equilibrio, conviene revisar si las fluctuaciones, las correlaciones y las condiciones de estabilidad siguen siendo despreciables.

## Donde suele fallar

El fallo mas frecuente es extrapolar fuera del regimen donde se justifico la formula. En baja dimension, las fluctuaciones pueden destruir orden de largo alcance. Con interacciones de largo alcance, la energia puede no ser extensiva. En dinamicas lentas, el sistema puede no equilibrar en la escala temporal del experimento. En sistemas cuanticos degenerados, una formula clasica puede fallar aunque la temperatura parezca alta en unidades macroscospicas.

$$
\begin{aligned}
\xi&\sim L \quad \Rightarrow \quad \text{efectos de tamano finito},\\
\tau_{rel}&\gg \tau_{obs} \quad \Rightarrow \quad \text{no equilibrado},\\
\frac{\Delta A}{\langle A\rangle}&\not\ll 1 \quad \Rightarrow \quad \text{fluctuaciones relevantes}
\end{aligned}
$$

Por eso las paginas de esta wiki deben leerse como mapas de uso, no como listas de formulas universales. La pregunta correcta no es solo "que formula uso", sino "que hipotesis hacen que esta formula represente el sistema que tengo delante".

## Errores comunes

- Usar la formula sin declarar sus variables fijas.
- Confundir una relacion exacta con una aproximacion de limite termodinamico.
- Omitir degeneraciones, factores de indistinguibilidad o condiciones de convergencia.
- Aplicar una expresion de equilibrio a una situacion fuera de equilibrio sin justificacion.
- Mezclar notacion de distintos ensambles sin transformar el potencial correspondiente.
- Interpretar un promedio de ensamble como si necesariamente coincidiera con una medicion temporal corta.

## Preguntas guia

1. Que microestados, configuraciones o trayectorias se estan considerando?
2. Que variables estan fijas y cuales fluctuan?
3. Cual es la cantidad normalizadora: una densidad de estados, una funcion de particion o una tasa estacionaria?
4. Que observable se obtiene derivando el potencial o promediando sobre la distribucion?
5. En que limite se espera que la prediccion sea termodinamicamente reproducible?

## Mini-problemas recomendados

1. Verificar la normalizacion de la distribucion asociada a **Algoritmo de Metropolis** en un sistema de dos estados.
2. Calcular el limite de alta temperatura de la ecuacion clave y explicar que informacion microscopica se pierde.
3. Identificar la variable conjugada que aparece al derivar el potencial relevante.
4. Estimar la escala de fluctuaciones para un sistema de $N$ grados de libertad independientes.
5. Comparar el resultado obtenido con el ensamble canonico y con el microcanonico en el limite $N\to\infty$.

Estos ejercicios son pequenos, pero obligan a usar la entrada de manera activa. Si no se puede resolver el caso de dos estados o el limite de alta temperatura, probablemente falta entender la normalizacion o las variables fijas.

## Referencias sugeridas

Para profundizar, compara esta entrada con las discusiones correspondientes en Reif, Pathria y Beale, Kardar, Huang o Chandler. Si el tema involucra simulacion, revisa tambien Frenkel y Smit. Para transiciones de fase y escala, las referencias naturales son Goldenfeld, Cardy y Stanley.

## Paginas relacionadas

- [Funcion de particion](#/funcion-de-particion)
- [Modelo de Ising](#/modelo-de-ising)
- [Fluctuaciones](#/fluctuaciones)

<!-- equalized-entry-length:start -->

## Apendice editorial: lectura tecnica y pedagogica

Este apendice sustituye la extension mecanica anterior por una lectura mas editorial. Su objetivo no es alargar la pagina, sino hacer que **Algoritmo de Metropolis** pueda estudiarse como una entrada tecnica: primero se identifica el objeto matematico, despues se explica como se usa en calculos, y finalmente se separan los limites de validez de las intuiciones utiles. En esta pagina, el objeto central pertenece al area de **Metodos** y por tanto se debe leer en relacion con algoritmos, estimadores, errores y criterios de convergencia.

La primera pregunta pedagogica es: que problema resuelve esta nocion? En mecanica estadistica casi nunca se introduce un concepto solo para nombrar algo. Se introduce porque permite reducir muchos grados de libertad a una cantidad controlable. En **Algoritmo de Metropolis**, esa reduccion debe dejar claro que se promedia, que se conserva, que fluctua y que escala domina. Una lectura tecnica minima debe poder responder, sin ambiguedad, cuales son los estados admisibles, que peso recibe cada estado y que observable se quiere predecir.

$$
\begin{aligned}
\text{objeto} &:\quad algoritmos, estimadores, errores y criterios de convergencia,\\
\text{observables} &:\quad promedios numericos, autocorrelaciones, sesgos y barras de error,\\
\text{herramientas} &:\quad muestreo, integracion numerica, reponderacion y comparacion con casos exactos.
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

Para **Algoritmo de Metropolis**, esta escritura debe especializarse usando la estructura propia del tema. La identidad orientadora de esta entrada puede resumirse como

$$
\bar A_M=\frac{1}{M}\sum_{k=1}^M A_k,\qquad \sigma_{\bar A}^2\simeq \frac{2\tau_{\rm int}}{M}\sigma_A^2
$$

La utilidad de escribir el formalismo de esta manera es que obliga a revisar normalizacion, dimensiones y variables fijas. Si $Z$ es una funcion de particion, su logaritmo genera potenciales. Si $Z$ es una normalizacion de trayectorias, su logaritmo puede generar cumulantes dinamicos. Si la suma no converge, o si el peso no es positivo cuando deberia representar probabilidades, hay que reinterpretar el problema antes de calcular.

## Derivacion guiada

Una derivacion pedagogica no intenta mostrar todos los detalles tecnicos de una monografia. Su funcion es revelar que supuestos sostienen el resultado. Una derivacion limpia de **Algoritmo de Metropolis** suele seguir cuatro pasos. Primero, se define el conjunto de estados o trayectorias. Segundo, se imponen restricciones macroscopicas. Tercero, se obtiene una distribucion o ecuacion efectiva. Cuarto, se extraen observables y se comprueba que los limites conocidos se recuperan.

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

En **Algoritmo de Metropolis**, la pregunta fisica central es que mecanismo vuelve relevante a promedios numericos, autocorrelaciones, sesgos y barras de error. Si domina la energia, la distribucion favorece estados de baja energia. Si domina la entropia, la degeneracion puede compensar costos energeticos. Si domina una corriente, el estado estacionario no se caracteriza solo por probabilidades, sino tambien por ciclos, flujos y disipacion. Si domina una longitud de correlacion, el tamano del sistema y las condiciones de borde dejan de ser detalles secundarios.

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

Este ejemplo separa equilibrio y dinamica. En equilibrio detallado, las tasas satisfacen una relacion compatible con Boltzmann. Fuera del equilibrio, pueden existir protocolos, reservorios multiples o ciclos que mantengan corrientes. Asi, incluso un sistema de dos o pocos estados permite detectar si **Algoritmo de Metropolis** se esta usando como concepto de equilibrio, como concepto dinamico o como aproximacion efectiva.

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

La advertencia principal para esta entrada es: un numero sin estimacion de error no es una prediccion fisica completa. Esta advertencia no es una nota menor. En mecanica estadistica, buena parte de los errores conceptuales aparece al trasladar una formula entre regimenes sin revisar sus supuestos. Una expresion obtenida para equilibrio puede servir como referencia fuera del equilibrio, pero no como sustituto de la dinamica. Una aproximacion de campo medio puede orientar, pero no capturar fluctuaciones criticas. Una simulacion puede producir numeros precisos y aun asi estar mal equilibrada.

## Diagnosticos de consistencia

Antes de usar **Algoritmo de Metropolis** en un argumento, conviene aplicar diagnosticos. El diagnostico dimensional exige que cada termino tenga unidades compatibles. El diagnostico probabilistico exige normalizacion y positividad cuando corresponda. El diagnostico termodinamico exige estabilidad o produccion no negativa de entropia segun el caso. El diagnostico numerico exige convergencia con tamano de muestra, paso temporal y tamano del sistema.

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

Cuando **Algoritmo de Metropolis** se estudia numericamente, el resultado debe venir acompanado de un protocolo. Hay que declarar el algoritmo, el criterio de equilibracion o estacionariedad, la longitud de la corrida, el numero de muestras independientes y la forma de estimar el error. Esto es especialmente importante en mecanica estadistica porque las muestras consecutivas suelen estar correlacionadas.

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

1. Escribe la version de dos estados asociada a **Algoritmo de Metropolis** e identifica su distribucion estacionaria o de equilibrio.
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

Para **Algoritmo de Metropolis**, las escalas relevantes deben declararse antes de comparar formulas. Una misma expresion puede describir sistemas pequenos, grandes, clasicos, cuanticos o impulsados, pero no con la misma interpretacion. El criterio practico es construir cantidades sin dimension y decidir cuales son pequenas, grandes o de orden uno.

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

Una entrada tecnica debe anticipar como se leerian datos asociados a **Algoritmo de Metropolis**. El valor medio es solo una parte del resultado: tambien importan dispersion, sesgo, autocorrelacion y sensibilidad a parametros. Cuando se reporta una simulacion, una tabla o una figura, debe quedar claro si el error es estadistico, sistematico o de modelo.

$$
\begin{aligned}
\Delta_{\rm stat} &\sim \sqrt{2\tau_{\rm int}/M},\\
\Delta_{\rm sys} &\sim |A(\Delta t)-A(0)|,\\
\Delta_{\rm size} &\sim |A(L)-A(\infty)|.
\end{aligned}
$$

Esta distincion es pedagogica porque ensena a no confundir precision numerica con validez fisica. Un resultado puede tener muchas cifras y aun asi estar fuera del regimen donde la teoria aplica.


### Nota editorial complementaria: conexiones

La pagina se conecta naturalmente con algoritmos, estimadores, errores y criterios de convergencia. Para navegar la wiki conviene leerla junto a entradas sobre ensambles, fluctuaciones, funcion de particion, respuesta lineal y metodos de simulacion. Esa lectura cruzada evita que **Algoritmo de Metropolis** quede aislado como una definicion local.

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

Una forma de fortalecer **Algoritmo de Metropolis** es derivar la misma relacion desde dos puntos de partida. Si un resultado aparece tanto por maximizacion de entropia como por una funcion generadora, o tanto por ecuacion maestra como por balance de corrientes, la interpretacion gana estabilidad conceptual. Esa redundancia no es decorativa: permite distinguir una identidad general de una aproximacion dependiente del modelo.

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

No todo observable es igualmente informativo. Un promedio global puede ocultar coexistencia de fases; una energia total puede ocultar correlaciones; una corriente media puede ocultar ciclos irreversibles opuestos. Para **Algoritmo de Metropolis**, conviene elegir observables que separen media, fluctuacion y estructura espacial o temporal.

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

Una formula de **Algoritmo de Metropolis** se vuelve fisica cuando se puede relacionar con una medicion. En un experimento real no se observan microestados completos, sino promedios temporales, histogramas, espectros, respuestas a perturbaciones o correlaciones espaciales. La tarea conceptual es traducir entre el objeto teorico y la magnitud medida.

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

Los errores mas comunes tienen una forma reconocible: cambiar de ensamble sin transformar el potencial, usar equilibrio donde hay corrientes, confundir tasa con probabilidad, olvidar factores de degeneracion, ignorar autocorrelaciones o tratar una relacion asintotica como exacta. Para **Algoritmo de Metropolis**, la revision minima es identificar cual de esos errores seria mas probable.

$$
\begin{aligned}
p_i &\ge 0,\qquad \sum_i p_i=1,\\
\tau_{\rm corr} &\ll t_{\rm muestra}\quad \text{si se promedian datos},\\
\Delta A/A &\ll 1\quad \text{si se usa una descripcion macroscopica}.
\end{aligned}
$$

Estas pruebas no sustituyen la teoria, pero evitan que una pagina elegante esconda una hipotesis falsa.


### Nota editorial complementaria: ruta de aprendizaje

Una forma eficiente de estudiar **Algoritmo de Metropolis** es leer la pagina en tres pasadas. En la primera, quedarse con la definicion y la ecuacion clave. En la segunda, reconstruir la derivacion minima. En la tercera, resolver un ejemplo y revisar los limites. Esta secuencia evita que la lectura se vuelva una acumulacion pasiva de formulas.

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

Para **Algoritmo de Metropolis**, esta jerarquia tambien ayuda a conectar teoria, computo y experimentos.


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

Para **Algoritmo de Metropolis**, las escalas relevantes deben declararse antes de comparar formulas. Una misma expresion puede describir sistemas pequenos, grandes, clasicos, cuanticos o impulsados, pero no con la misma interpretacion. El criterio practico es construir cantidades sin dimension y decidir cuales son pequenas, grandes o de orden uno.

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

Una entrada tecnica debe anticipar como se leerian datos asociados a **Algoritmo de Metropolis**. El valor medio es solo una parte del resultado: tambien importan dispersion, sesgo, autocorrelacion y sensibilidad a parametros. Cuando se reporta una simulacion, una tabla o una figura, debe quedar claro si el error es estadistico, sistematico o de modelo.

$$
\begin{aligned}
\Delta_{\rm stat} &\sim \sqrt{2\tau_{\rm int}/M},\\
\Delta_{\rm sys} &\sim |A(\Delta t)-A(0)|,\\
\Delta_{\rm size} &\sim |A(L)-A(\infty)|.
\end{aligned}
$$

Esta distincion es pedagogica porque ensena a no confundir precision numerica con validez fisica. Un resultado puede tener muchas cifras y aun asi estar fuera del regimen donde la teoria aplica.


### Nota editorial complementaria: conexiones

La pagina se conecta naturalmente con algoritmos, estimadores, errores y criterios de convergencia. Para navegar la wiki conviene leerla junto a entradas sobre ensambles, fluctuaciones, funcion de particion, respuesta lineal y metodos de simulacion. Esa lectura cruzada evita que **Algoritmo de Metropolis** quede aislado como una definicion local.

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