import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexHtml = await readFile(path.join(root, "index.html"), "utf8");
const urls = [
  ...new Set(
    [...indexHtml.matchAll(/href="(https:[^"]+)"/g)].map((match) => match[1]),
  ),
];

const failures = [];

for (const url of urls) {
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

console.log(`External link checks passed for ${urls.length} URLs.`);
