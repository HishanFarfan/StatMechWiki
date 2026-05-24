# Teorema de equipartición

## Resumen

El **teorema de equipartición** dice que, en equilibrio térmico clásico, cada grado de libertad que aparece **cuadráticamente** en el Hamiltoniano contribuye en promedio $\frac{1}{2}k_BT$ a la energía:

$$\left\langle x_i \frac{\partial H}{\partial x_i}\right\rangle = k_BT$$

En particular, si $H$ contiene un término $\alpha x_i^2$, su contribución promedio es $\frac{1}{2}k_BT$. Para $N$ partículas en 3D con solo energía cinética, la energía total promedio es $\frac{3}{2}Nk_BT$.

## Derivación

En el ensamble canónico clásico, el promedio de $x_i\partial H/\partial x_i$ es

$$\left\langle x_i\frac{\partial H}{\partial x_i}\right\rangle = \frac{\int \cdots\int x_i\frac{\partial H}{\partial x_i} e^{-\beta H}\,dx_1\cdots dx_n}{\int\cdots\int e^{-\beta H}\,dx_1\cdots dx_n}$$

Integrando el numerador por partes en la variable $x_i$ (con condiciones de frontera nulas o convergencia exponencial):

$$\int_{-\infty}^{\infty} x_i\frac{\partial H}{\partial x_i}e^{-\beta H}\,dx_i = \left[x_i\cdot\left(-\frac{1}{\beta}\right)e^{-\beta H}\right]_{-\infty}^{\infty} + \frac{1}{\beta}\int_{-\infty}^{\infty}e^{-\beta H}\,dx_i = \frac{1}{\beta}\int_{-\infty}^{\infty}e^{-\beta H}\,dx_i$$

donde el término de frontera se anula. Dividiendo por el denominador:

$$\left\langle x_i\frac{\partial H}{\partial x_i}\right\rangle = \frac{1}{\beta} = k_BT$$

Esta derivación es completamente general: no asume una forma específica de $H$, solo que el Hamiltoniano permite la integración por partes (que es válido para potenciales que crecen suficientemente rápido en $|x_i|\to\infty$).

## Casos especiales

**Partícula libre en 3D.** $H = (p_x^2 + p_y^2 + p_z^2)/(2m)$. Tres grados de libertad cuadráticos:

$$\langle E_{\text{cin}}\rangle = \frac{3}{2}k_BT$$

**Oscilador armónico.** $H = p^2/(2m) + m\omega^2 q^2/2$. Dos grados de libertad cuadráticos:

$$\langle H\rangle = \frac{1}{2}k_BT + \frac{1}{2}k_BT = k_BT$$

**Gas ideal monoatómico de $N$ partículas.** $3N$ grados cuadráticos en momenta:

$$\langle E\rangle = \frac{3}{2}Nk_BT, \quad C_V = \frac{3}{2}Nk_B$$

**Gas diatómico rígido** ($T$ no muy alta). Traslación (3) + rotación (2) = 5 grados cuadráticos:

$$\langle E\rangle = \frac{5}{2}Nk_BT, \quad C_V = \frac{5}{2}Nk_B$$

**Gas diatómico con vibración clásica** (traslación + rotación + vibración armónica). Vibración añade 2 grados cuadráticos ($p_{\text{vib}}^2$ y $q_{\text{vib}}^2$):

$$\langle E\rangle = \frac{7}{2}Nk_BT, \quad C_V = \frac{7}{2}Nk_B$$

**Sólido clásico de Einstein.** $N$ osciladores, cada uno con 2 grados cuadráticos:

$$\langle E\rangle = 3Nk_BT, \quad C_V = 3Nk_B \quad \text{(ley de Dulong-Petit)}$$

## La ley de Dulong-Petit y el acuerdo experimental

Dulong y Petit observaron en 1819 que la capacidad calorífica molar de sólidos elementales es aproximadamente $C_V \approx 3R = 24.9\ \text{J mol}^{-1}\text{K}^{-1}$ a temperatura ambiente. La equipartición explica esto naturalmente: cada átomo tiene 3 grados de oscilación, cada uno con energía cinética $\frac{1}{2}k_BT$ y potencial $\frac{1}{2}k_BT$, dando $3k_BT$ por átomo.

La predicción falla a bajas temperaturas: el calor específico del diamante era anómalosamente bajo ya desde los experimentos de Weber (1875). Einstein (1907) resolvió esto con su modelo cuántico de osciladores, mostrando que la equipartición clásica falla cuando $k_BT \ll \hbar\omega$.

## Cuándo falla el teorema

**Cuantización.** El teorema es clásico. Si la energía de un modo cuántico $\hbar\omega \gg k_BT$, el modo está "congelado" (en el estado fundamental) y no contribuye $\frac{1}{2}k_BT$. Esto es el **congelamiento de grados de libertad**:

- Vibración molecular: $\hbar\omega_{\text{vib}}/k_B \sim 3000\ \text{K}$ → congelada a temperatura ambiente
- Rotación nuclear: $\hbar^2/(2Ik_B) \sim 3\ \text{K}$ para H₂ → no congelada a $T > 50\ \text{K}$

El criterio exacto es: el grado de libertad contribuye $\frac{1}{2}k_BT$ si $k_BT \gg \Delta E$ (separación de niveles), y contribuye 0 si $k_BT \ll \Delta E$.

**Potenciales no cuadráticos.** Si $H$ incluye términos de orden superior ($q^4$, $q^3$, etc.), la derivación no aplica directamente. Sin embargo, existe una generalización: $\langle x_i\partial H/\partial x_i\rangle = k_BT$ para cualquier variable $x_i$, incluso si $H$ no es cuadrático en ella.

**Divergencias infrarojas.** En sistemas con potenciales de largo alcance sin saturación (gravedad), la integración por partes no se puede realizar y el teorema no se aplica.

## Aplicaciones en la práctica

**Teoría cinética.** La velocidad cuadrática media de las moléculas de un gas:

$$v_{\text{rms}} = \sqrt{\langle v^2\rangle} = \sqrt{\frac{3k_BT}{m}}$$

Para N₂ a 300 K: $v_{\text{rms}} \approx 515\ \text{m/s}$.

**Ruido de Johnson-Nyquist.** En un resistor $R$ en equilibrio térmico, cada modo electromagnético contribuye $\frac{1}{2}k_BT$, dando una densidad espectral de ruido de tensión

$$S_V(f) = 4k_BTR$$

Esta es una consecuencia directa de la equipartición y del teorema de fluctuación-disipación.

**Brownianas.** La partícula browniana en suspensión tiene $\frac{1}{2}k_BT$ por cada grado traslacional. Para una partícula de radio $r$: $\langle v^2\rangle = 3k_BT/m$, aunque sus desplazamientos difusivos son mucho más lentos por la viscosidad.

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 4: derivación del teorema de equipartición y sus aplicaciones.
- Reif, *Fundamentals of Statistical and Thermal Physics*, cap. 7: teorema de equipartición con discusión de congelamiento cuántico.
- Einstein, "Die Plancksche Theorie der Strahlung und die Theorie der spezifischen Wärme", *Annalen der Physik* 22, 180 (1907): el modelo cuántico que explica el fallo de la equipartición.

## Páginas relacionadas

- [Ensamble canónico](#/ensamble-canonico)
- [Temperatura estadística](#/temperatura-estadistica)
- [Sólido de Einstein](#/solido-de-einstein)
- [Distribución de Maxwell-Boltzmann](#/distribucion-maxwell-boltzmann)
- [Capacidad calorífica](#/capacidad-calorifica)
