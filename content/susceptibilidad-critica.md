# Susceptibilidad critica

## Resumen

**Susceptibilidad critica** es una entrada troncal de transiciones y criticalidad dentro de la mecanica estadistica. Su papel principal se resume asi: respuesta divergente cerca de una transicion continua. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

En una lectura rapida, esta pagina responde tres preguntas. Primero, que se esta contando, promediando o aproximando. Segundo, bajo que variables se mantiene controlado el sistema. Tercero, que predicciones fisicas se obtienen cuando el concepto se inserta en un ensamble, un modelo o un limite termodinamico.

## Definicion operativa

En mecanica estadistica conviene definir **Susceptibilidad critica** por su uso operativo: respuesta divergente cerca de una transicion continua. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

En criticalidad, **Susceptibilidad critica** describe como cambia el sistema cerca de una singularidad termodinamica. Esta descripcion debe entenderse en el limite termodinamico, donde pueden aparecer no analiticidades reales.

Una definicion operativa siempre debe declarar el sistema, las variables fijas y la medida con la que se comparan estados. Si esas piezas no estan especificadas, dos expresiones formalmente parecidas pueden describir problemas fisicamente distintos.

## Idea fisica

La utilidad de este concepto aparece cuando se quiere pasar de una descripcion microscopica a una afirmacion macroscopica controlada. En la practica, fija que variables se consideran relevantes, que aproximaciones se estan usando y que cantidades pueden compararse entre modelos, simulaciones o experimentos.

La imagen fisica es la de fluctuaciones correlacionadas en muchas escalas. Cerca del punto critico, detalles microscopicos pierden importancia y dominan simetrias, dimensionalidad y alcance de interacciones.

Una buena prueba de comprension es preguntar que cambia si se modifica la energia, el volumen, la temperatura, el numero de particulas o el campo externo. Si la respuesta no es clara, probablemente falta identificar el ensamble natural o el potencial termodinamico correcto.

## Ecuacion clave

$$
\chi\sim |T-T_c|^{-\gamma}
$$

La ecuacion anterior debe leerse como una forma canonica de la entrada, no como la unica formulacion posible. En problemas concretos puede requerir condiciones de borde, factores de degeneracion, una medida de espacio de fases, una convencion de normalizacion o un limite termodinamico bien definido.

## Estructura matematica

El modo mas seguro de usar **Susceptibilidad critica** es insertarlo en la cadena completa que va desde pesos microscopicos hasta cantidades macroscopicas. En equilibrio, esa cadena suele tener cuatro piezas: una energia o accion efectiva, una medida sobre estados, una normalizacion y un conjunto de derivadas que producen observables.

$$
\begin{aligned}
f(t,h)&=f_{reg}(t,h)+f_s(t,h),\\
t&=\frac{T-T_c}{T_c},\\
\xi&\sim |t|^{-\nu}
\end{aligned}
$$

Esta escritura compacta recuerda que el objeto central no flota solo. Si se cambia la medida $d\Gamma$, el Hamiltoniano $H$, las variables controladas o la normalizacion, cambia tambien la prediccion fisica. En problemas discretos, la integral se reemplaza por una suma; en problemas cuanticos, la traza sobre el espacio de Hilbert reemplaza el conteo clasico.

$$
\begin{aligned}
p(x)&=\frac{w(x)}{\int_\Gamma d\Gamma\,w(x)},\\
\int_\Gamma d\Gamma\,p(x)&=1,\\
\langle A\rangle&=\int_\Gamma d\Gamma\,A(x)p(x)
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
m&=-\left(\frac{\partial f}{\partial h}\right)_T,\\
\chi&=\left(\frac{\partial m}{\partial h}\right)_T,\\
C&=-T\left(\frac{\partial^2 f}{\partial T^2}\right)_h
\end{aligned}
$$

La primera linea identifica observables medios; la segunda suele identificar respuestas. Esta jerarquia es una de las razones por las que las funciones de particion son tan importantes: no solo normalizan probabilidades, sino que condensan energia, entropia, presion, potencial quimico y fluctuaciones en una sola funcion generadora.

## Escalas y cantidades sin dimension

Antes de aplicar una formula conviene construir razones sin dimension. En sistemas termicos aparecen naturalmente $\beta E$, $n\lambda_T^3$, $L/\xi$, $\Delta E/(k_BT)$ o $t/\tau$. Estas razones dicen si una aproximacion es clasica o cuantica, local o colectiva, estacionaria o transitoria.

$$
\begin{aligned}
f_s(t,h)&=b^{-d}f_s(tb^{y_t},hb^{y_h}),\\
m&\sim |t|^{\beta_c},\\
\chi&\sim |t|^{-\gamma}
\end{aligned}
$$

En la practica, una ecuacion se vuelve informativa cuando se sabe que termino domina. Si $\beta\Delta E\gg 1$, los estados excitados pueden estar suprimidos; si $L/\xi\gg 1$, el sistema puede parecer termodinamico; si $n\lambda_T^3\gtrsim 1$, la indistinguibilidad cuantica deja de ser una correccion pequena.

