# Distribución de Boltzmann

## Resumen

La **distribución de Boltzmann** asigna a cada microestado $i$ con energía $E_i$ una probabilidad proporcional al factor de Boltzmann $e^{-\beta E_i}$:

$$p_i = \frac{e^{-\beta E_i}}{Z}, \qquad Z = \sum_j e^{-\beta E_j}, \qquad \beta = \frac{1}{k_BT}$$

Es la distribución de equilibrio para un sistema en contacto con un reservorio térmico a temperatura $T$. Estados de baja energía son exponencialmente más probables que estados de alta energía; la "temperatura" controla cuán pronunciado es este sesgo.

## Origen: el reservorio térmico

La distribución de Boltzmann no es un postulado: se deriva del hecho de que el sistema de interés $S$ está acoplado a un reservorio $R$ con energía total $E_\text{tot}$ conservada. La probabilidad de que $S$ esté en el microestado $i$ es proporcional al número de microestados del reservorio con energía $E_\text{tot} - E_i$:

$$p_i \propto \Omega_R(E_\text{tot} - E_i) = e^{S_R(E_\text{tot}-E_i)/k_B} \approx e^{-E_i/k_BT_R}$$

El paso clave es la expansión lineal $S_R(E_\text{tot} - E_i) \approx S_R(E_\text{tot}) - E_i(\partial S_R/\partial E)_{N,V} = S_R(E_\text{tot}) - E_i/T_R$, válida cuando $E_i \ll E_\text{tot}$.

## La función de partición como generatriz

$Z$ no es solo una constante de normalización: **genera todas las propiedades termodinámicas por diferenciación**:

$$\langle E\rangle = -\frac{\partial\ln Z}{\partial\beta}, \qquad \langle(\Delta E)^2\rangle = \frac{\partial^2\ln Z}{\partial\beta^2}$$

$$F = -k_BT\ln Z, \qquad S = -\frac{\partial F}{\partial T} = k_B\ln Z + k_B\beta\langle E\rangle$$

$$C_V = \frac{\partial\langle E\rangle}{\partial T} = k_B\beta^2\langle(\Delta E)^2\rangle$$

Esta última relación dice que la capacidad calorífica mide las fluctuaciones de energía. Un sistema con gran varianza de energía tiene gran capacidad calorífica.

## Interpretación física

El factor $e^{-\beta E_i}$ puede leerse de dos maneras:

**Competencia energía-entropía.** El estado $i$ tiene probabilidad proporcional a $e^{-E_i/k_BT}$. A temperatura baja ($k_BT \ll \Delta E$, la separación entre niveles), solo los estados de mínima energía son apreciablemente ocupados. A temperatura alta ($k_BT \gg \Delta E$), todos los estados son igualmente probables.

**Transformada de Laplace de la DOS.** Si $g(E)$ es la densidad de estados, $Z = \int g(E)e^{-\beta E}dE$: la función de partición es la transformada de Laplace de la DOS. Los pesos de Boltzmann son la "frecuencia de muestreo" con que el sistema visita distintos rangos de energía.

## Ejemplos

### Sistema de dos niveles

Niveles $E_0 = 0$ y $E_1 = \varepsilon$:

$$Z = 1 + e^{-\beta\varepsilon}, \qquad p_1 = \frac{e^{-\beta\varepsilon}}{1+e^{-\beta\varepsilon}} = \frac{1}{e^{\beta\varepsilon}+1}$$

$$\langle E\rangle = \frac{\varepsilon}{e^{\beta\varepsilon}+1}, \qquad C = k_B\left(\frac{\varepsilon}{2k_BT}\right)^2\!\text{sech}^2\!\left(\frac{\varepsilon}{2k_BT}\right)$$

El pico de $C(T)$ a $k_BT \approx 0.42\,\varepsilon$ (pico de Schottky) es una señal característica de un sistema de dos niveles: la capacidad calorífica crece al activarse el estado excitado y luego cae cuando ambos estados quedan igualmente ocupados.

### Gas ideal monoatómico (un átomo)

Estados etiquetados por $\mathbf{p}$, con $E = p^2/2m$:

$$Z_1 = \frac{V}{h^3}\int d^3p\, e^{-\beta p^2/2m} = V\left(\frac{2\pi m k_BT}{h^2}\right)^{3/2} = \frac{V}{\lambda_T^3}$$

