# Matriz densidad

## Resumen

La **matriz densidad** (u operador densidad) $\hat\rho$ es la herramienta cuántica más general para describir el estado de un sistema, incluyendo tanto el conocimiento incompleto de su estado cuántico (mezcla estadística) como el entrelazamiento con sistemas externos. Es la generalización cuántica de la distribución de probabilidad clásica sobre microestados.

$$\hat\rho = \sum_i p_i |i\rangle\langle i|$$

donde $\{|i\rangle\}$ es un conjunto de estados y $p_i \geq 0$ con $\sum_i p_i = 1$.

## Motivación: estados mixtos

En mecánica cuántica, un **estado puro** $|\psi\rangle$ contiene toda la información cuántica posible: especifica las amplitudes de probabilidad de todos los resultados. Sin embargo, en la práctica:

1. **Fuente estadística:** un láser puede emitir fotones en estados distintos con diferentes probabilidades. El estado del fotón saliente es una mezcla de estados puros.

2. **Entrelazamiento:** si sistema $A$ está entrelazado con sistema $B$, el estado de $A$ solo no puede describirse con un estado puro $|\psi_A\rangle$, sino con la **matriz densidad reducida** $\hat\rho_A = \text{Tr}_B(|\Psi_{AB}\rangle\langle\Psi_{AB}|)$.

3. **Ignorancia termal:** a temperatura $T$, el sistema está en el estado de energía $|n\rangle$ con probabilidad $e^{-\beta E_n}/Z$. El estado del sistema es la mezcla $\hat\rho = \sum_n p_n|n\rangle\langle n|$.

## Definición formal

El operador densidad $\hat\rho: \mathcal{H}\to\mathcal{H}$ es un operador lineal que satisface:
- **Hermítico:** $\hat\rho^\dagger = \hat\rho$
- **Traza unidad:** $\text{Tr}(\hat\rho) = 1$
- **Semidefinido positivo:** $\langle\psi|\hat\rho|\psi\rangle \geq 0$ para todo $|\psi\rangle$

**Estado puro vs. estado mixto:** $\hat\rho$ describe un estado puro si y solo si $\hat\rho^2 = \hat\rho$, equivalentemente $\text{Tr}(\hat\rho^2) = 1$. Para estados mixtos, $\text{Tr}(\hat\rho^2) < 1$.

## Observables y promedios

El valor esperado de un observable $\hat A$ en el estado descrito por $\hat\rho$ es

$$\langle A\rangle = \text{Tr}(\hat\rho\,\hat A) = \sum_{n,m}\rho_{nm}A_{mn}$$

donde $\rho_{nm} = \langle n|\hat\rho|m\rangle$ y $A_{mn} = \langle m|\hat A|n\rangle$ en alguna base $\{|n\rangle\}$.

Los elementos diagonales $\rho_{nn}$ son las **poblaciones** (probabilidades de encontrar el sistema en el estado $|n\rangle$). Los elementos fuera de la diagonal $\rho_{nm}$ $(n\neq m)$ son las **coherencias** (correlaciones cuánticas entre estados distintos).

## Evolución temporal

Para un sistema cerrado con Hamiltoniano $\hat H$, la evolución de $\hat\rho$ está dada por la **ecuación de von Neumann**:

$$i\hbar\frac{\partial\hat\rho}{\partial t} = [\hat H, \hat\rho]$$

Solución formal: $\hat\rho(t) = \hat U(t)\hat\rho(0)\hat U^\dagger(t)$ donde $\hat U(t) = e^{-i\hat Ht/\hbar}$ es el operador de evolución. El movimiento es unitario: $\text{Tr}(\hat\rho^2)$ se conserva, y en particular un estado puro permanece puro.

Para sistemas abiertos en contacto con un baño, la ecuación de von Neumann se reemplaza por la **ecuación de Lindblad**:

$$\frac{d\hat\rho}{dt} = -\frac{i}{\hbar}[\hat H, \hat\rho] + \sum_k\left(\hat L_k\hat\rho\hat L_k^\dagger - \frac{1}{2}\hat L_k^\dagger\hat L_k\hat\rho - \frac{1}{2}\hat\rho\hat L_k^\dagger\hat L_k\right)$$

donde $\hat L_k$ son los operadores de salto (Lindblad) que describen la disipación y la decoherencia.

## Los ensambles cuánticos como matrices densidad

**Ensamble microcanónico:**
$$\hat\rho_{\text{mic}} = \frac{1}{\Omega}\sum_{E_n \in [E,E+\Delta E]}|n\rangle\langle n|$$

proyector uniforme sobre los estados de energía en el intervalo dado.

