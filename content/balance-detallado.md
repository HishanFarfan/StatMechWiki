# Balance detallado

## Resumen

**Balance detallado** es una entrada troncal de metodos dentro de la mecanica estadistica. Su papel principal se resume asi: condicion suficiente para que una cadena de Markov tenga una distribucion estacionaria deseada. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Balance detallado** por su uso operativo: condicion suficiente para que una cadena de Markov tenga una distribucion estacionaria deseada. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
\pi_i W_{i\to j}=\pi_j W_{j\to i}
$$

## Estructura matematica

$$
\begin{aligned}
I&=\int dx\,A(x)\pi(x),\\
\hat I_M&=\frac{1}{M}\sum_{k=1}^M A(x_k),\\
\hat I_M&\xrightarrow[M\to\infty]{} I
\end{aligned}
$$

$$
\begin{aligned}
\pi(x)&=\frac{w(x)}{Z},\\
\sum_x \pi(x)W(x\to y)&=\pi(y),\\
\sum_y W(x\to y)&=1
\end{aligned}
$$

## Diccionario de derivadas

$$
\begin{aligned}
F&=-k_BT\ln Z,\\
\langle E\rangle&=-\frac{\partial \ln Z}{\partial \beta},\\
\frac{\partial^2 \ln Z}{\partial \beta^2}&=\langle E^2\rangle-\langle E\rangle^2
\end{aligned}
$$

## Escalas y cantidades sin dimension

$$
\begin{aligned}
\beta E&=\frac{E}{k_BT},\\
\lambda_T&=\frac{h}{\sqrt{2\pi m k_BT}},\\
\frac{\delta A}{\langle A\rangle}&\sim N^{-1/2}
\end{aligned}
$$

## Donde suele fallar

$$
\begin{aligned}
\xi&\sim L \quad \Rightarrow \quad \text{efectos de tamano finito},\\
\tau_{rel}&\gg \tau_{obs} \quad \Rightarrow \quad \text{no equilibrado},\\
\frac{\Delta A}{\langle A\rangle}&\not\ll 1 \quad \Rightarrow \quad \text{fluctuaciones relevantes}
\end{aligned}
$$

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Balance detallado** sin introducir un modelo mas complicado que el necesario.

1. **Estimador de promedio.** Dada una serie $A_1,\ldots,A_M$, el estimador basico es $$\bar A=\frac{1}{M}\sum_{k=1}^M A_k.$$ La aplicacion de Balance detallado es decidir como se generan esas muestras y que sesgo puede introducirse.
2. **Autocorrelacion.** Si las muestras consecutivas son parecidas, $M$ no equivale al numero de datos independientes. Un caso simple es una cadena de Markov que cambia lentamente entre dos estados; ahi condicion suficiente para que una cadena de Markov tenga una distribucion estacionaria deseada exige medir tiempo de correlacion.
3. **Validacion con caso exacto.** Antes de usar el metodo en un sistema grande, se prueba en dos niveles o en una red muy pequena donde la suma exacta se puede hacer a mano. Si falla ahi, el problema es algoritmico, no fisico.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
\pi_i W_{i\to j}=\pi_j W_{j\to i}
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Los metodos se enriquecen mejor contrastandolos contra sistemas solubles de los mismos textos. Para esta pagina, el criterio editorial es indicar distribucion objetivo, estimador, sesgo, correlacion entre muestras y una prueba pequena donde el resultado exacto se conozca; asi el metodo queda ligado a reproducibilidad, no solo a implementacion.

- Kardar, *Statistical Physics of Particles*, cap. 2: para probabilidad, limite central, grandes numeros, informacion y entropia desde una base matematica mas tecnica.
- Kardar, *Statistical Physics of Particles*, cap. 4: para ensambles microcanonico, canonico, Gibbs y gran canonico, incluyendo sistemas de dos niveles y gas ideal.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 19-22: para conectar equiparticion, funcion de particion, gas ideal, potencial quimico y gran particion.

## Coherencia dentro de la wiki

Dentro del mapa general, **Balance detallado** queda reservado para la idea precisa de condicion suficiente para que una cadena de Markov tenga una distribucion estacionaria deseada. Su papel local es convertir sumas o dinamicas imposibles de tratar exactamente en estimadores controlados. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\pi(x),\ A(x)\longrightarrow \hat A_M\longrightarrow \sigma_{\hat A},\ \tau_{\rm int}
$$

Una ampliacion futura deberia partir de condicion suficiente para que una cadena de Markov tenga una distribucion estacionaria deseada y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Metodos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Funcion de particion](#/funcion-de-particion)
- [Modelo de Ising](#/modelo-de-ising)
- [Fluctuaciones](#/fluctuaciones)
