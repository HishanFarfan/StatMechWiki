# Gas ideal clasico

## Resumen

El **gas ideal clasico** es un sistema de particulas no interactuantes en el regimen donde los efectos cuanticos de indistinguibilidad solo aparecen como el factor $1/N!$. Es uno de los modelos basicos de la mecanica estadistica.

## Hamiltoniano

Para $N$ particulas de masa $m$ en una caja de volumen $V$,

$$
H(p,q)=\sum_{i=1}^{N}\frac{p_i^2}{2m}.
$$

No hay energia potencial de interaccion entre particulas.

## Funcion de particion canonica

La funcion de particion clasica es

$$
Z_N
=
\frac{1}{h^{3N}N!}
\int d^{3N}q\,d^{3N}p\,
e^{-\beta\sum_i p_i^2/(2m)}.
$$

La integral de posiciones da $V^N$ y la de momentos es gaussiana:

$$
\int d^3p\, e^{-\beta p^2/(2m)}
=
\left(\frac{2\pi m}{\beta}\right)^{3/2}.
$$

Por tanto,

$$
Z_N
=
\frac{1}{N!}
\left(\frac{V}{\lambda_T^3}\right)^N,
$$

donde

$$
\lambda_T
=
\frac{h}{\sqrt{2\pi m k_B T}}
$$

es la longitud de onda termica.

## Energia libre

Usando Stirling,

$$
\ln N! \simeq N\ln N-N,
$$

se obtiene

$$
F
=
-Nk_B T
\left[
\ln\!\left(\frac{V}{N\lambda_T^3}\right)+1
\right].
$$

## Ecuacion de estado

La presion se obtiene de

$$
P=-\left(\frac{\partial F}{\partial V}\right)_{T,N}.
$$

Esto da la ecuacion de estado del gas ideal:

$$
PV=Nk_B T.
$$

## Energia interna

La energia media es

$$
\langle E\rangle
=
-\frac{\partial \ln Z_N}{\partial \beta}
=
\frac{3}{2}Nk_B T.
$$

La capacidad calorifica a volumen constante es

$$
C_V
=
\left(\frac{\partial \langle E\rangle}{\partial T}\right)_{V,N}
=
\frac{3}{2}Nk_B.
$$

## Entropia de Sackur-Tetrode

La entropia canonica resulta

$$
S
=
Nk_B
\left[
\ln\!\left(\frac{V}{N\lambda_T^3}\right)
+
\frac{5}{2}
\right].
$$

Esta expresion es valida en el regimen clasico diluido:

$$
n\lambda_T^3 \ll 1.
$$

## Potencial quimico

El potencial quimico es

$$
\mu
=
k_B T\ln(n\lambda_T^3),
\qquad
n=\frac{N}{V}.
$$

En el regimen clasico diluido, $n\lambda_T^3\ll 1$, por lo que $\mu$ suele ser negativo.

## Distribución de velocidades de Maxwell

La distribución de Boltzmann para el momento de una partícula da la distribución de Maxwell para la rapidez $v = |\mathbf{v}|$:

$$f(v) = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2}v^2\,e^{-mv^2/2k_BT}$$

Velocidades características:
- **Velocidad más probable**: $v_p = \sqrt{2k_BT/m}$
- **Velocidad media**: $\langle v\rangle = \sqrt{8k_BT/\pi m}$
- **Velocidad cuadrática media**: $v_\text{rms} = \sqrt{3k_BT/m}$

Para N₂ a 300 K: $v_p \approx 422\ \text{m/s}$, $v_\text{rms} \approx 515\ \text{m/s}$.

## Régimen de validez

El gas ideal clásico es válido cuando:
- $n\lambda_T^3 \ll 1$: los paquetes de onda no se superponen (límite clásico).
- Las interacciones son despreciables: $\langle|V_{ij}|\rangle \ll k_BT$.

| Gas | $T$ (K) | $n$ (m$^{-3}$) | $n\lambda_T^3$ |
|---|---|---|---|
| He a STP | 300 | $2.7\times10^{25}$ | $3\times10^{-6}$ → clásico |
| e⁻ en Cu | 300 | $8.5\times10^{28}$ | $10^3$ → cuántico |

## Errores comunes

- **Omitir $1/N!$**: sin él, la entropía no es extensiva (paradoja de Gibbs).
- **Usar cuando $n\lambda_T^3 \gtrsim 1$**: hay que usar gas de Bose o Fermi.
- **Confundir con gas real**: el gas de van der Waals incluye volumen excluido y atracción. El gas ideal es el límite $a \to 0$, $b \to 0$.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 4: derivación completa de $Z_N$, entropía de Sackur-Tetrode y potencial químico.
- Reif, *Fundamentals of Statistical and Thermal Physics*, cap. 7: gas ideal clásico con énfasis en la distribución de Maxwell y la presión cinética.
- Callen, *Thermodynamics and an Introduction to Thermostatistics*: relaciones termodinámicas del gas ideal desde la energía libre.

## Páginas relacionadas

- [Función de partición](#/funcion-de-particion)
- [Ensamble canónico](#/ensamble-canonico)
- [Densidad de estados](#/densidad-de-estados)
- [Potencial químico](#/potencial-quimico)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
- [Distribución de Maxwell-Boltzmann](#/distribucion-maxwell-boltzmann)
- [Paradoja de Gibbs](#/paradoja-de-gibbs)
