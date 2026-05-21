const pages = [
  {
    section: "Inicio",
    items: [
      { title: "Inicio", slug: "inicio", file: "inicio.md" },
      { title: "Mapa de la wiki", slug: "mapa", file: "mapa.md" },
      { title: "Como contribuir", slug: "como-contribuir", file: "como-contribuir.md" },
    ],
  },
  {
    section: "Fundamentos",
    items: [
      { title: "Microestado", slug: "microestado", file: "microestado.md" },
      { title: "Macroestado", slug: "macroestado", file: "macroestado.md" },
      { title: "Espacio de fases", slug: "espacio-de-fases", file: "espacio-de-fases.md" },
      { title: "Entropia de Boltzmann", slug: "entropia-de-boltzmann", file: "entropia-de-boltzmann.md" },
      { title: "Entropia de Gibbs", slug: "entropia-de-gibbs", file: "entropia-de-gibbs.md" },
    ],
  },
  {
    section: "Ensambles",
    items: [
      { title: "Ensamble microcanonico", slug: "ensamble-microcanonico", file: "ensamble-microcanonico.md" },
      { title: "Ensamble canonico", slug: "ensamble-canonico", file: "ensamble-canonico.md" },
      { title: "Ensamble gran canonico", slug: "ensamble-gran-canonico", file: "ensamble-gran-canonico.md" },
    ],
  },
  {
    section: "Termodinamica estadistica",
    items: [
      { title: "Funcion de particion", slug: "funcion-de-particion", file: "funcion-de-particion.md" },
      { title: "Energia libre de Helmholtz", slug: "energia-libre-de-helmholtz", file: "energia-libre-de-helmholtz.md" },
    ],
  },
  {
    section: "Recursos",
    items: [
      { title: "Convenciones de notacion", slug: "convenciones", file: "convenciones.md" },
      { title: "Bibliografia", slug: "bibliografia", file: "bibliografia.md" },
    ],
  },
];

const content = document.querySelector("#content");
const nav = document.querySelector("#nav");
const pathLabel = document.querySelector("#pathLabel");
const menuButton = document.querySelector("#menuButton");

function protectMath(markdown) {
  const mathBlocks = [];
  const protectedMarkdown = markdown
    .replace(/\$\$([\s\S]*?)\$\$/g, (_, formula) => {
      const token = `@@MATH_BLOCK_${mathBlocks.length}@@`;
      mathBlocks.push(`$$${formula}$$`);
      return token;
    })
    .replace(/\\\[([\s\S]*?)\\\]/g, (_, formula) => {
      const token = `@@MATH_BLOCK_${mathBlocks.length}@@`;
      mathBlocks.push(`\\[${formula}\\]`);
      return token;
    });

  return { protectedMarkdown, mathBlocks };
}

function restoreMath(html, mathBlocks) {
  return mathBlocks.reduce(
    (result, formula, index) => result.replace(`@@MATH_BLOCK_${index}@@`, formula),
    html,
  );
}

function allPages() {
  return pages.flatMap((group) => group.items.map((item) => ({ ...item, section: group.section })));
}

function currentSlug() {
  return location.hash.replace(/^#\/?/, "") || "inicio";
}

function renderNav(activeSlug) {
  nav.innerHTML = "";
  for (const group of pages) {
    const section = document.createElement("div");
    section.className = "nav-section";
    section.textContent = group.section;
    nav.append(section);

    for (const item of group.items) {
      const link = document.createElement("a");
      link.className = `nav-link${item.slug === activeSlug ? " active" : ""}`;
      link.href = `#/${item.slug}`;
      link.textContent = item.title;
      nav.append(link);
    }
  }
}

async function loadPage() {
  const slug = currentSlug();
  const page = allPages().find((item) => item.slug === slug) || allPages()[0];
  renderNav(page.slug);
  pathLabel.textContent = `${page.section} / ${page.title}`;
  document.title = `${page.title} | StatMechWiki`;

  try {
    const response = await fetch(`./content/${page.file}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`No se pudo cargar ${page.file}`);
    const markdown = await response.text();
    const { protectedMarkdown, mathBlocks } = protectMath(markdown);
    const html = marked.parse(protectedMarkdown, {
      mangle: false,
      headerIds: true,
    });
    content.innerHTML = restoreMath(html, mathBlocks);
    renderMathInElement(content, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
      strict: "ignore",
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
    });
    document.body.classList.remove("nav-open");
    window.scrollTo({ top: 0, behavior: "instant" });
  } catch (error) {
    content.innerHTML = `<h1>Error</h1><p>${error.message}</p>`;
  }
}

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

window.addEventListener("hashchange", loadPage);
loadPage();
