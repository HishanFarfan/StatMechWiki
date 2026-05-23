# Reservorio termico

## Resumen

**Reservorio termico** es una entrada troncal de ensambles dentro de la mecanica estadistica. Su papel principal se resume asi: sistema grande que fija la temperatura de un sistema pequeno. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Reservorio termico** por su uso operativo: sistema grande que fija la temperatura de un sistema pequeno. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
p_i\propto \Omega_R(E_{\mathrm{tot}}-E_i)
$$

## Estructura matematica

$$
\begin{aligned}
p_i&=\frac{1}{\mathcal Z}\exp[-\beta(E_i+PX_i-\mu N_i)],\\
\mathcal Z&=\sum_i \exp[-\beta(E_i+PX_i-\mu N_i)],\\
\langle A\rangle&=\sum_i A_i p_i
\end{aligned}
$$

$$
\begin{aligned}
Z&=\sum_i e^{-\beta E_i},\\
\Xi&=\sum_{N=0}^{\infty}e^{\beta\mu N}Z_N,\\
\Delta&=\int_0^\infty dV\,e^{-\beta PV}Z_N(T,V)
\end{aligned}
$$

## Diccionario de derivadas

$$
\begin{aligned}
F&=-k_BT\ln Z,\\
\Phi&=-k_BT\ln\Xi,\\
G&=-k_BT\ln\Delta,\\
\langle N\rangle&=\frac{1}{\beta}\frac{\partial\ln\Xi}{\partial\mu}
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

## Coherencia dentro de la wiki

Dentro del mapa general, **Reservorio termico** queda reservado para la idea precisa de sistema grande que fija la temperatura de un sistema pequeno. Su papel local es mostrar que variables se fijan, cuales fluctuan y que normalizacion gobierna los promedios. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{restricciones}\longrightarrow p_i\longrightarrow Z\ \text{o}\ \Omega\longrightarrow \langle A\rangle
$$

Una ampliacion futura deberia partir de sistema grande que fija la temperatura de un sistema pequeno y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Ensambles**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble microcanonico](#/ensamble-microcanonico)
- [Ensamble canonico](#/ensamble-canonico)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
