# Termodinamica estocastica

## Resumen

**Termodinamica estocastica** es una entrada troncal de no equilibrio dentro de la mecanica estadistica. Su papel principal se resume asi: formulacion de energia, trabajo, calor y entropia para trayectorias fluctuantes. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

En una lectura rapida, esta pagina responde tres preguntas. Primero, que se esta contando, promediando o aproximando. Segundo, bajo que variables se mantiene controlado el sistema. Tercero, que predicciones fisicas se obtienen cuando el concepto se inserta en un ensamble, un modelo o un limite termodinamico.

## Definicion operativa

En mecanica estadistica conviene definir **Termodinamica estocastica** por su uso operativo: formulacion de energia, trabajo, calor y entropia para trayectorias fluctuantes. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

Fuera del equilibrio, **Termodinamica estocastica** describe evolucion, transporte o respuesta cuando no basta una distribucion de Gibbs estatica. Decir que formulacion de energia, trabajo, calor y entropia para trayectorias fluctuantes indica que variable temporal, corriente o tasa entra en juego.

Una definicion operativa siempre debe declarar el sistema, las variables fijas y la medida con la que se comparan estados. Si esas piezas no estan especificadas, dos expresiones formalmente parecidas pueden describir problemas fisicamente distintos.

## Idea fisica

La utilidad de este concepto aparece cuando se quiere pasar de una descripcion microscopica a una afirmacion macroscopica controlada. En la practica, fija que variables se consideran relevantes, que aproximaciones se estan usando y que cantidades pueden compararse entre modelos, simulaciones o experimentos.

La imagen fisica es la de sistemas con gradientes, forzamientos, relajacion o corrientes. El equilibrio puede aparecer como estado estacionario especial, pero la dinamica importa de manera explicita.

Una buena prueba de comprension es preguntar que cambia si se modifica la energia, el volumen, la temperatura, el numero de particulas o el campo externo. Si la respuesta no es clara, probablemente falta identificar el ensamble natural o el potencial termodinamico correcto.

## Ecuacion clave

$$
\Delta s_{\mathrm{tot}}=k_B\ln\frac{P[\Gamma]}{P[\tilde\Gamma]}
$$

La ecuacion anterior debe leerse como una forma canonica de la entrada, no como la unica formulacion posible. En problemas concretos puede requerir condiciones de borde, factores de degeneracion, una medida de espacio de fases, una convencion de normalizacion o un limite termodinamico bien definido.

## Estructura matematica

El modo mas seguro de usar **Termodinamica estocastica** es insertarlo en la cadena completa que va desde pesos microscopicos hasta cantidades macroscopicas. En equilibrio, esa cadena suele tener cuatro piezas: una energia o accion efectiva, una medida sobre estados, una normalizacion y un conjunto de derivadas que producen observables.

$$
\begin{aligned}
\frac{dp_i}{dt}&=\sum_j\left(W_{j\to i}p_j-W_{i\to j}p_i\right),\\
\partial_t f+\mathbf v\cdot\nabla f&=C[f],\\
\mathbf J&=-D\nabla n
\end{aligned}
$$

Esta escritura compacta recuerda que el objeto central no flota solo. Si se cambia la medida $d\Gamma$, el Hamiltoniano $H$, las variables controladas o la normalizacion, cambia tambien la prediccion fisica. En problemas discretos, la integral se reemplaza por una suma; en problemas cuanticos, la traza sobre el espacio de Hilbert reemplaza el conteo clasico.

