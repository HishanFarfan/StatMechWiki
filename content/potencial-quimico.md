# Potencial quimico

## Resumen

El **potencial quimico** $\mu$ mide el cambio de energia libre asociado a cambiar el numero de particulas. Es la variable conjugada a $N$ y controla el intercambio de particulas entre sistemas.

## Definiciones termodinamicas

Desde la energia interna,

$$
dE=T\,dS-P\,dV+\mu\,dN.
$$

Por tanto,

$$
\mu
=
\left(\frac{\partial E}{\partial N}\right)_{S,V}.
$$

Desde la energia libre de Helmholtz,

$$
dF=-S\,dT-P\,dV+\mu\,dN,
$$

de modo que

$$
\mu
=
\left(\frac{\partial F}{\partial N}\right)_{T,V}.
$$

## En el microcanonico

Si se usa $S(E,V,N)$ como funcion fundamental,

$$
-\frac{\mu}{T}
=
\left(\frac{\partial S}{\partial N}\right)_{E,V}.
$$

Esta relacion muestra que $\mu$ tambien puede obtenerse desde la entropia.

## Equilibrio difusivo

Si dos sistemas pueden intercambiar particulas, el equilibrio requiere igualdad de potencial quimico:

$$
\mu_A=\mu_B.
$$

Esto es analogo a la igualdad de temperaturas para equilibrio termico.

## En el ensamble gran canonico

El potencial quimico aparece en el peso estadistico

$$
p_i
\propto
e^{-\beta(E_i-\mu N_i)}.
$$

Al aumentar $\mu$, se favorecen microestados con mayor numero de particulas.

## Fugacidad

La fugacidad se define como

$$
z=e^{\beta\mu}.
$$

En el gran canonico,

$$
\Xi=\sum_{N=0}^{\infty}z^N Z_N.
$$

La fugacidad es util porque convierte la dependencia en $\mu$ en una expansion de potencias en $z$.

## Interpretacion fisica

El potencial quimico no es simplemente la energia por particula. Incluye efectos entropicos, interacciones y restricciones termodinamicas. En sistemas ideales puede relacionarse con densidad y temperatura; en sistemas interactuantes contiene informacion sobre el costo termodinamico de insertar una particula.

## Ejemplo: gas ideal clasico

Para un gas ideal clasico,

$$
\mu
=
k_B T
\ln\!\left(n\lambda_T^3\right),
$$

donde $n=N/V$ es la densidad y

$$
\lambda_T
=
\frac{h}{\sqrt{2\pi m k_B T}}
$$

es la longitud de onda termica de de Broglie.

## Errores comunes

- Interpretar $\mu$ como energia de una particula aislada.
- Olvidar que $\mu$ depende de las variables que se mantienen fijas.
- Confundir potencial quimico con fugacidad.
- Suponer que $\mu$ debe ser siempre positivo.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Potencial quimico** sin introducir un modelo mas complicado que el necesario.

1. **Derivada de un potencial.** Si $F(T,V,N)$ es conocido, la entropia se obtiene de $$S=-\left(\frac{\partial F}{\partial T}\right)_{V,N}.$$ La aplicacion simple de Potencial quimico es identificar que variable se mantiene fija antes de derivar.
2. **Respuesta de un sistema pequeno.** Si una energia media cambia al variar $T$, la capacidad calorifica mide esa sensibilidad. El ejemplo minimo es una particula de dos niveles, donde la respuesta tiene un maximo cuando $k_BT$ es comparable con la separacion energetica.
3. **Control de estabilidad.** Una compresibilidad negativa o una varianza negativa no son resultados fisicos aceptables. Al aplicar la nocion de Potencial quimico, esos signos sirven como diagnostico inmediato de una derivada mal tomada o de un regimen inestable.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
dE=T\,dS-P\,dV+\mu\,dN.
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Potencial quimico** queda reservado para la idea precisa de la nocion de Potencial quimico. Su papel local es traducir promedios microscopicos en potenciales, derivadas y criterios de estabilidad. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{potencial}\longrightarrow \text{variables naturales}\longrightarrow \text{respuestas}
$$

Una ampliacion futura deberia partir de la nocion de Potencial quimico y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Termodinamica estadistica**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Gas ideal clasico](#/gas-ideal-clasico)
- [Equivalencia de ensambles](#/equivalencia-de-ensambles)
