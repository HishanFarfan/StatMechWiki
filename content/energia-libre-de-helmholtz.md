# Energia libre de Helmholtz

## Resumen

La **energia libre de Helmholtz** es el potencial termodinamico natural para sistemas a temperatura, volumen y numero de particulas fijos. Es central en el ensamble canonico.

## Definicion termodinamica

La energia libre de Helmholtz se define como

$$
F=E-TS.
$$

Su diferencial termodinamico es

$$
dF=-S\,dT-P\,dV+\mu\,dN.
$$

Por tanto, sus variables naturales son

$$
\boxed{T,\;V,\;N}.
$$

## Relacion con la funcion de particion

En el ensamble canonico,

$$
F(T,V,N)=-k_B T\ln Z(T,V,N).
$$

Esta formula permite calcular propiedades termodinamicas a partir del espectro microscopico o del Hamiltoniano.

## Derivadas

Como $F=F(T,V,N)$,

$$
\begin{aligned}
S &= -\left(\frac{\partial F}{\partial T}\right)_{V,N},\\[4pt]
P &= -\left(\frac{\partial F}{\partial V}\right)_{T,N},\\[4pt]
\mu &= \left(\frac{\partial F}{\partial N}\right)_{T,V}.
\end{aligned}
$$

Estas relaciones identifican las variables conjugadas a $T,V,N$.

## Criterio de equilibrio

Para un sistema en contacto con un reservorio termico a $T$ fija y con $V,N$ fijos, el equilibrio minimiza $F$.

La idea es que el sistema no minimiza simplemente energia interna: tambien debe considerar el intercambio de calor con el reservorio. La combinacion relevante es $E-TS$.

## Relacion con trabajo util

A temperatura constante, la disminucion de $F$ acota el trabajo util extraible de un sistema, excluyendo trabajo de expansion contra el ambiente segun la convencion usada.

## Conexion con otros potenciales

La energia libre de Helmholtz se obtiene desde la energia interna por una transformada de Legendre:

$$
F(T,V,N)
=
E(S,V,N)-TS.
$$

Otros potenciales se obtienen cambiando variables naturales:

$$
\begin{aligned}
G &= F+PV,\\
\Phi &= F-\mu N.
\end{aligned}
$$

Aqui $G$ es la energia libre de Gibbs y $\Phi$ es el potencial gran canonico.

## Errores comunes

- Confundir $F$ con la energia interna $E$.
- Usar $F$ como potencial natural cuando las variables controladas no son $T,V,N$.
- Olvidar que $F=-k_BT\ln Z$ es una relacion canonica.
- Interpretar minimizacion de $F$ fuera de sus condiciones de validez.

## Paginas relacionadas

- [Funcion de particion](#/funcion-de-particion)
- [Ensamble canonico](#/ensamble-canonico)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Entropia de Gibbs](#/entropia-de-gibbs)
