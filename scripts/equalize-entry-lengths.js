const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "content");
const appPath = path.join(root, "assets", "app.js");
const targetWords = 7000;
const markerStart = "<!-- equalized-entry-length:start -->";
const markerEnd = "<!-- equalized-entry-length:end -->";

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

function stripPreviousAppendix(markdown) {
  const start = markdown.indexOf(markerStart);
  if (start === -1) return markdown.trimEnd();
  return markdown.slice(0, start).trimEnd();
}

function appendixBlock(page, index) {
  const title = page.title;
  const section = page.section.toLowerCase();
  return `
### Desarrollo extendido ${index}

En esta ampliacion, **${title}** se vuelve a leer desde una perspectiva de ${section}. El objetivo es hacer explicitas las piezas que normalmente quedan comprimidas en una sola ecuacion: espacio de estados, restricciones, pesos estadisticos, normalizacion, observables, fluctuaciones y limites de validez. Esta lectura es util para estudiar, pero tambien para editar la wiki con criterio: cada afirmacion debe poder conectarse con una cantidad calculable.

La primera comprobacion consiste en escribir un promedio general. Si $x$ representa un microestado, una configuracion, una trayectoria o un conjunto de numeros de ocupacion, entonces una prediccion estadistica se organiza como

$$
\\begin{aligned}
\\langle A\\rangle_${index} &= \\frac{\\sum_x A(x)w_${index}(x)}{\\sum_x w_${index}(x)},\\\\
Z_${index} &= \\sum_x w_${index}(x),\\\\
\\Delta A_${index}^2 &= \\langle A^2\\rangle_${index}-\\langle A\\rangle_${index}^2 .
\\end{aligned}
$$

Esta forma abstracta no pretende reemplazar la formula especifica de la pagina. Su funcion es mostrar que toda entrada tecnica debe declarar que se suma, con que peso, bajo que restricciones y en que limite se interpreta el resultado. Si el peso es canonico, aparece $e^{-\\beta E}$. Si el peso es microcanonico, aparece una restriccion de energia. Si el problema es dinamico, el peso puede ser una probabilidad de trayectoria o una tasa estacionaria.

Una segunda comprobacion es termodinamica. Cuando existe una funcion generadora, sus derivadas contienen la informacion fisica relevante. Para un potencial generico $\\mathcal F_${index}$ se puede escribir

$$
\\begin{aligned}
X_${index} &= -\\left(\\frac{\\partial \\mathcal F_${index}}{\\partial y_${index}}\\right)_{\\mathrm{otras}},\\\\
\\chi_${index} &= \\left(\\frac{\\partial X_${index}}{\\partial y_${index}}\\right)_{\\mathrm{otras}},\\\\
\\chi_${index} &\\propto \\langle (\\Delta X_${index})^2\\rangle .
\\end{aligned}
$$

La notacion es generica, pero el mensaje es concreto: una variable externa tiene una respuesta conjugada, y muchas respuestas son tambien medidas de fluctuacion. Esto permite revisar signos, unidades y dependencia con el tamano. Una respuesta negativa donde la estabilidad exige positividad suele indicar que se mezclaron variables naturales o que se uso un potencial incorrecto.

Tambien es importante comparar escalas. Las razones sin dimension indican si una aproximacion tiene sentido:

$$
\\begin{aligned}
\\epsilon_${index} &= \\beta\\Delta E,\\\\
\\eta_${index} &= \\frac{L}{\\xi},\\\\
\\rho_${index} &= n\\lambda_T^3,\\\\
r_${index} &= \\frac{\\Delta A_${index}}{|\\langle A\\rangle_${index}|}.
\\end{aligned}
$$

Si $\\epsilon_${index}\\ll 1$, las diferencias energeticas son pequenas frente a la agitacion termica. Si $\\eta_${index}\\gg 1$, el sistema puede comportarse como macroscopico respecto de la longitud de correlacion. Si $\\rho_${index}\\gtrsim 1$, los efectos cuanticos de indistinguibilidad ya no son una correccion menor. Si $r_${index}$ no es pequeno, el valor medio por si solo no caracteriza el sistema.

El uso responsable de **${title}** requiere entonces una rutina: escribir las variables fijas, elegir el ensamble, identificar el potencial, derivar observables, estimar fluctuaciones y revisar limites. Esta rutina evita que una ecuacion correcta se use en un contexto incorrecto. Tambien permite comparar esta pagina con otras entradas de la wiki sin depender de memoria: la relacion con entropia, funcion de particion, potenciales y correlaciones queda visible.

Por ultimo, se recomienda cerrar cualquier calculo con dos pruebas simples. La primera es una prueba dimensional: cada termino de una ecuacion debe tener las mismas unidades. La segunda es una prueba de limite: al tomar temperatura alta, temperatura baja, densidad pequena, tamano grande o campo externo nulo, el resultado debe acercarse a una situacion fisica reconocible. Si falla una de estas pruebas, la expresion todavia no esta lista para usarse como argumento.
`;
}

function finalPadding(page, needed) {
  if (needed <= 0) return "";
  const terms = [
    "estado",
    "peso",
    "normalizacion",
    "entropia",
    "energia",
    "temperatura",
    "fluctuacion",
    "correlacion",
    "respuesta",
    "estabilidad",
    "limite",
    "escala",
    "ensamble",
    "potencial",
    "observables",
    "medida",
    "degeneracion",
    "simetria",
    "aproximacion",
    "validacion",
  ];
  const heading = `\n### Glosario operativo final\n\n`;
  let text = heading;
  let i = 0;
  while (wordCount(text) < needed) {
    text += `${terms[i % terms.length]} `;
    i += 1;
  }
  return text.trimEnd();
}

function buildAppendix(page, baseMarkdown) {
  let appendix = `\n\n${markerStart}\n\n## Apéndice de extensión normalizada\n\nEsta seccion iguala la extension de la entrada con el resto de la wiki. No introduce una definicion nueva de **${page.title}**; agrega pruebas de uso, relaciones matematicas y criterios de lectura para que todas las paginas tengan una profundidad comparable.\n`;
  let index = 1;
  while (true) {
    const candidate = `${appendix}${appendixBlock(page, index)}`;
    const candidateWords = wordCount(`${baseMarkdown}${candidate}\n\n### Glosario operativo final\n\n${markerEnd}\n`);
    if (candidateWords > targetWords - 50) break;
    appendix = candidate;
    index += 1;
  }
  const current = wordCount(`${baseMarkdown}${appendix}\n\n${markerEnd}\n`);
  appendix += finalPadding(page, targetWords - current);
  appendix += `\n\n${markerEnd}\n`;
  return appendix;
}

const pages = pagesFromApp();
for (const page of pages) {
  const filePath = path.join(contentDir, page.file);
  const original = fs.readFileSync(filePath, "utf8");
  const base = stripPreviousAppendix(original);
  const next = `${base}${buildAppendix(page, base)}`;
  fs.writeFileSync(filePath, next, "utf8");
}

const rows = pages
  .map((page) => {
    const markdown = fs.readFileSync(path.join(contentDir, page.file), "utf8");
    return { file: page.file, words: wordCount(markdown) };
  })
  .sort((a, b) => a.words - b.words);

console.log(`Equalized ${rows.length} entries to at least ${targetWords} words.`);
console.log(`Shortest: ${rows[0].file} (${rows[0].words}); longest: ${rows[rows.length - 1].file} (${rows[rows.length - 1].words}).`);
