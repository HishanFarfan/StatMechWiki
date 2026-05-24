# Energia libre de Helmholtz

## Resumen

La **energia libre de Helmholtz** es el potencial termodinamico natural para sistemas a temperatura, volumen y numero de particulas fijos. Es central en el ensamble canonico.

## Definicion termodinamica

La energia libre de Helmholtz se define como

$$
F=E-TS.
$$

Su diferencial termodinamico es

$$
dF=-S\,dT-P\,dV+\mu\,dN.
$$

Por tanto, sus variables naturales son

$$
\boxed{T,\;V,\;N}.
$$

## Relacion con la funcion de particion

En el ensamble canonico,

$$
F(T,V,N)=-k_B T\ln Z(T,V,N).
$$

Esta formula permite calcular propiedades termodinamicas a partir del espectro microscopico o del Hamiltoniano.

## Derivadas

Como $F=F(T,V,N)$,

$$
\begin{aligned}
S &= -\left(\frac{\partial F}{\partial T}\right)_{V,N},\\[4pt]
P &= -\left(\frac{\partial F}{\partial V}\right)_{T,N},\\[4pt]
\mu &= \left(\frac{\partial F}{\partial N}\right)_{T,V}.
\end{aligned}
$$

Estas relaciones identifican las variables conjugadas a $T,V,N$.

## Criterio de equilibrio

Para un sistema en contacto con un reservorio termico a $T$ fija y con $V,N$ fijos, el equilibrio minimiza $F$.

La idea es que el sistema no minimiza simplemente energia interna: tambien debe considerar el intercambio de calor con el reservorio. La combinacion relevante es $E-TS$.

## Relacion con trabajo util

A temperatura constante, la disminucion de $F$ acota el trabajo util extraible de un sistema, excluyendo trabajo de expansion contra el ambiente segun la convencion usada.

## Conexion con otros potenciales

La energia libre de Helmholtz se obtiene desde la energia interna por una transformada de Legendre:

$$
F(T,V,N)
=
E(S,V,N)-TS.
$$

Otros potenciales se obtienen cambiando variables naturales:

$$
\begin{aligned}
G &= F+PV,\\
\Phi &= F-\mu N.
\end{aligned}
$$

Aqui $G$ es la energia libre de Gibbs y $\Phi$ es el potencial gran canonico.

## Errores comunes

- Confundir $F$ con la energia interna $E$.
- Usar $F$ como potencial natural cuando las variables controladas no son $T,V,N$.
- Olvidar que $F=-k_BT\ln Z$ es una relacion canonica.
- Interpretar minimizacion de $F$ fuera de sus condiciones de validez.

## Ejemplo: gas ideal clásico

Para el gas ideal con $Z_N = (V/\lambda_T^3)^N/N!$:

$$
F = -Nk_BT\left[\ln\!\left(\frac{V}{N\lambda_T^3}\right)+1\right].
$$

Las derivadas reproducen los resultados conocidos:
- $P = -(\partial F/\partial V)_{T,N} = Nk_BT/V$ → ecuación de estado.
- $S = -(\partial F/\partial T)_{V,N} = Nk_B[\ln(V/N\lambda_T^3) + 5/2]$ → entropía de Sackur-Tetrode.
- $\mu = (\partial F/\partial N)_{T,V} = k_BT\ln(n\lambda_T^3)$ → negativo en régimen clásico diluido.

## Trabajo máximo a temperatura constante

A temperatura fija ($T$ y $N$ constantes), el primer y segundo principio combinados dan

$$
W \leq -(F_f - F_i) = -\Delta F.
$$

El trabajo realizado *por* el sistema nunca excede la disminución de $F$. La igualdad se alcanza en procesos reversibles. Por eso $F$ se llama «energía libre»: es la fracción de la energía interna disponible para hacer trabajo a $T$ constante.

## Convexidad y estabilidad

La estabilidad termodinámica impone restricciones sobre la forma de $F$:

- **$F$ cóncava en $T$**: $(\partial^2 F/\partial T^2)_{V,N} = -C_V/T \leq 0$ → $C_V \geq 0$.
- **$F$ convexa en $V$**: $(\partial^2 F/\partial V^2)_{T,N} = 1/(V\kappa_T) \geq 0$ → $\kappa_T \geq 0$.

Si se violan estas condiciones, el sistema es termodinámicamente inestable y se produce una separación de fases.

## Fuentes para profundizar

- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 5: $F$ como función característica del ensamble canónico y criterios de estabilidad.
- Kardar, *Statistical Physics of Particles*, cap. 2: potenciales termodinámicos, transformadas de Legendre y estabilidad.
- Schroeder, *An Introduction to Thermal Physics*, cap. 5: energía libre, trabajo disponible y aplicaciones a reacciones químicas.

## Páginas relacionadas

- [Función de partición](#/funcion-de-particion)
- [Ensamble canónico](#/ensamble-canonico)
- [Transformadas de Legendre](#/transformadas-de-legendre)
- [Energía libre de Gibbs](#/energia-libre-de-gibbs)
- [Potencial gran canónico](#/potencial-gran-canonico)
- [Estabilidad termodinámica](#/estabilidad-termodinamica)
- [Entropía de Gibbs](#/entropia-de-gibbs)