donde $\lambda_T = h/\sqrt{2\pi mk_BT}$ es la longitud de onda de de Broglie térmica. Para $N$ partículas indistinguibles: $Z_N = Z_1^N/N!$ (en el límite clásico). La energía libre de Helmholtz es la fórmula de Sackur-Tetrode.

### Distribución de velocidades de Maxwell

La probabilidad de que una molécula tenga velocidad $\mathbf{v}$ es $p(\mathbf{v}) \propto e^{-mv^2/2k_BT}$. La distribución de la rapidez $v = |\mathbf{v}|$ es

$$f(v) = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2}v^2 e^{-mv^2/2k_BT}$$

con velocidad más probable $v_p = \sqrt{2k_BT/m}$, velocidad media $\langle v\rangle = \sqrt{8k_BT/\pi m}$ y velocidad cuadrática media $v_\text{rms} = \sqrt{3k_BT/m}$.

## Regla de razones de Boltzmann

Para dos estados $i$ y $j$, la razón de probabilidades es independiente de $Z$:

$$\frac{p_i}{p_j} = e^{-\beta(E_i - E_j)} = e^{-(E_i-E_j)/k_BT}$$

Esto es útil en espectroscopía: la razón de intensidades de dos líneas de emisión da directamente la diferencia de energía de los niveles si se conoce $T$. También aparece en química: la constante de equilibrio de una reacción $A \rightleftharpoons B$ es $K = e^{-\beta\Delta G}$ donde $\Delta G = G_B - G_A$.

## La distribución de Boltzmann como MaxEnt

La distribución $p_i \propto e^{-\beta E_i}$ es la única distribución que maximiza la entropía de Gibbs $S_G = -k_B\sum_i p_i\ln p_i$ sujeta a la restricción de que $\sum_i p_i E_i = \langle E\rangle$ es fijo. El parámetro $\beta$ es el multiplicador de Lagrange asociado a esta restricción. Este resultado conecta la distribución de Boltzmann con el principio de máxima entropía de Jaynes.

## Extensión: distribución generalizada de Gibbs

Si el sistema tiene varias cargas conservadas $\{Q_k\}$ con valores medios $\{\langle Q_k\rangle\}$, la generalización es

$$p_i \propto \exp\!\left(-\sum_k\lambda_k Q_k^{(i)}\right)$$

donde $\lambda_k$ son los multiplicadores asociados. Para el ensamble gran canónico: $Q_1 = E$, $Q_2 = N$, $\lambda_1 = \beta$, $\lambda_2 = -\beta\mu$.

## Límites y correcciones

**Efectos cuánticos.** La distribución de Boltzmann es clásica ($n\lambda_T^3 \ll 1$). Para fermiones y bosones a alta densidad o baja temperatura, hay que usar las distribuciones de Fermi-Dirac y Bose-Einstein respectivamente.

**Interacciones.** Para sistemas con interacciones, $Z$ no factoriza y el cálculo exacto de la función de partición es difícil. Las expansiones en serie (expansión del virial, grupo de renormalización) son las herramientas para tratarlo.

**No equilibrio.** La distribución de Boltzmann describe el equilibrio. Si el sistema evoluciona lejos del equilibrio, la distribución real puede diferir significativamente.

## Fuentes para profundizar

- Boltzmann, *Vorlesungen über Gastheorie* (1896-1898): la formulación original en términos de la distribución de velocidades.
- Reif, *Fundamentals of Statistical and Thermal Physics*, cap. 6: derivación completa desde el reservorio térmico.
- Kardar, *Statistical Physics of Particles*, cap. 4: función de partición, energía libre, y conexión con termodinámica.
- Kittel & Kroemer, *Thermal Physics*, cap. 1-3: exposición didáctica con énfasis en aplicaciones.

## Páginas relacionadas

- [Ensamble canónico](#/ensamble-canonico)
- [Función de partición](#/funcion-de-particion)
- [Reservorio térmico](#/reservorio-termico)
- [Temperatura estadística](#/temperatura-estadistica)
- [Principio de máxima entropía](#/principio-de-maxima-entropia)
- [Distribución de Maxwell-Boltzmann](#/distribucion-maxwell-boltzmann)
