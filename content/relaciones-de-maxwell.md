# Relaciones de Maxwell

## Resumen

Las **relaciones de Maxwell** son identidades entre derivadas mixtas de los potenciales termodinámicos. Se obtienen de la condición de que los potenciales son funciones de estado (sus diferenciales son exactos) y son herramientas esenciales para relacionar cantidades medibles entre sí.

## Origen: diferenciales exactos

Si $F = F(T,V,N)$ con $dF = -S\,dT - P\,dV + \mu\,dN$, la condición de que $d^2F = 0$ impone que las derivadas mixtas sean iguales. Por ejemplo:

$$
\frac{\partial^2 F}{\partial T\,\partial V} = \frac{\partial^2 F}{\partial V\,\partial T}
\implies
\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V.
$$

## Las cuatro relaciones de Maxwell clásicas

De cada potencial se extrae una relación. Con la notación $[\cdot]_x$ = derivada a $x$ constante:

| Potencial | Relación de Maxwell |
|---|---|
| $E(S,V,N)$ | $\left(\dfrac{\partial T}{\partial V}\right)_S = -\left(\dfrac{\partial P}{\partial S}\right)_V$ |
| $F(T,V,N)$ | $\left(\dfrac{\partial S}{\partial V}\right)_T = \left(\dfrac{\partial P}{\partial T}\right)_V$ |
| $H(S,P,N)$ | $\left(\dfrac{\partial T}{\partial P}\right)_S = \left(\dfrac{\partial V}{\partial S}\right)_P$ |
| $G(T,P,N)$ | $-\left(\dfrac{\partial S}{\partial P}\right)_T = \left(\dfrac{\partial V}{\partial T}\right)_P$ |

## Aplicaciones

**1. Entropía desde la ecuación de estado.** La relación de Maxwell de $F$ relaciona la entropía con la presión:

$$
\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V.
$$

Para el gas ideal: $(\partial P/\partial T)_V = Nk_B/V$, así que $(\partial S/\partial V)_T = Nk_B/V$ → consistente con la entropía de Sackur-Tetrode.

**2. Coeficiente de expansión térmica.** La relación de Maxwell de $G$ da

$$
\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P = -V\alpha,
$$

donde $\alpha$ es el coeficiente de expansión térmica. Esto permite medir cambios de entropía bajo presión sin medir calor.

**3. Diferencia $C_P - C_V$.** Combinando relaciones de Maxwell con la definición de capacidad calorífica:

$$
C_P - C_V = T\left(\frac{\partial P}{\partial T}\right)_V\!\!\left(\frac{\partial V}{\partial T}\right)_P = \frac{TV\alpha^2}{\kappa_T}.
$$

**4. Entropía a lo largo de la curva de coexistencia.** Diferenciando $\mu_\alpha = \mu_\beta$ a lo largo de la curva de coexistencia y usando relaciones de Maxwell conduce directamente a la ecuación de Clausius-Clapeyron:

$$
\frac{dP}{dT} = \frac{L}{T\,\Delta V},
$$

donde $L = T(S_\beta - S_\alpha)$ es el calor latente.

## Truco mnemotécnico: diagrama de Born

El **cuadrado termodinámico** de Born organiza los potenciales y sus variables:

```
    S -------- V
    |          |
    E          F
    |          |
    H    G ----
    |    |
    P ---T
```

Leyendo esquinas adyacentes se obtienen los diferenciales y las relaciones de Maxwell.

## Fuentes para profundizar

- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 7: derivación sistemática de todas las relaciones de Maxwell y sus aplicaciones.
- Zemansky & Dittman, *Heat and Thermodynamics*, cap. 10: relaciones de Maxwell con aplicaciones a gases reales.
- Kardar, *Statistical Physics of Particles*, cap. 2: relaciones de Maxwell en el contexto de potenciales estadísticos.

## Páginas relacionadas

- [Transformadas de Legendre](#/transformadas-de-legendre)
- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Energía libre de Gibbs](#/energia-libre-de-gibbs)
- [Entalpía](#/entalpia)
- [Compresibilidad](#/compresibilidad)
- [Estabilidad termodinámica](#/estabilidad-termodinamica)
