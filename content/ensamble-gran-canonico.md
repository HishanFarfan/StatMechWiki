# Ensamble gran canonico

## Resumen

El **ensamble gran canonico** describe un sistema que puede intercambiar energia y particulas con un reservorio. Sus variables naturales son

$$
\boxed{T,\;V,\;\mu\ \text{fijos}} .
$$

Aqui $\mu$ es el potencial quimico. A diferencia del ensamble canonico, el numero de particulas $N$ no esta fijo: fluctua alrededor de un valor medio.

## Definicion

Un microestado $i$ puede tener energia $E_i$ y numero de particulas $N_i$. La probabilidad gran canonica es

$$
p_i
=
\frac{e^{-\beta(E_i-\mu N_i)}}{\Xi},
\qquad
\beta=\frac{1}{k_B T}.
$$

La gran funcion de particion es

$$
\Xi(T,V,\mu)
=
\sum_i e^{-\beta(E_i-\mu N_i)}.
$$

Tambien puede escribirse como una suma sobre sectores de numero de particulas:

$$
\Xi(T,V,\mu)
=
\sum_{N=0}^{\infty}
e^{\beta\mu N} Z_N(T,V),
$$

donde $Z_N$ es la funcion de particion canonica para $N$ particulas.

## Fugacidad

Es comun introducir la fugacidad

$$
z=e^{\beta\mu}.
$$

Con esta notacion,

$$
\Xi(T,V,z)
=
\sum_{N=0}^{\infty} z^N Z_N(T,V).
$$

La fugacidad controla el peso estadistico de los sectores con distinto numero de particulas.

## Origen fisico

Considere un sistema $S$ en contacto con un reservorio que puede entregarle energia y particulas. El sistema total conserva energia y numero total de particulas:

$$
\begin{aligned}
E_{\mathrm{tot}} &= E_i + E_R,\\
N_{\mathrm{tot}} &= N_i + N_R.
\end{aligned}
$$

La probabilidad de un microestado $i$ del sistema es proporcional al numero de microestados disponibles para el reservorio:

$$
p_i \propto \Omega_R(E_{\mathrm{tot}}-E_i,\;N_{\mathrm{tot}}-N_i).
$$

Expandiendo la entropia del reservorio,

$$
S_R(E_R,N_R)
\simeq
S_R(E_{\mathrm{tot}},N_{\mathrm{tot}})
-
\frac{E_i}{T}
+
\frac{\mu N_i}{T},
$$

se obtiene

$$
p_i \propto e^{-\beta(E_i-\mu N_i)}.
$$

## Potencial gran canonico

El potencial termodinamico natural del ensamble gran canonico es

$$
\Phi(T,V,\mu)
=
-k_B T \ln \Xi.
$$

Muchos textos usan la letra $\Omega$ para este potencial. En esta wiki se prefiere $\Phi$ para evitar confusion con $\Omega$ como numero de microestados.

Sus derivadas termodinamicas son

$$
\begin{aligned}
S &= -\left(\frac{\partial \Phi}{\partial T}\right)_{V,\mu},\\[4pt]
P &= -\left(\frac{\partial \Phi}{\partial V}\right)_{T,\mu},\\[4pt]
\langle N\rangle
  &= -\left(\frac{\partial \Phi}{\partial \mu}\right)_{T,V}.
\end{aligned}
$$

Para sistemas homogeneos extensivos,

$$
\Phi = -PV.
$$

## Numero medio de particulas

El numero medio de particulas se obtiene de

$$
\langle N\rangle
=
\frac{1}{\beta}
\frac{\partial \ln \Xi}{\partial \mu}.
$$

En terminos de la fugacidad,

$$
\langle N\rangle
=
z\frac{\partial \ln \Xi}{\partial z}.
$$

## Energia media

La energia media satisface

$$
\langle E\rangle
=
-\frac{\partial \ln \Xi}{\partial \beta}
+\mu\langle N\rangle,
$$

cuando $\mu$ se mantiene fija al derivar respecto de $\beta$.

## Fluctuaciones de numero de particulas

La varianza de $N$ esta dada por

$$
\langle(\Delta N)^2\rangle
=
k_B T
\left(\frac{\partial \langle N\rangle}{\partial \mu}\right)_{T,V}.
$$

Tambien puede expresarse como

$$
\langle(\Delta N)^2\rangle
=
\frac{1}{\beta^2}
\frac{\partial^2 \ln \Xi}{\partial \mu^2}.
$$

