# Entropia de Boltzmann

## Resumen

La **entropia de Boltzmann** relaciona la entropia macroscopica de un macroestado con el numero de microestados compatibles con el:

$$
S = k_B \ln \Omega.
$$

Es una de las formulas centrales de la mecanica estadistica.

## Definicion

Si un macroestado $M$ puede realizarse mediante $\Omega(M)$ microestados, su entropia de Boltzmann es

$$
S_B(M)=k_B\ln \Omega(M).
$$

La constante $k_B$ fija las unidades de entropia y conecta la escala microscopica con la temperatura termodinamica.

## Por que aparece el logaritmo

Si dos sistemas independientes tienen numeros de microestados $\Omega_A$ y $\Omega_B$, el sistema compuesto tiene

$$
\Omega_{AB}=\Omega_A\Omega_B.
$$

La entropia debe ser aditiva para sistemas independientes:

$$
S_{AB}=S_A+S_B.
$$

El logaritmo transforma productos en sumas:

$$
\ln(\Omega_A\Omega_B)=\ln\Omega_A+\ln\Omega_B.
$$

Por eso la forma logaritmica es natural.

## Interpretacion fisica

Un macroestado con mayor $\Omega$ puede realizarse de mas maneras microscopicas. Si todos los microestados accesibles son equiprobables, el macroestado con mayor $\Omega$ es el mas probable.

En sistemas macroscopicos, diferencias pequenas en entropia pueden corresponder a razones enormes de probabilidad:

$$
\frac{P_1}{P_2}
=
\frac{\Omega_1}{\Omega_2}
=
\exp\!\left(\frac{S_1-S_2}{k_B}\right).
$$

## Relacion con el equilibrio

Para un sistema aislado, las restricciones macroscopicas fijan cantidades como $E,V,N$. El equilibrio corresponde al macroestado que maximiza $S_B$ bajo esas restricciones.

## Version continua

En sistemas clasicos, $\Omega$ no es un simple numero entero, sino un volumen de espacio de fases adimensional. Una forma microcanonica usual es

$$
\Omega(E,V,N)
=
\frac{1}{h^{3N}N!}
\int_{E\leq H(\Gamma)\leq E+\Delta E}d\Gamma.
$$

## Errores comunes

- Usar $\Omega$ sin definir que macroestado se esta contando.
- Olvidar que en sistemas continuos se necesita una medida.
- Confundir entropia de Boltzmann con entropia de Gibbs en contextos donde los microestados no son equiprobables.
- Pensar que la formula por si sola resuelve todos los problemas de irreversibilidad.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Entropia de Boltzmann** sin introducir un modelo mas complicado que el necesario.

1. **Sistema de dos microestados.** Considera dos estados $a$ y $b$ con probabilidades $p$ y $1-p$. La entrada se aplica al preguntar que informacion microscopica queda resumida por la nocion de Entropia de Boltzmann. En este caso, la normalizacion es $$p_a+p_b=1,$$ y cualquier observable se calcula como $\langle A\rangle=pA_a+(1-p)A_b$.
2. **Conteo con restriccion.** Tres espines independientes tienen $2^3=8$ configuraciones. Si se fija magnetizacion total $M=1$, solo algunas configuraciones quedan accesibles. Este ejemplo muestra como Entropia de Boltzmann cambia cuando se impone una restriccion macroscopica.
3. **Promedio temporal contra promedio de ensamble.** En una caminata que visita estados con frecuencias estables, el promedio temporal de $A$ puede compararse con $\sum_x A(x)p(x)$. Si no coinciden, la aplicacion de Entropia de Boltzmann requiere revisar accesibilidad o ergodicidad.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
S = k_B \ln \Omega.
$$

## Coherencia dentro de la wiki

Dentro del mapa general, **Entropia de Boltzmann** queda reservado para la idea precisa de la nocion de Entropia de Boltzmann. Su papel local es fijar vocabulario, medidas y restricciones antes de elegir un ensamble. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{microestado}\longrightarrow \text{macroestado}\longrightarrow S,\ p,\ \langle A\rangle
$$

Una ampliacion futura deberia partir de la nocion de Entropia de Boltzmann y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Fundamentos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Macroestado](#/macroestado)
- [Microestado](#/microestado)
- [Ensamble microcanonico](#/ensamble-microcanonico)
- [Entropia de Gibbs](#/entropia-de-gibbs)
