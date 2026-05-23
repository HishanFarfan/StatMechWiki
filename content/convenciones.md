# Convenciones de notacion

## Convencion base

La wiki usa $k_B$ explicita por defecto. La temperatura inversa se define como

$$
\beta=\frac{1}{k_B T}.
$$

Si una pagina usa unidades con $k_B=1$, debe declararlo al inicio.

## Ensambles

$$
\begin{array}{c|c|c}
\text{Ensamble} & \text{Variables fijas} & \text{Potencial}\\
\hline
\text{Microcanonico} & E,V,N & S(E,V,N)\\
\text{Canonico} & T,V,N & F(T,V,N)\\
\text{Gran canonico} & T,V,\mu & \Phi(T,V,\mu)
\end{array}
$$

## Simbolos

| Simbolo | Significado |
|---|---|
| $N$ | Numero de particulas |
| $V$ | Volumen |
| $E$ | Energia |
| $T$ | Temperatura |
| $S$ | Entropia |
| $k_B$ | Constante de Boltzmann |
| $\beta$ | $1/(k_B T)$ |
| $\Omega$ | Numero de microestados o volumen de espacio de fases, segun contexto |
| $Z$ | Funcion de particion canonica |
| $\Xi$ | Gran funcion de particion |
| $F$ | Energia libre de Helmholtz |
| $\Phi$ | Potencial gran canonico |
| $\mu$ | Potencial quimico |

## Reglas editoriales

- Definir cada simbolo local en la pagina donde aparece.
- Evitar usar $\Omega$ para el potencial gran canonico; preferir $\Phi$.
- Usar $Z_N$ cuando sea necesario enfatizar que la funcion de particion canonica tiene $N$ fijo.
- Declarar si una suma es sobre microestados o sobre niveles de energia.
- Para ecuaciones largas, usar bloques LaTeX con `$$...$$`.

## Estilo de paginas

Cada pagina troncal deberia incluir:

1. Resumen.
2. Definicion.
3. Contexto fisico.
4. Ecuaciones principales.
5. Supuestos.
6. Errores comunes.
7. Paginas relacionadas.
8. Referencias si corresponde.
