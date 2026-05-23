# Modelo de Ising

## Resumen

El **modelo de Ising** es un modelo de espines discretos en una red. Es fundamental para estudiar magnetismo, transiciones de fase, ruptura espontanea de simetria y fenomenos criticos.

## Definicion

En cada sitio $i$ de una red hay una variable de espin

$$
s_i=\pm 1.
$$

El Hamiltoniano usual es

$$
H
=
-J\sum_{\langle i,j\rangle}s_i s_j
-h\sum_i s_i,
$$

donde $J$ es el acoplamiento entre vecinos, $h$ es el campo externo y $\langle i,j\rangle$ indica pares de vecinos cercanos.

## Interpretacion de parametros

- Si $J \gt 0$, el acoplamiento favorece espines alineados: caso ferromagnetico.
- Si $J \lt 0$, favorece espines opuestos: caso antiferromagnetico.
- El campo $h$ favorece $s_i=+1$ si $h \gt 0$.

## Funcion de particion

La funcion de particion es

$$
Z
=
\sum_{\{s_i\}}
e^{-\beta H(\{s_i\})}.
$$

La suma recorre las $2^N$ configuraciones posibles de espines.

## Magnetizacion

El parametro de orden ferromagnetico es la magnetizacion por sitio:

$$
m=\frac{1}{N}\sum_i \langle s_i\rangle.
$$

En ausencia de campo, $m$ distingue la fase ordenada de la desordenada.

## Simetria

Cuando $h=0$, el Hamiltoniano es invariante bajo inversion global de espines:

$$
s_i\mapsto -s_i.
$$

En la fase ferromagnetica, esta simetria puede romperse espontaneamente en el limite termodinamico.

## Campo medio

En la aproximacion de campo medio, cada espin siente un campo efectivo proporcional a la magnetizacion:

$$
h_{\mathrm{eff}}=h+zJm,
$$

donde $z$ es el numero de vecinos. La ecuacion autoconsistente es

$$
m=\tanh\!\left[\beta(h+zJm)\right].
$$

Para $h=0$, la transicion de campo medio ocurre cuando

$$
k_B T_c=zJ.
$$

## Dimensionalidad

El modelo de Ising en una dimension no tiene transicion de fase a temperatura finita para $J$ finito. En dos dimensiones, el modelo ferromagnetico sin campo tiene una solucion exacta con transicion continua. En tres dimensiones no se conoce solucion exacta cerrada, pero se estudia con simulaciones, expansiones y renormalizacion.

## Cantidades de interes

- magnetizacion $m$;
- susceptibilidad magnetica $\chi$;
- calor especifico $C$;
- longitud de correlacion $\xi$;
- energia media $\langle E\rangle$;
- correlaciones $\langle s_i s_j\rangle$.

## Errores comunes

- Confundir una red finita con el limite termodinamico.
- Esperar ruptura espontanea exacta en un sistema finito sin campo.
- Usar campo medio como si fuera exacto en baja dimension.
- Olvidar especificar la red y condiciones de borde.

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Modelo de Ising** sin introducir un modelo mas complicado que el necesario.

1. **Modelo minimo.** Toma dos sitios o dos espines y asigna una energia a cada configuracion. La aplicacion de Modelo de Ising consiste en decidir que mecanismo retiene el modelo: interaccion, exclusion, alineamiento, actividad o conectividad.
2. **Limite soluble.** Anula la interaccion o toma temperatura alta. En ese limite, muchos modelos recuperan pesos casi uniformes, $$p(x)\simeq \frac{1}{\Omega}.$$ Si la nocion de Modelo de Ising no reproduce ese comportamiento cuando corresponde, la formulacion necesita revision.
3. **Observable concreto.** Calcula energia media, ocupacion, magnetizacion o desplazamiento cuadratico medio en una red pequena. La utilidad de Modelo de Ising aparece cuando ese observable distingue dos mecanismos que parecerian iguales solo mirando la definicion.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
s_i=\pm 1.
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Las fuentes de transiciones de fase enfatizan que el fenomeno aparece al combinar interacciones, limite termodinamico y variables de control. Para esta entrada, la lectura tecnica consiste en seguir como cambia el parametro de orden y que aproximacion, campo medio, virial o escala critica, justifica cada ecuacion.

- Kardar, *Statistical Physics of Particles*, cap. 5: para cumulantes, expansion de clusters, virial, van der Waals, campo medio y comportamiento critico.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 26-28: para gases reales, expansion virial, van der Waals, regla de fases, Ising y clasificacion de transiciones.
- Schroeder, *An Introduction to Thermal Physics*, cap. 5: para usar energia libre, potencial quimico, estabilidad y transformaciones de fase como herramientas de calculo.
- Kardar, *Statistical Physics of Particles*, cap. 4: para ensambles microcanonico, canonico, Gibbs y gran canonico, incluyendo sistemas de dos niveles y gas ideal.

## Coherencia dentro de la wiki

Dentro del mapa general, **Modelo de Ising** queda reservado para la idea precisa de la nocion de Modelo de Ising. Su papel local es aislar un mecanismo fisico mediante grados de libertad, Hamiltonianos o reglas dinamicas controladas. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{grados de libertad}\longrightarrow H\ \text{o}\ W\longrightarrow \text{observables}
$$

Una ampliacion futura deberia partir de la nocion de Modelo de Ising y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Modelos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Funcion de particion](#/funcion-de-particion)
- [Fluctuaciones](#/fluctuaciones)
- [Ensamble canonico](#/ensamble-canonico)
