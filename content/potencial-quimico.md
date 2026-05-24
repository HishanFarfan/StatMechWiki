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

## Signo de $\mu$ y su interpretación

En el **gas ideal clásico** ($n\lambda_T^3 \ll 1$):
$$\mu = k_BT\ln(n\lambda_T^3) < 0,$$
ya que el argumento del logaritmo es $\ll 1$. Añadir una partícula al gas diluido aumenta la entropía (muchos estados disponibles), de modo que la energía libre disminuye: $\mu < 0$.

En un **gas de Fermi degenerado** ($T \ll T_F$), $\mu \approx \epsilon_F > 0$: añadir una partícula cuesta energía porque todos los estados de baja energía están ocupados.

En **bosones** aproximándose a la condensación de Bose-Einstein, $\mu \to 0^-$; el colapso hacia $\mu < 0$ no ocurre porque en $\mu = 0$ ya diverge la ocupación del estado base.

## Equilibrio en mezclas: condición de coexistencia

Para dos fases $\alpha$ y $\beta$ de la misma especie en equilibrio:

$$
T_\alpha = T_\beta, \qquad P_\alpha = P_\beta, \qquad \mu_\alpha(T,P) = \mu_\beta(T,P).
$$

La última condición define la **curva de coexistencia** en el diagrama $P$-$T$. La ecuación de Clausius-Clapeyron,

$$
\frac{dP}{dT} = \frac{L}{T\,\Delta v},
$$

se obtiene diferenciando $\mu_\alpha = \mu_\beta$ a lo largo de la curva, donde $L$ es el calor latente y $\Delta v$ el cambio de volumen molar.

## Presión osmótica

Si una membrana semipermeable separa un disolvente puro (izquierda, $\mu_0$) de una solución diluida (derecha, $\mu_0 + k_BT\ln x_s$ con $x_s < 1$), el equilibrio requiere igualar potenciales. Aumentar la presión $P$ a la derecha compensa la diferencia: la presión osmótica es $\Pi = nk_BT$ (ley de van't Hoff), directamente proporcional a la concentración del soluto.

## Fuentes para profundizar

- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 2: el potencial químico como variable intensiva conjugada a $N$, condiciones de equilibrio químico.
- Kardar, *Statistical Physics of Particles*, cap. 4: $\mu$ del gas ideal clásico, fugacidad, ensamble gran canónico.
- Kittel & Kroemer, *Thermal Physics*, cap. 5: potencial químico en semiconductores, metales y gases cuánticos.

## Páginas relacionadas

- [Ensamble gran canónico](#/ensamble-gran-canonico)
- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Gas ideal clásico](#/gas-ideal-clasico)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
- [Condensación de Bose-Einstein](#/condensacion-bose-einstein)
- [Gas de Fermi](#/gas-de-fermi)
- [Transformadas de Legendre](#/transformadas-de-legendre)
