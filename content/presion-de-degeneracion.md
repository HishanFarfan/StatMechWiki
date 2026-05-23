# Presion de degeneracion

## Resumen

**Presion de degeneracion** es una entrada troncal de cuantica dentro de la mecanica estadistica. Su papel principal se resume asi: presion de origen cuantico debida al llenado de estados fermionicos. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Presion de degeneracion** por su uso operativo: presion de origen cuantico debida al llenado de estados fermionicos. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
P\propto n^{5/3}
$$

## Estructura matematica

$$
\begin{aligned}
Z&=\operatorname{Tr}e^{-\beta \hat H},\\
\Xi&=\operatorname{Tr}e^{-\beta(\hat H-\mu\hat N)},\\
\langle \hat A\rangle&=\operatorname{Tr}(\hat\rho\hat A)
\end{aligned}
$$

$$
\begin{aligned}
\hat\rho&=\frac{e^{-\beta \hat H}}{Z},\\
\operatorname{Tr}\hat\rho&=1,\\
\langle n_\alpha\rangle&=\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}\mp1}
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
\lambda_T&=\frac{h}{\sqrt{2\pi m k_BT}},\\
n\lambda_T^3&\gtrsim 1\quad \text{degeneracion},\\
T_F&=\frac{E_F}{k_B}
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

## Coherencia dentro de la wiki

Dentro del mapa general, **Presion de degeneracion** queda reservado para la idea precisa de presion de origen cuantico debida al llenado de estados fermionicos. Su papel local es incorporar indistinguibilidad, niveles discretos y ocupaciones de modos. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\hat H,\ \hat N\longrightarrow \hat\rho\longrightarrow \langle \hat A\rangle
$$

Una ampliacion futura deberia partir de presion de origen cuantico debida al llenado de estados fermionicos y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Cuantica**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Estadisticas cuanticas](#/estadisticas-cuanticas)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Potencial quimico](#/potencial-quimico)
