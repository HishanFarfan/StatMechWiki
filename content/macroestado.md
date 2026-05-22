# Macroestado

## Resumen

Un **macroestado** es una descripcion del sistema mediante variables macroscopicas, como energia, volumen, numero de particulas, temperatura o presion. Muchos microestados distintos pueden corresponder al mismo macroestado.

## Definicion

Un macroestado queda definido por la informacion disponible o controlada experimentalmente. Por ejemplo:

$$
(E,V,N)
$$

define un macroestado natural para un sistema aislado, mientras que

$$
(T,V,N)
$$

define un macroestado natural para un sistema en contacto con un reservorio termico.

## Relacion con microestados

Si $\Gamma_M$ es el conjunto de microestados compatibles con un macroestado $M$, el numero de realizaciones microscopicas puede escribirse como

$$
\Omega(M)=|\Gamma_M|.
$$

La entropia de Boltzmann asocia a ese macroestado la cantidad

$$
S(M)=k_B\ln\Omega(M).
$$

## Contexto fisico

La termodinamica trabaja con macroestados. La mecanica estadistica explica por que ciertos macroestados son mas probables que otros: son aquellos que admiten mas realizaciones microscopicas.

En equilibrio, para un sistema aislado, el macroestado observado es el que maximiza la entropia bajo las restricciones conservadas.

## Variables naturales

Cada ensamble usa un conjunto distinto de variables macroscopicas:

$$
\begin{array}{c|c}
\text{Ensamble} & \text{Variables naturales}\\
\hline
\text{Microcanonico} & E,V,N\\
\text{Canonico} & T,V,N\\
\text{Gran canonico} & T,V,\mu
\end{array}
$$

## Errores comunes

- Pensar que un macroestado determina un unico microestado.
- Mezclar variables naturales de ensambles distintos sin justificarlo.
- Tratar la temperatura como variable independiente en el microcanonico.
- No especificar que restricciones definen el macroestado.

## Paginas relacionadas

- [Microestado](#/microestado)
- [Entropia de Boltzmann](#/entropia-de-boltzmann)
- [Ensamble microcanonico](#/ensamble-microcanonico)
- [Ensamble canonico](#/ensamble-canonico)
