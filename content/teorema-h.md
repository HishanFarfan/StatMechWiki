# Teorema H

## Resumen

**Teorema H** es una entrada troncal de no equilibrio dentro de la mecanica estadistica. Su papel principal se resume asi: resultado de Boltzmann que conecta dinamica cinetica con aumento de entropia. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Teorema H** por su uso operativo: resultado de Boltzmann que conecta dinamica cinetica con aumento de entropia. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
H=\int f\ln f\,d^3r\,d^3p
$$

## Estructura matematica

$$
\begin{aligned}
\frac{dp_i}{dt}&=\sum_j\left(W_{j\to i}p_j-W_{i\to j}p_i\right),\\
\partial_t f+\mathbf v\cdot\nabla f&=C[f],\\
\mathbf J&=-D\nabla n
\end{aligned}
$$

$$
\begin{aligned}
\sum_i p_i(t)&=1,\\
\sum_i \frac{dp_i}{dt}&=0,\\
\partial_t n+\nabla\cdot\mathbf J&=0
\end{aligned}
$$

## Diccionario de derivadas

$$
\begin{aligned}
\delta\langle A(t)\rangle&=\int_{-\infty}^{t}dt'\,\chi_{AB}(t-t')h(t'),\\
\chi_{AB}(t)&=\beta\Theta(t)\frac{d}{dt}\langle B(0)A(t)\rangle,\\
D&=\frac{1}{d}\int_0^\infty dt\,\langle \mathbf v(t)\cdot\mathbf v(0)\rangle
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
\nabla T\ne 0&:\quad \text{no hay equilibrio global},\\
\dot S_{prod}&\ge 0,\\
J_a&=\sum_b L_{ab}X_b
\end{aligned}
$$

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Teorema H** sin introducir un modelo mas complicado que el necesario.

1. **Cadena de dos estados.** Con tasas $W_{0\to1}$ y $W_{1\to0}$, la probabilidad estacionaria satisface $$p_1^{\rm st}=\frac{W_{0\to1}}{W_{0\to1}+W_{1\to0}}.$$ La aplicacion de Teorema H es separar distribucion estacionaria de mecanismo dinamico.
2. **Corriente en una red.** En un ciclo de tres estados puede haber probabilidades constantes y, aun asi, una corriente neta alrededor del ciclo. Ese ejemplo muestra por que resultado de Boltzmann que conecta dinamica cinetica con aumento de entropia no se reduce a escribir $\partial_t p=0$.
3. **Respuesta a una perturbacion pequena.** Aplica una fuerza debil y mide si la corriente cumple $J\simeq LX$. Si la relacion deja de ser lineal, Teorema H debe tratarse como problema fuera del regimen de respuesta lineal.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
H=\int f\ln f\,d^3r\,d^3p
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Teorema H** queda reservado para la idea precisa de resultado de Boltzmann que conecta dinamica cinetica con aumento de entropia. Su papel local es describir evolucion, corrientes, disipacion y fluctuaciones de trayectorias. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
W,\ P[\Gamma],\ \mathbf J\longrightarrow \dot S_{\rm prod},\ C(t),\ L_{ij}
$$

Una ampliacion futura deberia partir de resultado de Boltzmann que conecta dinamica cinetica con aumento de entropia y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **No equilibrio**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Fluctuaciones](#/fluctuaciones)
- [Teorema fluctuacion-disipacion](#/teorema-fluctuacion-disipacion)
- [Ecuacion maestra](#/ecuacion-maestra)
