# Potencial gran canonico

## Resumen

**Potencial gran canonico** es una entrada troncal de termodinamica estadistica dentro de la mecanica estadistica. Su papel principal se resume asi: potencial termodinamico natural de T, V y mu. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Potencial gran canonico** por su uso operativo: potencial termodinamico natural de T, V y mu. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
\Phi=-k_BT\ln\Xi
$$

## Estructura matematica

$$
\begin{aligned}
E(S,V,N)&\longleftrightarrow F(T,V,N),\\
G(T,P,N)&=F+PV,\\
\Phi(T,V,\mu)&=F-\mu N
\end{aligned}
$$

$$
\begin{aligned}
Z&=e^{-\beta F},\\
\Xi&=e^{-\beta\Phi},\\
\Delta&=e^{-\beta G}
\end{aligned}
$$

## Diccionario de derivadas

$$
\begin{aligned}
dF&=-S\,dT-P\,dV+\mu\,dN,\\
dG&=-S\,dT+V\,dP+\mu\,dN,\\
d\Phi&=-S\,dT-P\,dV-N\,d\mu
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

Dentro del mapa general, **Potencial gran canonico** queda reservado para la idea precisa de potencial termodinamico natural de T, V y mu. Su papel local es traducir promedios microscopicos en potenciales, derivadas y criterios de estabilidad. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{potencial}\longrightarrow \text{variables naturales}\longrightarrow \text{respuestas}
$$

Una ampliacion futura deberia partir de potencial termodinamico natural de T, V y mu y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Termodinamica estadistica**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Potencial quimico](#/potencial-quimico)
- [Equivalencia de ensambles](#/equivalencia-de-ensambles)
