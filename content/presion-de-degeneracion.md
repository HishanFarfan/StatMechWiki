# Presión de degeneración

## Resumen

La **presión de degeneración** es la presión que ejerce un gas de fermiones a temperatura cero, originada exclusivamente por el principio de exclusión de Pauli. No depende de la temperatura y escala como $n^{5/3}$ con la densidad. Es la fuerza que sostiene enanas blancas y estrellas de neutrones contra el colapso gravitacional.

## Origen cuántico

A $T = 0$, los fermiones llenan todos los estados de mínima energía hasta $\epsilon_F$. Aun sin interacciones y sin temperatura, los fermiones tienen energía cinética media $\langle\epsilon\rangle = (3/5)\epsilon_F > 0$, y esta energía crea presión. Es una consecuencia directa del principio de incertidumbre: comprimir el sistema en un volumen $V$ confinó los momentos a valores $p \gtrsim \hbar/V^{1/3}$.

## Fórmula

$$
P_0 = \frac{2}{3}\frac{E_0}{V} = \frac{2}{5}\,n\epsilon_F = \frac{\hbar^2}{5m}\left(3\pi^2\right)^{2/3}n^{5/3}.
$$

El resultado clave es $P_0 \propto n^{5/3}$: la presión de degeneración crece más rápido que la presión clásica $P = nk_BT \propto n$.

## Escala relativista

A densidades muy altas, los fermiones se vuelven relativistas ($p_F \gg mc$). En el límite ultra-relativista ($\epsilon_F \gg mc^2$):

$$
P_0^{\text{rel}} = \frac{\hbar c}{4}(3\pi^2)^{1/3}n^{4/3} \propto n^{4/3}.
$$

El cambio de exponente de $5/3$ a $4/3$ es crucial: si la presión escala más lento que la gravedad ($M \propto n$ → energía gravitacional $\propto M^{5/3}$), el equilibrio se vuelve inestable para masas grandes.

## Enanas blancas y límite de Chandrasekhar

Una enana blanca es una estrella colapsada donde la presión de degeneración electrónica equilibra la gravedad. El equilibrio $P_0 \sim P_{\text{grav}}$ da un radio típico de $\sim 10^4$ km y una densidad de $\rho \sim 10^6\ \text{g/cm}^3$.

Para el régimen relativista, el límite de estabilidad (masa máxima) se obtiene de $P \propto n^{4/3}$:

$$
M_{\text{Ch}} = \frac{5.83}{\mu_e^2}\,M_\odot \approx 1.4\,M_\odot,
$$

donde $\mu_e$ es el número másico por electrón ($\mu_e = 2$ para helio/carbono/oxígeno). Por encima de $M_{\text{Ch}}$, la presión de degeneración relativista no puede sostener la estrella → colapso en estrella de neutrones o agujero negro.

## Estrellas de neutrones

En las estrellas de neutrones, la densidad es $\rho \sim 10^{14}\ \text{g/cm}^3$ (similar al núcleo atómico). La presión de degeneración es ahora neutrónica (y protónica). La masa máxima (límite de Tolman-Oppenheimer-Volkoff) es $\sim 2$–$3\,M_\odot$; sobre ella, el colapso a agujero negro es inevitable.

## Comparación con presión térmica

| Régimen | Presión | Escala |
|---|---|---|
| Gas clásico | $P = nk_BT$ | $\propto n$ |
| Fermiones NR degenerados | $P_0 = \frac{2}{5}n\epsilon_F$ | $\propto n^{5/3}$ |
| Fermiones UR degenerados | $P_0^{\text{rel}} \propto n^{4/3}$ | $\propto n^{4/3}$ |

Para los electrones en el núcleo de una enana blanca, la presión de degeneración supera en millones de veces la presión térmica.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 7: gas de Fermi libre, $P_0=(2/5)n\epsilon_F$, límite relativista.
- Chandrasekhar, *An Introduction to the Study of Stellar Structure* (1939): derivación del límite de masa para enanas blancas.
- Shapiro & Teukolsky, *Black Holes, White Dwarfs and Neutron Stars*, cap. 3: estructura de enanas blancas y el límite de Chandrasekhar.

## Páginas relacionadas

- [Gas de Fermi](#/gas-de-fermi)
- [Energía de Fermi](#/energia-de-fermi)
- [Distribución de Fermi-Dirac](#/distribucion-fermi-dirac)
- [Estadísticas cuánticas](#/estadisticas-cuanticas)
- [Ecuación de estado](#/ecuacion-de-estado)
