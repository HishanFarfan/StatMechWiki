# Potencial gran canónico

## Resumen

El **potencial gran canónico** $\Phi$ (también llamado potencial de Landau) es el potencial termodinámico natural del ensamble gran canónico: sistemas con temperatura $T$, volumen $V$ y potencial químico $\mu$ fijos. Su relación con la función de gran partición es $\Phi = -k_BT\ln\Xi$.

## Definición y variables naturales

$$
\Phi = F - \mu N = E - TS - \mu N,
$$

con diferencial

$$
d\Phi = -S\,dT - P\,dV - N\,d\mu.
$$

Las variables naturales son $\boxed{T,\,V,\,\mu}$. Las derivadas dan

$$
S = -\!\left(\frac{\partial\Phi}{\partial T}\right)_{V,\mu}, \quad P = -\!\left(\frac{\partial\Phi}{\partial V}\right)_{T,\mu}, \quad N = -\!\left(\frac{\partial\Phi}{\partial\mu}\right)_{T,V}.
$$

## Conexión con la función de gran partición

$$
\Phi(T,V,\mu) = -k_BT\ln\Xi(T,V,\mu), \qquad \Xi = \sum_{N=0}^\infty e^{\beta\mu N}Z_N.
$$

Toda la termodinámica del sistema abierto se obtiene derivando $\Phi$.

## Relación de Euler: $\Phi = -PV$

Para un sistema extensivo, $E = TS - PV + \mu N$ implica

$$
\Phi = E - TS - \mu N = -PV.
$$

Por tanto, la presión es simplemente

$$
P = -\frac{\Phi}{V} = \frac{k_BT\ln\Xi}{V}.
$$

Esta es la ecuación de estado en el lenguaje gran canónico. La identidad $\Phi = -PV$ es la relación de Euler del potencial gran canónico.

## Fluctuaciones de $N$

$$
\langle(\Delta N)^2\rangle = -k_BT\left(\frac{\partial^2\Phi}{\partial\mu^2}\right)_{T,V} = k_BT\!\left(\frac{\partial\langle N\rangle}{\partial\mu}\right)_{T,V}.
$$

Usando termodinámica: $(\partial N/\partial\mu)_{T,V} = N^2 k_B T\kappa_T/V$, con $\kappa_T$ la compresibilidad isotérmica. Las fluctuaciones relativas de $N$ son

$$
\frac{\sqrt{\langle(\Delta N)^2\rangle}}{\langle N\rangle} = \sqrt{\frac{k_BT\kappa_T}{V/N}} \sim N^{-1/2}.
$$

Divergen en el punto crítico ($\kappa_T\to\infty$) y en la condensación de Bose-Einstein ($\mu\to 0^-$, $\kappa_T\to\infty$ en el modo $k=0$).

## Gas ideal: gas de Bose y Fermi

Para el gas cuántico libre:

$$
\Phi = \mp k_BT\sum_\alpha \ln\!\left(1 \mp e^{-\beta(\epsilon_\alpha-\mu)}\right).
$$

El número de partículas $N = -(\partial\Phi/\partial\mu)_{T,V}$ fija $\mu$ implícitamente. En el límite clásico $e^{\beta\mu}\ll 1$:

$$
\Phi \approx -k_BT e^{\beta\mu}\sum_\alpha e^{-\beta\epsilon_\alpha} = -Nk_BT \implies PV = Nk_BT.
$$

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 4: potencial gran canónico, $\Phi=-PV$ y fluctuaciones de $N$.
- Pathria & Beale, *Statistical Mechanics*, cap. 4: función de gran partición para gases cuánticos.
- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 5: relación de Euler y potenciales termodinámicos.

## Páginas relacionadas

- [Ensamble gran canónico](#/ensamble-gran-canonico)
- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Potencial químico](#/potencial-quimico)
- [Compresibilidad](#/compresibilidad)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
- [Transformadas de Legendre](#/transformadas-de-legendre)
