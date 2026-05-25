# Transformadas de Legendre

## Resumen

La **transformada de Legendre** es la operación que cambia las variables naturales de un potencial termodinámico. Permite pasar de la energía interna $E(S,V,N)$ a otros potenciales con variables más fáciles de controlar experimentalmente: $T$, $P$, $\mu$. Cada ensamble estadístico corresponde a una transformada de Legendre de $S$ o de $\ln\Omega$.

## Definición matemática

Dada una función convexa $f(x)$, su transformada de Legendre respecto a $x$ es

$$
f^*(p) = \sup_x\!\left[p\,x - f(x)\right], \qquad p = \frac{\partial f}{\partial x}.
$$

La transformada es **involutiva**: $(f^*)^* = f$ cuando $f$ es estrictamente convexa. Esto garantiza que no se pierde información: se puede ir y volver entre potenciales.

## Los cuatro potenciales termodinámicos

Partiendo de $dE = T\,dS - P\,dV + \mu\,dN$:

| Potencial | Definición | Variables naturales | Diferencial |
|---|---|---|---|
| $E$ | — | $S,V,N$ | $dE = T\,dS - P\,dV + \mu\,dN$ |
| $F = E - TS$ | Helmholtz | $T,V,N$ | $dF = -S\,dT - P\,dV + \mu\,dN$ |
| $H = E + PV$ | Entalpía | $S,P,N$ | $dH = T\,dS + V\,dP + \mu\,dN$ |
| $G = E - TS + PV$ | Gibbs | $T,P,N$ | $dG = -S\,dT + V\,dP + \mu\,dN$ |
| $\Phi = F - \mu N$ | Gran canónico | $T,V,\mu$ | $d\Phi = -S\,dT - P\,dV - N\,d\mu$ |

## Por qué las variables naturales importan

Un potencial es una **función característica** solo en sus variables naturales. Conocer $F(T,V,N)$ es equivalente a conocer toda la termodinámica del sistema: de sus derivadas se extraen $S$, $P$ y $\mu$ sin información adicional:

$$
S = -\!\left(\frac{\partial F}{\partial T}\right)_{V,N}, \quad P = -\!\left(\frac{\partial F}{\partial V}\right)_{T,N}, \quad \mu = \left(\frac{\partial F}{\partial N}\right)_{T,V}.
$$

Si $F$ se expresa en variables incorrectas (e.g., $F(T,P,N)$), las derivadas no dan las respuestas correctas.

## Interpretación geométrica

Para una función cóncava $f(x)$ (como $S$ en función de $E$), la transformada de Legendre construye la **envolvente** de todas las rectas tangentes: $f^*(p)$ es el intercepto de la tangente con pendiente $p$. Esto garantiza que la transformada siempre produce una función convexa, y viceversa.

## Relación de Euler y Gibbs-Duhem

Para potenciales extensivos, la relación de Euler conecta todos los potenciales:

$$
E = TS - PV + \mu N.
$$

Diferenciando y comparando con $dE = T\,dS - P\,dV + \mu\,dN$:

$$
S\,dT - V\,dP + N\,d\mu = 0 \qquad \text{(Gibbs-Duhem)}.
$$

La relación de Gibbs-Duhem dice que $T$, $P$ y $\mu$ no son todos independientes: en un sistema de un componente, basta especificar dos de ellos para determinar el tercero.

## Conexión con los ensambles estadísticos

El paso de un ensamble a otro es literalmente una transformada de Legendre de $\ln\Omega(E)$:

$$
\underbrace{\ln Z = \max_E\!\left[\ln\Omega(E) - \beta E\right]}_{\text{microcanónico} \to \text{canónico}}, \qquad F = -k_BT\ln Z.
$$

El ensamble canónico maximiza la entropía del sistema total $S+R$ respecto a $E_S$, lo que equivale a una transformada de Legendre en $\beta = 1/k_BT$.

## Fuentes para profundizar

- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 5: potenciales como transformadas de Legendre, variables naturales y funciones características.
- Kardar, *Statistical Physics of Particles*, cap. 2: potenciales, relación de Euler y Gibbs-Duhem.
- Arnold, *Mathematical Methods of Classical Mechanics*, apéndice: dualidad Lagrangiano-Hamiltoniano como transformada de Legendre en mecánica.

## Páginas relacionadas

- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Energía libre de Gibbs](#/energia-libre-de-gibbs)
- [Potencial gran canónico](#/potencial-gran-canonico)
- [Entalpía](#/entalpia)
- [Relaciones de Maxwell](#/relaciones-de-maxwell)
- [Estabilidad termodinámica](#/estabilidad-termodinamica)
