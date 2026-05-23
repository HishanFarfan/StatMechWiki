# Principio de Landauer

## Resumen

**Principio de Landauer** es una entrada troncal de fundamentos dentro de la mecanica estadistica. Su papel principal se resume asi: cota termodinamica del calor disipado al borrar informacion. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Principio de Landauer** por su uso operativo: cota termodinamica del calor disipado al borrar informacion. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
Q\ge k_BT\ln 2
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

Estos ejemplos son deliberadamente pequenos: muestran como usar **Principio de Landauer** sin introducir un modelo mas complicado que el necesario.

1. **Sistema de dos microestados.** Considera dos estados $a$ y $b$ con probabilidades $p$ y $1-p$. La entrada se aplica al preguntar que informacion microscopica queda resumida por cota termodinamica del calor disipado al borrar informacion. En este caso, la normalizacion es $$p_a+p_b=1,$$ y cualquier observable se calcula como $\langle A\rangle=pA_a+(1-p)A_b$.
2. **Conteo con restriccion.** Tres espines independientes tienen $2^3=8$ configuraciones. Si se fija magnetizacion total $M=1$, solo algunas configuraciones quedan accesibles. Este ejemplo muestra como Principio de Landauer cambia cuando se impone una restriccion macroscopica.
3. **Promedio temporal contra promedio de ensamble.** En una caminata que visita estados con frecuencias estables, el promedio temporal de $A$ puede compararse con $\sum_x A(x)p(x)$. Si no coinciden, la aplicacion de Principio de Landauer requiere revisar accesibilidad o ergodicidad.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
Q\ge k_BT\ln 2
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Las fuentes de transiciones de fase enfatizan que el fenomeno aparece al combinar interacciones, limite termodinamico y variables de control. Para esta entrada, la lectura tecnica consiste en seguir como cambia el parametro de orden y que aproximacion, campo medio, virial o escala critica, justifica cada ecuacion.

- Kardar, *Statistical Physics of Particles*, cap. 5: para cumulantes, expansion de clusters, virial, van der Waals, campo medio y comportamiento critico.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 26-28: para gases reales, expansion virial, van der Waals, regla de fases, Ising y clasificacion de transiciones.
- Schroeder, *An Introduction to Thermal Physics*, cap. 5: para usar energia libre, potencial quimico, estabilidad y transformaciones de fase como herramientas de calculo.
- Schroeder, *An Introduction to Thermal Physics*, caps. 1-3: para pasar de energia, conteo y entropia a temperatura, reservorios y equilibrio termico con modelos pequenos.

## Coherencia dentro de la wiki

Dentro del mapa general, **Principio de Landauer** queda reservado para la idea precisa de cota termodinamica del calor disipado al borrar informacion. Su papel local es fijar vocabulario, medidas y restricciones antes de elegir un ensamble. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{microestado}\longrightarrow \text{macroestado}\longrightarrow S,\ p,\ \langle A\rangle
$$

Una ampliacion futura deberia partir de cota termodinamica del calor disipado al borrar informacion y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Fundamentos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Microestado](#/microestado)
- [Macroestado](#/macroestado)
- [Entropia de Gibbs](#/entropia-de-gibbs)