## Desarrollo minimo

El desarrollo suele separar una parte regular y una parte singular de la energia libre. Luego se proponen leyes de escala o transformaciones de renormalizacion para obtener exponentes y relaciones entre respuestas.

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

Para usar **Susceptibilidad critica** de manera cuantitativa, se recomienda acompanar la ecuacion principal con una identidad de control: una relacion que deba cumplirse si el calculo esta bien normalizado y si las variables fijas se eligieron correctamente.

$$
\begin{aligned}
\sum_x p(x)&=1,\\
\langle 1\rangle&=1,\\
\operatorname{Var}(A)&=\langle A^2\rangle-\langle A\rangle^2\ge 0
\end{aligned}
$$

Estas identidades no siempre son el resultado final, pero son excelentes pruebas de consistencia. Si una simulacion viola una igualdad de normalizacion, si una respuesta sale con signo incompatible con estabilidad, o si una derivada no coincide con una fluctuacion esperada, conviene revisar el calculo antes de interpretar los datos.

## Interpretacion fisica

La criticalidad muestra que no todo se entiende mirando unidades microscopicas aisladas. Cuando la longitud de correlacion crece, el comportamiento colectivo domina y aparecen clases de universalidad.

La interpretacion correcta separa tres niveles. El nivel microscopico habla de configuraciones, energias, ocupaciones o trayectorias. El nivel estadistico habla de pesos, promedios, fluctuaciones y correlaciones. El nivel termodinamico habla de potenciales, ecuaciones de estado y estabilidad. **Susceptibilidad critica** es util precisamente porque permite moverse entre esos niveles sin perder de vista las hipotesis.

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
L\ll\xi&:\quad \text{domina tamano finito},\\
L\gg\xi&:\quad \text{regimen termodinamico},\\
O_L(t)&=L^{y_O}f_O(tL^{1/\nu})
\end{aligned}
$$

Estos limites no son adornos. Sirven para comprobar que una expresion reproduce casos conocidos. Si el limite de alta temperatura no recupera desorden, si el limite de baja temperatura no selecciona estados fundamentales, o si el limite termodinamico no escala extensivamente, la formula necesita una revision.

## Uso tipico

1. Identificar el parametro de control y el parametro de orden asociado a **Susceptibilidad critica**.
2. Separar comportamiento regular y singular.
3. Estudiar correlaciones, susceptibilidades y dependencia con el tamano.
4. Comparar exponentes y simetrias para ubicar la clase de universalidad.

## Procedimiento de calculo

Una receta practica para aplicar **Susceptibilidad critica** en un problema nuevo es la siguiente. Primero se escribe el modelo con sus parametros y unidades. Luego se identifica el ensamble natural. Despues se calcula la normalizacion, aunque sea de forma aproximada. Finalmente se derivan observables y se comparan con limites simples.

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

Supongamos que se tiene un modelo con Hamiltoniano conocido y se quiere predecir una cantidad observable. La estrategia es identificar primero las restricciones externas: energia fija, temperatura fija, potencial quimico fijo, presion fija o dinamica impuesta. Despues se elige la distribucion estadistica compatible con esas restricciones. En ese marco, **Susceptibilidad critica** entra como una herramienta para escribir pesos, estimar escalas o interpretar derivadas.

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
[F]&=[E],\\
[\beta]&=[E]^{-1},\\
C_V&\ge 0,\\
\kappa_T&\ge 0
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

Cuando se use **Susceptibilidad critica** en un calculo, conviene declarar explicitamente el regimen: clasico o cuantico, equilibrio o no equilibrio, finito o termodinamico, diluido o denso, lejos o cerca de una transicion. Esta declaracion no es burocratica; determina que terminos se pueden despreciar y que comparaciones son legitimas.

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

Para **Susceptibilidad critica**, la aproximacion adecuada depende de que aspecto fisico se quiere preservar. Si interesan exponentes criticos, no basta una aproximacion que destruya fluctuaciones de largo alcance. Si interesa una ecuacion de estado lejos de criticidad, una aproximacion de campo medio puede ser una primera descripcion razonable. Si interesa transporte, una teoria de equilibrio puede servir como punto de partida, pero no reemplaza la dinamica.

## Como leer resultados numericos

En simulaciones o calculos numericos, el resultado asociado a **Susceptibilidad critica** debe acompanarse de tamano del sistema, numero de muestras, criterio de convergencia y estimacion de error. Un valor numerico sin incertidumbre no permite distinguir entre una tendencia fisica y un artefacto de muestreo.

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

En una lectura mas avanzada, **Susceptibilidad critica** se entiende como parte de una red de equivalencias parciales. Una misma cantidad puede definirse por conteo, por maximacion de entropia, por derivadas de una funcion generadora o por un limite de grandes desviaciones. Estas formulaciones no siempre son intercambiables en sistemas finitos, pero explican por que la mecanica estadistica tiene tanta fuerza predictiva.

