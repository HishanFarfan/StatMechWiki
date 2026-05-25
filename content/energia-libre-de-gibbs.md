# Energía libre de Gibbs

## Resumen

La **energía libre de Gibbs** $G$ es el potencial termodinámico natural para sistemas a temperatura $T$, presión $P$ y número de partículas $N$ fijos. Es el potencial relevante en química y biología, donde los procesos ocurren a $T$ y $P$ atmosférica constantes.

## Definición y variables naturales

$$
G = E - TS + PV = F + PV = H - TS,
$$

con diferencial

$$
dG = -S\,dT + V\,dP + \mu\,dN.
$$

Las variables naturales son $\boxed{T,\,P,\,N}$. Las derivadas dan

$$
S = -\!\left(\frac{\partial G}{\partial T}\right)_{P,N}, \quad V = \left(\frac{\partial G}{\partial P}\right)_{T,N}, \quad \mu = \left(\frac{\partial G}{\partial N}\right)_{T,P}.
$$

## Relación con el potencial químico

Dado que $G$ es extensiva y sus variables naturales son las intensivas $(T,P)$, la relación de Euler da

$$
G(T,P,N) = \mu(T,P)\,N.
$$

El potencial químico es la **energía libre de Gibbs por partícula**. La condición de equilibrio entre fases $\mu_\alpha = \mu_\beta$ equivale a igualar las energías de Gibbs por partícula de cada fase.

## Criterio de equilibrio y espontaneidad

Para un proceso a $T$ y $P$ constantes, el segundo principio impone

$$
\Delta G \leq 0.
$$

- $\Delta G < 0$: proceso espontáneo (puede ocurrir sin trabajo externo).
- $\Delta G = 0$: equilibrio termodinámico.
- $\Delta G > 0$: proceso no espontáneo.

En química, la dirección de las reacciones y los equilibrios de fase se determinan minimizando $G$ a $T$ y $P$ fijos.

## Trabajo útil máximo

A $T$ y $P$ constantes, el trabajo útil no mecánico (eléctrico, osmótico, etc.) está acotado por

$$
W_{\text{útil}} \leq -\Delta G.
$$

En electroquímica: $\Delta G = -nFE_{\text{celda}}$, donde $n$ es el número de electrones transferidos y $F$ el faradio ($96\,485\ \text{C/mol}$). Esta relación conecta la espontaneidad termodinámica con la fem de pilas galvánicas.

## Ecuación de van't Hoff

Para una reacción $\nu_A A + \nu_B B \rightleftharpoons \nu_C C + \nu_D D$, la constante de equilibrio $K$ cumple

$$
\Delta G^\circ = -RT\ln K, \qquad \frac{d\ln K}{dT} = \frac{\Delta H^\circ}{RT^2}.
$$

La segunda ecuación (van't Hoff) dice que una reacción endotérmica ($\Delta H^\circ > 0$) desplaza el equilibrio hacia productos al aumentar $T$.

## Energía libre de mezcla

Para una mezcla ideal de $n$ componentes con fracciones molares $x_i$:

$$
\Delta G_{\text{mezcla}} = RT\sum_i N_i\ln x_i < 0.
$$

La mezcla de componentes distintos siempre disminuye $G$ (entropía de mezcla), lo que explica la miscibilidad espontánea. En mezclas no ideales hay correcciones por interacciones.

## Fuentes para profundizar

- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 6: $G$ como función característica, coexistencia de fases y regla de fases de Gibbs.
- Atkins & de Paula, *Physical Chemistry*, cap. 4: $G$ en reacciones químicas, van't Hoff, equilibrio de fases.
- Kardar, *Statistical Physics of Particles*, cap. 2: $G = \mu N$ y transiciones de fase.

## Páginas relacionadas

- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Transformadas de Legendre](#/transformadas-de-legendre)
- [Potencial químico](#/potencial-quimico)
- [Entalpía](#/entalpia)
- [Relaciones de Maxwell](#/relaciones-de-maxwell)
- [Estabilidad termodinámica](#/estabilidad-termodinamica)
