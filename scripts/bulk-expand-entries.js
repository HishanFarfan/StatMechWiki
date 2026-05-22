const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "content");
const appPath = path.join(root, "assets", "app.js");

const existingSections = [
  {
    section: "Inicio",
    items: [
      ["Inicio", "inicio", "inicio.md"],
      ["Mapa de la wiki", "mapa", "mapa.md"],
      ["Como contribuir", "como-contribuir", "como-contribuir.md"],
    ],
  },
  {
    section: "Fundamentos",
    items: [
      ["Microestado", "microestado", "microestado.md"],
      ["Macroestado", "macroestado", "macroestado.md"],
      ["Espacio de fases", "espacio-de-fases", "espacio-de-fases.md"],
      ["Entropia de Boltzmann", "entropia-de-boltzmann", "entropia-de-boltzmann.md"],
      ["Entropia de Gibbs", "entropia-de-gibbs", "entropia-de-gibbs.md"],
    ],
  },
  {
    section: "Ensambles",
    items: [
      ["Ensamble microcanonico", "ensamble-microcanonico", "ensamble-microcanonico.md"],
      ["Ensamble canonico", "ensamble-canonico", "ensamble-canonico.md"],
      ["Ensamble gran canonico", "ensamble-gran-canonico", "ensamble-gran-canonico.md"],
      ["Equivalencia de ensambles", "equivalencia-de-ensambles", "equivalencia-de-ensambles.md"],
      ["Fluctuaciones", "fluctuaciones", "fluctuaciones.md"],
    ],
  },
  {
    section: "Termodinamica estadistica",
    items: [
      ["Funcion de particion", "funcion-de-particion", "funcion-de-particion.md"],
      ["Energia libre de Helmholtz", "energia-libre-de-helmholtz", "energia-libre-de-helmholtz.md"],
      ["Potencial quimico", "potencial-quimico", "potencial-quimico.md"],
    ],
  },
  {
    section: "Modelos",
    items: [
      ["Gas ideal clasico", "gas-ideal-clasico", "gas-ideal-clasico.md"],
      ["Sistema de dos niveles", "sistema-de-dos-niveles", "sistema-de-dos-niveles.md"],
      ["Oscilador armonico", "oscilador-armonico", "oscilador-armonico.md"],
      ["Modelo de Ising", "modelo-de-ising", "modelo-de-ising.md"],
    ],
  },
  {
    section: "Cuantica",
    items: [
      ["Estadisticas cuanticas", "estadisticas-cuanticas", "estadisticas-cuanticas.md"],
    ],
  },
  {
    section: "Recursos",
    items: [
      ["Convenciones de notacion", "convenciones", "convenciones.md"],
      ["Bibliografia", "bibliografia", "bibliografia.md"],
    ],
  },
];

