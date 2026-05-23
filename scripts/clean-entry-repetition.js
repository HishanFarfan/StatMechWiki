const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "content");
const appPath = path.join(root, "assets", "app.js");

const markerStart = "<!-- equalized-entry-length:start -->";
const markerEnd = "<!-- equalized-entry-length:end -->";

const generatedSignature = [
  "## Definicion operativa",
  "## Estructura matematica",
  "## Diccionario de derivadas",
];

const repeatedGeneratedSections = new Set([
  "Idea fisica",
  "Notacion y variables",
  "Derivacion paso a paso",
  "Formula de control",
  "Lectura de los terminos",
  "Limites utiles",
  "Desarrollo minimo",
  "Interpretacion fisica",
  "Uso tipico",
  "Procedimiento de calculo",
  "Ejemplo de lectura",
  "Ejemplo algebraico generico",
  "Diagnosticos de consistencia",
  "Comparacion de regimenes",
  "Aproximaciones frecuentes",
  "Como leer resultados numericos",
  "Lectura avanzada",
  "Conexion con otros conceptos",
  "Relaciones con ensambles",
  "Relacion con fluctuaciones",
  "Supuestos y limites",
  "Errores comunes",
  "Preguntas guia",
  "Mini-problemas recomendados",
  "Referencias sugeridas",
]);

function wordCount(text) {
  return text.split(/[\s\r\n\t]+/).filter(Boolean).length;
}

