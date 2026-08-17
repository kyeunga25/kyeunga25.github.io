import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceFiles = [
  "index.html",
  "README.md",
  "docs/DEPLOYMENT.md",
  "docs/PROJECT_STATUS.md",
  "docs/SECURITY_AND_PRIVACY.md",
  "docs/SELF_HOSTING.md",
  "docs/TECHNOLOGY.md",
];

const sources = await Promise.all(
  sourceFiles.map(async (relativePath) => ({
    relativePath,
    contents: await readFile(path.join(root, relativePath), "utf8"),
  })),
);

const urls = new Set();
const failures = [];

for (const source of sources) {
  for (const match of source.contents.matchAll(/href="(https:[^"]+)"/g)) {
    urls.add(match[1]);
  }

  for (const match of source.contents.matchAll(/\]\((https:[^)]+)\)/g)) {
    urls.add(match[1]);
  }

  if (!source.relativePath.endsWith(".md")) continue;

  for (const match of source.contents.matchAll(
    /\]\((?!https?:|mailto:|#)([^)#?]+)(?:[?#][^)]*)?\)/g,
  )) {
    const target = path.resolve(
      root,
      path.dirname(source.relativePath),
      match[1],
    );

    try {
      await access(target);
    } catch {
      failures.push(`${source.relativePath} links to missing ${match[1]}`);
    }
  }
}

for (const url of [...urls].sort()) {
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      headers: { "user-agent": "k-y.cc-link-check" },
      signal: AbortSignal.timeout(20_000),
    });

    if (response.status === 405) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "k-y.cc-link-check" },
        signal: AbortSignal.timeout(20_000),
      });
      await response.body?.cancel();
    }

    if (response.status >= 400) {
      failures.push(`${url} returned ${response.status}`);
    } else {
      console.log(`${response.status} ${url}`);
    }
  } catch (error) {
    failures.push(
      `${url} failed: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

if (failures.length > 0) {
  throw new Error(`External link check failed:\n${failures.join("\n")}`);
}

console.log(
  `External link checks passed for ${urls.size} URLs across ${sourceFiles.length} source files.`,
);