const specs = [
  ["Fundamentos", "Limite termodinamico", "limite-termodinamico", "limite en que N y V crecen manteniendo fija la densidad", "N\\to\\infty,\\quad V\\to\\infty,\\quad n=N/V\\ \\text{fijo}"],
  ["Fundamentos", "Densidad de estados", "densidad-de-estados", "numero de estados disponibles por intervalo de energia", "g(E)=\\sum_i \\delta(E-E_i)"],
  ["Fundamentos", "Hipotesis ergodica", "hipotesis-ergodica", "supuesto que conecta promedios temporales con promedios de ensamble", "\\overline A=\\lim_{\\tau\\to\\infty}\\frac{1}{\\tau}\\int_0^\\tau A(t)\\,dt"],
  ["Fundamentos", "Teorema de Liouville", "teorema-de-liouville", "conservacion de volumen de espacio de fases bajo dinamica hamiltoniana", "\\frac{d\\rho}{dt}=\\frac{\\partial\\rho}{\\partial t}+\\{\\rho,H\\}=0"],
  ["Fundamentos", "Principio de maxima entropia", "principio-de-maxima-entropia", "criterio para inferir distribuciones con informacion parcial", "S=-k_B\\sum_i p_i\\ln p_i"],
  ["Fundamentos", "Teorema de equiparticion", "teorema-de-equiparticion", "aporte energetico medio de terminos cuadraticos clasicos", "\\langle E_{\\mathrm{cuad}}\\rangle=\\frac{1}{2}k_B T"],
  ["Fundamentos", "Indistinguibilidad", "indistinguibilidad", "principio por el cual permutar particulas identicas no genera un estado fisico nuevo", "Z_N\\propto \\frac{1}{N!}"],
  ["Fundamentos", "Paradoja de Gibbs", "paradoja-de-gibbs", "problema de entropia de mezcla resuelto por indistinguibilidad", "S=Nk_B\\left[\\ln\\!\\left(\\frac{V}{N\\lambda_T^3}\\right)+\\frac{5}{2}\\right]"],
  ["Fundamentos", "Matriz densidad", "matriz-densidad", "descripcion probabilistica general de estados cuanticos", "\\rho=\\sum_i p_i |i\\rangle\\langle i|"],
  ["Fundamentos", "Temperatura estadistica", "temperatura-estadistica", "definicion de temperatura a partir de la entropia", "\\frac{1}{T}=\\left(\\frac{\\partial S}{\\partial E}\\right)_{V,N}"],
  ["Ensambles", "Ensamble isotermico-isobarico", "ensamble-isotermico-isobarico", "ensamble con temperatura, presion y numero de particulas fijos", "\\Delta(T,P,N)=\\int dV\\, e^{-\\beta PV}Z(T,V,N)"],
  ["Ensambles", "Distribucion de Boltzmann", "distribucion-de-boltzmann", "peso exponencial que favorece estados de menor energia", "p_i=\\frac{e^{-\\beta E_i}}{Z}"],
  ["Ensambles", "Distribucion de Maxwell-Boltzmann", "distribucion-maxwell-boltzmann", "distribucion clasica de velocidades en equilibrio", "f(v)\\propto v^2 e^{-mv^2/(2k_BT)}"],
  ["Ensambles", "Reservorio termico", "reservorio-termico", "sistema grande que fija la temperatura de un sistema pequeno", "p_i\\propto \\Omega_R(E_{\\mathrm{tot}}-E_i)"],
  ["Termodinamica estadistica", "Entalpia", "entalpia", "potencial natural para procesos a entropia, presion y numero fijos", "H=E+PV"],
  ["Termodinamica estadistica", "Energia libre de Gibbs", "energia-libre-de-gibbs", "potencial natural para temperatura, presion y numero de particulas fijos", "G=F+PV"],
  ["Termodinamica estadistica", "Potencial gran canonico", "potencial-gran-canonico", "potencial termodinamico natural de T, V y mu", "\\Phi=-k_BT\\ln\\Xi"],
  ["Termodinamica estadistica", "Capacidad calorifica", "capacidad-calorifica", "respuesta de la energia ante cambios de temperatura", "C_V=\\left(\\frac{\\partial \\langle E\\rangle}{\\partial T}\\right)_{V,N}"],
  ["Termodinamica estadistica", "Compresibilidad", "compresibilidad", "respuesta relativa del volumen ante cambios de presion", "\\kappa_T=-\\frac{1}{V}\\left(\\frac{\\partial V}{\\partial P}\\right)_T"],
  ["Termodinamica estadistica", "Susceptibilidad", "susceptibilidad", "respuesta de un parametro de orden ante su campo conjugado", "\\chi=\\left(\\frac{\\partial M}{\\partial h}\\right)_T"],
  ["Termodinamica estadistica", "Relaciones de Maxwell", "relaciones-de-maxwell", "identidades entre derivadas termodinamicas derivadas de potenciales", "\\left(\\frac{\\partial S}{\\partial V}\\right)_T=\\left(\\frac{\\partial P}{\\partial T}\\right)_V"],
  ["Termodinamica estadistica", "Estabilidad termodinamica", "estabilidad-termodinamica", "condiciones de convexidad o concavidad que garantizan equilibrio estable", "C_V\\geq 0,\\qquad \\kappa_T\\geq 0"],
  ["Termodinamica estadistica", "Transformadas de Legendre", "transformadas-de-legendre", "cambio de variables naturales entre potenciales termodinamicos", "F=E-TS"],
  ["Termodinamica estadistica", "Ecuacion de estado", "ecuacion-de-estado", "relacion macroscopica entre variables termodinamicas", "PV=Nk_BT"],
  ["Modelos", "Gas ideal cuantico", "gas-ideal-cuantico", "gas de particulas indistinguibles donde importan ocupaciones cuanticas", "\\langle n_\\alpha\\rangle=\\frac{1}{e^{\\beta(\\epsilon_\\alpha-\\mu)}\\mp 1}"],
  ["Modelos", "Solido de Einstein", "solido-de-einstein", "modelo de solido como osciladores armonicos independientes con frecuencia comun", "Z=\\left[2\\sinh(\\beta\\hbar\\omega/2)\\right]^{-3N}"],
  ["Modelos", "Solido de Debye", "solido-de-debye", "modelo de fonones con espectro continuo hasta una frecuencia de corte", "g(\\omega)\\propto \\omega^2"],
  ["Modelos", "Paramagnetismo", "paramagnetismo", "respuesta magnetica de momentos independientes ante un campo externo", "m=\\tanh(\\beta\\mu B)"],
  ["Modelos", "Cadena de Ising 1D", "cadena-de-ising-1d", "modelo de Ising en una dimension, soluble por matriz de transferencia", "H=-J\\sum_i s_i s_{i+1}-h\\sum_i s_i"],
  ["Modelos", "Modelo de Potts", "modelo-de-potts", "generalizacion del modelo de Ising con q estados por sitio", "H=-J\\sum_{\\langle i,j\\rangle}\\delta_{\\sigma_i,\\sigma_j}"],
  ["Modelos", "Modelo XY", "modelo-xy", "modelo de espines planos con simetria continua U(1)", "H=-J\\sum_{\\langle i,j\\rangle}\\cos(\\theta_i-\\theta_j)"],
  ["Modelos", "Modelo de Heisenberg", "modelo-de-heisenberg", "modelo de espines vectoriales con simetria rotacional", "H=-J\\sum_{\\langle i,j\\rangle}\\mathbf S_i\\cdot\\mathbf S_j"],
  ["Modelos", "Gas de red", "gas-de-red", "modelo de ocupacion discreta equivalente al Ising bajo cambio de variables", "n_i=0,1"],
  ["Modelos", "Modelo de van der Waals", "modelo-de-van-der-waals", "ecuacion fenomenologica que incorpora volumen excluido y atraccion media", "\\left(P+a\\frac{N^2}{V^2}\\right)(V-Nb)=Nk_BT"],
  ["Modelos", "Expansion virial", "expansion-virial", "correccion sistematica a la ecuacion de gas ideal en potencias de densidad", "\\frac{P}{k_BT}=n+B_2(T)n^2+B_3(T)n^3+\\cdots"],
  ["Modelos", "Radiacion de cuerpo negro", "radiacion-de-cuerpo-negro", "gas de fotones en equilibrio termico", "u(\\omega)=\\frac{\\hbar\\omega^3}{\\pi^2c^3}\\frac{1}{e^{\\beta\\hbar\\omega}-1}"],
  ["Modelos", "Fonones", "fonones", "cuantos de vibracion colectiva en un solido", "\\epsilon_\\mathbf{k}=\\hbar\\omega_\\mathbf{k}"],
  ["Modelos", "Caminata aleatoria", "caminata-aleatoria", "modelo probabilistico basico para difusion y polimeros ideales", "\\langle x^2(t)\\rangle=2Dt"],
  ["Modelos", "Polimero ideal", "polimero-ideal", "cadena flexible sin interacciones de volumen excluido", "\\langle R^2\\rangle=Nb^2"],
  ["Modelos", "Modelo de exclusion simple", "modelo-de-exclusion-simple", "modelo de particulas en red con ocupacion maxima por sitio", "n_i\\in\\{0,1\\}"],
  ["Modelos", "Percolacion", "percolacion", "modelo geometrico de conectividad aleatoria en redes", "P_\\infty\\sim (p-p_c)^\\beta"],
  ["Modelos", "Red de Bethe", "red-de-bethe", "red tipo arbol que permite soluciones recursivas de modelos estadisticos", "Z_{n+1}=\\mathcal{F}(Z_n)"],
  ["Cuantica", "Distribucion de Bose-Einstein", "distribucion-bose-einstein", "ocupacion media de bosones indistinguibles", "\\langle n\\rangle=\\frac{1}{e^{\\beta(\\epsilon-\\mu)}-1}"],
  ["Cuantica", "Distribucion de Fermi-Dirac", "distribucion-fermi-dirac", "ocupacion media de fermiones indistinguibles", "\\langle n\\rangle=\\frac{1}{e^{\\beta(\\epsilon-\\mu)}+1}"],
  ["Cuantica", "Condensacion de Bose-Einstein", "condensacion-bose-einstein", "ocupacion macroscopica del estado fundamental por bosones", "N_0/N=1-(T/T_c)^{3/2}"],
  ["Cuantica", "Gas de Fermi", "gas-de-fermi", "gas de fermiones no interactuantes gobernado por el principio de Pauli", "k_F=(3\\pi^2 n)^{1/3}"],
  ["Cuantica", "Energia de Fermi", "energia-de-fermi", "energia del nivel ocupado mas alto a temperatura cero", "E_F=\\frac{\\hbar^2 k_F^2}{2m}"],
  ["Cuantica", "Presion de degeneracion", "presion-de-degeneracion", "presion de origen cuantico debida al llenado de estados fermionicos", "P\\propto n^{5/3}"],
  ["Cuantica", "Ley de Planck", "ley-de-planck", "distribucion espectral de radiacion termica", "u(\\nu)=\\frac{8\\pi h\\nu^3}{c^3}\\frac{1}{e^{h\\nu/(k_BT)}-1}"],
  ["Cuantica", "Numeros de ocupacion", "numeros-de-ocupacion", "descripcion de sistemas cuanticos indistinguibles por ocupaciones de modos", "|n_1,n_2,\\ldots\\rangle"],
  ["Transiciones y criticalidad", "Transiciones de fase", "transiciones-de-fase", "cambios no analiticos de propiedades termodinamicas en el limite termodinamico", "f=-\\frac{k_BT}{V}\\ln Z"],
  ["Transiciones y criticalidad", "Parametro de orden", "parametro-de-orden", "cantidad macroscopica que distingue fases", "m=\\frac{1}{N}\\sum_i\\langle s_i\\rangle"],
  ["Transiciones y criticalidad", "Ruptura espontanea de simetria", "ruptura-espontanea-de-simetria", "seleccion de un estado de equilibrio que no comparte la simetria del Hamiltoniano", "m\\neq 0\\quad (h\\to0^+)"],
  ["Transiciones y criticalidad", "Transicion de primer orden", "transicion-primer-orden", "transicion con discontinuidad en una derivada primera del potencial", "\\Delta S\\neq 0"],
  ["Transiciones y criticalidad", "Transicion continua", "transicion-continua", "transicion sin calor latente pero con divergencias de respuesta", "\\xi\\sim |T-T_c|^{-\\nu}"],
  ["Transiciones y criticalidad", "Exponentes criticos", "exponentes-criticos", "potencias que describen singularidades cerca del punto critico", "C\\sim |t|^{-\\alpha}"],
  ["Transiciones y criticalidad", "Universalidad", "universalidad", "independencia de exponentes criticos respecto de detalles microscopicos", "\\{\\alpha,\\beta,\\gamma,\\nu\\}"],
  ["Transiciones y criticalidad", "Teoria de Landau", "teoria-de-landau", "expansion fenomenologica de la energia libre en el parametro de orden", "F(m)=F_0+am^2+bm^4-hm"],
  ["Transiciones y criticalidad", "Longitud de correlacion", "longitud-de-correlacion", "escala espacial sobre la que fluctuan coherentemente las variables", "G(r)\\sim e^{-r/\\xi}"],
  ["Transiciones y criticalidad", "Funcion de correlacion", "funcion-de-correlacion", "medida de dependencia estadistica entre grados de libertad separados", "G(r)=\\langle s(0)s(r)\\rangle-\\langle s\\rangle^2"],
  ["Transiciones y criticalidad", "Susceptibilidad critica", "susceptibilidad-critica", "respuesta divergente cerca de una transicion continua", "\\chi\\sim |T-T_c|^{-\\gamma}"],
  ["Transiciones y criticalidad", "Escalamiento de tamano finito", "escalamiento-tamano-finito", "metodo para extraer criticalidad desde sistemas finitos", "O_L(t)=L^{y_O}f(tL^{1/\\nu})"],
  ["Transiciones y criticalidad", "Grupo de renormalizacion", "grupo-renormalizacion", "descripcion de cambios de escala y flujo de acoplamientos", "K' = R(K)"],
  ["Transiciones y criticalidad", "Hipotesis de escala", "hipotesis-de-escala", "supuesto de homogeneidad cerca de puntos criticos", "f_s(t,h)=b^{-d}f_s(tb^{y_t},hb^{y_h})"],
  ["Transiciones y criticalidad", "Clase de universalidad de Ising", "clase-universalidad-ising", "familia de sistemas con parametro de orden escalar y simetria Z2", "m\\mapsto -m"],
  ["Metodos", "Metodo de punto de silla", "metodo-punto-de-silla", "aproximacion asintotica para integrales dominadas por un extremo", "\\int dx\\,e^{Nf(x)}\\simeq e^{Nf(x_*)}\\sqrt{\\frac{2\\pi}{N|f''(x_*)|}}"],
  ["Metodos", "Aproximacion de campo medio", "aproximacion-campo-medio", "sustitucion de interacciones locales por un campo efectivo promedio", "m=\\tanh[\\beta(h+zJm)]"],
  ["Metodos", "Matriz de transferencia", "matriz-de-transferencia", "metodo para reescribir funciones de particion como trazas de matrices", "Z=\\mathrm{Tr}\\,T^N"],
  ["Metodos", "Monte Carlo", "monte-carlo", "familia de metodos de muestreo estocastico de configuraciones", "\\langle A\\rangle\\approx \\frac{1}{M}\\sum_{k=1}^M A(x_k)"],
  ["Metodos", "Algoritmo de Metropolis", "algoritmo-metropolis", "regla de aceptacion que muestrea la distribucion de Boltzmann", "P_{\\mathrm{acc}}=\\min\\{1,e^{-\\beta\\Delta E}\\}"],
  ["Metodos", "Balance detallado", "balance-detallado", "condicion suficiente para que una cadena de Markov tenga una distribucion estacionaria deseada", "\\pi_i W_{i\\to j}=\\pi_j W_{j\\to i}"],
  ["Metodos", "Cadenas de Markov", "cadenas-de-markov", "procesos estocasticos donde el futuro depende solo del estado presente", "P(x_{t+1}|x_t,x_{t-1},\\ldots)=P(x_{t+1}|x_t)"],
  ["Metodos", "Muestreo de Wang-Landau", "muestreo-wang-landau", "metodo para estimar densidades de estados mediante caminata en energia", "P(E)\\propto \\frac{1}{g(E)}"],
  ["Metodos", "Metodo de histogramas", "metodo-de-histogramas", "tecnica para reponderar observables a temperaturas cercanas", "P_\\beta(E)\\propto H(E)e^{-(\\beta-\\beta_0)E}"],
  ["Metodos", "Dinamica molecular", "dinamica-molecular", "integracion numerica de ecuaciones de movimiento microscopicas", "m_i\\ddot r_i=-\\nabla_i U"],
  ["Metodos", "Termostato de Langevin", "termostato-langevin", "dinamica con friccion y ruido que modela contacto termico", "m\\ddot x=-\\gamma\\dot x-\\nabla U+\\eta(t)"],
  ["No equilibrio", "Ecuacion maestra", "ecuacion-maestra", "evolucion temporal de probabilidades entre estados discretos", "\\frac{dp_i}{dt}=\\sum_j[W_{j\\to i}p_j-W_{i\\to j}p_i]"],
  ["No equilibrio", "Respuesta lineal", "respuesta-lineal", "aproximacion de respuesta proporcional a una perturbacion externa pequena", "\\delta\\langle A(t)\\rangle=\\int dt'\\,\\chi_{AB}(t-t')h(t')"],
  ["No equilibrio", "Relaciones de Green-Kubo", "relaciones-green-kubo", "expresiones de coeficientes de transporte en terminos de correlaciones de equilibrio", "\\kappa=\\frac{1}{k_BT^2V}\\int_0^\\infty dt\\,\\langle J_Q(t)J_Q(0)\\rangle"],
  ["No equilibrio", "Teorema fluctuacion-disipacion", "teorema-fluctuacion-disipacion", "conexion entre fluctuaciones espontaneas y respuesta a perturbaciones", "S_{AA}(\\omega)\\propto \\coth\\!\\left(\\frac{\\beta\\hbar\\omega}{2}\\right)\\chi''(\\omega)"],
  ["No equilibrio", "Ecuacion de Boltzmann", "ecuacion-de-boltzmann", "ecuacion cinetica para la distribucion de una particula", "\\frac{\\partial f}{\\partial t}+\\mathbf v\\cdot\\nabla_\\mathbf r f+\\mathbf F\\cdot\\nabla_\\mathbf p f=C[f]"],
  ["No equilibrio", "Teoria cinetica", "teoria-cinetica", "descripcion de gases mediante distribuciones de una particula", "P=\\frac{1}{3}nm\\langle v^2\\rangle"],
  ["No equilibrio", "Teorema H", "teorema-h", "resultado de Boltzmann que conecta dinamica cinetica con aumento de entropia", "H=\\int f\\ln f\\,d^3r\\,d^3p"],
  ["No equilibrio", "Difusion", "difusion", "transporte de particulas por gradientes de concentracion", "\\mathbf J=-D\\nabla n"],
  ["No equilibrio", "Proceso de Poisson", "proceso-de-poisson", "modelo de eventos aleatorios independientes en tiempo continuo", "P(N_t=n)=e^{-\\lambda t}\\frac{(\\lambda t)^n}{n!}"],
];

