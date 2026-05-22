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

## Paginas relacionadas

- [Ensamble canonico](#/ensamble-canonico)
- [Funcion de particion](#/funcion-de-particion)
- [Sistema de dos niveles](#/sistema-de-dos-niveles)

