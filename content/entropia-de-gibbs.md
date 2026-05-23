# Entropia de Gibbs

## Resumen

La **entropia de Gibbs** mide la incertidumbre asociada a una distribucion de probabilidad sobre microestados. Es especialmente natural para ensambles donde los microestados no son igualmente probables.

## Definicion discreta

Para probabilidades $p_i$ sobre microestados $i$,

$$
S_G=-k_B\sum_i p_i\ln p_i.
$$

La suma se restringe a estados con $p_i \gt 0$, usando la convencion

$$
\lim_{p\to 0^+} p\ln p=0.
$$

## Relacion con Boltzmann

Si hay $\Omega$ microestados equiprobables,

$$
p_i=\frac{1}{\Omega},
$$

entonces

$$
S_G
=
-k_B\sum_{i=1}^{\Omega}\frac{1}{\Omega}\ln\frac{1}{\Omega}
=
k_B\ln\Omega.
$$

Asi, la entropia de Boltzmann aparece como caso particular de la entropia de Gibbs.

## Caso canonico

En el ensamble canonico,

$$
p_i=\frac{e^{-\beta E_i}}{Z}.
$$

Sustituyendo en la entropia de Gibbs,

$$
S_G
=
k_B\ln Z
+
k_B\beta\langle E\rangle.
$$

Como $F=-k_B T\ln Z$, esto equivale a

$$
F=\langle E\rangle - T S.
$$

## Version continua

Para una densidad continua $\rho(\Gamma)$, una expresion formal es

$$
S_G=-k_B\int d\Gamma\, \rho(\Gamma)\ln\rho(\Gamma).
$$

Esta formula requiere cuidado: $\rho$ tiene dimensiones si $d\Gamma$ no es adimensional. En mecanica estadistica clasica se introduce una medida de referencia, frecuentemente relacionada con $h^{3N}N!$.

## Interpretacion

La entropia de Gibbs cuantifica cuan extendida esta una distribucion sobre el espacio de microestados. Una distribucion concentrada tiene menor entropia que una distribucion extendida.

## Errores comunes

- Usar la formula continua sin especificar la medida.
- Pensar que $S_G$ y $S_B$ son siempre identicas.
- Confundir entropia de Gibbs con entropia de mezcla sin discutir indistinguibilidad.
- Olvidar que $p_i$ depende del ensamble.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Entropia de Gibbs** sin introducir un modelo mas complicado que el necesario.

1. **Sistema de dos microestados.** Considera dos estados $a$ y $b$ con probabilidades $p$ y $1-p$. La entrada se aplica al preguntar que informacion microscopica queda resumida por la nocion de Entropia de Gibbs. En este caso, la normalizacion es $$p_a+p_b=1,$$ y cualquier observable se calcula como $\langle A\rangle=pA_a+(1-p)A_b$.
2. **Conteo con restriccion.** Tres espines independientes tienen $2^3=8$ configuraciones. Si se fija magnetizacion total $M=1$, solo algunas configuraciones quedan accesibles. Este ejemplo muestra como Entropia de Gibbs cambia cuando se impone una restriccion macroscopica.
3. **Promedio temporal contra promedio de ensamble.** En una caminata que visita estados con frecuencias estables, el promedio temporal de $A$ puede compararse con $\sum_x A(x)p(x)$. Si no coinciden, la aplicacion de Entropia de Gibbs requiere revisar accesibilidad o ergodicidad.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
S_G=-k_B\sum_i p_i\ln p_i.
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

La lectura combinada recomienda separar tres niveles: conteo de estados, asignacion de probabilidades y extraccion de observables. Para esta entrada eso significa no adelantar el formalismo completo de un ensamble, sino precisar que objeto microscopico o probabilistico se esta definiendo y que restricciones lo vuelven fisicamente util.

- Kardar, *Statistical Physics of Particles*, cap. 1: para formular potenciales, estabilidad, respuestas y condiciones de equilibrio con variables conjugadas.
- Schroeder, *An Introduction to Thermal Physics*, cap. 5: para usar energia libre, potencial quimico, estabilidad y transformaciones de fase como herramientas de calculo.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 19-22: para conectar equiparticion, funcion de particion, gas ideal, potencial quimico y gran particion.
- Schroeder, *An Introduction to Thermal Physics*, caps. 1-3: para pasar de energia, conteo y entropia a temperatura, reservorios y equilibrio termico con modelos pequenos.

## Coherencia dentro de la wiki

Dentro del mapa general, **Entropia de Gibbs** queda reservado para la idea precisa de la nocion de Entropia de Gibbs. Su papel local es fijar vocabulario, medidas y restricciones antes de elegir un ensamble. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{microestado}\longrightarrow \text{macroestado}\longrightarrow S,\ p,\ \langle A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Entropia de Gibbs y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Fundamentos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Entropia de Boltzmann](#/entropia-de-boltzmann)
- [Ensamble canonico](#/ensamble-canonico)
- [Funcion de particion](#/funcion-de-particion)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