const sectionOrder = [
  "Inicio",
  "Fundamentos",
  "Ensambles",
  "Termodinamica estadistica",
  "Modelos",
  "Cuantica",
  "Transiciones y criticalidad",
  "Metodos",
  "No equilibrio",
  "Recursos",
];

function toItem([title, slug, file]) {
  return { title, slug, file };
}

function topicPage(topic) {
  const [section, title, slug, concept, equation] = topic;
  const related = relatedFor(section, slug);
  return `# ${title}

## Resumen

**${title}** es una entrada troncal de ${section.toLowerCase()} dentro de la mecanica estadistica. Su papel principal es describir ${concept}. Esta pagina resume la definicion operativa, las ecuaciones minimas y las conexiones con otros conceptos de la wiki.

## Idea fisica

La utilidad de este concepto aparece cuando se quiere pasar de una descripcion microscopica a una afirmacion macroscopica controlada. En la practica, fija que variables se consideran relevantes, que aproximaciones se estan usando y que cantidades pueden compararse entre modelos o experimentos.

## Ecuacion clave

$$
${equation}
$$

La ecuacion anterior debe leerse como una forma canonica de la entrada, no como la unica formulacion posible. En problemas concretos puede requerir condiciones de borde, factores de degeneracion, una medida de espacio de fases o un limite termodinamico bien definido.

## Uso tipico

- Identificar la escala o variable fisica dominante.
- Conectar un modelo microscopico con una cantidad termodinamica medible.
- Decidir que ensamble, potencial o aproximacion es natural.
- Comparar limites de baja temperatura, alta temperatura, baja densidad o gran tamano.

## Supuestos y limites

La mayoria de las formulas de esta pagina suponen equilibrio o una aproximacion controlada alrededor del equilibrio. Si se usan en sistemas pequenos, cerca de puntos criticos, con interacciones de largo alcance o fuera del equilibrio, conviene revisar si las fluctuaciones y las condiciones de estabilidad siguen siendo despreciables.

## Errores comunes

- Usar la formula sin declarar sus variables fijas.
- Confundir una relacion exacta con una aproximacion de limite termodinamico.
- Omitir degeneraciones, factores de indistinguibilidad o condiciones de convergencia.
- Aplicar una expresion de equilibrio a una situacion fuera de equilibrio sin justificacion.

## Paginas relacionadas

${related.map((r) => `- [${r.title}](#/${r.slug})`).join("\n")}
`;
}

function relatedFor(section, slug) {
  const base = [
    { title: "Funcion de particion", slug: "funcion-de-particion" },
    { title: "Ensamble canonico", slug: "ensamble-canonico" },
    { title: "Fluctuaciones", slug: "fluctuaciones" },
  ];
  const bySection = {
    "Fundamentos": [
      { title: "Microestado", slug: "microestado" },
      { title: "Macroestado", slug: "macroestado" },
      { title: "Entropia de Gibbs", slug: "entropia-de-gibbs" },
    ],
    "Ensambles": [
      { title: "Ensamble microcanonico", slug: "ensamble-microcanonico" },
      { title: "Ensamble canonico", slug: "ensamble-canonico" },
      { title: "Ensamble gran canonico", slug: "ensamble-gran-canonico" },
    ],
    "Termodinamica estadistica": [
      { title: "Energia libre de Helmholtz", slug: "energia-libre-de-helmholtz" },
      { title: "Potencial quimico", slug: "potencial-quimico" },
      { title: "Equivalencia de ensambles", slug: "equivalencia-de-ensambles" },
    ],
    "Modelos": [
      { title: "Gas ideal clasico", slug: "gas-ideal-clasico" },
      { title: "Modelo de Ising", slug: "modelo-de-ising" },
      { title: "Sistema de dos niveles", slug: "sistema-de-dos-niveles" },
    ],
    "Cuantica": [
      { title: "Estadisticas cuanticas", slug: "estadisticas-cuanticas" },
      { title: "Ensamble gran canonico", slug: "ensamble-gran-canonico" },
      { title: "Potencial quimico", slug: "potencial-quimico" },
    ],
    "Transiciones y criticalidad": [
      { title: "Modelo de Ising", slug: "modelo-de-ising" },
      { title: "Fluctuaciones", slug: "fluctuaciones" },
      { title: "Grupo de renormalizacion", slug: "grupo-renormalizacion" },
    ],
    "Metodos": [
      { title: "Funcion de particion", slug: "funcion-de-particion" },
      { title: "Modelo de Ising", slug: "modelo-de-ising" },
      { title: "Fluctuaciones", slug: "fluctuaciones" },
    ],
    "No equilibrio": [
      { title: "Fluctuaciones", slug: "fluctuaciones" },
      { title: "Teorema fluctuacion-disipacion", slug: "teorema-fluctuacion-disipacion" },
      { title: "Ecuacion maestra", slug: "ecuacion-maestra" },
    ],
  };
  return (bySection[section] || base).filter((item) => item.slug !== slug).slice(0, 3);
}

function groupedPages() {
  const groups = new Map(existingSections.map((group) => [group.section, group.items.map(toItem)]));
  for (const [section, title, slug] of specs) {
    if (!groups.has(section)) groups.set(section, []);
    groups.get(section).push({ title, slug, file: `${slug}.md` });
  }
  return sectionOrder
    .filter((section) => groups.has(section))
    .map((section) => ({ section, items: groups.get(section) }));
}

function writeTopicFiles() {
  for (const topic of specs) {
    const [, , slug] = topic;
    const filePath = path.join(contentDir, `${slug}.md`);
    fs.writeFileSync(filePath, topicPage(topic), "utf8");
  }
}

function writeApp(groups) {
  const original = fs.readFileSync(appPath, "utf8");
  const rest = original.slice(original.indexOf("const content ="));
  const pagesLiteral = JSON.stringify(groups, null, 2)
    .replace(/"section"/g, "section")
    .replace(/"items"/g, "items")
    .replace(/"title"/g, "title")
    .replace(/"slug"/g, "slug")
    .replace(/"file"/g, "file");
  fs.writeFileSync(appPath, `const pages = ${pagesLiteral};\n\n${rest}`, "utf8");
}

function writeMap(groups) {
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  const lines = [
    "# Mapa de la wiki",
    "",
    `La wiki contiene actualmente **${total} entradas** organizadas por areas.`,
    "",
    "## Ruta troncal recomendada",
    "",
    "1. [Microestado](#/microestado)",
    "2. [Macroestado](#/macroestado)",
    "3. [Espacio de fases](#/espacio-de-fases)",
    "4. [Entropia de Boltzmann](#/entropia-de-boltzmann)",
    "5. [Entropia de Gibbs](#/entropia-de-gibbs)",
    "6. [Ensamble microcanonico](#/ensamble-microcanonico)",
    "7. [Ensamble canonico](#/ensamble-canonico)",
    "8. [Funcion de particion](#/funcion-de-particion)",
    "9. [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)",
    "10. [Ensamble gran canonico](#/ensamble-gran-canonico)",
    "11. [Equivalencia de ensambles](#/equivalencia-de-ensambles)",
    "12. [Fluctuaciones](#/fluctuaciones)",
    "13. [Gas ideal clasico](#/gas-ideal-clasico)",
    "14. [Modelo de Ising](#/modelo-de-ising)",
    "15. [Estadisticas cuanticas](#/estadisticas-cuanticas)",
    "",
  ];
  for (const group of groups) {
    lines.push(`## ${group.section}`, "");
    for (const item of group.items) {
      lines.push(`- [${item.title}](#/${item.slug})`);
    }
    lines.push("");
  }
  fs.writeFileSync(path.join(contentDir, "mapa.md"), lines.join("\n"), "utf8");
}

