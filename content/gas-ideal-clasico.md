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

## Errores comunes

- Omitir el factor $1/N!$ y obtener la paradoja de Gibbs.
- Aplicar el resultado clasico cuando $n\lambda_T^3$ no es pequeno.
- Confundir gas ideal clasico con gas ideal cuantico.
- Olvidar que no hay energia potencial de interaccion.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Gas ideal clasico** sin introducir un modelo mas complicado que el necesario.

1. **Modelo minimo.** Toma dos sitios o dos espines y asigna una energia a cada configuracion. La aplicacion de Gas ideal clasico consiste en decidir que mecanismo retiene el modelo: interaccion, exclusion, alineamiento, actividad o conectividad.
2. **Limite soluble.** Anula la interaccion o toma temperatura alta. En ese limite, muchos modelos recuperan pesos casi uniformes, $$p(x)\simeq \frac{1}{\Omega}.$$ Si la nocion de Gas ideal clasico no reproduce ese comportamiento cuando corresponde, la formulacion necesita revision.
3. **Observable concreto.** Calcula energia media, ocupacion, magnetizacion o desplazamiento cuadratico medio en una red pequena. La utilidad de Gas ideal clasico aparece cuando ese observable distingue dos mecanismos que parecerian iguales solo mirando la definicion.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
H(p,q)=\sum_{i=1}^{N}\frac{p_i^2}{2m}.
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Gas ideal clasico** queda reservado para la idea precisa de la nocion de Gas ideal clasico. Su papel local es aislar un mecanismo fisico mediante grados de libertad, Hamiltonianos o reglas dinamicas controladas. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{grados de libertad}\longrightarrow H\ \text{o}\ W\longrightarrow \text{observables}
$$

Una ampliacion futura deberia partir de la nocion de Gas ideal clasico y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Modelos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Funcion de particion](#/funcion-de-particion)
- [Ensamble canonico](#/ensamble-canonico)
- [Potencial quimico](#/potencial-quimico)
- [Espacio de fases](#/espacio-de-fases)
