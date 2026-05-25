# Entalpía

## Resumen

La **entalpía** $H$ es el potencial termodinámico natural para procesos a entropía $S$, presión $P$ y número de partículas $N$ fijos. Aparece naturalmente en procesos a presión constante —los más comunes en laboratorio— y es la cantidad que mide la calorimetría.

## Definición y variables naturales

$$
H = E + PV,
$$

con diferencial

$$
dH = T\,dS + V\,dP + \mu\,dN.
$$

Las variables naturales son $\boxed{S,\,P,\,N}$. Las derivadas dan

$$
T = \left(\frac{\partial H}{\partial S}\right)_{P,N}, \quad V = \left(\frac{\partial H}{\partial P}\right)_{S,N}, \quad \mu = \left(\frac{\partial H}{\partial N}\right)_{S,P}.
$$

## Por qué aparece en procesos a presión constante

A presión constante ($dP = 0$) y sin trabajo no mecánico, $dH = T\,dS = \delta Q_{\text{rev}}$. El calor absorbido en un proceso a $P$ constante es exactamente $\Delta H$. Esto es lo que mide un calorímetro de bomba abierta: no la energía interna, sino la entalpía.

La diferencia entre $H$ y $E$ es el término de trabajo de expansión $PV$: si el sistema se expande al reaccionar, una parte de la energía interna se invierte en empujar la atmósfera y no está disponible como calor.

## Calor de reacción y ley de Hess

El **calor de reacción** a $P$ constante es $\Delta_r H = H_\text{productos} - H_\text{reactivos}$:

- $\Delta_r H < 0$: reacción exotérmica.
- $\Delta_r H > 0$: reacción endotérmica.

La **ley de Hess**: $\Delta H$ de una reacción es la suma de los $\Delta H$ de sus etapas, independientemente del camino. Permite calcular entalpías inaccesibles a partir de entalpías de formación estándar $\Delta_f H^\circ$ tabuladas.

Ejemplo: combustión del metano ($\Delta_c H^\circ = -890\ \text{kJ/mol}$) se puede calcular combinando las entalpías de formación de $\text{CO}_2$ ($-393\ \text{kJ/mol}$), $\text{H}_2\text{O}$ ($-242\ \text{kJ/mol}$) y $\text{CH}_4$ ($-75\ \text{kJ/mol}$).

## Relación entre $C_P$ y $C_V$

La capacidad calorífica a presión constante:

$$
C_P = \left(\frac{\partial H}{\partial T}\right)_{P,N}.
$$

Para cualquier sistema (usando relaciones de Maxwell):

$$
C_P - C_V = \frac{TV\alpha^2}{\kappa_T},
$$

donde $\alpha = (1/V)(\partial V/\partial T)_P$ y $\kappa_T = -(1/V)(\partial V/\partial P)_T$. Para el gas ideal: $C_P - C_V = Nk_B$.

## Efecto Joule-Thomson

En una expansión a través de una válvula, la entalpía se conserva ($\Delta H = 0$). El **coeficiente Joule-Thomson** mide cómo cambia la temperatura con la presión a $H$ constante:

$$
\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H = \frac{1}{C_P}\left[T\!\left(\frac{\partial V}{\partial T}\right)_P - V\right].
$$

Para el gas ideal, $\mu_{JT} = 0$. Para gases reales, $\mu_{JT}$ puede ser positivo (enfriamiento, base de la licuefacción del nitrógeno y helio) o negativo (calentamiento). La **temperatura de inversión** $T_{\text{inv}}$ separa los dos regímenes y depende de la presión.

## Fuentes para profundizar

- Callen, *Thermodynamics and an Introduction to Thermostatistics*, cap. 5: entalpía como función característica, relación $C_P - C_V$.
- Atkins & de Paula, *Physical Chemistry*, cap. 2: entalpía de reacción, ley de Hess, calorimetría.
- Zemansky & Dittman, *Heat and Thermodynamics*, cap. 10: efecto Joule-Thomson, temperatura de inversión y licuefacción de gases.

## Páginas relacionadas

- [Energía libre de Gibbs](#/energia-libre-de-gibbs)
- [Energía libre de Helmholtz](#/energia-libre-de-helmholtz)
- [Transformadas de Legendre](#/transformadas-de-legendre)
- [Capacidad calorífica](#/capacidad-calorifica)
- [Relaciones de Maxwell](#/relaciones-de-maxwell)
- [Ecuación de estado](#/ecuacion-de-estado)
