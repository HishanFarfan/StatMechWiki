# Materia activa

## Resumen

**Materia activa** es una entrada troncal de modelos dentro de la mecanica estadistica. Su papel principal se resume asi: sistemas compuestos por unidades que consumen energia para moverse o ejercer fuerzas. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Materia activa** por su uso operativo: sistemas compuestos por unidades que consumen energia para moverse o ejercer fuerzas. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
\dot{\mathbf r}=v_0\mathbf n+\mu\mathbf F+\sqrt{2D}\boldsymbol\eta
$$

## Estructura matematica

$$
\begin{aligned}
H(\{x_i\})&=H_0+H_{int}+H_{ext},\\
Z&=\sum_{\{x_i\}}e^{-\beta H(\{x_i\})},\\
f&=-\frac{k_BT}{N}\ln Z
\end{aligned}
$$

$$
\begin{aligned}
p(\{x_i\})&=\frac{e^{-\beta H(\{x_i\})}}{Z},\\
\sum_{\{x_i\}}p(\{x_i\})&=1,\\
\langle A\rangle&=\sum_{\{x_i\}}A(\{x_i\})p(\{x_i\})
\end{aligned}
$$

## Diccionario de derivadas

$$
\begin{aligned}
F&=-k_BT\ln Z,\\
\langle E\rangle&=-\frac{\partial \ln Z}{\partial \beta},\\
\frac{\partial^2 \ln Z}{\partial \beta^2}&=\langle E^2\rangle-\langle E\rangle^2
\end{aligned}
$$

## Escalas y cantidades sin dimension

$$
\begin{aligned}
K&=\beta J,\\
u&=\beta h,\\
\ell&\sim \xi/a
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

Estos ejemplos son deliberadamente pequenos: muestran como usar **Materia activa** sin introducir un modelo mas complicado que el necesario.

1. **Modelo minimo.** Toma dos sitios o dos espines y asigna una energia a cada configuracion. La aplicacion de Materia activa consiste en decidir que mecanismo retiene el modelo: interaccion, exclusion, alineamiento, actividad o conectividad.
2. **Limite soluble.** Anula la interaccion o toma temperatura alta. En ese limite, muchos modelos recuperan pesos casi uniformes, $$p(x)\simeq \frac{1}{\Omega}.$$ Si sistemas compuestos por unidades que consumen energia para moverse o ejercer fuerzas no reproduce ese comportamiento cuando corresponde, la formulacion necesita revision.
3. **Observable concreto.** Calcula energia media, ocupacion, magnetizacion o desplazamiento cuadratico medio en una red pequena. La utilidad de Materia activa aparece cuando ese observable distingue dos mecanismos que parecerian iguales solo mirando la definicion.

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
\dot{\mathbf r}=v_0\mathbf n+\mu\mathbf F+\sqrt{2D}\boldsymbol\eta
$$

## Fuentes para profundizar

Estas lecturas se usan como guia conceptual y de verificacion; la entrada sintetiza el material con redaccion propia y sin reproducir pasajes extensos de los libros.

Los libros usan modelos simples para aislar mecanismos: dos niveles, gas ideal, solido de Einstein, Ising, van der Waals o gases cuanticos. La mejora editorial para esta entrada es hacer explicito que grados de libertad se conservan, que interacciones se descartan y que observable debe cambiar si el mecanismo propuesto es realmente relevante.

- Kardar, *Statistical Physics of Particles*, cap. 4: para ensambles microcanonico, canonico, Gibbs y gran canonico, incluyendo sistemas de dos niveles y gas ideal.
- Kardar, *Statistical Physics of Particles*, cap. 5: para cumulantes, expansion de clusters, virial, van der Waals, campo medio y comportamiento critico.
- Blundell y Blundell, *Concepts in Thermal Physics*, caps. 26-28: para gases reales, expansion virial, van der Waals, regla de fases, Ising y clasificacion de transiciones.

## Coherencia dentro de la wiki

Dentro del mapa general, **Materia activa** queda reservado para la idea precisa de sistemas compuestos por unidades que consumen energia para moverse o ejercer fuerzas. Su papel local es aislar un mecanismo fisico mediante grados de libertad, Hamiltonianos o reglas dinamicas controladas. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
\text{grados de libertad}\longrightarrow H\ \text{o}\ W\longrightarrow \text{observables}
$$

Una ampliacion futura deberia partir de sistemas compuestos por unidades que consumen energia para moverse o ejercer fuerzas y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Modelos**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Gas ideal clasico](#/gas-ideal-clasico)
- [Modelo de Ising](#/modelo-de-ising)
- [Sistema de dos niveles](#/sistema-de-dos-niveles)
