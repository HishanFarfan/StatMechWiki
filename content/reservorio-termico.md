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

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Reservorio termico** sin introducir un modelo mas complicado que el necesario.

1. **Dos niveles en contacto termico.** Para energias $0$ y $\epsilon$, el peso canonico da $$p_1=\frac{e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}.$$ La entrada se usa al decidir que variable esta fija y que cantidad fluctua.
2. **Intercambio con un reservorio.** Un subsistema pequeno puede ganar o perder energia mientras el conjunto total conserva energia. En ese caso, sistema grande que fija la temperatura de un sistema pequeno se reconoce observando si el entorno fija $E$, $T$, $P$ o $\mu$.
3. **Comparacion de fluctuaciones.** En un sistema pequeno, fijar energia no es equivalente a fijar temperatura: el promedio de energia puede parecer similar, pero $\langle(\Delta E)^2\rangle$ cambia. Este es el test minimo para no confundir ensambles.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
p_i\propto \Omega_R(E_{\mathrm{tot}}-E_i)
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Kardar y Blundell permiten reforzar esta entrada como un problema de restricciones: energia fija, temperatura fija, potencial quimico fijo o combinaciones de ellas. La lectura util es derivar los pesos desde el entorno y verificar que el objeto de normalizacion, ya sea $\Omega$, $Z$ o $\Xi$, genere los promedios y fluctuaciones correctos.

- Kardar, *Statistical Physics of Particles*, cap. 4: para ensambles microcanonico, canonico, Gibbs y gran canonico, incluyendo sistemas de dos niveles y gas ideal.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 19-22: para conectar equiparticion, funcion de particion, gas ideal, potencial quimico y gran particion.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 3-4: para fijar probabilidad, microestados, macroestados, temperatura estadistica, ensambles y pesos de Boltzmann.

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
