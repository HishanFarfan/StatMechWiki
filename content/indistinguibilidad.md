# Indistinguibilidad

## Resumen

La **indistinguibilidad** es el principio por el cual partículas del mismo tipo —misma masa, carga, espín— son físicamente idénticas: no hay ningún experimento que las distinga. Permutar dos partículas idénticas no produce un estado físico nuevo.

En mecánica clásica, esto lleva a dividir el conteo de microestados por $N!$, resolviendo la paradoja de Gibbs y haciendo la entropía extensiva. En mecánica cuántica, la indistinguibilidad es más radical: los estados físicos son funciones de onda (anti)simétricas bajo permutaciones, y no existe ninguna descripción de partículas "etiquetadas".

## El problema en mecánica clásica

En mecánica clásica, dos configuraciones que difieren solo en el intercambio de dos partículas idénticas son puntos distintos del espacio de fases $\mathbb{R}^{6N}$. Si se cuenta así, el "número de microestados" sobreestima la información física por un factor $N!$.

**Consecuencia:** la entropía del gas ideal sin corrección es

$$S_{\text{incorrecto}} = Nk_B\left[\frac{3}{2}\ln E + \ln V + \text{cte}(N)\right]$$

que viola la extensividad: $S(2E, 2V, 2N) \neq 2S(E,V,N)$.

**Corrección de Gibbs:** dividir el volumen de espacio de fases por $N!$:

$$\Omega_{\text{correcto}} = \frac{1}{h^{3N}N!}\int_{E\leq H\leq E+\Delta E}d^{3N}q\,d^{3N}p$$

Con esta corrección, la entropía del gas ideal es la fórmula de Sackur-Tetrode, que sí es extensiva.

## La indistinguibilidad en mecánica cuántica

En mecánica cuántica, la indistinguibilidad es un principio fundamental, no una corrección ad hoc. El espacio de Hilbert de $N$ partículas idénticas no es $\mathcal{H}_1^{\otimes N}$ sino su subespacio simétrico o antisimétrico.

Para dos partículas con estados de una sola partícula $|\phi\rangle$ y $|\chi\rangle$:

**Bosones (enteros de espín):** estado simétrico:
$$|\psi_+\rangle = \frac{|\phi\rangle|\chi\rangle + |\chi\rangle|\phi\rangle}{\sqrt{2}}$$

**Fermiones (semienteros de espín):** estado antisimétrico:
$$|\psi_-\rangle = \frac{|\phi\rangle|\chi\rangle - |\chi\rangle|\phi\rangle}{\sqrt{2}}$$

Si $|\phi\rangle = |\chi\rangle$: $|\psi_-\rangle = 0$. **Dos fermiones no pueden ocupar el mismo estado cuántico** (principio de exclusión de Pauli).

## Cómo contar estados cuánticos correctamente

Con estados de una sola partícula $|1\rangle, |2\rangle, \ldots$, los microestados físicos distintos para $N$ partículas son:

**Fermiones (estadística de Fermi-Dirac):** se especifica qué estados de una partícula están ocupados. Cada estado puede estar ocupado por 0 o 1 fermiones. El número de microestados con $N$ fermiones en $M$ estados disponibles es $\binom{M}{N}$.

**Bosones (estadística de Bose-Einstein):** se especifica cuántas partículas hay en cada estado. Un estado puede tener 0, 1, 2, ... bosones. El número de microestados con $N$ bosones en $M$ estados es $\binom{M+N-1}{N}$.

**Límite clásico:** cuando $M \gg N$ (pocas partículas en muchos estados), ambas estadísticas se aproximan a la distribución de Maxwell-Boltzmann con el factor $1/N!$:

$$\binom{M}{N} \approx \binom{M+N-1}{N} \approx \frac{M^N}{N!}$$

## Efectos físicos de la indistinguibilidad cuántica

**Condensación de Bose-Einstein.** Para bosones a muy baja temperatura, una fracción macroscópica de las partículas colapsa al estado fundamental (ocupación de un solo estado por un número macroscópico de bosones). Esto no tiene análogo clásico.

**Degeneración de Fermi.** Para fermiones, el principio de exclusión fuerza a llenar estados hasta la energía de Fermi $E_F$ incluso a $T = 0$. Los electrones en metales están altamente degenerados a temperatura ambiente ($E_F \sim 5\ \text{eV} \gg k_BT \sim 0.025\ \text{eV}$).

**Intercambio y correlaciones.** Incluso sin interacciones directas, la (anti)simetrización del estado produce correlaciones cuánticas. Para fermiones, hay un "hueco de intercambio" que mantiene a dos partículas separadas; para bosones, hay "agrupamiento" (bunching).

**Presión de degeneración.** Los electrones en una estrella enana blanca o los neutrones en una estrella de neutrones resisten el colapso gravitatorio por presión de degeneración de Fermi, que existe incluso a $T \to 0$.

## El límite clásico

La indistinguibilidad cuántica se reduce a la corrección clásica $1/N!$ cuando la longitud de onda de de Broglie térmica $\lambda_T = h/\sqrt{2\pi mk_BT}$ satisface

$$n\lambda_T^3 \ll 1$$

donde $n = N/V$ es la densidad. Cuando los paquetes de onda de las partículas no se superponen significativamente, la naturaleza cuántica de la indistinguibilidad es irrelevante y la corrección por $N!$ es suficiente.

| Sistema | $n\lambda_T^3$ a 300 K | Régimen |
|---|---|---|
| Gas de He | $\sim 10^{-5}$ | Clásico |
| Gas de H₂ | $\sim 10^{-4}$ | Clásico |
| Electrones en Cu | $\sim 10^3$ | Cuántico (degenerado) |

## Fuentes para profundizar

- Feynman, *Statistical Mechanics*, cap. 1: la indistinguibilidad cuántica y su origen en la simetría de las funciones de onda.
- Kardar, *Statistical Physics of Particles*, cap. 7: estadísticas cuánticas, distribuciones de Fermi-Dirac y Bose-Einstein.
- Pathria & Beale, *Statistical Mechanics*, cap. 5-6: derivación completa de las estadísticas cuánticas y el límite clásico.

## Páginas relacionadas

- [Paradoja de Gibbs](#/paradoja-de-gibbs)
- [Estadísticas cuánticas](#/estadisticas-cuanticas)
- [Distribución de Fermi-Dirac](#/distribucion-fermi-dirac)
- [Distribución de Bose-Einstein](#/distribucion-bose-einstein)
- [Gas ideal cuántico](#/gas-ideal-cuantico)
- [Microestado](#/microestado)
