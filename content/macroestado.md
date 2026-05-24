# Macroestado

## Resumen

Un **macroestado** es la descripción de un sistema físico mediante un pequeño número de variables macroscópicas observables o controlables —como energía, volumen, número de partículas, temperatura, o presión— sin especificar la configuración microscópica exacta. A un macroestado le corresponde un número enorme de microestados compatibles.

La mecánica estadística explica por qué los sistemas siempre evolucionan hacia los macroestados más probables: aquellos compatibles con el mayor número de microestados.

## Definición

El macroestado de un sistema queda definido por las variables que el observador controla o mide. Por ejemplo:

- $(E, V, N)$: sistema aislado (ensamble microcanónico)
- $(T, V, N)$: sistema en contacto con un reservorio térmico (ensamble canónico)
- $(T, V, \mu)$: sistema que intercambia energía y partículas (ensamble gran canónico)

Si $\Gamma_M$ es el conjunto de microestados compatibles con el macroestado $M$, el número de realizaciones es $\Omega(M) = |\Gamma_M|$ y la entropía de Boltzmann es

$$S(M) = k_B\ln\Omega(M)$$

## Variables naturales de cada ensamble

| Ensamble | Variables fijas | Variables fluctuantes | Función característica |
|---|---|---|---|
| Microcanónico | $E$, $V$, $N$ | — | $S(E,V,N)$ |
| Canónico | $T$, $V$, $N$ | $E$ | $F(T,V,N) = -k_BT\ln Z$ |
| Gran canónico | $T$, $V$, $\mu$ | $E$, $N$ | $\Omega(T,V,\mu) = -k_BT\ln\Xi$ |
| Isotérmico-isobárico | $T$, $P$, $N$ | $E$, $V$ | $G(T,P,N) = -k_BT\ln Y$ |

La elección del macroestado determina cuál ensamble usar. No es una elección libre: depende del experimento.

## Cuántos microestados representa un macroestado

El número de microestados $\Omega(M)$ compatible con un macroestado puede ser astronómico. Algunos ejemplos:

**Gas ideal.** Para $N = 10^{23}$ moléculas de N₂ a temperatura ambiente:
$$\Omega \sim e^{10^{23}}$$

**Sistema de $N$ espines.** Con $N$ espines y $n$ en estado ↑:
$$\Omega = \binom{N}{n} \xrightarrow{\text{Stirling}} \exp\!\left[Nk_B H_2(n/N)/k_B\right]$$

donde $H_2(x) = -x\ln x - (1-x)\ln(1-x)$ es la entropía binaria. Para $n = N/2$ (macroestado de máxima entropía): $\Omega = 2^N$.

**Sólido de Einstein.** $N$ osciladores con energía total $q$ cuantos:
$$\Omega = \binom{q+N-1}{N-1}$$

En todos los casos, la diferencia de $\ln\Omega$ entre macroestados distintos es de orden $N$, lo que significa que las diferencias de probabilidad son de orden $e^N$: abrumadoras.

## Por qué los macroestados de mayor $\Omega$ son inevitables

Si todos los microestados son igualmente probables (postulado de igual probabilidad a priori), la probabilidad de encontrar el sistema en el macroestado $M$ es

$$P(M) = \frac{\Omega(M)}{\Omega_{\text{total}}}$$

Para un gas ideal encerrado en la mitad izquierda de una caja con pared eliminada: el macroestado "todo el gas en la mitad izquierda" tiene $\Omega_{\text{izq}}$ microestados; el macroestado "distribuido uniformemente" tiene $\Omega_{\text{unif}} = 2^N\,\Omega_{\text{izq}}$. La razón de probabilidades es

$$\frac{P(\text{izq})}{P(\text{unif})} = 2^{-N} \approx 10^{-3\times10^{22}}$$

El gas que se contrae espontáneamente a la mitad de la caja es físicamente posible pero tan improbable que nunca se observa.

## Macroestado y observables termodinámicos

El macroestado de equilibrio maximiza $S = k_B\ln\Omega$ bajo las restricciones impuestas. De esta maximización se obtienen los potenciales termodinámicos:

$$\left(\frac{\partial S}{\partial E}\right)_{V,N} = \frac{1}{T}, \quad \left(\frac{\partial S}{\partial V}\right)_{E,N} = \frac{P}{T}, \quad \left(\frac{\partial S}{\partial N}\right)_{E,V} = -\frac{\mu}{T}$$

Todas las relaciones termodinámicas se derivan de estas identidades.

## Macroestado en sistemas cuánticos

En mecánica cuántica, el macroestado no se especifica con $(E, V, N)$ en el sentido de un punto sino de un operador densidad $\hat\rho$. El macroestado de equilibrio canónico es:

$$\hat\rho = \frac{e^{-\beta\hat H}}{Z}, \quad Z = \operatorname{Tr}(e^{-\beta\hat H})$$

El operador densidad contiene toda la información del macroestado probabilístico: valores esperados, fluctuaciones, y entropía von Neumann $S = -k_B\operatorname{Tr}(\hat\rho\ln\hat\rho)$.

## Errores comunes

- **"Un macroestado determina un único microestado"**: falso; hay $\Omega \sim 10^{10^{23}}$ microestados compatibles.
- **"La temperatura siempre está bien definida"**: solo en el ensamble canónico (o gran canónico). En el microcanónico, $T$ se define como $(\partial S/\partial E)^{-1}$, que puede ser negativa.
- **"Mezclar variables de ensambles distintos"**: $E$ fluctúa en el canónico y no puede fijarse simultáneamente junto a $T$ en el microcanónico.

## Fuentes para profundizar

- Schroeder, *An Introduction to Thermal Physics*, caps. 2-3: macroestados y microestados con ejemplos concretos.
- Reif, *Fundamentals of Statistical and Thermal Physics*, cap. 2: definición sistemática de macro y microestados.
- Landau & Lifshitz, *Statistical Physics*, §1: la relación entre la distribución estadística y los macroestados.

## Páginas relacionadas

- [Microestado](#/microestado)
- [Entropía de Boltzmann](#/entropia-de-boltzmann)
- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Ensamble canónico](#/ensamble-canonico)
- [Principio de máxima entropía](#/principio-de-maxima-entropia)
