# Reservorio térmico

## Resumen

Un **reservorio térmico** (o baño térmico) es un sistema tan grande que puede absorber o ceder cantidades arbitrarias de energía sin que su temperatura cambie apreciablemente. Su función en mecánica estadística es fijar la temperatura del sistema de interés y justificar el ensamble canónico.

$$T_R = \text{cte} \quad \text{aunque } \Delta E_R \text{ sea finito}$$

## Definición y condición formal

Un sistema $R$ funciona como reservorio térmico para un sistema $S$ si:

1. $N_R \gg N_S$ (el reservorio es macroscópicamente más grande)
2. $C_V^{(R)} \to \infty$ en el límite $N_R \to \infty$: el calor específico diverge, de modo que
$$\Delta T_R = \frac{\Delta E}{C_V^{(R)}} \to 0$$
3. El acoplamiento entre $R$ y $S$ es débil: la energía de interacción es despreciable frente a las energías internas.

Bajo estas condiciones, $R$ fija $T$ de manera que $S$ puede ser descrito por el ensamble canónico.

## Cómo el reservorio produce la distribución de Boltzmann

Considera el sistema total $S + R$ aislado con energía total $E_\text{tot}$. La probabilidad de un microestado $i$ de $S$ con energía $E_i$ es proporcional al número de microestados del reservorio con energía $E_R = E_\text{tot} - E_i$:

$$p_i \propto \Omega_R(E_\text{tot} - E_i)$$

Expandiendo en serie $\ln\Omega_R$ alrededor de $E_\text{tot}$ (válido porque $E_i \ll E_\text{tot}$):

$$\ln\Omega_R(E_\text{tot} - E_i) \approx \ln\Omega_R(E_\text{tot}) - \frac{E_i}{k_BT_R} + \mathcal{O}\!\left(\frac{E_i^2}{C_V^{(R)}T^2}\right)$$

El término cuadrático es de orden $N_S/N_R$ y se desprecia en el límite de reservorio grande. Exponenciando:

$$p_i \propto e^{-E_i/(k_BT_R)} = e^{-\beta E_i}$$

**Este es el resultado central:** la distribución de Boltzmann no se postula, sino que se *deriva* de la mecánica estadística del sistema completo, usando únicamente que el reservorio es grande.

## Tipos de reservorios

Un reservorio puede fijar distintas variables intensivas según qué intercambia con el sistema:

| Tipo | Intercambia | Variable fijada | Ensamble resultante |
|---|---|---|---|
| Reservorio térmico | Energía | Temperatura $T$ | Canónico |
| Reservorio de partículas | Energía + partículas | $T$ y $\mu$ | Gran canónico |
| Reservorio de presión (pistón) | Energía + volumen | $T$ y $P$ | Isotérmico-isobárico |

En todos los casos la lógica es la misma: expandir $\ln\Omega_R$ en la variable intercambiada, identificar el multiplicador de Lagrange con la variable intensiva del reservorio.

## El reservorio como límite termodinámico del entorno

Un reservorio ideal es el límite $N_R \to \infty$ de un sistema real. En la práctica, cualquier sistema con $N_R \gg N_S$ actúa como buen reservorio. Ejemplos:

- **Baño de agua** para una molécula individual: el agua tiene $\sim 10^{25}$ moléculas; la molécula tiene $\sim 1$. La temperatura del baño no cambia detectablemente.
- **Termostato en una simulación de MD**: el algoritmo de Nosé-Hoover o de velocidades de rescalado implementa numéricamente un reservorio térmico para el sistema simulado.
- **Universo** para un sistema macroscópico: a escala cosmológica, el fondo de microondas a 2.73 K actúa como reservorio térmico universal.
- **Baño de fotones** (radiación de cuerpo negro): los fotones del entorno actúan como reservorio de radiación que fija la temperatura de los objetos con los que interactúan.

## Tiempo de equilibración

Un reservorio fija la temperatura *en equilibrio*, pero el proceso de equilibración requiere un tiempo finito $\tau_\text{eq}$ que depende del acoplamiento entre $S$ y $R$. Si la observación se realiza en un tiempo $\tau_\text{obs} \ll \tau_\text{eq}$, el sistema no está en equilibrio con el reservorio y el ensamble canónico no aplica.

Esta es la razón por la que:
- Las moléculas en una explosión no están en equilibrio térmico con el entorno.
- Los vidrios tienen temperaturas "de configuración" distintas a la temperatura del baño.
- Las moléculas proteicas recién sintetizadas pueden quedar atrapadas en estados metaestables.

## Reservorios en física cuántica

En sistemas cuánticos abiertos, el reservorio (baño) produce **decoherencia** además de termalización. La interacción con los grados de libertad del baño destruye las coherencias cuánticas del sistema $S$. La descripción formal usa la ecuación de Lindblad:

$$\frac{d\hat\rho}{dt} = -\frac{i}{\hbar}[\hat H_S, \hat\rho] + \mathcal{L}[\hat\rho]$$

donde el superoperador de Lindblad $\mathcal{L}$ captura los efectos del baño. En el límite de acoplamiento débil y temperatura alta, $\mathcal{L}$ lleva al estado de Gibbs $\hat\rho_\text{eq} = e^{-\beta\hat H}/Z$.

## El reservorio y los teoremas de fluctuación

Los teoremas modernos de fluctuación (Jarzynski, Crooks) relacionan el trabajo realizado sobre un sistema con las fluctuaciones alrededor del equilibrio con el reservorio. La identidad de Jarzynski:

$$\langle e^{-\beta W}\rangle = e^{-\beta\Delta F}$$

dice que el promedio del factor de Boltzmann del trabajo $W$ da exactamente $e^{-\beta\Delta F}$, independientemente de qué tan lejos del equilibrio esté el proceso. Esta identidad se basa en que el reservorio siempre está en equilibrio (a temperatura $T$) antes y después de cada realización.

## Fuentes para profundizar

- Reif, *Fundamentals of Statistical and Thermal Physics*, cap. 6: derivación de la distribución canónica desde el reservorio.
- Kardar, *Statistical Physics of Particles*, cap. 4: el reservorio como origen del ensamble canónico y gran canónico.
- Breuer & Petruccione, *The Theory of Open Quantum Systems*, cap. 2: reservorios cuánticos y la ecuación de Lindblad.
- Jarzynski, "Nonequilibrium equality for free energy differences", *PRL* 78, 2690 (1997): el teorema de fluctuación con reservorio.

## Páginas relacionadas

- [Ensamble canónico](#/ensamble-canonico)
- [Ensamble gran canónico](#/ensamble-gran-canonico)
- [Distribución de Boltzmann](#/distribucion-de-boltzmann)
- [Temperatura estadística](#/temperatura-estadistica)
- [Fluctuaciones](#/fluctuaciones)
