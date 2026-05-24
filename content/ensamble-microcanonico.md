# Ensamble microcanonico

<!-- curated-entry -->

## Resumen

El **ensamble microcanonico** describe un sistema aislado en equilibrio termodinamico. Las variables macroscopicas fijadas son la energia $E$, el volumen $V$ y el numero de particulas $N$; el sistema no intercambia ninguna cantidad con el exterior. El postulado central es la equiprobabilidad de microestados accesibles: toda configuracion microscopica compatible con $(E,V,N)$ recibe el mismo peso estadistico.

La funcion fundamental del ensamble es la entropia de Boltzmann,

$$
S(E,V,N)=k_B\ln\Omega(E,V,N),
$$

donde $\Omega(E,V,N)$ es el numero de microestados accesibles. Temperatura, presion y potencial quimico emergen como derivadas parciales de $S$ respecto de sus variables naturales; no se imponen desde un reservorio externo.

El microcanonico es el ensamble conceptualmente mas primitivo precisamente porque no supone la existencia de ningun reservorio. Por eso es indispensable en tres situaciones donde los demas ensambles fallan o no aplican: sistemas con espectro de energia acotado superiormente (donde la temperatura puede ser negativa), sistemas pequenos donde la distincion entre energia fija y temperatura fija es observable, y analisis de transiciones de fase donde la convexidad de $S(E)$ importa directamente.

## Definicion

Un sistema esta en el ensamble microcanonico si el macroestado queda determinado por

$$
\boxed{E,\;V,\;N\ \text{fijos}}.
$$

Sea $\Gamma(E,V,N)$ el conjunto de microestados compatibles con esas restricciones y $\Omega(E,V,N)=|\Gamma(E,V,N)|$. La distribucion de probabilidad microcanonica es

$$
p_i =
\begin{cases}
\Omega(E,V,N)^{-1}, & i\in\Gamma(E,V,N),\\
0, & i\notin\Gamma(E,V,N).
\end{cases}
$$

La equiprobabilidad no afirma que el sistema visite todos los microestados en tiempos observables. Afirma que, en ausencia de informacion que distinga dos microestados accesibles, no hay base para asignarles pesos distintos. La cuestion de si la dinamica real explora $\Gamma(E,V,N)$ es separada y mas dificil; corresponde a la hipotesis ergodica.

En la formulacion clasica continua, la suma discreta se reemplaza por un volumen adimensional de espacio de fases. La convencion de capa energetica es

$$
\Omega(E,V,N)=
\frac{1}{h^{3N}N!}
\int_{E\le H(q,p)\le E+\Delta E} d^{3N}q\;d^{3N}p.
$$

El factor $h^{3N}$ fija la celda fundamental de espacio de fases y $N!$ corrige la sobrecontacion de particulas indistinguibles.

## Notacion

- $E$: energia total del sistema aislado.
- $V$: volumen fijo o parametro externo fijo equivalente.
- $N$: numero de particulas fijo.
- $\Gamma(E,V,N)$: region accesible del espacio de microestados.
- $\Omega(E,V,N)$: numero de microestados en la capa $[E, E+\Delta E]$ (convencion de Boltzmann).
- $\Omega_{\le E}$: numero acumulado de microestados con energia hasta $E$ (convencion de Gibbs).
- $g(E)=\partial\Omega_{\le E}/\partial E$: densidad de estados.
- $\Delta E$: anchura de la capa de energia; en el limite termodinamico no afecta las cantidades intensivas.
- $k_B$: constante de Boltzmann.
- $h$: constante de Planck; fija la celda de espacio de fases.

Las tres cantidades $\Omega$, $\Omega_{\le E}$ y $g$ no son iguales en general. Toda derivacion debe declarar cual usa; en el limite termodinamico con interacciones de corto alcance coinciden en las cantidades intensivas, pero no en sistemas finitos ni en modelos con espectro discreto o acotado.

## Idea fisica

El ensamble microcanonico responde a una pregunta de inferencia: dado que el unico conocimiento sobre el sistema es que esta aislado con $(E,V,N)$ fijos, ¿cual es la distribucion de probabilidad sobre sus microestados que usa menor informacion adicional?

