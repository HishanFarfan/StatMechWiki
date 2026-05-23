# Distribucion de Fermi-Dirac

## Resumen

**Distribucion de Fermi-Dirac** es una entrada troncal de cuantica dentro de la mecanica estadistica. Su papel principal se resume asi: ocupacion media de fermiones indistinguibles. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Distribucion de Fermi-Dirac** por su uso operativo: ocupacion media de fermiones indistinguibles. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
\langle n\rangle=\frac{1}{e^{\beta(\epsilon-\mu)}+1}
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

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Distribucion de Fermi-Dirac** sin introducir un modelo mas complicado que el necesario.

1. **Modo de dos ocupaciones.** Para un nivel de energia $\epsilon$, compara ocupacion bosonica y fermionica. La diferencia aparece en $$\langle n\rangle=\frac{1}{e^{\beta(\epsilon-\mu)}\mp1},$$ que permite o prohibe acumulacion multiple segun el signo.
2. **Limite clasico.** Si $e^{\beta(\epsilon-\mu)}\gg1$, Bose-Einstein y Fermi-Dirac se aproximan a Maxwell-Boltzmann. Este caso simple muestra cuando Distribucion de Fermi-Dirac puede reemplazarse por una descripcion clasica.
3. **Escala de degeneracion.** En un gas diluido, $n\lambda_T^3\ll1$ indica comportamiento casi clasico. Cuando esa cantidad se acerca a uno, ocupacion media de fermiones indistinguibles deja de ser una correccion menor y cambia las ocupaciones observables.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
\langle n\rangle=\frac{1}{e^{\beta(\epsilon-\mu)}+1}
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Distribucion de Fermi-Dirac** queda reservado para la idea precisa de ocupacion media de fermiones indistinguibles. Su papel local es incorporar indistinguibilidad, niveles discretos y ocupaciones de modos. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\hat H,\ \hat N\longrightarrow \hat\rho\longrightarrow \langle \hat A\rangle
$$

Una ampliacion futura deberia partir de ocupacion media de fermiones indistinguibles y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Cuantica**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Estadisticas cuanticas](#/estadisticas-cuanticas)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Potencial quimico](#/potencial-quimico)
