# Sistema de dos niveles

## Resumen

El **sistema de dos niveles** es uno de los modelos mas simples de la mecanica estadistica. Tiene solo dos energias posibles y permite ver de forma transparente el papel de la temperatura.

## Definicion

Considere un sistema con niveles

$$
E_0=0,
\qquad
E_1=\epsilon.
$$

La funcion de particion canonica es

$$
Z=1+e^{-\beta\epsilon}.
$$

## Probabilidades

Las probabilidades de ocupacion son

$$
p_0=\frac{1}{1+e^{-\beta\epsilon}},
\qquad
p_1=\frac{e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}.
$$

Equivalentemente,

$$
p_1=\frac{1}{e^{\beta\epsilon}+1}.
$$

## Energia media

La energia media es

$$
\langle E\rangle
=
\epsilon p_1
=
\frac{\epsilon}{e^{\beta\epsilon}+1}.
$$

A baja temperatura, $\beta\epsilon\gg 1$, el sistema esta casi siempre en el estado fundamental. A alta temperatura, ambos niveles se ocupan casi por igual y $\langle E\rangle\to \epsilon/2$.

## Capacidad calorifica

La capacidad calorifica es

$$
C
=
\frac{\partial \langle E\rangle}{\partial T}
=
k_B(\beta\epsilon)^2
\frac{e^{\beta\epsilon}}{(e^{\beta\epsilon}+1)^2}.
$$

Esta funcion presenta un maximo conocido como anomalia de Schottky.

## Entropia

La entropia puede calcularse como

$$
S=-k_B(p_0\ln p_0+p_1\ln p_1).
$$

Tambien se obtiene desde

$$
S=k_B\ln Z+k_B\beta\langle E\rangle.
$$

## Sistema con degeneracion

Si el nivel excitado tiene degeneracion $g$, entonces

$$
Z=1+g e^{-\beta\epsilon}.
$$

La probabilidad de estar en algun estado excitado es

$$
P_1
=
\frac{g e^{-\beta\epsilon}}{1+g e^{-\beta\epsilon}}.
$$

## Aplicaciones

El modelo aparece como aproximacion en:

- espines $1/2$ en campo magnetico;
- defectos con dos configuraciones;
- sistemas atomicos con dos niveles relevantes;
- bits termicos;
- modelos pedagogicos de capacidad calorifica.

## Errores comunes

- Confundir probabilidad de un microestado con probabilidad de un nivel degenerado.
- Olvidar que el limite de alta temperatura no concentra toda la probabilidad en el nivel excitado.
- Aplicar el modelo de dos niveles cuando muchos niveles energeticos son accesibles.

## Coherencia dentro de la wiki

Dentro del mapa general, **Sistema de dos niveles** queda reservado para la idea precisa de la nocion de Sistema de dos niveles. Su papel local es aislar un mecanismo fisico mediante grados de libertad, Hamiltonianos o reglas dinamicas controladas. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{grados de libertad}\longrightarrow H\ \text{o}\ W\longrightarrow \text{observables}
$$

Una ampliacion futura deberia partir de la nocion de Sistema de dos niveles y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Modelos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble canonico](#/ensamble-canonico)
- [Funcion de particion](#/funcion-de-particion)
- [Fluctuaciones](#/fluctuaciones)
