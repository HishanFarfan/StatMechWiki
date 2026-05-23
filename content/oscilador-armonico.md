# Oscilador armonico

## Resumen

El **oscilador armonico** es un modelo central porque aparece como aproximacion cuadratica cerca de puntos de equilibrio. En mecanica estadistica sirve para estudiar vibraciones, fonones y modos normales.

## Oscilador cuantico

Los niveles de energia de un oscilador armonico cuantico son

$$
E_n=\hbar\omega\left(n+\frac{1}{2}\right),
\qquad
n=0,1,2,\ldots
$$

La funcion de particion es

$$
Z
=
\sum_{n=0}^{\infty}
e^{-\beta\hbar\omega(n+1/2)}
=
\frac{e^{-\beta\hbar\omega/2}}
{1-e^{-\beta\hbar\omega}}.
$$

Tambien puede escribirse como

$$
Z=\frac{1}{2\sinh(\beta\hbar\omega/2)}.
$$

## Energia media

La energia media es

$$
\langle E\rangle
=
-\frac{\partial \ln Z}{\partial \beta}
=
\frac{\hbar\omega}{2}
+
\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}.
$$

El primer termino es la energia de punto cero. El segundo corresponde a excitaciones termicas.

## Limite clasico

Cuando $k_B T\gg \hbar\omega$,

$$
\langle E\rangle \simeq k_B T.
$$

Este resultado coincide con el teorema de equiparticion: hay dos terminos cuadraticos, energia cinetica y potencial, cada uno contribuyendo $k_B T/2$.

## Capacidad calorifica

La capacidad calorifica de un oscilador cuantico es

$$
C
=
k_B
\left(\frac{\beta\hbar\omega}{2\sinh(\beta\hbar\omega/2)}\right)^2.
$$

A baja temperatura, $C$ cae exponencialmente; a alta temperatura, $C\to k_B$.

## Oscilador clasico

Para el Hamiltoniano clasico

$$
H(p,q)=\frac{p^2}{2m}+\frac{1}{2}m\omega^2 q^2,
$$

la funcion de particion clasica es proporcional a

$$
Z_{\mathrm{cl}}
\propto
\int dp\,dq\, e^{-\beta H(p,q)}.
$$

La energia media clasica es

$$
\langle E\rangle_{\mathrm{cl}}=k_B T.
$$

## Aplicaciones

- vibraciones moleculares;
- modos normales en solidos;
- solido de Einstein;
- aproximaciones cuadraticas alrededor del equilibrio;
- campos libres como colecciones de osciladores.

## Errores comunes

- Olvidar la energia de punto cero en el caso cuantico.
- Usar el limite clasico a baja temperatura.
- Confundir frecuencia angular $\omega$ con frecuencia ordinaria $\nu$.
- Omitir que un solido real tiene muchos modos con distintas frecuencias.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Oscilador armonico** sin introducir un modelo mas complicado que el necesario.

1. **Modelo minimo.** Toma dos sitios o dos espines y asigna una energia a cada configuracion. La aplicacion de Oscilador armonico consiste en decidir que mecanismo retiene el modelo: interaccion, exclusion, alineamiento, actividad o conectividad.
2. **Limite soluble.** Anula la interaccion o toma temperatura alta. En ese limite, muchos modelos recuperan pesos casi uniformes, $$p(x)\simeq \frac{1}{\Omega}.$$ Si la nocion de Oscilador armonico no reproduce ese comportamiento cuando corresponde, la formulacion necesita revision.
3. **Observable concreto.** Calcula energia media, ocupacion, magnetizacion o desplazamiento cuadratico medio en una red pequena. La utilidad de Oscilador armonico aparece cuando ese observable distingue dos mecanismos que parecerian iguales solo mirando la definicion.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
E_n=\hbar\omega\left(n+\frac{1}{2}\right),
\qquad
n=0,1,2,\ldots
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Los libros usan modelos simples para aislar mecanismos: dos niveles, gas ideal, solido de Einstein, Ising, van der Waals o gases cuanticos. La mejora editorial para esta entrada es hacer explicito que grados de libertad se conservan, que interacciones se descartan y que observable debe cambiar si el mecanismo propuesto es realmente relevante.

- Kardar, *Statistical Physics of Particles*, cap. 4: para ensambles microcanonico, canonico, Gibbs y gran canonico, incluyendo sistemas de dos niveles y gas ideal.
- Kardar, *Statistical Physics of Particles*, cap. 5: para cumulantes, expansion de clusters, virial, van der Waals, campo medio y comportamiento critico.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 26-28: para gases reales, expansion virial, van der Waals, regla de fases, Ising y clasificacion de transiciones.

## Coherencia dentro de la wiki

Dentro del mapa general, **Oscilador armonico** queda reservado para la idea precisa de la nocion de Oscilador armonico. Su papel local es aislar un mecanismo fisico mediante grados de libertad, Hamiltonianos o reglas dinamicas controladas. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{grados de libertad}\longrightarrow H\ \text{o}\ W\longrightarrow \text{observables}
$$

Una ampliacion futura deberia partir de la nocion de Oscilador armonico y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Modelos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble canonico](#/ensamble-canonico)
- [Funcion de particion](#/funcion-de-particion)
- [Sistema de dos niveles](#/sistema-de-dos-niveles)