function pagesFromApp() {
  const app = fs.readFileSync(appPath, "utf8");
  const pagesSource = app.slice(0, app.indexOf("const content ="));
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${pagesSource}\nthis.pages = pages;`, sandbox);
  return sandbox.pages.flatMap((group) =>
    group.items.map((item) => ({ ...item, section: group.section })),
  );
}

function stripEqualizedAppendix(markdown) {
  const start = markdown.indexOf(markerStart);
  if (start === -1) return markdown.trimEnd();
  const end = markdown.indexOf(markerEnd, start);
  if (end === -1) return markdown.slice(0, start).trimEnd();
  return `${markdown.slice(0, start)}${markdown.slice(end + markerEnd.length)}`.trimEnd();
}

function isGeneratedTopic(markdown) {
  return generatedSignature.every((needle) => markdown.includes(needle));
}

function headingTitle(line) {
  const match = line.match(/^##\s+(.+?)\s*$/);
  return match ? match[1].trim() : null;
}

function removeRepeatedSections(markdown) {
  const lines = markdown.split(/\r?\n/);
  const output = [];
  let skipping = false;

  for (const line of lines) {
    const title = headingTitle(line);
    if (title) {
      skipping = repeatedGeneratedSections.has(title);
      if (skipping) continue;
    }
    if (!skipping) output.push(line);
  }

  return output.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd();
}

const repeatedParagraphPatterns = [
  /^En una lectura rapida, esta pagina responde tres preguntas\./,
  /^Esto significa que la definicion no se agota en el simbolo matematico,/,
  /^Una definicion operativa siempre debe declarar el sistema,/,
  /^La utilidad de este concepto aparece cuando se quiere pasar de una descripcion microscopica/,
  /^Una buena prueba de comprension es preguntar que cambia si se modifica la energia,/,
  /^La ecuacion anterior debe leerse como una forma canonica de la entrada,/,
  /^El modo mas seguro de usar \*\*.+?\*\* es insertarlo en la cadena completa/,
  /^Esta escritura compacta recuerda que el objeto central no flota solo\./,
  /^La normalizacion es mas que un detalle tecnico\./,
  /^Muchas cantidades de mecanica estadistica se reconocen por las derivadas que generan\./,
  /^La primera linea identifica observables medios;/,
  /^Antes de aplicar una formula conviene construir razones sin dimension\./,
  /^En la practica, una ecuacion se vuelve informativa cuando se sabe que termino domina\./,
  /^Un desarrollo completo suele seguir el mismo patron\./,
  /^La interpretacion correcta separa tres niveles\./,
  /^En particular, conviene revisar siempre como esta pagina se relaciona/,
  /^La mayoria de las formulas de esta pagina suponen equilibrio/,
  /^El fallo mas frecuente es extrapolar fuera del regimen donde se justifico la formula\./,
  /^Por eso las paginas de esta wiki deben leerse como mapas de uso,/,
  /^Como concepto fundacional, \*\*.+?\*\* fija parte del lenguaje/,
  /^En un ensamble, \*\*.+?\*\* describe como se distribuye la probabilidad/,
  /^En termodinamica estadistica, \*\*.+?\*\* traduce una propiedad macroscopica/,
  /^Como modelo, \*\*.+?\*\* especifica grados de libertad,/,
  /^En el regimen cuantico, \*\*.+?\*\* se formula en terminos de estados,/,
  /^En criticalidad, \*\*.+?\*\* describe como cambia el sistema/,
  /^Como metodo, \*\*.+?\*\* es un procedimiento para calcular/,
  /^Fuera del equilibrio, \*\*.+?\*\* describe evolucion,/,
];

function removeRepeatedParagraphs(markdown) {
  return markdown
    .split(/\n{2,}/)
    .filter((paragraph) => {
      const normalized = paragraph.replace(/\s+/g, " ").trim();
      return !repeatedParagraphPatterns.some((pattern) => pattern.test(normalized));
    })
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trimEnd();
}

function roleFor(section) {
  const roles = {
    "Fundamentos": "fijar vocabulario, medidas y restricciones antes de elegir un ensamble",
    "Ensambles": "mostrar que variables se fijan, cuales fluctuan y que normalizacion gobierna los promedios",
    "Termodinamica estadistica": "traducir promedios microscopicos en potenciales, derivadas y criterios de estabilidad",
    "Modelos": "aislar un mecanismo fisico mediante grados de libertad, Hamiltonianos o reglas dinamicas controladas",
    "Cuantica": "incorporar indistinguibilidad, niveles discretos y ocupaciones de modos",
    "Transiciones y criticalidad": "separar comportamiento regular y singular cerca del limite termodinamico",
    "Metodos": "convertir sumas o dinamicas imposibles de tratar exactamente en estimadores controlados",
    "No equilibrio": "describir evolucion, corrientes, disipacion y fluctuaciones de trayectorias",
  };
  return roles[section] || "ubicar la entrada dentro del mapa conceptual de la wiki";
}

function contrastFor(section, title) {
  const contrasts = {
    "Fundamentos": `La pagina no debe duplicar la descripcion de todos los ensambles: su funcion es dejar claro que significa ${title} antes de imponer temperatura, potencial quimico o reglas dinamicas.`,
    "Ensambles": `La entrada debe distinguirse por sus variables de control. Si dos ensambles producen el mismo promedio en el limite termodinamico, aun pueden diferir en fluctuaciones y en sistemas finitos.`,
    "Termodinamica estadistica": `El foco no es repetir el conteo microscopico, sino explicar que potencial o derivada convierte ese conteo en una magnitud medible.`,
    "Modelos": `La pagina debe decir que mecanismo retiene el modelo y que detalles descarta; esa decision es mas importante que listar muchas formulas generales.`,
    "Cuantica": `La diferencia con la descripcion clasica esta en la ocupacion de estados y en la indistinguibilidad, no solo en reemplazar sumas por trazas.`,
    "Transiciones y criticalidad": `La entrada debe aclarar si habla de una singularidad real, de un redondeo de tamano finito o de una aproximacion como Landau o campo medio.`,
    "Metodos": `La prioridad es indicar distribucion objetivo, sesgos, autocorrelaciones y pruebas de convergencia; un metodo sin diagnostico no es reproducible.`,
    "No equilibrio": `La entrada debe separar estacionariedad de equilibrio: puede haber distribucion constante y, aun asi, corrientes y produccion de entropia.`,
  };
  return contrasts[section] || `La pagina debe evitar repetir material generico y conservar solo lo que ayuda a usar ${title}.`;
}

function bridgeEquation(section) {
  const equations = {
    "Fundamentos": String.raw`\text{microestado}\longrightarrow \text{macroestado}\longrightarrow S,\ p,\ \langle A\rangle`,
    "Ensambles": String.raw`\text{restricciones}\longrightarrow p_i\longrightarrow Z\ \text{o}\ \Omega\longrightarrow \langle A\rangle`,
    "Termodinamica estadistica": String.raw`\text{potencial}\longrightarrow \text{variables naturales}\longrightarrow \text{respuestas}`,
    "Modelos": String.raw`\text{grados de libertad}\longrightarrow H\ \text{o}\ W\longrightarrow \text{observables}`,
    "Cuantica": String.raw`\hat H,\ \hat N\longrightarrow \hat\rho\longrightarrow \langle \hat A\rangle`,
    "Transiciones y criticalidad": String.raw`t,\ h,\ L\longrightarrow \xi,\ \chi,\ f_s\longrightarrow \text{exponentes}`,
    "Metodos": String.raw`\pi(x),\ A(x)\longrightarrow \hat A_M\longrightarrow \sigma_{\hat A},\ \tau_{\rm int}`,
    "No equilibrio": String.raw`W,\ P[\Gamma],\ \mathbf J\longrightarrow \dot S_{\rm prod},\ C(t),\ L_{ij}`,
  };
  return equations[section] || String.raw`\text{concepto}\longrightarrow \text{calculo}\longrightarrow \text{limite}`;
}

function extractConcept(markdown, page) {
  const summary = markdown.match(/Su papel principal se resume asi: ([\s\S]*?)\. La idea/);
  if (summary) return summary[1].replace(/\s+/g, " ").trim();
  const definition = markdown.match(/por su uso operativo: ([\s\S]*?)\. Esto significa/);
  if (definition) return definition[1].replace(/\s+/g, " ").trim();
  return `la nocion de ${page.title}`;
}

function firstDisplayEquation(markdown) {
  const match = markdown.match(/\$\$\s*([\s\S]*?)\s*\$\$/);
  if (!match) return String.raw`\langle A\rangle=\sum_x A(x)p(x)`;
  return match[1].trim();
}

function simpleExamples(page, markdown) {
  const concept = extractConcept(markdown, page);
  const equation = firstDisplayEquation(markdown);
  const commonIntro = `Estos ejemplos son deliberadamente pequenos: muestran como usar **${page.title}** sin introducir un modelo mas complicado que el necesario.`;
  const examples = {
    "Inicio": [
      `**Ruta de estudio inicial.** Un lector puede partir de microestado, pasar a entropia de Boltzmann y terminar en ensamble canonico. La aplicacion simple es comparar una moneda cargada con muchos lanzamientos: primero se enumeran estados, luego se define una distribucion y finalmente se calcula un promedio.`,
      `**Primer calculo.** Para un sistema de dos niveles con energias $0$ y $\\epsilon$, la funcion de particion canonica es $$Z=1+e^{-\\beta\\epsilon}.$$ Esta formula basta para practicar normalizacion, energia media y limite de alta temperatura.`,
      `**Conexion con no equilibrio.** Una caminata aleatoria sesgada permite ver por que la wiki no termina en equilibrio: aunque las probabilidades puedan estabilizarse, una corriente persistente revela la dinamica.`,
    ],
    "Recursos": [
      `**Uso de notacion.** Si una pagina escribe $\\beta$, se debe leer siempre como $1/(k_BT)$. En un ejercicio simple con dos niveles, esa convencion evita confundir energia con temperatura.`,
      `**Uso bibliografico.** Para una primera lectura de ${page.title}, conviene ubicar si el tema pertenece a ensambles, modelos, metodos o no equilibrio; esa clasificacion determina que texto de referencia consultar primero.`,
      `**Control de coherencia.** Al editar una entrada, una prueba simple es verificar que cada ecuacion tenga variables definidas y que las unidades sean compatibles en ambos lados.`,
    ],
    "Fundamentos": [
      `**Sistema de dos microestados.** Considera dos estados $a$ y $b$ con probabilidades $p$ y $1-p$. La entrada se aplica al preguntar que informacion microscopica queda resumida por ${concept}. En este caso, la normalizacion es $$p_a+p_b=1,$$ y cualquier observable se calcula como $\\langle A\\rangle=pA_a+(1-p)A_b$.`,
      `**Conteo con restriccion.** Tres espines independientes tienen $2^3=8$ configuraciones. Si se fija magnetizacion total $M=1$, solo algunas configuraciones quedan accesibles. Este ejemplo muestra como ${page.title} cambia cuando se impone una restriccion macroscopica.`,
      `**Promedio temporal contra promedio de ensamble.** En una caminata que visita estados con frecuencias estables, el promedio temporal de $A$ puede compararse con $\\sum_x A(x)p(x)$. Si no coinciden, la aplicacion de ${page.title} requiere revisar accesibilidad o ergodicidad.`,
    ],
    "Ensambles": [
      `**Dos niveles en contacto termico.** Para energias $0$ y $\\epsilon$, el peso canonico da $$p_1=\\frac{e^{-\\beta\\epsilon}}{1+e^{-\\beta\\epsilon}}.$$ La entrada se usa al decidir que variable esta fija y que cantidad fluctua.`,
      `**Intercambio con un reservorio.** Un subsistema pequeno puede ganar o perder energia mientras el conjunto total conserva energia. En ese caso, ${concept} se reconoce observando si el entorno fija $E$, $T$, $P$ o $\\mu$.`,
      `**Comparacion de fluctuaciones.** En un sistema pequeno, fijar energia no es equivalente a fijar temperatura: el promedio de energia puede parecer similar, pero $\\langle(\\Delta E)^2\\rangle$ cambia. Este es el test minimo para no confundir ensambles.`,
    ],
    "Termodinamica estadistica": [
      `**Derivada de un potencial.** Si $F(T,V,N)$ es conocido, la entropia se obtiene de $$S=-\\left(\\frac{\\partial F}{\\partial T}\\right)_{V,N}.$$ La aplicacion simple de ${page.title} es identificar que variable se mantiene fija antes de derivar.`,
      `**Respuesta de un sistema pequeno.** Si una energia media cambia al variar $T$, la capacidad calorifica mide esa sensibilidad. El ejemplo minimo es una particula de dos niveles, donde la respuesta tiene un maximo cuando $k_BT$ es comparable con la separacion energetica.`,
      `**Control de estabilidad.** Una compresibilidad negativa o una varianza negativa no son resultados fisicos aceptables. Al aplicar ${concept}, esos signos sirven como diagnostico inmediato de una derivada mal tomada o de un regimen inestable.`,
    ],
    "Modelos": [
      `**Modelo minimo.** Toma dos sitios o dos espines y asigna una energia a cada configuracion. La aplicacion de ${page.title} consiste en decidir que mecanismo retiene el modelo: interaccion, exclusion, alineamiento, actividad o conectividad.`,
      `**Limite soluble.** Anula la interaccion o toma temperatura alta. En ese limite, muchos modelos recuperan pesos casi uniformes, $$p(x)\\simeq \\frac{1}{\\Omega}.$$ Si ${concept} no reproduce ese comportamiento cuando corresponde, la formulacion necesita revision.`,
      `**Observable concreto.** Calcula energia media, ocupacion, magnetizacion o desplazamiento cuadratico medio en una red pequena. La utilidad de ${page.title} aparece cuando ese observable distingue dos mecanismos que parecerian iguales solo mirando la definicion.`,
    ],
    "Cuantica": [
      `**Modo de dos ocupaciones.** Para un nivel de energia $\\epsilon$, compara ocupacion bosonica y fermionica. La diferencia aparece en $$\\langle n\\rangle=\\frac{1}{e^{\\beta(\\epsilon-\\mu)}\\mp1},$$ que permite o prohibe acumulacion multiple segun el signo.`,
      `**Limite clasico.** Si $e^{\\beta(\\epsilon-\\mu)}\\gg1$, Bose-Einstein y Fermi-Dirac se aproximan a Maxwell-Boltzmann. Este caso simple muestra cuando ${page.title} puede reemplazarse por una descripcion clasica.`,
      `**Escala de degeneracion.** En un gas diluido, $n\\lambda_T^3\\ll1$ indica comportamiento casi clasico. Cuando esa cantidad se acerca a uno, ${concept} deja de ser una correccion menor y cambia las ocupaciones observables.`,
    ],
    "Transiciones y criticalidad": [
      `**Parametro de orden escalar.** En una red pequena de espines, la magnetizacion media $$m=\\frac{1}{N}\\sum_i s_i$$ distingue una fase ordenada de una desordenada. La aplicacion de ${page.title} es decidir si esa cantidad cambia suavemente o anuncia una transicion.`,
      `**Tamano finito.** Calcula una susceptibilidad para $L=8$ y $L=16$. Si el maximo crece o se desplaza, el ejemplo ilustra que ${concept} debe leerse junto con el limite termodinamico.`,
      `**Escala de correlacion.** Si una correlacion decae como $G(r)\\sim e^{-r/\\xi}$, aumentar $\\xi$ vuelve relevante la geometria del sistema. Este caso simple explica por que la criticalidad no puede tratarse como una fluctuacion local ordinaria.`,
    ],
    "Metodos": [
      `**Estimador de promedio.** Dada una serie $A_1,\\ldots,A_M$, el estimador basico es $$\\bar A=\\frac{1}{M}\\sum_{k=1}^M A_k.$$ La aplicacion de ${page.title} es decidir como se generan esas muestras y que sesgo puede introducirse.`,
      `**Autocorrelacion.** Si las muestras consecutivas son parecidas, $M$ no equivale al numero de datos independientes. Un caso simple es una cadena de Markov que cambia lentamente entre dos estados; ahi ${concept} exige medir tiempo de correlacion.`,
      `**Validacion con caso exacto.** Antes de usar el metodo en un sistema grande, se prueba en dos niveles o en una red muy pequena donde la suma exacta se puede hacer a mano. Si falla ahi, el problema es algoritmico, no fisico.`,
    ],
    "No equilibrio": [
      `**Cadena de dos estados.** Con tasas $W_{0\\to1}$ y $W_{1\\to0}$, la probabilidad estacionaria satisface $$p_1^{\\rm st}=\\frac{W_{0\\to1}}{W_{0\\to1}+W_{1\\to0}}.$$ La aplicacion de ${page.title} es separar distribucion estacionaria de mecanismo dinamico.`,
      `**Corriente en una red.** En un ciclo de tres estados puede haber probabilidades constantes y, aun asi, una corriente neta alrededor del ciclo. Ese ejemplo muestra por que ${concept} no se reduce a escribir $\\partial_t p=0$.`,
      `**Respuesta a una perturbacion pequena.** Aplica una fuerza debil y mide si la corriente cumple $J\\simeq LX$. Si la relacion deja de ser lineal, ${page.title} debe tratarse como problema fuera del regimen de respuesta lineal.`,
    ],
  };
  return String.raw`
## Ejemplos y aplicaciones simples

${commonIntro}

1. ${examples[page.section]?.[0] || `**Caso minimo.** Se toma un sistema con dos estados y se evalua como ${concept} cambia la probabilidad relativa o el observable medio.`}
2. ${examples[page.section]?.[1] || `**Cambio de parametro.** Se modifica temperatura, energia, tasa o tamano del sistema para ver que parte de **${page.title}** permanece estable y que parte cambia.`}
3. ${examples[page.section]?.[2] || `**Diagnostico.** Se comprueba normalizacion, dimensiones y limite simple antes de interpretar el resultado.`}

Como referencia local, la ecuacion que debe mantenerse consistente con estos casos es

$$
${equation}
$$
`;
}

function coherenceNote(page, markdown) {
  if (page.section === "Inicio" || page.section === "Recursos") return "";
  const concept = extractConcept(markdown, page);
  return String.raw`
## Coherencia dentro de la wiki

Dentro del mapa general, **${page.title}** queda reservado para la idea precisa de ${concept}. Su papel local es ${roleFor(page.section)}. Esta funcion editorial evita repetir el mismo formalismo en todas las entradas: aqui se conserva solo la parte necesaria para reconocer el objeto, aplicar su ecuacion principal y decidir con que paginas conviene compararlo.

$$
${bridgeEquation(page.section)}
$$

Una ampliacion futura deberia partir de ${concept} y mostrar un caso donde esa idea cambie el calculo, la interpretacion o el diagnostico. Si el material nuevo solo repite el resumen general de **${page.section}**, conviene moverlo a una pagina troncal.
`;
}

function removeExistingCoherence(markdown) {
  const lines = markdown.split(/\r?\n/);
  const output = [];
  let skipping = false;
  for (const line of lines) {
    const title = headingTitle(line);
    if (title) {
      skipping = title === "Coherencia dentro de la wiki" || title === "Ejemplos y aplicaciones simples";
      if (skipping) continue;
    }
    if (!skipping) output.push(line);
  }
  return output.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd();
}

function insertBeforeRelated(markdown, additions) {
  const note = additions.filter(Boolean).map((item) => item.trim()).join("\n\n");
  if (!note) return markdown.trimEnd();
  const cleaned = removeExistingCoherence(markdown);
  const marker = "\n## Paginas relacionadas";
  const index = cleaned.indexOf(marker);
  if (index === -1) return `${cleaned}\n\n${note.trim()}`.trimEnd();
  return `${cleaned.slice(0, index).trimEnd()}\n\n${note.trim()}\n${cleaned.slice(index)}`.trimEnd();
}

function cleanPage(page) {
  const filePath = path.join(contentDir, page.file);
  let markdown = fs.readFileSync(filePath, "utf8");
  markdown = stripEqualizedAppendix(markdown);

  const generated = isGeneratedTopic(markdown);
  if (generated) markdown = removeRepeatedParagraphs(removeRepeatedSections(markdown));

  markdown = insertBeforeRelated(markdown, [
    simpleExamples(page, markdown),
    coherenceNote(page, markdown),
  ]);
  fs.writeFileSync(filePath, `${markdown.trimEnd()}\n`, "utf8");
  return {
    file: page.file,
    generated,
    words: wordCount(markdown),
    displayMath: (markdown.match(/\$\$[\s\S]*?\$\$/g) || []).length,
  };
}

const pages = pagesFromApp();
const rows = pages.map(cleanPage);
const generatedCount = rows.filter((row) => row.generated).length;
const sortedByWords = [...rows].sort((a, b) => a.words - b.words);
const sortedByMath = [...rows].sort((a, b) => a.displayMath - b.displayMath);

console.log(`Cleaned ${rows.length} entries; ${generatedCount} generated topics had repeated sections trimmed.`);
console.log(`Word range: ${sortedByWords[0].words}-${sortedByWords[sortedByWords.length - 1].words}.`);
console.log(`Display math range: ${sortedByMath[0].displayMath}-${sortedByMath[sortedByMath.length - 1].displayMath}.`);
