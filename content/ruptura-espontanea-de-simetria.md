# Ruptura espontanea de simetria

## Resumen

**Ruptura espontanea de simetria** es una entrada troncal de transiciones y criticalidad dentro de la mecanica estadistica. Su papel principal se resume asi: seleccion de un estado de equilibrio que no comparte la simetria del Hamiltoniano. La idea no debe verse como una formula aislada: sirve para conectar grados de libertad microscopicos, restricciones macroscopicas y cantidades observables.

## Definicion operativa

En mecanica estadistica conviene definir **Ruptura espontanea de simetria** por su uso operativo: seleccion de un estado de equilibrio que no comparte la simetria del Hamiltoniano. Esto significa que la definicion no se agota en el simbolo matematico, sino en el procedimiento que permite calcular probabilidades, funciones de particion, respuestas o escalas caracteristicas.

## Ecuacion clave

$$
m\neq 0\quad (h\to0^+)
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

## Coherencia dentro de la wiki

Dentro del mapa general, **Ruptura espontanea de simetria** queda reservado para la idea precisa de seleccion de un estado de equilibrio que no comparte la simetria del Hamiltoniano. Su papel local es separar comportamiento regular y singular cerca del limite termodinamico. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
t,\ h,\ L\longrightarrow \xi,\ \chi,\ f_s\longrightarrow \text{exponentes}
$$

Una ampliacion futura deberia partir de seleccion de un estado de equilibrio que no comparte la simetria del Hamiltoniano y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **Transiciones y criticalidad**, conviene moverlo a una pagina troncal.

## Paginas relacionadas

- [Modelo de Ising](#/modelo-de-ising)
- [Fluctuaciones](#/fluctuaciones)
- [Grupo de renormalizacion](#/grupo-renormalizacion)