$$
\begin{aligned}
P_N(a)&\asymp e^{-NI(a)},\\
I(a)&\ge 0,\\
I(a_*)&=0,\\
\phi(\lambda)&=\lim_{N\to\infty}\frac{1}{N}\ln\langle e^{N\lambda a}\rangle
\end{aligned}
$$

La idea de grandes desviaciones es especialmente util: afirma que las probabilidades de fluctuaciones macroscopicas suelen caer exponencialmente con el tamano. Entonces el equilibrio no es un estado magico, sino el valor mas probable de una distribucion extremadamente concentrada. Cerca de criticalidad o con interacciones de largo alcance, esta concentracion puede fallar o cambiar de forma, y ahi aparecen fenomenos colectivos.

Esta perspectiva tambien aclara por que una wiki de mecanica estadistica no deberia organizarse solo como un formulario. Las formulas importan, pero importan porque expresan una estructura: pesos, restricciones, limites, escalamiento, respuestas y fluctuaciones. El objetivo de esta entrada es que el lector pueda reconocer esa estructura cuando encuentre **Susceptibilidad critica** en un libro, una simulacion o un articulo.

## Conexion con otros conceptos

Se conecta con parametro de orden, longitud de correlacion, susceptibilidad, teoria de Landau y grupo de renormalizacion. Tambien exige cuidado con tamano finito y condiciones de borde.

En particular, conviene revisar siempre como esta pagina se relaciona con la funcion de particion, con la entropia y con las fluctuaciones. Esas tres conexiones suelen bastar para ubicar el concepto dentro del mapa general de la mecanica estadistica.

## Relaciones con ensambles

Aunque **Susceptibilidad critica** no sea necesariamente un ensamble, casi siempre se entiende mejor al compararlo con las restricciones microcanonica, canonica y gran canonica. Las tres distribuciones prototipicas son

$$
\begin{aligned}
p_i^{(mc)}&=\frac{1}{\Omega(E,V,N)},\\
p_i^{(c)}&=\frac{e^{-\beta E_i}}{Z(T,V,N)},\\
p_i^{(gc)}&=\frac{e^{-\beta(E_i-\mu N_i)}}{\Xi(T,V,\mu)}
\end{aligned}
$$

La diferencia fisica esta en que se permite fluctuar. En el microcanonico la energia queda fijada; en el canonico fluctua la energia pero no el numero de particulas; en el gran canonico fluctuan energia y numero de particulas. Estas diferencias importan especialmente en sistemas pequenos, en coexistencia de fases y cerca de puntos criticos.

## Relacion con fluctuaciones

Las fluctuaciones no son ruido accidental: son parte de la prediccion. En mecanica estadistica, la misma teoria que entrega valores medios tambien predice varianzas, covarianzas y funciones de correlacion. Por eso cualquier calculo serio de **Susceptibilidad critica** deberia indicar que cantidad fluctua y en que escala.

$$
\begin{aligned}
\langle (\Delta E)^2\rangle&=k_BT^2C_V,\\
\langle (\Delta N)^2\rangle&=k_BT\left(\frac{\partial \langle N\rangle}{\partial \mu}\right)_{T,V},\\
G(r)&=\langle A(0)A(r)\rangle-\langle A\rangle^2
\end{aligned}
$$

Cuando las fluctuaciones relativas decrecen como $N^{-1/2}$, el comportamiento macroscopico se vuelve reproducible. Cuando no decrecen, o cuando una susceptibilidad diverge, el sistema esta avisando que hay correlaciones de largo alcance, criticidad, falta de auto-promediado o una restriccion termodinamica mal elegida.

## Supuestos y limites

Las singularidades reales aparecen solo en el limite termodinamico. En simulaciones y experimentos finitos se observan redondeos, corrimientos del punto critico y dependencia con condiciones de borde.

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

1. Verificar la normalizacion de la distribucion asociada a **Susceptibilidad critica** en un sistema de dos estados.
2. Calcular el limite de alta temperatura de la ecuacion clave y explicar que informacion microscopica se pierde.
3. Identificar la variable conjugada que aparece al derivar el potencial relevante.
4. Estimar la escala de fluctuaciones para un sistema de $N$ grados de libertad independientes.
5. Comparar el resultado obtenido con el ensamble canonico y con el microcanonico en el limite $N\to\infty$.

Estos ejercicios son pequenos, pero obligan a usar la entrada de manera activa. Si no se puede resolver el caso de dos estados o el limite de alta temperatura, probablemente falta entender la normalizacion o las variables fijas.

## Referencias sugeridas

Para profundizar, compara esta entrada con las discusiones correspondientes en Reif, Pathria y Beale, Kardar, Huang o Chandler. Si el tema involucra simulacion, revisa tambien Frenkel y Smit. Para transiciones de fase y escala, las referencias naturales son Goldenfeld, Cardy y Stanley.

## Paginas relacionadas

- [Modelo de Ising](#/modelo-de-ising)
- [Fluctuaciones](#/fluctuaciones)
- [Grupo de renormalizacion](#/grupo-renormalizacion)
