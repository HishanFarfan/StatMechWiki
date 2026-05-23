# Equivalencia de ensambles

## Resumen

La **equivalencia de ensambles** es la idea de que distintos ensambles estadisticos pueden producir la misma termodinamica macroscopica en el limite termodinamico. Por ejemplo, el ensamble microcanonico fija $E$, mientras que el canonico fija $T$, pero ambos pueden describir el mismo equilibrio para sistemas grandes.

## Planteamiento

El ensamble microcanonico usa la entropia

$$
S(E,V,N)=k_B\ln\Omega(E,V,N).
$$

El ensamble canonico usa la funcion de particion

$$
Z(\beta,V,N)=\sum_i e^{-\beta E_i}.
$$

Si se introduce una densidad de estados $g(E)$, la funcion de particion puede escribirse como

$$
Z(\beta,V,N)
=
\int dE\, g(E,V,N)e^{-\beta E}.
$$

Como $S(E,V,N)=k_B\ln g(E,V,N)$, entonces

$$
Z(\beta,V,N)
=
\int dE\,
\exp\!\left[
\frac{S(E,V,N)}{k_B}
-\beta E
\right].
$$

## Punto de silla

Para sistemas macroscopicos, $S$ y $E$ son extensivos. La integral anterior suele estar dominada por el maximo del exponente. La condicion de punto de silla es

$$
\frac{\partial}{\partial E}
\left[
\frac{S(E,V,N)}{k_B}
-\beta E
\right]
=0.
$$

Esto implica

$$
\beta
=
\frac{1}{k_B}
\left(\frac{\partial S}{\partial E}\right)_{V,N}.
$$

Usando la definicion microcanonica de temperatura,

$$
\frac{1}{T}
=
\left(\frac{\partial S}{\partial E}\right)_{V,N},
$$

se recupera

$$
\beta=\frac{1}{k_B T}.
$$

## Relacion entre potenciales

La energia libre de Helmholtz es una transformada de Legendre de la energia interna:

$$
F(T,V,N)=E-TS.
$$

En el limite termodinamico, el punto de silla selecciona la energia $E^\ast$ que minimiza

$$
F(E;T,V,N)=E-TS(E,V,N).
$$

Por eso la descripcion canonica puede reemplazar a la microcanonica cuando las fluctuaciones relativas son pequenas.

## Fluctuaciones relativas

En el ensamble canonico,

$$
\langle(\Delta E)^2\rangle=k_B T^2 C_V.
$$

Si $C_V$ y $\langle E\rangle$ son extensivos,

$$
\frac{\sqrt{\langle(\Delta E)^2\rangle}}{\langle E\rangle}
\sim
\frac{1}{\sqrt{N}}.
$$

Por tanto, para $N$ grande la energia relativa fluctua muy poco y el canonico se concentra alrededor de una energia microcanonica efectiva.

## Cuando puede fallar

La equivalencia no es automatica. Puede fallar o requerir cuidado en:

- sistemas pequenos;
- sistemas con interacciones de largo alcance;
- sistemas gravitacionales;
- regiones de coexistencia de fases;
- transiciones de primer orden;
- modelos con entropia no concava.

Un criterio importante es la concavidad de la entropia. Si $S(E)$ no es concava, la transformada de Legendre puede perder informacion.

## Equivalencia canonico-gran canonico

El canonico fija $N$, mientras que el gran canonico fija $\mu$. La equivalencia requiere que las fluctuaciones relativas de $N$ sean pequenas:

$$
\frac{\sqrt{\langle(\Delta N)^2\rangle}}{\langle N\rangle}
\sim
\frac{1}{\sqrt{N}}.
$$

Cuando esto se cumple, el gran canonico puede describir la misma termodinamica promedio que el canonico.

## Errores comunes

- Pensar que todos los ensambles son equivalentes para cualquier sistema.
- Ignorar fluctuaciones en sistemas pequenos.
- Usar equivalencia cerca de una transicion de primer orden sin revisar estabilidad.
- Confundir igualdad de promedios con igualdad de distribuciones completas.

## Coherencia dentro de la wiki

Dentro del mapa general, **Equivalencia de ensambles** queda reservado para la idea precisa de la nocion de Equivalencia de ensambles. Su papel local es mostrar que variables se fijan, cuales fluctuan y que normalizacion gobierna los promedios. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{restricciones}\longrightarrow p_i\longrightarrow Z\ \text{o}\ \Omega\longrightarrow \langle A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Equivalencia de ensambles y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Ensambles**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble microcanonico](#/ensamble-microcanonico)
- [Ensamble canonico](#/ensamble-canonico)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Fluctuaciones](#/fluctuaciones)
- [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)