$$
\begin{aligned}
\sum_i p_i(t)&=1,\\
\sum_i \frac{dp_i}{dt}&=0,\\
\partial_t n+\nabla\cdot\mathbf J&=0
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
\delta\langle A(t)\rangle&=\int_{-\infty}^{t}dt'\,\chi_{AB}(t-t')h(t'),\\
\chi_{AB}(t)&=\beta\Theta(t)\frac{d}{dt}\langle B(0)A(t)\rangle,\\
D&=\frac{1}{d}\int_0^\infty dt\,\langle \mathbf v(t)\cdot\mathbf v(0)\rangle
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

El desarrollo parte de probabilidades dependientes del tiempo, distribuciones de una particula o funciones de correlacion. La linealizacion cerca del equilibrio produce coeficientes de transporte y relaciones de respuesta.

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

Para usar **Termodinamica estocastica** de manera cuantitativa, se recomienda acompanar la ecuacion principal con una identidad de control: una relacion que deba cumplirse si el calculo esta bien normalizado y si las variables fijas se eligieron correctamente.

$$
\begin{aligned}
\sum_x p(x)&=1,\\
\langle 1\rangle&=1,\\
\operatorname{Var}(A)&=\langle A^2\rangle-\langle A\rangle^2\ge 0
\end{aligned}
$$

Estas identidades no siempre son el resultado final, pero son excelentes pruebas de consistencia. Si una simulacion viola una igualdad de normalizacion, si una respuesta sale con signo incompatible con estabilidad, o si una derivada no coincide con una fluctuacion esperada, conviene revisar el calculo antes de interpretar los datos.

## Interpretacion fisica

La pregunta central no es solo cual estado es mas probable, sino como se llega a el, cuanto tarda la relajacion y que corrientes se mantienen bajo una perturbacion externa.

La interpretacion correcta separa tres niveles. El nivel microscopico habla de configuraciones, energias, ocupaciones o trayectorias. El nivel estadistico habla de pesos, promedios, fluctuaciones y correlaciones. El nivel termodinamico habla de potenciales, ecuaciones de estado y estabilidad. **Termodinamica estocastica** es util precisamente porque permite moverse entre esos niveles sin perder de vista las hipotesis.

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

1. Definir variables dinamicas, tasas o corrientes relevantes para **Termodinamica estocastica**.
2. Establecer la ecuacion de evolucion y las condiciones iniciales o de borde.
3. Buscar estados estacionarios, tiempos de relajacion o coeficientes de transporte.
4. Revisar si la aproximacion lineal alrededor del equilibrio es suficiente.

## Procedimiento de calculo

Una receta practica para aplicar **Termodinamica estocastica** en un problema nuevo es la siguiente. Primero se escribe el modelo con sus parametros y unidades. Luego se identifica el ensamble natural. Despues se calcula la normalizacion, aunque sea de forma aproximada. Finalmente se derivan observables y se comparan con limites simples.

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

Supongamos que se tiene un modelo con Hamiltoniano conocido y se quiere predecir una cantidad observable. La estrategia es identificar primero las restricciones externas: energia fija, temperatura fija, potencial quimico fijo, presion fija o dinamica impuesta. Despues se elige la distribucion estadistica compatible con esas restricciones. En ese marco, **Termodinamica estocastica** entra como una herramienta para escribir pesos, estimar escalas o interpretar derivadas.

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

Cuando se use **Termodinamica estocastica** en un calculo, conviene declarar explicitamente el regimen: clasico o cuantico, equilibrio o no equilibrio, finito o termodinamico, diluido o denso, lejos o cerca de una transicion. Esta declaracion no es burocratica; determina que terminos se pueden despreciar y que comparaciones son legitimas.

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

Para **Termodinamica estocastica**, la aproximacion adecuada depende de que aspecto fisico se quiere preservar. Si interesan exponentes criticos, no basta una aproximacion que destruya fluctuaciones de largo alcance. Si interesa una ecuacion de estado lejos de criticidad, una aproximacion de campo medio puede ser una primera descripcion razonable. Si interesa transporte, una teoria de equilibrio puede servir como punto de partida, pero no reemplaza la dinamica.

## Como leer resultados numericos

En simulaciones o calculos numericos, el resultado asociado a **Termodinamica estocastica** debe acompanarse de tamano del sistema, numero de muestras, criterio de convergencia y estimacion de error. Un valor numerico sin incertidumbre no permite distinguir entre una tendencia fisica y un artefacto de muestreo.

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

En una lectura mas avanzada, **Termodinamica estocastica** se entiende como parte de una red de equivalencias parciales. Una misma cantidad puede definirse por conteo, por maximacion de entropia, por derivadas de una funcion generadora o por un limite de grandes desviaciones. Estas formulaciones no siempre son intercambiables en sistemas finitos, pero explican por que la mecanica estadistica tiene tanta fuerza predictiva.

$$
\begin{aligned}
P_N(a)&\asymp e^{-NI(a)},\\
I(a)&\ge 0,\\
I(a_*)&=0,\\
\phi(\lambda)&=\lim_{N\to\infty}\frac{1}{N}\ln\langle e^{N\lambda a}\rangle
\end{aligned}
$$

La idea de grandes desviaciones es especialmente util: afirma que las probabilidades de fluctuaciones macroscopicas suelen caer exponencialmente con el tamano. Entonces el equilibrio no es un estado magico, sino el valor mas probable de una distribucion extremadamente concentrada. Cerca de criticalidad o con interacciones de largo alcance, esta concentracion puede fallar o cambiar de forma, y ahi aparecen fenomenos colectivos.

Esta perspectiva tambien aclara por que una wiki de mecanica estadistica no deberia organizarse solo como un formulario. Las formulas importan, pero importan porque expresan una estructura: pesos, restricciones, limites, escalamiento, respuestas y fluctuaciones. El objetivo de esta entrada es que el lector pueda reconocer esa estructura cuando encuentre **Termodinamica estocastica** en un libro, una simulacion o un articulo.

## Conexion con otros conceptos

Se conecta con fluctuaciones, respuesta lineal, ecuaciones maestras y teoria cinetica. Tambien enlaza con simulacion, porque muchas propiedades de transporte se estiman a partir de trayectorias.

En particular, conviene revisar siempre como esta pagina se relaciona con la funcion de particion, con la entropia y con las fluctuaciones. Esas tres conexiones suelen bastar para ubicar el concepto dentro del mapa general de la mecanica estadistica.

## Relaciones con ensambles

Aunque **Termodinamica estocastica** no sea necesariamente un ensamble, casi siempre se entiende mejor al compararlo con las restricciones microcanonica, canonica y gran canonica. Las tres distribuciones prototipicas son

$$
\begin{aligned}
p_i^{(mc)}&=\frac{1}{\Omega(E,V,N)},\\
p_i^{(c)}&=\frac{e^{-\beta E_i}}{Z(T,V,N)},\\
p_i^{(gc)}&=\frac{e^{-\beta(E_i-\mu N_i)}}{\Xi(T,V,\mu)}
\end{aligned}
$$

La diferencia fisica esta en que se permite fluctuar. En el microcanonico la energia queda fijada; en el canonico fluctua la energia pero no el numero de particulas; en el gran canonico fluctuan energia y numero de particulas. Estas diferencias importan especialmente en sistemas pequenos, en coexistencia de fases y cerca de puntos criticos.

## Relacion con fluctuaciones

Las fluctuaciones no son ruido accidental: son parte de la prediccion. En mecanica estadistica, la misma teoria que entrega valores medios tambien predice varianzas, covarianzas y funciones de correlacion. Por eso cualquier calculo serio de **Termodinamica estocastica** deberia indicar que cantidad fluctua y en que escala.

$$
\begin{aligned}
\langle (\Delta E)^2\rangle&=k_BT^2C_V,\\
\langle (\Delta N)^2\rangle&=k_BT\left(\frac{\partial \langle N\rangle}{\partial \mu}\right)_{T,V},\\
G(r)&=\langle A(0)A(r)\rangle-\langle A\rangle^2
\end{aligned}
$$

Cuando las fluctuaciones relativas decrecen como $N^{-1/2}$, el comportamiento macroscopico se vuelve reproducible. Cuando no decrecen, o cuando una susceptibilidad diverge, el sistema esta avisando que hay correlaciones de largo alcance, criticidad, falta de auto-promediado o una restriccion termodinamica mal elegida.

## Supuestos y limites

Fuera del equilibrio no existe una unica receta universal comparable al ensamble canonico. Las ecuaciones efectivas pueden depender de separacion de escalas, hipotesis moleculares, linealizacion o ruido idealizado.

La mayoria de las formulas de esta pagina suponen equilibrio o una aproximacion controlada alrededor del equilibrio. Si se usan en sistemas pequenos, cerca de puntos criticos, con interacciones de largo alcance o fuera del equilibrio, conviene revisar si las fluctuaciones, las correlaciones y las condiciones de estabilidad siguen siendo despreciables.

## Donde suele fallar

El fallo mas frecuente es extrapolar fuera del regimen donde se justifico la formula. En baja dimension, las fluctuaciones pueden destruir orden de largo alcance. Con interacciones de largo alcance, la energia puede no ser extensiva. En dinamicas lentas, el sistema puede no equilibrar en la escala temporal del experimento. En sistemas cuanticos degenerados, una formula clasica puede fallar aunque la temperatura parezca alta en unidades macroscospicas.

$$
\begin{aligned}
\nabla T\ne 0&:\quad \text{no hay equilibrio global},\\
\dot S_{prod}&\ge 0,\\
J_a&=\sum_b L_{ab}X_b
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

1. Verificar la normalizacion de la distribucion asociada a **Termodinamica estocastica** en un sistema de dos estados.
2. Calcular el limite de alta temperatura de la ecuacion clave y explicar que informacion microscopica se pierde.
3. Identificar la variable conjugada que aparece al derivar el potencial relevante.
4. Estimar la escala de fluctuaciones para un sistema de $N$ grados de libertad independientes.
5. Comparar el resultado obtenido con el ensamble canonico y con el microcanonico en el limite $N\to\infty$.

Estos ejercicios son pequenos, pero obligan a usar la entrada de manera activa. Si no se puede resolver el caso de dos estados o el limite de alta temperatura, probablemente falta entender la normalizacion o las variables fijas.

## Referencias sugeridas

Para profundizar, compara esta entrada con las discusiones correspondientes en Reif, Pathria y Beale, Kardar, Huang o Chandler. Si el tema involucra simulacion, revisa tambien Frenkel y Smit. Para transiciones de fase y escala, las referencias naturales son Goldenfeld, Cardy y Stanley.

## Paginas relacionadas

- [Fluctuaciones](#/fluctuaciones)
- [Teorema fluctuacion-disipacion](#/teorema-fluctuacion-disipacion)
- [Ecuacion maestra](#/ecuacion-maestra)

<!-- equalized-entry-length:start -->

## Apéndice de extensión normalizada

Esta seccion iguala la extension de la entrada con el resto de la wiki. No introduce una definicion nueva de **Termodinamica estocastica**; agrega pruebas de uso, relaciones matematicas y criterios de lectura para que todas las paginas tengan una profundidad comparable.

### Desarrollo extendido 1

En esta ampliacion, **Termodinamica estocastica** se vuelve a leer desde una perspectiva de no equilibrio. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Termodinamica estocastica** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 2

En esta ampliacion, **Termodinamica estocastica** se vuelve a leer desde una perspectiva de no equilibrio. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Termodinamica estocastica** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 3

En esta ampliacion, **Termodinamica estocastica** se vuelve a leer desde una perspectiva de no equilibrio. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Termodinamica estocastica** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 4

En esta ampliacion, **Termodinamica estocastica** se vuelve a leer desde una perspectiva de no equilibrio. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Termodinamica estocastica** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 5

En esta ampliacion, **Termodinamica estocastica** se vuelve a leer desde una perspectiva de no equilibrio. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Termodinamica estocastica** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Desarrollo extendido 6

En esta ampliacion, **Termodinamica estocastica** se vuelve a leer desde una perspectiva de no equilibrio. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

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

El uso responsable de **Termodinamica estocastica** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.

### Glosario operativo final

estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura fluctuacion correlacion respuesta estabilidad limite escala ensamble potencial observables medida degeneracion simetria aproximacion validacion estado peso normalizacion entropia energia temperatura

<!-- equalized-entry-length:end -->
