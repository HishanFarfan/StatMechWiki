# Matriz densidad

## Resumen

**Matriz densidad** es una entrada troncal de fundamentos dentro de la mecanica estadistica. Su papel principal se resume asi: descripcion probabilistica general de estados cuanticos. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Matriz densidad** por su uso operativo: descripcion probabilistica general de estados cuanticos. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
\rho=\sum_i p_i |i\rangle\langle i|
$$

## Estructura matematica

$$
\begin{aligned}
\Omega(E,V,N)&=\int d\Gamma\,\delta(E-H),\\
S(E,V,N)&=k_B\ln\Omega(E,V,N),\\
\frac{1}{T}&=\left(\frac{\partial S}{\partial E}\right)_{V,N}
\end{aligned}
$$

$$
\begin{aligned}
d\Gamma&=\frac{1}{h^{3N}N!}\prod_{i=1}^N d^3q_i\,d^3p_i,\\
\int d\Gamma\,\rho(\Gamma)&=1,\\
\langle A\rangle&=\int d\Gamma\,A(\Gamma)\rho(\Gamma)
\end{aligned}
$$

## Diccionario de derivadas

$$
\begin{aligned}
dS&=\frac{1}{T}dE+\frac{P}{T}dV-\frac{\mu}{T}dN,\\
P&=T\left(\frac{\partial S}{\partial V}\right)_{E,N},\\
\mu&=-T\left(\frac{\partial S}{\partial N}\right)_{E,V}
\end{aligned}
$$

## Escalas y cantidades sin dimension

$$
\begin{aligned}
N&\gg 1,\\
\frac{\Delta E}{E}&\sim N^{-1/2},\\
n\lambda_T^3&\ll 1\quad \text{regimen clasico}
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

Dentro del mapa general, **Matriz densidad** queda reservado para la idea precisa de descripcion probabilistica general de estados cuanticos. Su papel local es fijar vocabulario, medidas y restricciones antes de elegir un ensamble. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{microestado}\longrightarrow \text{macroestado}\longrightarrow S,\ p,\ \langle A\rangle
$$

Una ampliacion futura deberia partir de descripcion probabilistica general de estados cuanticos y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Fundamentos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Microestado](#/microestado)
- [Macroestado](#/macroestado)
- [Entropia de Gibbs](#/entropia-de-gibbs)