La respuesta es la distribucion uniforme sobre $\Gamma(E,V,N)$. Este resultado no es un postulado ad hoc: es la distribucion que maximiza la entropia de Shannon $-\sum_i p_i \ln p_i$ sujeta unicamente a la restriccion de normalizacion y al soporte $\Gamma(E,V,N)$. Cualquier distribucion no uniforme sobre los estados accesibles implicaria conocimiento extra que el problema no proporciona. Este razonamiento es la forma mas simple del principio de maxima entropia.

Los otros ensambles surgen del mismo principio con restricciones adicionales. El canonico resulta de maximizar $-\sum_i p_i \ln p_i$ con la restriccion adicional $\sum_i p_i E_i = \langle E\rangle$; el multiplicador de Lagrange asociado a esa restriccion es $\beta=1/(k_BT)$, lo que produce los pesos de Boltzmann $p_i\propto e^{-\beta E_i}$. El microcanonico es el caso sin esa restriccion de valor medio: fija $E$ exactamente, no su promedio.

La razon por la que el ensamble predice bien los observables macroscopicos no es que la dinamica sea ergodica en sentido estricto. En sistemas grandes, el numero de microestados compatibles con el equilibrio supera en muchos ordenes de magnitud al numero de microestados fuera del equilibrio; el promedio sobre la region accesible domina independientemente de los detalles dinamicos.

## Formulacion matematica

La funcion de estado fundamental del ensamble microcanonico es

$$
S(E,V,N)=k_B\ln \Omega(E,V,N).
$$

Las variables intensivas emergen como derivadas de $S$ respecto de sus variables extensivas naturales:

$$
\frac{1}{T}=\left(\frac{\partial S}{\partial E}\right)_{V,N},
\qquad
\frac{P}{T}=\left(\frac{\partial S}{\partial V}\right)_{E,N},
\qquad
-\frac{\mu}{T}=\left(\frac{\partial S}{\partial N}\right)_{E,V}.
$$

Estas tres relaciones reproducen la relacion fundamental de la termodinamica,

$$
dS=\frac{1}{T}\,dE+\frac{P}{T}\,dV-\frac{\mu}{T}\,dN,
$$

sin suponer la existencia de un reservorio. El valor esperado de un observable $A$ es

$$
\langle A\rangle_E
=
\frac{1}{\Omega(E,V,N)}
\sum_{i\in\Gamma(E,V,N)} A_i,
$$

y en la version clasica continua,

$$
\langle A\rangle_E
=
\frac{
\int d^{3N}q\;d^{3N}p\;A(q,p)\;\delta(E-H(q,p))
}{
\int d^{3N}q\;d^{3N}p\;\delta(E-H(q,p))
}.
$$

## Temperatura como condicion de equilibrio

La temperatura microcanonica no se introduce como parametro; emerge de la condicion de equilibrio entre subsistemas.

Considere dos subsistemas $A$ y $B$ en contacto termico dentro de un sistema aislado total con $E_{\rm tot}=E_A+E_B$ constante. Si los subsistemas son estadisticamente independientes, el numero de microestados del sistema total cuando $A$ tiene energia $E_A$ es

$$
\Omega_{\rm tot}(E_A)=\Omega_A(E_A)\;\Omega_B(E_{\rm tot}-E_A).
$$

Maximizar $\Omega_{\rm tot}$ equivale a maximizar

$$
S_{\rm tot}(E_A)=S_A(E_A)+S_B(E_{\rm tot}-E_A).
$$

La condicion de maximo $\partial S_{\rm tot}/\partial E_A=0$ da

$$
\left(\frac{\partial S_A}{\partial E_A}\right)_{V_A,N_A}
=
\left(\frac{\partial S_B}{\partial E_B}\right)_{V_B,N_B},
$$

que identifica la temperatura estadistica $1/T=(\partial S/\partial E)_{V,N}$ como la cantidad que se iguala en el equilibrio. El argumento produce ademas el segundo resultado: el estado de equilibrio es el macroestado de mayor entropia, lo que conecta la segunda ley con el conteo de microestados.

## Tipicidad: por que funciona el ensamble

El ensamble microcanonico predice bien los observables macroscopicos incluso cuando el sistema no es ergodico en sentido matematico estricto. La razon es la **tipicidad**: para $N$ grande, casi todos los microestados de $\Gamma(E,V,N)$ tienen exactamente las mismas propiedades macroscopicas.