function writeHome(groups) {
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  const text = `# Wiki de Mecanica Estadistica

Esta wiki reune conceptos, resultados, modelos y metodos centrales de la mecanica estadistica en espanol. El objetivo no es reemplazar un libro de texto, sino construir una referencia navegable y colaborativa.

> Esta version usa Markdown y KaTeX, por lo que las ecuaciones se escriben en LaTeX y se renderizan correctamente.

## Estado actual

La wiki contiene actualmente **${total} entradas desarrolladas**. Cubre fundamentos, ensambles, termodinamica estadistica, modelos, estadistica cuantica, transiciones de fase, metodos y no equilibrio.

## Punto de partida

1. [Microestado](#/microestado)
2. [Macroestado](#/macroestado)
3. [Espacio de fases](#/espacio-de-fases)
4. [Entropia de Boltzmann](#/entropia-de-boltzmann)
5. [Entropia de Gibbs](#/entropia-de-gibbs)
6. [Ensamble microcanonico](#/ensamble-microcanonico)
7. [Ensamble canonico](#/ensamble-canonico)
8. [Funcion de particion](#/funcion-de-particion)
9. [Energia libre de Helmholtz](#/energia-libre-de-helmholtz)
10. [Ensamble gran canonico](#/ensamble-gran-canonico)

## Ideas centrales

Una conexion fundamental entre conteo microscopico y termodinamica es

$$
S(E,V,N)=k_B\\ln\\Omega(E,V,N).
$$

Otra conexion central relaciona la funcion de particion canonica con la energia libre:

$$
F(T,V,N)=-k_B T\\ln Z(T,V,N).
$$

## Como usar esta wiki

Usa el [mapa de la wiki](#/mapa) para navegar por areas. Cada pagina busca ser autocontenida en lo esencial: definicion, ecuacion clave, interpretacion fisica, limites de validez y enlaces relacionados.
`;
  fs.writeFileSync(path.join(contentDir, "inicio.md"), text, "utf8");
}

const groups = groupedPages();
writeTopicFiles();
writeApp(groups);
writeMap(groups);
writeHome(groups);
console.log(`Wrote ${specs.length} new topic pages; total nav entries: ${groups.reduce((sum, group) => sum + group.items.length, 0)}`);
