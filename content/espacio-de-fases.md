# Espacio de fases

## Resumen

El **espacio de fases** es el espacio de todos los microestados clasicos posibles de un sistema. Para un sistema de $N$ particulas, cada punto especifica posiciones y momentos.

## Definicion

Para $N$ particulas en tres dimensiones,

$$
\Gamma=(q_1,\ldots,q_N,p_1,\ldots,p_N)
$$

representa un punto del espacio de fases. Su medida elemental se escribe

$$
d\Gamma=d^{3N}q\,d^{3N}p.
$$

## Dimension

Si hay $N$ particulas en tres dimensiones, el espacio de configuraciones tiene dimension $3N$ y el espacio de fases tiene dimension $6N$.

## Medida estadistica

En mecanica estadistica clasica, las integrales de espacio de fases suelen incluir el factor

$$
\frac{1}{h^{3N}N!}.
$$

El factor $h^{3N}$ hace adimensional el volumen de espacio de fases, mientras que $N!$ corrige la sobrecuenta debida a la indistinguibilidad de particulas identicas.

## Dinamica hamiltoniana

La evolucion temporal de un punto de espacio de fases esta determinada por las ecuaciones de Hamilton:

$$
\dot q_i=\frac{\partial H}{\partial p_i},
\qquad
\dot p_i=-\frac{\partial H}{\partial q_i}.
$$

El teorema de Liouville afirma que el flujo hamiltoniano conserva volumen en espacio de fases:

$$
\frac{d\rho}{dt}=0
$$

para una densidad que evoluciona siguiendo el flujo.

## Uso en ensambles

En el ensamble canonico clasico,

$$
Z=
\frac{1}{h^{3N}N!}
\int d\Gamma\, e^{-\beta H(\Gamma)}.
$$

En el ensamble microcanonico, se integra sobre una region de energia fija o casi fija:

$$
E\leq H(\Gamma)\leq E+\Delta E.
$$

## Errores comunes

- Confundir espacio de fases con espacio de configuraciones.
- Omitir los factores $h^{3N}$ y $N!$ sin explicar la convencion.
- Tratar el volumen de espacio de fases como una cantidad absoluta sin especificar la medida.
- Olvidar que esta pagina se refiere a la descripcion clasica; el caso cuantico requiere espacio de Hilbert.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Espacio de fases** sin introducir un modelo mas complicado que el necesario.

1. **Sistema de dos microestados.** Considera dos estados $a$ y $b$ con probabilidades $p$ y $1-p$. La entrada se aplica al preguntar que informacion microscopica queda resumida por la nocion de Espacio de fases. En este caso, la normalizacion es $$p_a+p_b=1,$$ y cualquier observable se calcula como $\langle A\rangle=pA_a+(1-p)A_b$.
2. **Conteo con restriccion.** Tres espines independientes tienen $2^3=8$ configuraciones. Si se fija magnetizacion total $M=1$, solo algunas configuraciones quedan accesibles. Este ejemplo muestra como Espacio de fases cambia cuando se impone una restriccion macroscopica.
3. **Promedio temporal contra promedio de ensamble.** En una caminata que visita estados con frecuencias estables, el promedio temporal de $A$ puede compararse con $\sum_x A(x)p(x)$. Si no coinciden, la aplicacion de Espacio de fases requiere revisar accesibilidad o ergodicidad.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
\Gamma=(q_1,\ldots,q_N,p_1,\ldots,p_N)
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Espacio de fases** queda reservado para la idea precisa de la nocion de Espacio de fases. Su papel local es fijar vocabulario, medidas y restricciones antes de elegir un ensamble. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{microestado}\longrightarrow \text{macroestado}\longrightarrow S,\ p,\ \langle A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Espacio de fases y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Fundamentos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Microestado](#/microestado)
- [Ensamble microcanonico](#/ensamble-microcanonico)
- [Funcion de particion](#/funcion-de-particion)
- [Entropia de Boltzmann](#/entropia-de-boltzmann)
