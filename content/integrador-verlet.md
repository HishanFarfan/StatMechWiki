# Integrador de Verlet

## Resumen

**Integrador de Verlet** es una entrada troncal de metodos dentro de la mecanica estadistica. Su papel principal se resume asi: esquema numerico reversible y simplectico para dinamica molecular. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Integrador de Verlet** por su uso operativo: esquema numerico reversible y simplectico para dinamica molecular. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
r(t+\Delta t)=2r(t)-r(t-\Delta t)+a(t)\Delta t^2
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

Estos ejemplos son deliberadamente pequenos: muestran como usar **Integrador de Verlet** sin introducir un modelo mas complicado que el necesario.

1. **Estimador de promedio.** Dada una serie $A_1,\ldots,A_M$, el estimador basico es $$\bar A=\frac{1}{M}\sum_{k=1}^M A_k.$$ La aplicacion de Integrador de Verlet es decidir como se generan esas muestras y que sesgo puede introducirse.
2. **Autocorrelacion.** Si las muestras consecutivas son parecidas, $M$ no equivale al numero de datos independientes. Un caso simple es una cadena de Markov que cambia lentamente entre dos estados; ahi esquema numerico reversible y simplectico para dinamica molecular exige medir tiempo de correlacion.
3. **Validacion con caso exacto.** Antes de usar el metodo en un sistema grande, se prueba en dos niveles o en una red muy pequena donde la suma exacta se puede hacer a mano. Si falla ahi, el problema es algoritmico, no fisico.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
r(t+\Delta t)=2r(t)-r(t-\Delta t)+a(t)\Delta t^2
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Integrador de Verlet** queda reservado para la idea precisa de esquema numerico reversible y simplectico para dinamica molecular. Su papel local es convertir sumas o dinamicas imposibles de tratar exactamente en estimadores controlados. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\pi(x),\ A(x)\longrightarrow \hat A_M\longrightarrow \sigma_{\hat A},\ \tau_{\rm int}
$$

Una ampliacion futura deberia partir de esquema numerico reversible y simplectico para dinamica molecular y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Metodos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Funcion de particion](#/funcion-de-particion)
- [Modelo de Ising](#/modelo-de-ising)
- [Fluctuaciones](#/fluctuaciones)
