# Teorema de Liouville

## Resumen

El **teorema de Liouville** establece que el flujo hamiltoniano conserva el volumen en el espacio de fases: una región del espacio de fases que evoluciona bajo las ecuaciones de Hamilton no cambia de volumen, aunque sí puede deformarse. En términos de la densidad de probabilidad $\rho(\Gamma, t)$:

$$\frac{d\rho}{dt} = \frac{\partial\rho}{\partial t} + \{\rho, H\} = 0$$

La densidad es constante a lo largo de las trayectorias hamiltoniales. Este resultado es el fundamento de la mecánica estadística de equilibrio: garantiza que la medida uniforme sobre la hipersuperficie de energía es invariante bajo la dinámica.

## Enunciado y demostración

**Enunciado.** Sea $\rho(\Gamma, t)$ la densidad de probabilidad en el espacio de fases $\Gamma = (q_1,\ldots,q_N,p_1,\ldots,p_N)$, que evoluciona con el sistema bajo el Hamiltoniano $H$. Entonces

$$\frac{\partial\rho}{\partial t} = -\{\rho, H\} = -\sum_{i=1}^{3N}\left(\frac{\partial\rho}{\partial q_i}\dot{q}_i + \frac{\partial\rho}{\partial p_i}\dot{p}_i\right)$$

**Demostración (por continuidad).** La densidad satisface la ecuación de continuidad en el espacio de fases:

$$\frac{\partial\rho}{\partial t} + \nabla_\Gamma\cdot(\rho\,\dot\Gamma) = 0$$

El término de divergencia se expande como:

$$\nabla_\Gamma\cdot(\rho\,\dot\Gamma) = \sum_i\left(\frac{\partial(\rho\dot{q}_i)}{\partial q_i} + \frac{\partial(\rho\dot{p}_i)}{\partial p_i}\right) = \sum_i\left(\dot{q}_i\frac{\partial\rho}{\partial q_i} + \dot{p}_i\frac{\partial\rho}{\partial p_i}\right) + \rho\underbrace{\sum_i\left(\frac{\partial\dot{q}_i}{\partial q_i} + \frac{\partial\dot{p}_i}{\partial p_i}\right)}_{=0}$$

El último término se anula por las ecuaciones de Hamilton:

$$\frac{\partial\dot{q}_i}{\partial q_i} + \frac{\partial\dot{p}_i}{\partial p_i} = \frac{\partial^2 H}{\partial q_i\partial p_i} - \frac{\partial^2 H}{\partial p_i\partial q_i} = 0$$

Por tanto $\partial\rho/\partial t = -\sum_i(\dot{q}_i\partial\rho/\partial q_i + \dot{p}_i\partial\rho/\partial p_i) = \{\rho,H\}$... el resultado. 

**Interpretación alternativa (volumen).** El jacobiano del flujo $\Phi^t: \Gamma_0 \mapsto \Gamma(t)$ es exactamente 1. Esto significa que para cualquier región $\mathcal{R}(0)$:

$$\text{Vol}(\mathcal{R}(t)) = \int_{\mathcal{R}(0)} \left|\frac{\partial\Gamma(t)}{\partial\Gamma(0)}\right| d\Gamma = \int_{\mathcal{R}(0)} d\Gamma = \text{Vol}(\mathcal{R}(0))$$

## Consecuencias para la mecánica estadística

### Invariancia de la medida microcanónica

La medida uniforme en la hipersuperficie de energía $\Sigma_E = \{H(\Gamma) = E\}$ es invariante bajo el flujo hamiltoniano. Esto valida el postulado de igual probabilidad a priori: si se asigna probabilidad uniforme a los microestados de $\Sigma_E$ en $t=0$, esta asignación es consistente con la dinámica para todo $t$.

### Los ensambles de equilibrio son correctos

Cualquier función $\rho = f(H)$ satisface $\{f(H), H\} = 0$ y por tanto $\partial\rho/\partial t = 0$: es una distribución estacionaria. Los ensambles canónico $\rho \propto e^{-\beta H}$ y microcanónico $\rho \propto \delta(H-E)$ son distribuciones de equilibrio exactas.

