const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "assets", "app.js");
const contentDir = path.join(root, "content");

const requiredSections = [
  "Resumen",
  "Definicion",
  "Notacion",
  "Idea fisica",
  "Formulacion matematica",
  "Supuestos",
  "Ejemplos",
  "Errores comunes",
  "Fuentes para profundizar",
  "Paginas relacionadas",
];

const sectionAliases = {
  "Formulacion matematica": [
    "Formulacion matematica",
    "Ecuaciones principales",
    "Estructura matematica",
    "Ecuacion central",
  ],
  "Supuestos": [
    "Supuestos",
    "Supuestos importantes",
    "Supuestos y regimen de validez",
    "Regimen de validez",
  ],
  "Ejemplos": [
    "Ejemplos",
    "Ejemplos y aplicaciones simples",
    "Ejemplo conceptual: gas aislado",
  ],
  "Idea fisica": ["Idea fisica", "Contexto fisico", "Interpretacion fisica"],
};

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

function headings(markdown) {
  return [...markdown.matchAll(/^##\s+(.+?)\s*$/gm)].map((match) => match[1].trim());
}

function hasSection(allHeadings, section) {
  const aliases = sectionAliases[section] || [section];
  return aliases.some((alias) => allHeadings.includes(alias));
}

function wordCount(markdown) {
  return markdown.split(/[\s\r\n\t]+/).filter(Boolean).length;
}

function countExamples(markdown) {
  const match = markdown.match(/## (?:Ejemplos|Ejemplos y aplicaciones simples)[\s\S]*?(?=\n## |$)/);
  if (!match) return 0;
  return (match[0].match(/^\d+\.\s+/gm) || []).length;
}

function countSources(markdown) {
  const match = markdown.match(/## Fuentes para profundizar[\s\S]*?(?=\n## |$)/);
  if (!match) return 0;
  return (match[0].match(/^- /gm) || []).length;
}

function auditPage(page) {
  const markdown = fs.readFileSync(path.join(contentDir, page.file), "utf8");
  const allHeadings = headings(markdown);
  const missing = requiredSections.filter((section) => !hasSection(allHeadings, section));
  const examples = countExamples(markdown);
  const sources = countSources(markdown);
  const mathBlocks = (markdown.match(/\$\$[\s\S]*?\$\$/g) || []).length;
  const words = wordCount(markdown);
  const issues = [
    ...missing.map((section) => `falta seccion: ${section}`),
    ...(examples < 3 ? [`solo ${examples} ejemplos`] : []),
    ...(sources < 3 ? [`solo ${sources} fuentes`] : []),
    ...(mathBlocks < 1 ? ["sin ecuaciones display"] : []),
    ...(words < 700 ? [`extension baja: ${words} palabras`] : []),
  ];
  return { ...page, words, examples, sources, mathBlocks, missing, issues };
}

const pages = pagesFromApp();
const rows = pages.map(auditPage);
const withIssues = rows.filter((row) => row.issues.length > 0);
const top = withIssues
  .sort((a, b) => b.issues.length - a.issues.length || a.words - b.words)
  .slice(0, 40);

console.log(`Paginas auditadas: ${rows.length}`);
console.log(`Paginas con brechas: ${withIssues.length}`);
console.log(`Rango de palabras: ${Math.min(...rows.map((r) => r.words))}-${Math.max(...rows.map((r) => r.words))}`);
console.log("");
for (const row of top) {
  console.log(`${row.file} [${row.section}]`);
  console.log(`  palabras=${row.words} ejemplos=${row.examples} fuentes=${row.sources} ecuaciones=${row.mathBlocks}`);
  console.log(`  ${row.issues.join("; ")}`);
}