**Ensamble canónico (distribución de Gibbs):**
$$\hat\rho_{\text{can}} = \frac{e^{-\beta\hat H}}{Z}, \quad Z = \text{Tr}(e^{-\beta\hat H})$$

Aquí $e^{-\beta\hat H}$ es la exponencial del operador, definida por la serie de Taylor o por sus valores propios.

**Ensamble gran canónico:**
$$\hat\rho_{\text{gc}} = \frac{e^{-\beta(\hat H - \mu\hat N)}}{\Xi}, \quad \Xi = \text{Tr}(e^{-\beta(\hat H - \mu\hat N)})$$

## Función de partición como traza

Una de las relaciones más importantes: la función de partición es la traza de la exponencial del Hamiltoniano:

$$Z = \text{Tr}(e^{-\beta\hat H}) = \sum_n e^{-\beta E_n}$$

Esto es exacto en mecánica cuántica. En mecánica clásica, la función de partición es la integral del espacio de fases. La traza cuántica generaliza esta integral al caso discreto.

## Entropía de von Neumann

$$S = -k_B\text{Tr}(\hat\rho\ln\hat\rho) = -k_B\sum_n\lambda_n\ln\lambda_n$$

donde $\lambda_n$ son los valores propios de $\hat\rho$. Propiedades:
- $S = 0$ para estados puros (toda la información cuántica disponible)
- $S = k_B\ln\Omega$ para el microcanónico con $\Omega$ estados equiprobables (máxima ignorancia con restricción de energía)
- $S_{\text{can}} = \langle E\rangle/T + k_B\ln Z = -\partial F/\partial T$ para el ensamble canónico

## Decoherencia y el problema de la medición

La diferencia fundamental entre una mezcla estadística y una superposición cuántica es la presencia de coherencias $\rho_{nm}$. Un sistema cuántico en superposición $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ tiene

$$\hat\rho_{\text{puro}} = \begin{pmatrix}|\alpha|^2 & \alpha\beta^* \\ \alpha^*\beta & |\beta|^2\end{pmatrix}$$

mientras que una mezcla estadística de $|0\rangle$ (probabilidad $|\alpha|^2$) y $|1\rangle$ (probabilidad $|\beta|^2$) tiene

$$\hat\rho_{\text{mixto}} = \begin{pmatrix}|\alpha|^2 & 0 \\ 0 & |\beta|^2\end{pmatrix}$$

La diferencia está en los elementos fuera de la diagonal. La interacción con el ambiente (baño térmico, fotones de fondo, fonones) destruye las coherencias cuánticas: **decoherencia**. Para sistemas macroscópicos, este proceso es tan rápido (tiempos $\sim 10^{-30}\ \text{s}$ para monedas) que el comportamiento clásico emerge.

## Ejemplo: espín-$\frac{1}{2}$ en equilibrio térmico

Para un espín-$\frac{1}{2}$ con $\hat H = -\gamma B\hat S_z$ (campo magnético $B$), los niveles son $E_\pm = \mp\gamma B\hbar/2$. La matriz densidad canónica en la base $\{|\!\uparrow\rangle, |\!\downarrow\rangle\}$ es

$$\hat\rho = \frac{1}{Z}\begin{pmatrix}e^{+\beta\gamma B\hbar/2} & 0 \\ 0 & e^{-\beta\gamma B\hbar/2}\end{pmatrix}, \quad Z = 2\cosh\!\left(\frac{\beta\gamma B\hbar}{2}\right)$$

La magnetización promedio es

$$\langle S_z\rangle = \text{Tr}(\hat\rho\,\hat S_z) = \frac{\hbar}{2}\tanh\!\left(\frac{\beta\gamma B\hbar}{2}\right)$$

resultado que reproduce la solución del sistema de dos niveles.

## Fuentes para profundizar

- Sakurai, *Modern Quantum Mechanics*, cap. 3: matrices densidad, estados mixtos, operador densidad reducido.
- Feynman, *Statistical Mechanics*, cap. 1: matrices densidad para la mecánica estadística cuántica.
- Breuer & Petruccione, *The Theory of Open Quantum Systems*: dinámica de Lindblad y decoherencia.
- Nielsen & Chuang, *Quantum Computation and Quantum Information*, cap. 2: entropía de von Neumann, información cuántica.

## Páginas relacionadas

- [Entropía de Gibbs](#/entropia-de-gibbs)
- [Ensamble canónico](#/ensamble-canonico)
- [Estadísticas cuánticas](#/estadisticas-cuanticas)
- [Microestado](#/microestado)
- [Función de partición](#/funcion-de-particion)
