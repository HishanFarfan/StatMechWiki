# Estadisticas cuanticas

## Resumen

Las **estadisticas cuanticas** describen sistemas de particulas indistinguibles. Dependiendo de la simetria del estado bajo intercambio de particulas, aparecen bosones o fermiones, con distribuciones de equilibrio distintas.

## Indistinguibilidad

En mecanica cuantica, particulas identicas no pueden etiquetarse fisicamente. Para dos particulas,

$$
\psi(x_1,x_2)
=
\pm \psi(x_2,x_1).
$$

El signo $+$ corresponde a bosones y el signo $-$ a fermiones.

## Bosones y fermiones

Los bosones pueden ocupar el mismo estado de una particula sin restriccion. Los fermiones obedecen el principio de exclusion de Pauli: cada estado de una particula puede ocuparse por a lo mas un fermion por estado cuantico disponible.

## Gran canonico por modo

Para un modo de energia $\epsilon_\alpha$, el peso gran canonico depende de

$$
e^{-\beta(\epsilon_\alpha-\mu)n_\alpha}.
$$

Para bosones,

$$
n_\alpha=0,1,2,\ldots
$$

y para fermiones,

$$
n_\alpha=0,1.
$$

## Distribucion de Bose-Einstein

Para bosones,

$$
\langle n_\alpha\rangle
=
\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}-1}.
$$

Para que el denominador sea positivo, se requiere usualmente

$$
\mu < \epsilon_0,
$$

donde $\epsilon_0$ es la energia del estado fundamental.

## Distribucion de Fermi-Dirac

Para fermiones,

$$
\langle n_\alpha\rangle
=
\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}+1}.
$$

A temperatura cero, esta distribucion se convierte en una funcion escalon:

$$
\langle n_\alpha\rangle
=
\begin{cases}
1, & \epsilon_\alpha < \epsilon_F,\\
0, & \epsilon_\alpha > \epsilon_F.
\end{cases}
$$

## Limite clasico

Cuando la ocupacion media es pequena,

$$
e^{\beta(\epsilon_\alpha-\mu)}\gg 1,
$$

ambas distribuciones se reducen a la forma de Maxwell-Boltzmann:

$$
\langle n_\alpha\rangle
\simeq
e^{-\beta(\epsilon_\alpha-\mu)}.
$$

## Parametro de degeneracion

El regimen clasico se obtiene cuando

$$
n\lambda_T^3\ll 1.
$$

Cuando $n\lambda_T^3$ no es pequeno, los efectos cuanticos de estadistica se vuelven importantes.

## Fenomenos asociados

- condensacion de Bose-Einstein;
- presion de degeneracion fermionica;
- capacidad calorifica electronica en metales;
- radiacion de cuerpo negro;
- gases atomicos ultrafrios.

## Errores comunes

- Usar Maxwell-Boltzmann para particulas cuanticas degeneradas.
- Confundir indistinguibilidad clasica corregida por $1/N!$ con estadistica cuantica completa.
- Olvidar la restriccion de Pauli para fermiones.
- Permitir $\mu$ mayor que la energia fundamental en un gas ideal de bosones.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Estadisticas cuanticas** sin introducir un modelo mas complicado que el necesario.

1. **Modo de dos ocupaciones.** Para un nivel de energia $\epsilon$, compara ocupacion bosonica y fermionica. La diferencia aparece en $$\langle n\rangle=\frac{1}{e^{\beta(\epsilon-\mu)}\mp1},$$ que permite o prohibe acumulacion multiple segun el signo.
2. **Limite clasico.** Si $e^{\beta(\epsilon-\mu)}\gg1$, Bose-Einstein y Fermi-Dirac se aproximan a Maxwell-Boltzmann. Este caso simple muestra cuando Estadisticas cuanticas puede reemplazarse por una descripcion clasica.
3. **Escala de degeneracion.** En un gas diluido, $n\lambda_T^3\ll1$ indica comportamiento casi clasico. Cuando esa cantidad se acerca a uno, la nocion de Estadisticas cuanticas deja de ser una correccion menor y cambia las ocupaciones observables.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
\psi(x_1,x_2)
=
\pm \psi(x_2,x_1).
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

En los capitulos cuanticos, el enriquecimiento central es reemplazar particulas etiquetadas por ocupaciones de modos. Esta entrada debe conservar esa idea: identificar niveles, degeneraciones y restricciones de ocupacion antes de aplicar formulas de Bose-Einstein, Fermi-Dirac o Maxwell-Boltzmann como limites.

- Kardar, *Statistical Physics of Particles*, caps. 6-7: para microestados cuanticos, solidos vibracionales, radiacion de cuerpo negro, gases Bose/Fermi y degeneracion cuantica.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 23-30: para fotones, fonones, gases reales, distribuciones Bose-Einstein y Fermi-Dirac, gases cuanticos y condensados.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 19-22: para conectar equiparticion, funcion de particion, gas ideal, potencial quimico y gran particion.

## Coherencia dentro de la wiki

Dentro del mapa general, **Estadisticas cuanticas** queda reservado para la idea precisa de la nocion de Estadisticas cuanticas. Su papel local es incorporar indistinguibilidad, niveles discretos y ocupaciones de modos. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\hat H,\ \hat N\longrightarrow \hat\rho\longrightarrow \langle \hat A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Estadisticas cuanticas y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Cuantica**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Gas ideal clasico](#/gas-ideal-clasico)
- [Potencial quimico](#/potencial-quimico)
- [Funcion de particion](#/funcion-de-particion)
