# Teoria de Landau

## Resumen

**Teoria de Landau** es una entrada troncal de transiciones y criticalidad dentro de la mecanica estadistica. Su papel principal se resume asi: expansion fenomenologica de la energia libre en el parametro de orden. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Teoria de Landau** por su uso operativo: expansion fenomenologica de la energia libre en el parametro de orden. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
F(m)=F_0+am^2+bm^4-hm
$$

## Estructura matematica

$$
\begin{aligned}
f(t,h)&=f_{reg}(t,h)+f_s(t,h),\\
t&=\frac{T-T_c}{T_c},\\
\xi&\sim |t|^{-\nu}
\end{aligned}
$$

$$
\begin{aligned}
p(x)&=\frac{w(x)}{\int_\Gamma d\Gamma\,w(x)},\\
\int_\Gamma d\Gamma\,p(x)&=1,\\
\langle A\rangle&=\int_\Gamma d\Gamma\,A(x)p(x)
\end{aligned}
$$

## Diccionario de derivadas

$$
\begin{aligned}
m&=-\left(\frac{\partial f}{\partial h}\right)_T,\\
\chi&=\left(\frac{\partial m}{\partial h}\right)_T,\\
C&=-T\left(\frac{\partial^2 f}{\partial T^2}\right)_h
\end{aligned}
$$

## Escalas y cantidades sin dimension

$$
\begin{aligned}
f_s(t,h)&=b^{-d}f_s(tb^{y_t},hb^{y_h}),\\
m&\sim |t|^{\beta_c},\\
\chi&\sim |t|^{-\gamma}
\end{aligned}
$$

## Donde suele fallar

$$
\begin{aligned}
\xi&\sim L \quad \Rightarrow \quad \text{efectos de tamano finito},\\
\tau_{rel}&\gg \tau_{obs} \quad \Rightarrow \quad \text{no equilibrado},\\
\frac{\Delta A}{\langle A\rangle}&\not\ll 1 \quad \Rightarrow \quad \text{fluctuaciones relevantes}
\end{aligned}
$$

## Ejemplos y aplicaciones simples

Estos ejemplos son deliberadamente pequenos: muestran como usar **Teoria de Landau** sin introducir un modelo mas complicado que el necesario.

1. **Parametro de orden escalar.** En una red pequena de espines, la magnetizacion media $$m=\frac{1}{N}\sum_i s_i$$ distingue una fase ordenada de una desordenada. La aplicacion de Teoria de Landau es decidir si esa cantidad cambia suavemente o anuncia una transicion.
2. **Tamano finito.** Calcula una susceptibilidad para $L=8$ y $L=16$. Si el maximo crece o se desplaza, el ejemplo ilustra que expansion fenomenologica de la energia libre en el parametro de orden debe leerse junto con el limite termodinamico.
3. **Escala de correlacion.** Si una correlacion decae como $G(r)\sim e^{-r/\xi}$, aumentar $\xi$ vuelve relevante la geometria del sistema. Este caso simple explica por que la criticalidad no puede tratarse como una fluctuacion local ordinaria.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
F(m)=F_0+am^2+bm^4-hm
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Las fuentes de transiciones de fase enfatizan que el fenomeno aparece al combinar interacciones, limite termodinamico y variables de control. Para esta entrada, la lectura tecnica consiste en seguir como cambia el parametro de orden y que aproximacion, campo medio, virial o escala critica, justifica cada ecuacion.

- Kardar, *Statistical Physics of Particles*, cap. 5: para cumulantes, expansion de clusters, virial, van der Waals, campo medio y comportamiento critico.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 26-28: para gases reales, expansion virial, van der Waals, regla de fases, Ising y clasificacion de transiciones.
- Schroeder, *An Introduction to Thermal Physics*, cap. 5: para usar energia libre, potencial quimico, estabilidad y transformaciones de fase como herramientas de calculo.

## Coherencia dentro de la wiki

Dentro del mapa general, **Teoria de Landau** queda reservado para la idea precisa de expansion fenomenologica de la energia libre en el parametro de orden. Su papel local es separar comportamiento regular y singular cerca del limite termodinamico. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
t,\ h,\ L\longrightarrow \xi,\ \chi,\ f_s\longrightarrow \text{exponentes}
$$

Una ampliacion futura deberia partir de expansion fenomenologica de la energia libre en el parametro de orden y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Transiciones y criticalidad**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Modelo de Ising](#/modelo-de-ising)
- [Fluctuaciones](#/fluctuaciones)
- [Grupo de renormalizacion](#/grupo-renormalizacion)
