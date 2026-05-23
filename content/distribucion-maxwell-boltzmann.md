# Distribucion de Maxwell-Boltzmann

## Resumen

**Distribucion de Maxwell-Boltzmann** es una entrada troncal de ensambles dentro de la mecanica estadistica. Su papel principal se resume asi: distribucion clasica de velocidades en equilibrio. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Distribucion de Maxwell-Boltzmann** por su uso operativo: distribucion clasica de velocidades en equilibrio. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
f(v)\propto v^2 e^{-mv^2/(2k_BT)}
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

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Distribucion de Maxwell-Boltzmann** sin introducir un modelo mas complicado que el necesario.

1. **Dos niveles en contacto termico.** Para energias $0$ y $\epsilon$, el peso canonico da $$p_1=\frac{e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}.$$ La entrada se usa al decidir que variable esta fija y que cantidad fluctua.
2. **Intercambio con un reservorio.** Un subsistema pequeno puede ganar o perder energia mientras el conjunto total conserva energia. En ese caso, distribucion clasica de velocidades en equilibrio se reconoce observando si el entorno fija $E$, $T$, $P$ o $\mu$.
3. **Comparacion de fluctuaciones.** En un sistema pequeno, fijar energia no es equivalente a fijar temperatura: el promedio de energia puede parecer similar, pero $\langle(\Delta E)^2\rangle$ cambia. Este es el test minimo para no confundir ensambles.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
f(v)\propto v^2 e^{-mv^2/(2k_BT)}
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Distribucion de Maxwell-Boltzmann** queda reservado para la idea precisa de distribucion clasica de velocidades en equilibrio. Su papel local es mostrar que variables se fijan, cuales fluctuan y que normalizacion gobierna los promedios. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{restricciones}\longrightarrow p_i\longrightarrow Z\ \text{o}\ \Omega\longrightarrow \langle A\rangle
$$

Una ampliacion futura deberia partir de distribucion clasica de velocidades en equilibrio y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Ensambles**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble microcanonico](#/ensamble-microcanonico)
- [Ensamble canonico](#/ensamble-canonico)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