Dicho con precision: sea $A$ un observable macroscopico (presion, densidad local, energia cinetica media). Defina el conjunto de microestados "atipicos" como aquellos donde $A$ difiere de su promedio en mas de $\varepsilon$:

$$
\Gamma_{\rm atip}(\varepsilon)=\bigl\{i\in\Gamma:\;|A_i-\langle A\rangle_E|>\varepsilon\bigr\}.
$$

Para un gas de $N$ particulas sin interaccion, la fraccion de microestados atipicos satisface

$$
\frac{|\Gamma_{\rm atip}(\varepsilon)|}{|\Gamma|}
\;\le\;
\frac{\mathrm{Var}(A)}{\varepsilon^2\,\Omega(E,V,N)}
\;\xrightarrow[N\to\infty]{}\; 0.
$$

La varianza de $A$ crece como $N$ (extensiva), pero $\Omega$ crece como $e^{cN}$, de modo que la fraccion atipica se anula exponencialmente. En la practica, para $N\sim10^{23}$, las fluctuaciones relativas de los observables extensivos son del orden $N^{-1/2}\sim10^{-12}$: completamente inobservables.

La consecuencia practica es importante: **no se necesita demostrar ergodicidad para justificar el ensamble**. Basta con que el sistema haya explorado una fraccion representativa de $\Gamma(E,V,N)$, porque casi cualquier microestado da el mismo valor macroscopico. La ergodicidad cuantifica cuanto tarda el sistema en llegar a esa situacion; la tipicidad garantiza que cuando llegue, el resultado sera correcto independientemente del microestado particular que ocupe.

La tipicidad falla exactamente donde el ensamble microcanonico falla: en sistemas pequenos ($N\sim10$), en transiciones de fase donde distintas regiones del espacio de fases tienen propiedades macroscopicas diferentes, y cuando el observable $A$ es el mismo diagnostico de ergodicidad (por ejemplo, el tiempo de visita a una region del espacio de fases).

## Convenciones de conteo y temperatura negativa

Existen dos convenciones para definir $\Omega$, con diferencias fisicas visibles en sistemas de espectro acotado.

**Convencion de Boltzmann** (capa de energia):

$$
\Omega_B(E)=\frac{1}{h^{3N}N!}\int_{E\le H\le E+\Delta E}d^{3N}q\;d^{3N}p.
$$

**Convencion de Gibbs** (volumen acumulado):

$$
\Omega_G(E)=\frac{1}{h^{3N}N!}\int_{H\le E}d^{3N}q\;d^{3N}p,
\qquad
g(E)=\frac{\partial\Omega_G}{\partial E}.
$$

En el limite termodinamico con interacciones de corto alcance, $S_B=k_B\ln\Omega_B$ y $S_G=k_B\ln\Omega_G$ producen la misma termodinamica intensiva. La diferencia importa en sistemas con espectro acotado superiormente, como un conjunto de espines en campo magnetico externo:

- Con la convencion de Boltzmann, $\Omega_B(E)$ puede disminuir al aumentar $E$ (cuando la mayoria de los espines ya estan excitados y hay pocos microestados disponibles). En ese regimen $\partial S_B/\partial E<0$, lo que implica $T<0$. La **temperatura negativa** es fisica: no significa mas frio que el cero absoluto, sino una inversion de poblaciones respecto del orden termal normal. Los sistemas con $T<0$ ceden energia espontaneamente a sistemas con $T>0$ (incluyendo $T=+\infty$), lo que es consistente con la segunda ley si se define la flecha termica mediante $\partial S/\partial E$.
- Con la convencion de Gibbs, $\Omega_G(E)$ es monotonamente creciente en $E$ por construccion, por lo que $T>0$ siempre. Esta convencion elimina la temperatura negativa por definicion, no por fisica.

