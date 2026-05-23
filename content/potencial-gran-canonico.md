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

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Potencial gran canonico** sin introducir un modelo mas complicado que el necesario.

1. **Derivada de un potencial.** Si $F(T,V,N)$ es conocido, la entropia se obtiene de $$S=-\left(\frac{\partial F}{\partial T}\right)_{V,N}.$$ La aplicacion simple de Potencial gran canonico es identificar que variable se mantiene fija antes de derivar.
2. **Respuesta de un sistema pequeno.** Si una energia media cambia al variar $T$, la capacidad calorifica mide esa sensibilidad. El ejemplo minimo es una particula de dos niveles, donde la respuesta tiene un maximo cuando $k_BT$ es comparable con la separacion energetica.
3. **Control de estabilidad.** Una compresibilidad negativa o una varianza negativa no son resultados fisicos aceptables. Al aplicar potencial termodinamico natural de T, V y mu, esos signos sirven como diagnostico inmediato de una derivada mal tomada o de un regimen inestable.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
\Phi=-k_BT\ln\Xi
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Kardar y Blundell permiten reforzar esta entrada como un problema de restricciones: energia fija, temperatura fija, potencial quimico fijo o combinaciones de ellas. La lectura util es derivar los pesos desde el entorno y verificar que el objeto de normalizacion, ya sea $\Omega$, $Z$ o $\Xi$, genere los promedios y fluctuaciones correctos.

- Kardar, *Statistical Physics of Particles*, cap. 1: para formular potenciales, estabilidad, respuestas y condiciones de equilibrio con variables conjugadas.
- Schroeder, *An Introduction to Thermal Physics*, cap. 5: para usar energia libre, potencial quimico, estabilidad y transformaciones de fase como herramientas de calculo.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 19-22: para conectar equiparticion, funcion de particion, gas ideal, potencial quimico y gran particion.
- Kardar, *Statistical Physics of Particles*, cap. 4: para ensambles microcanonico, canonico, Gibbs y gran canonico, incluyendo sistemas de dos niveles y gas ideal.

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