### La entropía de Gibbs no crece bajo dinámica hamiltoniana

La entropía de Gibbs $S_G = -k_B\int\rho\ln\rho\,d\Gamma$ es constante bajo la ecuación de Liouville:

$$\frac{dS_G}{dt} = 0$$

Esto no contradice la segunda ley: $S_G$ es la entropía del ensamble completo (función de distribución exacta), no la entropía termodinámica de grano grueso. El crecimiento de la entropía termodinámica ocurre cuando se "olvida" información microscópica (grano grueso de $\rho$), operación que no está capturada por la ecuación de Liouville.

## La paradoja de la irreversibilidad

El teorema de Liouville parece contradecir la segunda ley: si $d\rho/dt = 0$ y $S_G = \text{cte}$, ¿cómo crece la entropía?

La respuesta es el **grano grueso** (coarse-graining): la entropía termodinámica $S_{\text{macro}}$ se define con una resolución macroscópica finita. Bajo la dinámica hamiltoniana, $\rho$ se vuelve cada vez más "filamentada" en el espacio de fases: concentrada en estructuras intrincadas de escala microscópica (como un colorante que se mezcla en agua). El volumen total no cambia (Liouville), pero el volumen de la envolvente macroscópica de la distribución sí aumenta. La entropía de grano grueso $S_{\text{macro}}$ es la entropía de esa envolvente, y esta sí crece.

## Analogía con fluidos incompresibles

El flujo hamiltoniano en el espacio de fases es análogo al flujo de un **fluido incompresible** en el espacio de configuraciones: $\nabla\cdot\mathbf{v} = 0$ en fluidos se convierte en $\sum_i(\partial\dot{q}_i/\partial q_i + \partial\dot{p}_i/\partial p_i) = 0$ en el espacio de fases. Las trayectorias son líneas de flujo de un fluido sin compresión, y el volumen de cualquier "gota" de fluido se conserva.

## Versión cuántica: ecuación de von Neumann

El análogo cuántico de la ecuación de Liouville es la **ecuación de von Neumann** para el operador densidad $\hat\rho$:

$$i\hbar\frac{\partial\hat\rho}{\partial t} = [\hat H, \hat\rho]$$

Para el equilibrio, $[\hat H, \hat\rho] = 0$: cualquier función de $\hat H$ es un estado estacionario. La entropía de von Neumann $S = -k_B\operatorname{Tr}(\hat\rho\ln\hat\rho)$ tampoco crece bajo esta evolución unitaria, por las mismas razones que $S_G$ en el caso clásico.

## Extensiones: sistemas no hamiltonianos

El teorema de Liouville no se aplica a sistemas disipados o con fuerzas no conservativas. Para un sistema amortiguado con $\dot{q} = p/m$, $\dot{p} = -\gamma p - \nabla V$:

$$\sum_i\left(\frac{\partial\dot{q}_i}{\partial q_i} + \frac{\partial\dot{p}_i}{\partial p_i}\right) = -\gamma N < 0$$

El volumen del espacio de fases se **contrae** exponencialmente. Los sistemas disipativos tienen **atractores** (conjuntos de dimensión fractal inferior a $6N$) en los que colapsan las trayectorias. Esto es la base de la teoría del caos disipativo y los atractores extraños.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 3: demostración del teorema de Liouville y la ecuación de continuidad en espacio de fases.
- Goldstein, *Classical Mechanics*, cap. 9: estructura simpléctica y la demostración geométrica de conservación del volumen.
- Zwanzig, *Nonequilibrium Statistical Mechanics* (2001): extensiones del formalismo de Liouville a sistemas disipativos y proyección de Mori-Zwanzig.

## Páginas relacionadas

- [Espacio de fases](#/espacio-de-fases)
- [Hipótesis ergódica](#/hipotesis-ergodica)
- [Ensamble microcanónico](#/ensamble-microcanonico)
- [Matriz densidad](#/matriz-densidad)
- [Entropía de Gibbs](#/entropia-de-gibbs)
