# Ley de Planck

## Resumen

**Ley de Planck** es una entrada troncal de cuantica dentro de la mecanica estadistica. Su papel principal se resume asi: distribucion espectral de radiacion termica. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Ley de Planck** por su uso operativo: distribucion espectral de radiacion termica. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
u(\nu)=\frac{8\pi h\nu^3}{c^3}\frac{1}{e^{h\nu/(k_BT)}-1}
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

Estos ejemplos son deliberadamente pequenos: muestran como usar **Ley de Planck** sin introducir un modelo mas complicado que el necesario.

1. **Modo de dos ocupaciones.** Para un nivel de energia $\epsilon$, compara ocupacion bosonica y fermionica. La diferencia aparece en $$\langle n\rangle=\frac{1}{e^{\beta(\epsilon-\mu)}\mp1},$$ que permite o prohibe acumulacion multiple segun el signo.
2. **Limite clasico.** Si $e^{\beta(\epsilon-\mu)}\gg1$, Bose-Einstein y Fermi-Dirac se aproximan a Maxwell-Boltzmann. Este caso simple muestra cuando Ley de Planck puede reemplazarse por una descripcion clasica.
3. **Escala de degeneracion.** En un gas diluido, $n\lambda_T^3\ll1$ indica comportamiento casi clasico. Cuando esa cantidad se acerca a uno, distribucion espectral de radiacion termica deja de ser una correccion menor y cambia las ocupaciones observables.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
u(\nu)=\frac{8\pi h\nu^3}{c^3}\frac{1}{e^{h\nu/(k_BT)}-1}
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

En los capitulos cuanticos, el enriquecimiento central es reemplazar particulas etiquetadas por ocupaciones de modos. Esta entrada debe conservar esa idea: identificar niveles, degeneraciones y restricciones de ocupacion antes de aplicar formulas de Bose-Einstein, Fermi-Dirac o Maxwell-Boltzmann como limites.

- Kardar, *Statistical Physics of Particles*, caps. 6-7: para microestados cuanticos, solidos vibracionales, radiacion de cuerpo negro, gases Bose/Fermi y degeneracion cuantica.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 23-30: para fotones, fonones, gases reales, distribuciones Bose-Einstein y Fermi-Dirac, gases cuanticos y condensados.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 19-22: para conectar equiparticion, funcion de particion, gas ideal, potencial quimico y gran particion.

## Coherencia dentro de la wiki

Dentro del mapa general, **Ley de Planck** queda reservado para la idea precisa de distribucion espectral de radiacion termica. Su papel local es incorporar indistinguibilidad, niveles discretos y ocupaciones de modos. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\hat H,\ \hat N\longrightarrow \hat\rho\longrightarrow \langle \hat A\rangle
$$

Una ampliacion futura deberia partir de distribucion espectral de radiacion termica y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Cuantica**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Estadisticas cuanticas](#/estadisticas-cuanticas)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Potencial quimico](#/potencial-quimico)
