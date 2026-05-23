# Movilidad

## Resumen

**Movilidad** es una entrada troncal de no equilibrio dentro de la mecanica estadistica. Su papel principal se resume asi: coeficiente que relaciona velocidad media con una fuerza externa pequena. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Movilidad** por su uso operativo: coeficiente que relaciona velocidad media con una fuerza externa pequena. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
\langle v\rangle=\mu F
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

## Coherencia dentro de la wiki

Dentro del mapa general, **Movilidad** queda reservado para la idea precisa de coeficiente que relaciona velocidad media con una fuerza externa pequena. Su papel local es describir evolucion, corrientes, disipacion y fluctuaciones de trayectorias. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
W,\ P[\Gamma],\ \mathbf J\longrightarrow \dot S_{\rm prod},\ C(t),\ L_{ij}
$$

Una ampliacion futura deberia partir de coeficiente que relaciona velocidad media con una fuerza externa pequena y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **No equilibrio**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Fluctuaciones](#/fluctuaciones)
- [Teorema fluctuacion-disipacion](#/teorema-fluctuacion-disipacion)
- [Ecuacion maestra](#/ecuacion-maestra)
