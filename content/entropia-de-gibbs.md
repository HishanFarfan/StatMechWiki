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
