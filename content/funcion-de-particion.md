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

Para $E_0=0$ y $E_1=\epsilon$,

$$
Z=1+e^{-\beta\epsilon}.
$$

La probabilidad del estado excitado es

$$
p_1=\frac{e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}.
$$

## Errores comunes

- Pensar que $Z$ es solo una constante de normalizacion.
- No distinguir niveles de energia de microestados.
- Omitir degeneraciones.
- Olvidar factores de indistinguibilidad en integrales clasicas.
- Usar $Z$ canonica cuando corresponde usar $\Xi$ gran canonica.

## Coherencia dentro de la wiki

Dentro del mapa general, **Funcion de particion** queda reservado para la idea precisa de la nocion de Funcion de particion. Su papel local es traducir promedios microscopicos en potenciales, derivadas y criterios de estabilidad. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{potencial}\longrightarrow \text{variables naturales}\longrightarrow \text{respuestas}
$$

Una ampliacion futura deberia partir de la nocion de Funcion de particion y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Termodinamica estadistica**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Ensamble canonico](#/ensamble-canonico)
- [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Espacio de fases](#/espacio-de-fases)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
