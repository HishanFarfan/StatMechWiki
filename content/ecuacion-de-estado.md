# Ecuación de estado

## Resumen

Una **ecuación de estado** es una relación entre las variables de estado macroscópicas de un sistema en equilibrio: presión $P$, volumen $V$, temperatura $T$ y número de partículas $N$. En mecánica estadística, las ecuaciones de estado se derivan de los potenciales termodinámicos a partir de modelos microscópicos.

## Gas ideal

La ecuación de estado más simple se obtiene del gas ideal clásico:

$$
PV = Nk_BT \quad \Longleftrightarrow \quad P = nk_BT, \quad n = N/V.
$$

Se deriva de la energía libre $F = -Nk_BT[\ln(V/N\lambda_T^3)+1]$ tomando $P = -(\partial F/\partial V)_{T,N} = Nk_BT/V$.

## Van der Waals

El gas de van der Waals incluye volumen excluido $b$ por partícula y atracción entre pares con intensidad $a$:

$$
\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT.
$$

- El término $-aN^2/V^2$ reduce la presión (atracción intermolecular).
- El término $Nb$ reduce el volumen disponible (repulsión de corto alcance).

La ecuación de van der Waals predice una **transición líquido-gas** con punto crítico en:

$$
T_c = \frac{8a}{27k_Bb}, \quad P_c = \frac{a}{27b^2}, \quad V_c = 3Nb.
$$

## Expansión virial

Para gases densos, la ecuación de estado se expande en potencias de la densidad:

$$
\frac{PV}{Nk_BT} = 1 + B_2(T)\,\frac{N}{V} + B_3(T)\left(\frac{N}{V}\right)^2 + \ldots
$$

Los **coeficientes viriales** $B_n(T)$ se calculan a partir de integrales de clusters del potencial de interacción:

$$
B_2(T) = -\frac{1}{2}\int\!\left(e^{-\beta u(r)} - 1\right)d^3r.
$$

Para el gas de van der Waals: $B_2 = b - a/k_BT$. Para el gas ideal: todos los $B_n = 0$.

## Gases cuánticos

Los efectos cuánticos modifican la ecuación de estado incluso sin interacciones. La primera corrección cuántica para bosones ($-$) y fermiones ($+$) es:

$$
\frac{PV}{Nk_BT} = 1 \pm \frac{n\lambda_T^3}{4\sqrt{2}} + \ldots
$$

Para fermiones (e.g., electrones en metales con $n\lambda_T^3 \sim 10^3$), la presión es muchísimo mayor que la clásica: es la **presión de degeneración** que sostiene las estrellas de neutrones.

## Desde la mecánica estadística

En el ensamble gran canónico, la ecuación de estado se obtiene de $\Phi = -PV$:

$$
P = \frac{k_BT}{V}\ln\Xi(T,V,\mu).
$$

Para el gas ideal clásico: $\ln\Xi = e^{\beta\mu}\,V/\lambda_T^3 = N$, y $P = Nk_BT/V$.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 5: expansión virial, coeficientes viriales y van der Waals desde mecánica estadística.
- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 2: ecuación de estado como relación constitutiva.
- Pathria & Beale, *Statistical Mechanics*, cap. 9: gas imperfecto, clusters y expansión virial.

## Páginas relacionadas

- [Gas ideal clásico](#/gas-ideal-clasico)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
- [Potencial gran canónico](#/potencial-gran-canonico)
- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Estabilidad termodinámica](#/estabilidad-termodinamica)
- [Compresibilidad](#/compresibilidad)
