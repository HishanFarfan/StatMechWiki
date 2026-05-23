# Microestado

## Resumen

Un **microestado** es una especificacion microscopica completa de un sistema, dentro del marco teorico elegido. La mecanica estadistica asigna probabilidades a microestados y calcula propiedades macroscopicas como promedios sobre ellos.

## Definicion clasica

En mecanica clasica, un microestado de $N$ particulas se representa por un punto del espacio de fases:

$$
\Gamma=(q_1,\ldots,q_N,p_1,\ldots,p_N).
$$

Si las particulas viven en tres dimensiones, cada $q_i$ y $p_i$ tiene tres componentes, de modo que el espacio de fases tiene dimension $6N$.

## Definicion cuantica

En mecanica cuantica, un microestado puede ser un estado puro $|\psi\rangle$ o, de manera mas general, una matriz densidad $\rho$. Para un sistema con Hamiltoniano $\hat H$, los estados estacionarios de energia satisfacen

$$
\hat H |n\rangle = E_n |n\rangle.
$$

En muchos problemas de equilibrio se suman probabilidades sobre estados de energia $|n\rangle$.

## Observables y promedios

En una descripcion discreta, el promedio de un observable $A$ es

$$
\langle A\rangle = \sum_i p_i A_i.
$$

En una descripcion clasica continua,

$$
\langle A\rangle
=
\int d\Gamma\, \rho(\Gamma) A(\Gamma),
$$

donde $\rho(\Gamma)$ es una densidad de probabilidad sobre el espacio de fases.

## Microestado versus macroestado

Un microestado contiene mucha mas informacion que un macroestado. Por ejemplo, un gas puede tener energia, volumen y numero de particulas fijos, pero aun asi puede realizarse mediante una cantidad enorme de configuraciones microscopicas distintas.

La mecanica estadistica conecta ambos niveles mediante conteos y promedios. El macroestado impone restricciones; los microestados son las realizaciones compatibles con esas restricciones.

## Errores comunes

- Confundir microestado con macroestado.
- Suponer que todos los microestados tienen la misma probabilidad en cualquier ensamble.
- Olvidar que la nocion de microestado depende del marco clasico o cuantico.
- Contar como distintos microestados que solo difieren por permutar particulas indistinguibles.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Microestado** sin introducir un modelo mas complicado que el necesario.

1. **Sistema de dos microestados.** Considera dos estados $a$ y $b$ con probabilidades $p$ y $1-p$. La entrada se aplica al preguntar que informacion microscopica queda resumida por la nocion de Microestado. En este caso, la normalizacion es $$p_a+p_b=1,$$ y cualquier observable se calcula como $\langle A\rangle=pA_a+(1-p)A_b$.
2. **Conteo con restriccion.** Tres espines independientes tienen $2^3=8$ configuraciones. Si se fija magnetizacion total $M=1$, solo algunas configuraciones quedan accesibles. Este ejemplo muestra como Microestado cambia cuando se impone una restriccion macroscopica.
3. **Promedio temporal contra promedio de ensamble.** En una caminata que visita estados con frecuencias estables, el promedio temporal de $A$ puede compararse con $\sum_x A(x)p(x)$. Si no coinciden, la aplicacion de Microestado requiere revisar accesibilidad o ergodicidad.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
\Gamma=(q_1,\ldots,q_N,p_1,\ldots,p_N).
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Microestado** queda reservado para la idea precisa de la nocion de Microestado. Su papel local es fijar vocabulario, medidas y restricciones antes de elegir un ensamble. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{microestado}\longrightarrow \text{macroestado}\longrightarrow S,\ p,\ \langle A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Microestado y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Fundamentos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Macroestado](#/macroestado)
- [Espacio de fases](#/espacio-de-fases)
- [Ensamble microcanonico](#/ensamble-microcanonico)
- [Entropia de Boltzmann](#/entropia-de-boltzmann)
