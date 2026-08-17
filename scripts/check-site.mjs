import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlFiles = ["index.html", "404.html"];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function read(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function exists(relativePath) {
  try {
    await access(path.join(root, relativePath));
    return true;
  } catch {
    return false;
  }
}

const [indexHtml, notFoundHtml, styles, cname, robots, sitemap] =
  await Promise.all([
    read("index.html"),
    read("404.html"),
    read("styles.css"),
    read("CNAME"),
    read("robots.txt"),
    read("sitemap.xml"),
  ]);

assert(cname.trim() === "k-y.cc", "CNAME must contain only k-y.cc");
assert(
  await exists(".nojekyll"),
  ".nojekyll is required for branch-based static publishing",
);
assert(
  robots.includes("Sitemap: https://k-y.cc/sitemap.xml"),
  "robots.txt must name the sitemap",
);
assert(
  sitemap.includes("<loc>https://k-y.cc/</loc>"),
  "sitemap.xml must contain the canonical homepage",
);

for (const fragment of [
  ":focus-visible",
  "@media (prefers-reduced-motion: reduce)",
  "@media (prefers-contrast: more)",
  "min-width: 320px",
]) {
  assert(
    styles.includes(fragment),
    `styles.css is missing accessibility or responsive rule: ${fragment}`,
  );
}

const requiredIndexFragments = [
  '<html lang="en">',
  '<link rel="canonical" href="https://k-y.cc/"',
  '<meta name="referrer" content="strict-origin-when-cross-origin"',
  '"@type": "ProfilePage"',
  "Wallpect",
  "Anisonary",
  "StudyMix AI",
  "AisleStage",
  "Personal Space",
  "RigStage",
  'datetime="2026-08-17"',
  "Learning, building, and moving toward the next stage.",
  "v0.4.0 · 47 display profiles · 191 named models",
  "v1.3.0 · 280 titles · 615 theme records",
  "v0.5.1 release · v0.6.0 development · Invite-only",
  "Live · v0.8.0",
  "STAGE",
  "765",
  "The stars are shining. The show goes on.",
  "https://aislestage.k-y.cc/",
  "https://rigstage.k-y.cc/",
];

for (const fragment of requiredIndexFragments) {
  assert(
    indexHtml.includes(fragment),
    `index.html is missing required content: ${fragment}`,
  );
}

const forbiddenFragments = [
  "AislePack",
  "motive-ecommerce-visuals",
  "v0.4.0 · 139 anime",
  "Live · v0.3.0",
  "Public work, verified before it is listed.",
  "v0.2.2 · 74 device profiles",
  "v1.1.0 · 280 titles",
  "Live · v0.6.0",
  'datetime="2026-08-02"',
  "http://",
  "<form",
  "<script src=",
];

for (const fragment of forbiddenFragments) {
  assert(
    !indexHtml.includes(fragment),
    `index.html contains stale or out-of-scope content: ${fragment}`,
  );
}

const rigStageCard = [
  ...indexHtml.matchAll(/<article class="active-project">[\s\S]*?<\/article>/g),
]
  .map((match) => match[0])
  .find((card) => card.includes("<h3>RigStage</h3>"));

assert(rigStageCard, "index.html is missing the RigStage project card");
assert(
  !rigStageCard.includes(">Source</a"),
  "RigStage must not expose a private repository link",
);

assert(
  notFoundHtml.includes('<meta name="robots" content="noindex, follow"'),
  "404.html must be noindex",
);
assert(notFoundHtml.includes('href="/"'), "404.html must provide a home link");

let checkedReferences = 0;

for (const relativePath of htmlFiles) {
  const html = await read(relativePath);
  const ids = new Set(
    [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
  );

  for (const anchor of html.matchAll(/<a\b[^>]*>/gs)) {
    if (!anchor[0].includes('target="_blank"')) continue;
    assert(
      anchor[0].includes("noopener"),
      `${relativePath} has a target=_blank link without noopener`,
    );
    assert(
      anchor[0].includes("noreferrer"),
      `${relativePath} has a target=_blank link without noreferrer`,
    );
  }

  for (const image of html.matchAll(/<img\b[^>]*>/gs)) {
    assert(
      /\salt="[^"]*"/.test(image[0]),
      `${relativePath} has an image without alt text`,
    );
    assert(
      /\swidth="\d+"/.test(image[0]),
      `${relativePath} has an image without width`,
    );
    assert(
      /\sheight="\d+"/.test(image[0]),
      `${relativePath} has an image without height`,
    );
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (/^(?:https:|mailto:|tel:)/.test(reference)) continue;

    if (reference.startsWith("#")) {
      assert(
        ids.has(reference.slice(1)),
        `${relativePath} links to missing anchor ${reference}`,
      );
      continue;
    }

    const cleanReference = reference.split(/[?#]/, 1)[0];
    if (!cleanReference || cleanReference === "/") continue;

    if (cleanReference.startsWith("/#")) {
      assert(
        indexHtml.includes(`id="${cleanReference.slice(2)}"`),
        `${relativePath} links to a missing homepage anchor`,
      );
      continue;
    }

    const localPath = cleanReference.startsWith("/")
      ? cleanReference.slice(1)
      : path.join(path.dirname(relativePath), cleanReference);
    assert(
      await exists(localPath),
      `${relativePath} references missing local file ${cleanReference}`,
    );
    checkedReferences += 1;
  }
}

console.log(
  `Static checks passed for ${htmlFiles.length} HTML pages and ${checkedReferences} local references.`,
);
