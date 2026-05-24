# Funcion de particion

## Resumen

La **funcion de particion** normaliza una distribucion estadistica y genera propiedades termodinamicas. En el ensamble canonico, contiene la informacion necesaria para calcular energia, entropia, presion y energia libre.

## Definicion canonica

Para microestados discretos $i$ con energia $E_i$,

$$
Z(T,V,N)=\sum_i e^{-\beta E_i},
\qquad
\beta=\frac{1}{k_B T}.
$$

La probabilidad de cada microestado es

$$
p_i=\frac{e^{-\beta E_i}}{Z}.
$$

## Caso con degeneracion

Si se agrupan microestados por niveles de energia $E_a$ con degeneracion $g_a$,

$$
Z=\sum_a g_a e^{-\beta E_a}.
$$

Esto distingue entre sumar sobre microestados y sumar sobre niveles de energia.

## Version clasica

Para un sistema clasico,

$$
Z(T,V,N)
=
\frac{1}{h^{3N}N!}
\int d\Gamma\, e^{-\beta H(\Gamma)}.
$$

Los factores $h^{3N}$ y $N!$ hacen la integral adimensional y corrigen la indistinguibilidad de particulas identicas.

## Energia libre

La energia libre de Helmholtz se obtiene de

$$
F(T,V,N)=-k_B T\ln Z.
$$

Esta relacion convierte un objeto estadistico, $Z$, en un potencial termodinamico.

## Energia media y fluctuaciones

La energia media es

$$
\langle E\rangle
=
-\frac{\partial \ln Z}{\partial \beta}.
$$

La varianza de la energia es

$$
\langle(\Delta E)^2\rangle
=
\frac{\partial^2 \ln Z}{\partial \beta^2}.
$$

Por tanto, $Z$ genera cumulantes de energia.

## Derivadas termodinamicas

A partir de $F$,

$$
\begin{aligned}
S &= -\left(\frac{\partial F}{\partial T}\right)_{V,N},\\[4pt]
P &= -\left(\frac{\partial F}{\partial V}\right)_{T,N},\\[4pt]
\mu &= \left(\frac{\partial F}{\partial N}\right)_{T,V}.
\end{aligned}
$$

## Interpretacion

La funcion de particion pesa cada microestado por el factor de Boltzmann. A baja temperatura, los estados de menor energia dominan. A alta temperatura, la penalizacion energetica es menor y contribuyen mas estados.

## Ejemplo: sistema de dos niveles

Para $E_0=0$ y $E_1=\varepsilon$:

$$Z = 1 + e^{-\beta\varepsilon}$$

$$\langle E\rangle = \frac{\varepsilon e^{-\beta\varepsilon}}{1+e^{-\beta\varepsilon}}, \qquad C_V = k_B\left(\frac{\varepsilon}{k_BT}\right)^2\frac{e^{-\beta\varepsilon}}{(1+e^{-\beta\varepsilon})^2}$$

El pico de $C_V$ a $k_BT \approx 0.42\,\varepsilon$ (pico de Schottky) es una firma característica de sistemas de dos niveles que aparece en espines, impurezas y moléculas diatómicas.

## Factorización para sistemas independientes

Si el Hamiltoniano se descompone en partes independientes $H = H_A + H_B$ con espectros separados, la función de partición factoriza:

$$Z_{AB} = Z_A \cdot Z_B$$

Esto se demuestra directamente: $Z_{AB} = \sum_{i,j}e^{-\beta(E_i^A + E_j^B)} = \left(\sum_i e^{-\beta E_i^A}\right)\left(\sum_j e^{-\beta E_j^B}\right)$.

**Consecuencia:** para $N$ osciladores armónicos independientes (sólido de Einstein), $Z = Z_1^N$ donde $Z_1 = e^{-\beta\hbar\omega/2}/(1-e^{-\beta\hbar\omega})$ es la función de partición de un oscilador.

Para partículas **indistinguibles** no interactuantes en el límite clásico:

$$Z_N = \frac{Z_1^N}{N!}$$

El factor $N!$ corrige la sobrecontabilización por indistinguibilidad.

## Conexión microcanónica: transformada de Laplace

La función de partición es la transformada de Laplace de la densidad de estados:

$$Z(\beta) = \int_0^\infty g(E)\,e^{-\beta E}\,dE$$

Esto conecta los dos ensambles: dado $g(E)$ (microcanónico), se obtiene $Z(\beta)$ (canónico). La inversa —obtener $g(E)$ dado $Z(\beta)$— se hace por la transformada de Laplace inversa, que en el límite $N\to\infty$ se evalúa por el método del punto de silla.

## Errores comunes

- **"$Z$ es solo una constante"**: falso; $Z$ genera toda la termodinámica.
- **Olvidar la degeneración**: si hay $g_a$ estados con energía $E_a$, hay que usar $Z = \sum_a g_a e^{-\beta E_a}$.
- **No incluir $h^{3N}N!$** en la versión clásica: sin ellos, $F$ no es extensiva.
- **Usar $Z$ cuando corresponde $\Xi$**: si $N$ no está fijo, hay que usar la gran función de partición.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 4: función de partición, factorización, y conexión con termodinámica.
- Reif, *Fundamentals of Statistical and Thermal Physics*, caps. 6-7: ejemplos detallados incluyendo gas ideal y osciladores.
- Pathria & Beale, *Statistical Mechanics*, cap. 3: tratamiento riguroso incluyendo la conexión microcanónico-canónico vía transformada de Laplace.

## Páginas relacionadas

- [Ensamble canónico](#/ensamble-canonico)
- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Distribución de Boltzmann](#/distribucion-de-boltzmann)
- [Densidad de estados](#/densidad-de-estados)
- [Ensamble gran canónico](#/ensamble-gran-canonico)
- [Fluctuaciones](#/fluctuaciones)
