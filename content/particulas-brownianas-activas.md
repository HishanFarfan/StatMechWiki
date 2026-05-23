# Particulas brownianas activas

## Resumen

**Particulas brownianas activas** es una entrada troncal de modelos dentro de la mecanica estadistica. Su papel principal se resume asi: modelo continuo de particulas autopropulsadas con orientacion difusiva. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Particulas brownianas activas** por su uso operativo: modelo continuo de particulas autopropulsadas con orientacion difusiva. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
\dot\theta=\sqrt{2D_r}\eta_r(t)
$$

## Estructura matematica

$$
\begin{aligned}
H(\{x_i\})&=H_0+H_{int}+H_{ext},\\
Z&=\sum_{\{x_i\}}e^{-\beta H(\{x_i\})},\\
f&=-\frac{k_BT}{N}\ln Z
\end{aligned}
$$

$$
\begin{aligned}
p(\{x_i\})&=\frac{e^{-\beta H(\{x_i\})}}{Z},\\
\sum_{\{x_i\}}p(\{x_i\})&=1,\\
\langle A\rangle&=\sum_{\{x_i\}}A(\{x_i\})p(\{x_i\})
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
K&=\beta J,\\
u&=\beta h,\\
\ell&\sim \xi/a
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

Dentro del mapa general, **Particulas brownianas activas** queda reservado para la idea precisa de modelo continuo de particulas autopropulsadas con orientacion difusiva. Su papel local es aislar un mecanismo fisico mediante grados de libertad, Hamiltonianos o reglas dinamicas controladas. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{grados de libertad}\longrightarrow H\ \text{o}\ W\longrightarrow \text{observables}
$$

Una ampliacion futura deberia partir de modelo continuo de particulas autopropulsadas con orientacion difusiva y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Modelos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Gas ideal clasico](#/gas-ideal-clasico)
- [Modelo de Ising](#/modelo-de-ising)
- [Sistema de dos niveles](#/sistema-de-dos-niveles)
