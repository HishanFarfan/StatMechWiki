# Oscilador armonico

## Resumen

El **oscilador armonico** es un modelo central porque aparece como aproximacion cuadratica cerca de puntos de equilibrio. En mecanica estadistica sirve para estudiar vibraciones, fonones y modos normales.

## Oscilador cuantico

Los niveles de energia de un oscilador armonico cuantico son

$$
E_n=\hbar\omega\left(n+\frac{1}{2}\right),
\qquad
n=0,1,2,\ldots
$$

La funcion de particion es

$$
Z
=
\sum_{n=0}^{\infty}
e^{-\beta\hbar\omega(n+1/2)}
=
\frac{e^{-\beta\hbar\omega/2}}
{1-e^{-\beta\hbar\omega}}.
$$

Tambien puede escribirse como

$$
Z=\frac{1}{2\sinh(\beta\hbar\omega/2)}.
$$

## Energia media

La energia media es

$$
\langle E\rangle
=
-\frac{\partial \ln Z}{\partial \beta}
=
\frac{\hbar\omega}{2}
+
\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}.
$$

El primer termino es la energia de punto cero. El segundo corresponde a excitaciones termicas.

## Limite clasico

Cuando $k_B T\gg \hbar\omega$,

$$
\langle E\rangle \simeq k_B T.
$$

Este resultado coincide con el teorema de equiparticion: hay dos terminos cuadraticos, energia cinetica y potencial, cada uno contribuyendo $k_B T/2$.

## Capacidad calorifica

La capacidad calorifica de un oscilador cuantico es

$$
C
=
k_B
\left(\frac{\beta\hbar\omega}{2\sinh(\beta\hbar\omega/2)}\right)^2.
$$

A baja temperatura, $C$ cae exponencialmente; a alta temperatura, $C\to k_B$.

## Oscilador clasico

Para el Hamiltoniano clasico

$$
H(p,q)=\frac{p^2}{2m}+\frac{1}{2}m\omega^2 q^2,
$$

la funcion de particion clasica es proporcional a

$$
Z_{\mathrm{cl}}
\propto
\int dp\,dq\, e^{-\beta H(p,q)}.
$$

La energia media clasica es

$$
\langle E\rangle_{\mathrm{cl}}=k_B T.
$$

## Aplicaciones

- vibraciones moleculares;
- modos normales en solidos;
- solido de Einstein;
- aproximaciones cuadraticas alrededor del equilibrio;
- campos libres como colecciones de osciladores.

## Errores comunes

- Olvidar la energia de punto cero en el caso cuantico.
- Usar el limite clasico a baja temperatura.
- Confundir frecuencia angular $\omega$ con frecuencia ordinaria $\nu$.
- Omitir que un solido real tiene muchos modos con distintas frecuencias.

## Fluctuaciones y desplazamiento cuadrático medio

En el estado cuántico térmico, el desplazamiento cuadrático medio es

$$
\langle x^2\rangle
=
\frac{\hbar}{2m\omega}\coth\!\left(\frac{\beta\hbar\omega}{2}\right).
$$

En el límite clásico ($k_BT \gg \hbar\omega$), $\coth(x)\to 1/x$ y $\langle x^2\rangle \to k_BT/m\omega^2$, consistente con el teorema de equipartición. En el límite de baja temperatura, $\langle x^2\rangle \to \hbar/2m\omega$: fluctuaciones cuánticas irreducibles, independientes de $T$.

## Energía del punto cero

La energía de punto cero $E_0 = \hbar\omega/2$ es un efecto puramente cuántico sin análogo clásico. Sus consecuencias físicas incluyen:

- **Estabilidad de la materia**: el principio de incertidumbre impide que electrones y núcleos colapsen.
- **Corrección de Casimir**: las fluctuaciones del vacío entre dos placas conductoras generan una fuerza atractiva medible $\sim \hbar c / d^4$.
- **Divergencia en teoría de campos**: en el campo electromagnético, la energía de punto cero suma sobre infinitos modos y requiere renormalización.
- **Helio líquido**: el $^4$He permanece líquido a presión atmosférica hasta $T = 0$ porque la energía de punto cero supera la energía de cristalización.

## Función de partición clásica explícita

Para el oscilador clásico con $H = p^2/2m + m\omega^2 q^2/2$:

$$
Z_{\mathrm{cl}}
=
\frac{1}{h}
\int_{-\infty}^{\infty}\!\!dp
\int_{-\infty}^{\infty}\!\!dq\;
e^{-\beta(p^2/2m + m\omega^2 q^2/2)}
=
\frac{1}{h}
\sqrt{\frac{2\pi m}{\beta}}
\sqrt{\frac{2\pi}{\beta m\omega^2}}
=
\frac{k_BT}{\hbar\omega}.
$$

Por tanto $\langle E\rangle_\mathrm{cl} = -\partial\ln Z_\mathrm{cl}/\partial\beta = k_BT$, confirmando la equipartición (dos grados cuadráticos).

## Realizaciones físicas

| Sistema | $\omega$ típica | $T_{\text{cruce}}\ (\hbar\omega/k_B)$ | Régimen a 300 K |
|---|---|---|---|
| Modo acústico en Cu | $10^{12}\ \text{rad/s}$ | 8 K | clásico |
| Vibración O–H | $5\times10^{14}\ \text{rad/s}$ | 3800 K | cuántico |
| Modo de torsión en etano | $10^{13}\ \text{rad/s}$ | 80 K | parcialmente cuántico |
| Campo EM en microondas ($\nu=10\ \text{GHz}$) | $6\times10^{10}\ \text{Hz}$ | 0.5 K | clásico |

**Osciladores en la física cuántica de la información**: los modos del campo electromagnético en una cavidad son osciladores cuánticos; los estados coherentes $|\alpha\rangle$ minimizan la incertidumbre y reproducen el comportamiento clásico, mientras que los estados de Fock $|n\rangle$ tienen fluctuaciones de fase ilimitadas.

## Fuentes para profundizar

- Sakurai & Napolitano, *Modern Quantum Mechanics*, cap. 2: oscilador armónico cuántico con operadores escalera, estados coherentes y representación de Fock.
- Kardar, *Statistical Physics of Particles*, cap. 4: función de partición del oscilador y conexión con el sólido de Einstein y la distribución de Planck.
- Kittel & Kroemer, *Thermal Physics*, cap. 4: oscilador clásico y cuántico, equipartición y límite cuántico.
- Pathria & Beale, *Statistical Mechanics*, cap. 3: fluctuaciones cuánticas y termalización de modos.

## Páginas relacionadas

- [Sólido de Einstein](#/solido-de-einstein)
- [Sólido de Debye](#/solido-de-debye)
- [Teorema de equipartición](#/teorema-de-equiparticion)
- [Función de partición](#/funcion-de-particion)
- [Densidad de estados](#/densidad-de-estados)
- [Sistema de dos niveles](#/sistema-de-dos-niveles)