<figure style="margin:2em 0">
<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" style="max-width:500px;width:100%;font-family:Georgia,serif;display:block;margin:0 auto;overflow:visible">

  <!-- region backgrounds -->
  <rect x="70" y="50" width="190" height="190" fill="#16a34a" opacity="0.05" rx="2"/>
  <rect x="260" y="50" width="190" height="190" fill="#dc2626" opacity="0.05" rx="2"/>

  <!-- vertical separator at peak -->
  <line x1="260" y1="50" x2="260" y2="240" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- entropy curve: S(E) = -x ln x - (1-x) ln(1-x) / ln2, x = E/Nε -->
  <polyline
    points="70,240 78,213 89,185 108,151 146,103 184,73 222,56 260,50 298,56 336,73 374,103 412,151 431,185 442,213 450,240"
    fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- X axis -->
  <line x1="60" y1="240" x2="462" y2="240" stroke="#444" stroke-width="1.5"/>
  <polygon points="462,236 462,244 470,240" fill="#444"/>

  <!-- Y axis -->
  <line x1="70" y1="250" x2="70" y2="22" stroke="#444" stroke-width="1.5"/>
  <polygon points="66,22 74,22 70,14" fill="#444"/>

  <!-- axis labels -->
  <text x="472" y="244" font-size="14" fill="#444" font-style="italic">E</text>
  <text x="76" y="16" font-size="14" fill="#444" font-style="italic">S</text>

  <!-- X ticks -->
  <line x1="70" y1="238" x2="70" y2="242" stroke="#555"/>
  <text x="60" y="255" font-size="11" fill="#666">0</text>

  <line x1="260" y1="238" x2="260" y2="242" stroke="#555"/>
  <text x="243" y="255" font-size="11" fill="#666">N&#x3B5;/2</text>

  <line x1="450" y1="238" x2="450" y2="242" stroke="#555"/>
  <text x="440" y="255" font-size="11" fill="#666">N&#x3B5;</text>

  <!-- Y tick at max -->
  <line x1="68" y1="50" x2="72" y2="50" stroke="#555"/>
  <text x="4" y="54" font-size="10" fill="#666">Nk<tspan dy="3" font-size="8">B</tspan><tspan dy="-3"> ln 2</tspan></text>

  <!-- tangent T > 0 at x=0.2 (svg 146,103), slope -1.0 -->
  <line x1="96" y1="153" x2="196" y2="53" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.9"/>

  <!-- T > 0 label -->
  <text x="72" y="195" font-size="13" fill="#16a34a" font-weight="bold">T &gt; 0</text>
  <text x="72" y="210" font-size="10" fill="#16a34a">&#x2202;S/&#x2202;E &gt; 0</text>

  <!-- tangent T → ±∞ at peak (260,50), horizontal -->
  <line x1="210" y1="50" x2="310" y2="50" stroke="#d97706" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.9"/>
  <text x="210" y="40" font-size="10.5" fill="#d97706" font-weight="bold">T &#x2192; &#xB1;&#x221E;</text>
  <text x="216" y="29" font-size="9.5" fill="#d97706">&#x2202;S/&#x2202;E = 0</text>

  <!-- tangent T < 0 at x=0.8 (svg 374,103), slope +1.0 -->
  <line x1="324" y1="53" x2="424" y2="153" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.9"/>

  <!-- T < 0 label -->
  <text x="392" y="195" font-size="13" fill="#dc2626" font-weight="bold">T &lt; 0</text>
  <text x="388" y="210" font-size="10" fill="#dc2626">&#x2202;S/&#x2202;E &lt; 0</text>

  <!-- key equation -->
  <text x="155" y="228" font-size="11" fill="#888" font-style="italic">1/T = (&#x2202;S/&#x2202;E)<tspan dy="3" font-size="8">V,N</tspan></text>

</svg>
<figcaption style="text-align:center;font-size:0.88em;color:#666;margin-top:0.5em">Figura 1. Entropia de Boltzmann para N espines de dos niveles en funcion de la energia total E. La pendiente de la curva define la temperatura estadistica 1/T = (&#x2202;S/&#x2202;E)<sub>V,N</sub>: positiva donde S crece (E &lt; N&#x3B5;/2), cero en el maximo (T &#x2192; &#xB1;&#x221E;), y negativa donde S decrece (E &gt; N&#x3B5;/2). La region T &lt; 0 es fisicamente realizable pero inaccesible para el ensamble canonico con T &gt; 0.</figcaption>
</figure>

La discusion de cual convencion es mas fundamental es activa en la literatura moderna (vease Dunkel y Hilbert, 2014). Para la gran mayoria de los sistemas de laboratorio ambas coinciden; la distincion importa en espines nucleares invertidos, atomos frios en redes opticas y ciertos modelos de lattice.

## Supuestos y regimen de validez

- El sistema total esta aislado de cualquier entorno.
- Las restricciones macroscopicas relevantes son exclusivamente $E$, $V$, $N$; no hay informacion adicional que distinga microestados accesibles entre si.
- Existe una medida bien definida sobre el espacio de microestados (discreta o continua con la celda $h^{3N}N!$).
- Los promedios sobre $\Gamma(E,V,N)$ representan los observables macroscopicos.

La equivalencia con el ensamble canonico requiere condiciones adicionales. Funciona en el limite termodinamico con interacciones de corto alcance, pero puede fallar en:

- **Sistemas pequenos** ($N\sim 10$–$100$): las fluctuaciones de energia son comparables al valor medio y la distincion entre $E$ fijo y $\langle E\rangle$ fijo tiene consecuencias observables.
- **Interacciones de largo alcance** (gravedad, Coulomb sin apantallamiento): la entropia puede ser no extensiva y la equivalencia de ensambles se rompe incluso en el limite termodinamico.
- **Coexistencia de fases**: la curva $S(E)$ tiene una region concava que el ensamble canonico, al trabajar con transformadas de Laplace, no puede reproducir; el microcanonico si la ve directamente como una region de calor especifico negativo aparente.
- **Espectros acotados**: la temperatura puede ser negativa en el microcanonico pero el canonico con $T>0$ no accede a esa region del espectro.

### Conexion con simulacion numerica

La **dinamica molecular** (MD) es la implementacion computacional directa del ensamble microcanonico. Un codigo MD integra las ecuaciones de Hamilton para $N$ particulas en una caja de volumen $V$ con energia total $E$ conservada: exactamente las variables del microcanonico. El promedio temporal de cualquier observable sobre una trayectoria larga aproxima el promedio microcanonico, gracias a que la tipicidad garantiza que casi cualquier microestado visitado da el valor macroscopico correcto.

Para simular a temperatura fija (ensamble canonico), se acopla el sistema a un termostato: un mecanismo que modifica las ecuaciones de movimiento para que la energia fluctue e intercambie con un bano ficticio. Los termostatos de Nose-Hoover y de Andersen son las implementaciones mas comunes. La distincion es operativamente importante: una simulacion MD sin termostato muestrea el microcanonico; con termostato, el canonico.

## Ejemplos

**1. Tres espines en campo: calculo completo de $\Omega$, $S$ y $T$.**

Un sistema de tres espines de dos niveles en campo externo, con energia $E=n\varepsilon$ donde $n$ es el numero de espines excitados ($\varepsilon>0$). Los ocho microestados se agrupan en cuatro macroestados:

$$
\Omega(n)=\binom{3}{n}:\quad
\Omega(0)=1,\quad\Omega(1)=3,\quad\Omega(2)=3,\quad\Omega(3)=1.
$$

La entropia de Boltzmann es $S(n)=k_B\ln\binom{3}{n}$:

$$
S(0)=0,\quad S(1)=k_B\ln3,\quad S(2)=k_B\ln3,\quad S(3)=0.
$$

La temperatura entre niveles adyacentes se calcula como $1/T\approx\Delta S/\Delta E$:

$$
\frac{1}{T_{0\to1}}=\frac{k_B\ln3}{\varepsilon}>0,
\qquad
\frac{1}{T_{1\to2}}=\frac{0}{\varepsilon}=0\;(T\to\infty),
\qquad
\frac{1}{T_{2\to3}}=\frac{-k_B\ln3}{\varepsilon}<0.
$$

El resultado $T\to+\infty$ en la transicion $n=1\to2$ y $T<0$ en $n=2\to3$ no son patologias: son estados fisicos del sistema. El estado $n=3$ (todos los espines excitados) tiene $T<0$ y cederia energia a cualquier sistema ordinario con $T>0$.

Este ejemplo ilustra ademas que fijar energia es diferente a fijar temperatura: al fijar $E=\varepsilon$ obtenemos $\Omega=3$ exactamente, mientras que si se fijara $T=k_B\ln3/\varepsilon$ habria una distribucion exponencial sobre los cuatro macroestados.

**2. Gas ideal clasico: entropia de Sackur-Tetrode y ecuaciones de estado.**

Para $N$ particulas sin interaccion en una caja de volumen $V$, el hamiltoniano es $H=\sum_{i=1}^N|\mathbf{p}_i|^2/(2m)$. El conjunto de momentos compatible con $H=E$ es una esfera de radio $\sqrt{2mE}$ en $3N$ dimensiones. El volumen de la capa $[E,E+\Delta E]$ en espacio de momentos es la superficie de esa esfera multiplicada por $\Delta E$:

$$
\Omega(E,V,N)=
\frac{V^N}{h^{3N}N!}
\cdot
\frac{(2\pi m)^{3N/2}}{\Gamma(3N/2)}\,
E^{3N/2-1}\,\Delta E.
$$

Tomando el logaritmo y usando la aproximacion de Stirling ($\ln N!\approx N\ln N - N$) en el limite $N\gg1$:

$$
S(E,V,N)=Nk_B\left[
\ln\!\left(\frac{V}{N}\!\left(\frac{4\pi mE}{3Nh^2}\right)^{3/2}\right)+\frac{5}{2}
\right].
$$

Esta es la entropia de Sackur-Tetrode. Verificando las derivadas:

$$
\frac{1}{T}=\frac{\partial S}{\partial E}=\frac{3Nk_B}{2E}
\;\implies\;
E=\frac{3}{2}Nk_BT,
$$

$$
\frac{P}{T}=\frac{\partial S}{\partial V}=\frac{Nk_B}{V}
\;\implies\;
PV=Nk_BT.
$$

Las dos ecuaciones de estado del gas ideal emergen directamente de derivar $S(E,V,N)$. El factor $N!$ en $\Omega$ es esencial: sin el, $S$ no seria extensiva ($S(E,V,N)\ne 2S(E/2,V/2,N/2)$), lo que constituye la paradoja de Gibbs.

**3. Dos solidos de Einstein en contacto: equilibrio sin temperatura impuesta.**

Dos solidos de Einstein con $N_A$ y $N_B$ osciladores comparten $q_{\rm tot}=q_A+q_B$ cuantos de energia fijo. El numero de microestados de un solido con $q$ cuantos en $N$ osciladores es

$$
\Omega(q,N)=\binom{q+N-1}{N-1}.
$$

El peso de la particion $(q_A,\,q_{\rm tot}-q_A)$ es $W(q_A)=\Omega_A(q_A)\,\Omega_B(q_{\rm tot}-q_A)$. La condicion de maximo de $W$ respecto de $q_A$ da

$$
\frac{\partial\ln\Omega_A}{\partial q_A}=\frac{\partial\ln\Omega_B}{\partial q_B},
$$

que es la igualdad de temperaturas estadisticas. No se impuso ningun parametro externo de temperatura.

Para $N_A=N_B=50$ y $q_{\rm tot}=100$, la distribucion de $q_A$ tiene su maximo en $q_A=50$ y una anchura relativa $\sigma/q_{\rm tot}\sim1/\sqrt{N}\approx0.14$. El equilibrio termal es un estado estadisticamente dominante, no una condicion impuesta. En el limite $N\to\infty$ la distribucion se estrecha como $1/\sqrt{N}$, lo que conecta con el limite termodinamico y la equivalencia de ensambles.

## Errores comunes

- **Confundir $E$ fijo con $T$ fija.** El microcanonico fija la energia exactamente; el canonico fija la temperatura promedio mediante un reservorio. Usar los factores de Boltzmann $e^{-\beta E_i}$ dentro de una cuenta microcanonica es incorrecto.
- **Mezclar convenciones de $\Omega$.** Usar la capa $\Omega_B$ en un paso y el volumen acumulado $\Omega_G$ en otro introduce errores en sistemas finitos y de espectro acotado. Toda derivacion debe declarar que objeto usa.
- **Olvidar que la equiprobabilidad aplica solo dentro de $\Gamma(E,V,N)$.** Asignar probabilidad no nula a estados fuera de la region accesible viola la definicion del ensamble.
- **Suponer equivalencia de ensambles sin revisar el regimen.** En sistemas pequenos, con interacciones de largo alcance o en coexistencia de fases, el microcanonico y el canonico producen resultados distintos.
- **Olvidar el factor $N!$ al contar particulas indistinguibles.** Sin ese factor, la entropia del gas ideal clasico no es extensiva (paradoja de Gibbs).
- **Interpretar temperatura negativa como mas fria que el cero absoluto.** En el microcanonico, $T<0$ corresponde a una inversion de poblaciones en la mitad superior del espectro de energia acotado. Es una region de alta energia donde $\partial S/\partial E<0$; no viola ninguna ley termodinamica.
- **Concluir que el sistema visita todos los microestados.** La equiprobabilidad es un supuesto de asignacion estadistica, no una afirmacion sobre la dinamica. La validez empirica del ensamble no depende de que se demuestre ergodicidad en sentido matematico estricto.

## Relacion con otras entradas

El ensamble microcanonico presupone las entradas [microestado](#/microestado), [macroestado](#/macroestado) y [espacio de fases](#/espacio-de-fases). La funcion de estado que usa es la [entropia de Boltzmann](#/entropia-de-boltzmann); su relacion con la [entropia de Gibbs](#/entropia-de-gibbs) es central en la discusion de temperatura negativa y equivalencia de convenciones.

Los ensambles que lo generalizan son [ensamble canonico](#/ensamble-canonico), [ensamble gran canonico](#/ensamble-gran-canonico) y [ensamble isotermico-isobarico](#/ensamble-isotermico-isobarico). Las condiciones bajo las cuales producen la misma fisica se tratan en [equivalencia de ensambles](#/equivalencia-de-ensambles).

Las entradas conceptuales que aclaran sus supuestos son [hipotesis ergodica](#/hipotesis-ergodica), [limite termodinamico](#/limite-termodinamico), [temperatura estadistica](#/temperatura-estadistica) y [principio de maxima entropia](#/principio-de-maxima-entropia). La cantidad tecnica que conecta $\Omega$ con $g(E)$ se define en [densidad de estados](#/densidad-de-estados).

Los modelos donde el microcanonico es el ensamble natural de calculo son [solido de Einstein](#/solido-de-einstein), [sistema de dos niveles](#/sistema-de-dos-niveles) y [paramagnetismo](#/paramagnetismo).

## Fuentes para profundizar

- Kardar, *Statistical Physics of Particles*, cap. 4: derivacion sistematica del ensamble microcanonico clasico; calculo de $\Omega(E,V,N)$ para el gas ideal monoatomico y obtencion de la entropia de Sackur-Tetrode; derivacion del ensamble canonico como limite del microcanonico con un reservorio macroscopico.
- Schroeder, *An Introduction to Thermal Physics*, caps. 2-3: conteo de microestados con el solido de Einstein; calculo numerico de la particion de cuantos entre dos solidos; definicion de temperatura estadistica como $\partial S/\partial E$ con ejemplos de dos niveles y gas ideal.
- Pathria y Beale, *Statistical Mechanics*, caps. 1-3: tratamiento avanzado que incluye la distincion entre convenciones de Boltzmann y Gibbs, condiciones de equivalencia de ensambles y analisis de sistemas finitos.
- Dunkel y Hilbert, "Consistent thermostatistics forbids negative absolute temperatures", *Nature Physics* **10**, 67-72 (2014): argumento a favor de la convencion de Gibbs como unica consistente; debate sobre cuando la temperatura negativa es fisica.
- Ramsey, "Thermodynamics and Statistical Mechanics at Negative Absolute Temperatures", *Physical Review* **103**, 20-28 (1956): primera descripcion sistematica de temperatura negativa en espines nucleares; derivacion de las condiciones de realizabilidad y consecuencias para la segunda ley.

## Paginas relacionadas

- [Microestado](#/microestado)
- [Macroestado](#/macroestado)
- [Espacio de fases](#/espacio-de-fases)
- [Densidad de estados](#/densidad-de-estados)
- [Entropia de Boltzmann](#/entropia-de-boltzmann)
- [Entropia de Gibbs](#/entropia-de-gibbs)
- [Ensamble canonico](#/ensamble-canonico)
- [Ensamble gran canonico](#/ensamble-gran-canonico)
- [Equivalencia de ensambles](#/equivalencia-de-ensambles)
- [Temperatura estadistica](#/temperatura-estadistica)
- [Hipotesis ergodica](#/hipotesis-ergodica)
- [Principio de maxima entropia](#/principio-de-maxima-entropia)
- [Solido de Einstein](#/solido-de-einstein)
- [Sistema de dos niveles](#/sistema-de-dos-niveles)