Estas fluctuaciones conectan la respuesta de densidad con la compresibilidad.

## Relacion con otros ensambles

El gran canonico fija $T,V,\mu$. El canonico fija $T,V,N$. Cuando $N$ es grande y las fluctuaciones relativas son pequenas, ambos pueden dar la misma termodinamica promedio. Sin embargo, el gran canonico suele ser mas conveniente cuando:

- el numero de particulas no esta naturalmente fijo;
- se estudian gases cuanticos;
- se trabaja con adsorcion o intercambio con reservorios;
- se usan modelos de red con ocupacion variable;
- interesa calcular fluctuaciones de densidad.

## Ejemplo conceptual: gas ideal cuantico

Para particulas indistinguibles no interactuantes, el gran canonico permite factorizar la gran funcion de particion por modos de energia. Para fermiones y bosones, el resultado lleva directamente a las distribuciones de Fermi-Dirac y Bose-Einstein:

$$
\langle n_\alpha\rangle
=
\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}\mp 1},
$$

donde el signo $-$ en el denominador corresponde a bosones y el signo $+$ a fermiones.

## Supuestos importantes

- El sistema intercambia energia y particulas con un reservorio.
- El reservorio fija $T$ y $\mu$.
- Los microestados pueden clasificarse por energia y numero de particulas.
- La gran funcion de particion converge para los valores de $T,V,\mu$ considerados.

## Errores comunes

- Confundir $N$ fijo con $\langle N\rangle$ fijo.
- Usar $Z$ y $\Xi$ indistintamente.
- Confundir $\Omega$ como potencial gran canonico con $\Omega$ como conteo de microestados.
- Olvidar que $\mu$ controla el numero medio de particulas, no el numero exacto.
- Aplicar formulas gran canonicas sin revisar condiciones de convergencia.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Ensamble gran canonico** sin introducir un modelo mas complicado que el necesario.

1. **Dos niveles en contacto termico.** Para energias $0$ y $\epsilon$, el peso canonico da $$p_1=\frac{e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}.$$ La entrada se usa al decidir que variable esta fija y que cantidad fluctua.
2. **Intercambio con un reservorio.** Un subsistema pequeno puede ganar o perder energia mientras el conjunto total conserva energia. En ese caso, la nocion de Ensamble gran canonico se reconoce observando si el entorno fija $E$, $T$, $P$ o $\mu$.
3. **Comparacion de fluctuaciones.** En un sistema pequeno, fijar energia no es equivalente a fijar temperatura: el promedio de energia puede parecer similar, pero $\langle(\Delta E)^2\rangle$ cambia. Este es el test minimo para no confundir ensambles.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
\boxed{T,\;V,\;\mu\ \text{fijos}} .
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Kardar y Blundell permiten reforzar esta entrada como un problema de restricciones: energia fija, temperatura fija, potencial quimico fijo o combinaciones de ellas. La lectura util es derivar los pesos desde el entorno y verificar que el objeto de normalizacion, ya sea $\Omega$, $Z$ o $\Xi$, genere los promedios y fluctuaciones correctos.

- Kardar, *Statistical Physics of Particles*, cap. 4: para ensambles microcanonico, canonico, Gibbs y gran canonico, incluyendo sistemas de dos niveles y gas ideal.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 19-22: para conectar equiparticion, funcion de particion, gas ideal, potencial quimico y gran particion.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 3-4: para fijar probabilidad, microestados, macroestados, temperatura estadistica, ensambles y pesos de Boltzmann.

## Coherencia dentro de la wiki

Dentro del mapa general, **Ensamble gran canonico** queda reservado para la idea precisa de la nocion de Ensamble gran canonico. Su papel local es mostrar que variables se fijan, cuales fluctuan y que normalizacion gobierna los promedios. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{restricciones}\longrightarrow p_i\longrightarrow Z\ \text{o}\ \Omega\longrightarrow \langle A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Ensamble gran canonico y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Ensambles**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble canonico](#/ensamble-canonico)
- [Funcion de particion](#/funcion-de-particion)
- [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Entropia de Gibbs](#/entropia-de-gibbs)

## Referencias recomendadas

- Pathria y Beale, *Statistical Mechanics*, tratamiento del ensamble gran canonico.
- Huang, *Statistical Mechanics*, relacion con gases cuanticos.
- Kardar, *Statistical Physics of Particles*, formulacion con fugacidad.
- Landau y Lifshitz, *Statistical Physics*, estructura termodinamica.
