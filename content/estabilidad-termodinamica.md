# Estabilidad termodinámica

## Resumen

La **estabilidad termodinámica** establece las condiciones que deben satisfacer los potenciales termodinámicos para que el equilibrio sea estable frente a pequeñas fluctuaciones. Las condiciones se expresan como condiciones de convexidad/concavidad sobre los potenciales y están directamente relacionadas con la positividad de la capacidad calorífica y la compresibilidad.

## Condiciones de estabilidad

El equilibrio termodinámico es un **máximo** de la entropía $S(E,V,N)$ del sistema aislado, lo que impone concavidad de $S$:

$$
\left(\frac{\partial^2 S}{\partial E^2}\right)_{V,N} \leq 0 \implies C_V \geq 0,
$$

$$
\left(\frac{\partial^2 S}{\partial V^2}\right)_{E,N} \leq 0 \implies \kappa_T \geq 0.
$$

Equivalentemente, $F(T,V,N)$ debe ser **convexo** en sus variables extensivas:

$$
\left(\frac{\partial^2 F}{\partial T^2}\right)_{V,N} = -\frac{C_V}{T} \leq 0 \quad \text{(cóncava en }T\text{)},
$$

$$
\left(\frac{\partial^2 F}{\partial V^2}\right)_{T,N} = \frac{1}{V\kappa_T} \geq 0 \quad \text{(convexa en }V\text{)}.
$$

## Condiciones necesarias y suficientes

La estabilidad requiere que la matriz hessiana de $E(S,V,N)$ sea semidefinida positiva:

$$
\begin{pmatrix}
E_{SS} & E_{SV} \\
E_{VS} & E_{VV}
\end{pmatrix} \succeq 0.
$$

Las condiciones necesarias son $E_{SS} \geq 0$ ($C_V \geq 0$) y $E_{VV} \geq 0$ ($\kappa_S \geq 0$). La condición suficiente también incluye el determinante: $E_{SS}E_{VV} \geq E_{SV}^2$.

## Inestabilidad y separación de fases

Cuando las condiciones de estabilidad se violan, el sistema no puede existir como fase homogénea: se separa en dos o más fases en equilibrio. El mecanismo es:

- **Inestabilidad mecánica** ($\kappa_T < 0$): la presión aumenta con el volumen → cualquier fluctuación de densidad crece → separación de fases espontánea (**spinodal**).
- **Metaestabilidad**: $\kappa_T > 0$ pero fuera de la región de coexistencia → el sistema puede existir transitoriamente pero no es el estado de menor $G$.

La región de inestabilidad mecánica en el diagrama $P$-$V$ del gas de van der Waals (la parte con pendiente positiva de las isotermas subcríticas) está delimitada por la **curva espinodal**.

## Construcción de Maxwell

Cuando la isoterma predicha por una ecuación de estado (e.g., van der Waals) viola la estabilidad ($\partial P/\partial V > 0$ en algún rango), la isoterma real se obtiene reemplazando esa región por una línea horizontal a la presión de coexistencia $P^*$, determinada por la **construcción de Maxwell**:

$$
\int_{V_\ell}^{V_g}(P - P^*)\,dV = 0,
$$

donde $V_\ell$ y $V_g$ son los volúmenes molares del líquido y gas en coexistencia. Esto equivale a igualar las energías libres de Gibbs: $G_\ell = G_g$.

## Estabilidad en mezclas: regla de fases de Gibbs

Para mezclas de $C$ componentes con $\varphi$ fases en equilibrio, la regla de fases de Gibbs es

$$
f = C - \varphi + 2,
$$

donde $f$ es el número de grados de libertad (variables intensivas libremente ajustables). Para agua pura ($C=1$) en el punto triple ($\varphi=3$): $f=0$ (fijo). Para agua+hielo ($C=1$, $\varphi=2$): $f=1$ (la presión fija la temperatura de fusión).

## Fuentes para profundizar

- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 8: condiciones de estabilidad, metaestabilidad y separación de fases.
- Kardar, *Statistical Physics of Particles*, cap. 2: convexidad de los potenciales, inestabilidad espinodal, construcción de Maxwell.
- Landau & Lifshitz, *Statistical Physics I*, cap. 4: fluctuaciones y condiciones de estabilidad.

## Páginas relacionadas

- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Energía libre de Gibbs](#/energia-libre-de-gibbs)
- [Compresibilidad](#/compresibilidad)
- [Capacidad calorífica](#/capacidad-calorifica)
- [Relaciones de Maxwell](#/relaciones-de-maxwell)
- [Transiciones de fase](#/transiciones-de-fase)
- [Ecuación de estado](#/ecuacion-de-estado)
