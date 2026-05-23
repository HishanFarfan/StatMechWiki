# Paradoja de Gibbs

## Resumen

**Paradoja de Gibbs** es una entrada troncal de fundamentos dentro de la mecanica estadistica. Su papel principal se resume asi: problema de entropia de mezcla resuelto por indistinguibilidad. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Paradoja de Gibbs** por su uso operativo: problema de entropia de mezcla resuelto por indistinguibilidad. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
S=Nk_B\left[\ln\!\left(\frac{V}{N\lambda_T^3}\right)+\frac{5}{2}\right]
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

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Paradoja de Gibbs** sin introducir un modelo mas complicado que el necesario.

1. **Sistema de dos microestados.** Considera dos estados $a$ y $b$ con probabilidades $p$ y $1-p$. La entrada se aplica al preguntar que informacion microscopica queda resumida por problema de entropia de mezcla resuelto por indistinguibilidad. En este caso, la normalizacion es $$p_a+p_b=1,$$ y cualquier observable se calcula como $\langle A\rangle=pA_a+(1-p)A_b$.
2. **Conteo con restriccion.** Tres espines independientes tienen $2^3=8$ configuraciones. Si se fija magnetizacion total $M=1$, solo algunas configuraciones quedan accesibles. Este ejemplo muestra como Paradoja de Gibbs cambia cuando se impone una restriccion macroscopica.
3. **Promedio temporal contra promedio de ensamble.** En una caminata que visita estados con frecuencias estables, el promedio temporal de $A$ puede compararse con $\sum_x A(x)p(x)$. Si no coinciden, la aplicacion de Paradoja de Gibbs requiere revisar accesibilidad o ergodicidad.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
S=Nk_B\left[\ln\!\left(\frac{V}{N\lambda_T^3}\right)+\frac{5}{2}\right]
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

La lectura combinada recomienda separar tres niveles: conteo de estados, asignacion de probabilidades y extraccion de observables. Para esta entrada eso significa no adelantar el formalismo completo de un ensamble, sino precisar que objeto microscopico o probabilistico se esta definiendo y que restricciones lo vuelven fisicamente util.

- Kardar, *Statistical Physics of Particles*, cap. 1: para formular potenciales, estabilidad, respuestas y condiciones de equilibrio con variables conjugadas.
- Schroeder, *An Introduction to Thermal Physics*, cap. 5: para usar energia libre, potencial quimico, estabilidad y transformaciones de fase como herramientas de calculo.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 19-22: para conectar equiparticion, funcion de particion, gas ideal, potencial quimico y gran particion.
- Kardar, *Statistical Physics of Particles*, cap. 2: para probabilidad, limite central, grandes numeros, informacion y entropia desde una base matematica mas tecnica.

## Coherencia dentro de la wiki

Dentro del mapa general, **Paradoja de Gibbs** queda reservado para la idea precisa de problema de entropia de mezcla resuelto por indistinguibilidad. Su papel local es fijar vocabulario, medidas y restricciones antes de elegir un ensamble. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{microestado}\longrightarrow \text{macroestado}\longrightarrow S,\ p,\ \langle A\rangle
$$

Una ampliacion futura deberia partir de problema de entropia de mezcla resuelto por indistinguibilidad y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Fundamentos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Microestado](#/microestado)
- [Macroestado](#/macroestado)
- [Entropia de Gibbs](#/entropia-de-gibbs)
