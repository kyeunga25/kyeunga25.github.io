import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const sensitiveFilePattern =
  /(?:^|\/)(?:\.env(?:\..+)?|\.dev\.vars(?:\..+)?|[^/]+\.(?:pem|key|p12|pfx|sqlite|sqlite3|db|sql|dump|bak))$/i;

const textChecks = [
  {
    label: "private key material",
    source: "-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----",
    flags: "g",
  },
  {
    label: "secret-shaped access token",
    source:
      "\\b(?:sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16})\\b",
    flags: "g",
  },
  {
    label: "assigned secret value",
    source:
      "(?:API[_-]?KEY|TOKEN|PASSWORD|SECRET)\\s*[:=]\\s*[\\\"']?(?!<|your|replace|example|redacted|\\*{3})[A-Za-z0-9/+_.=-]{16,}",
    flags: "gi",
  },
  {
    label: "private macOS or Linux home path",
    source: "\\/(?:Users|home)\\/[A-Za-z0-9._-]+\\/",
    flags: "g",
  },
  {
    label: "private Windows home path",
    source: "[A-Za-z]:\\\\Users\\\\[^\\\\\\s]+\\\\",
    flags: "g",
  },
  {
    label: "database definition",
    source: "\\bCREATE\\s+TABLE\\b",
    flags: "gi",
  },
];

const { stdout } = await run(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 4 * 1024 * 1024,
  },
);

const trackedFiles = stdout.split("\0").filter(Boolean);
const failures = [];

for (const relativePath of trackedFiles) {
  if (sensitiveFilePattern.test(relativePath)) {
    failures.push(`${relativePath}: sensitive file type is tracked`);
    continue;
  }

  if (/\.(?:jpe?g|png|webp|gif|ico|woff2?)$/i.test(relativePath)) {
    continue;
  }

  const contents = await readFile(path.join(root, relativePath), "utf8");

  for (const check of textChecks) {
    const pattern = new RegExp(check.source, check.flags);
    const match = pattern.exec(contents);

    if (!match) continue;

    const line = contents.slice(0, match.index).split("\n").length;
    failures.push(`${relativePath}:${line}: ${check.label}`);
  }
}

if (failures.length > 0) {
  throw new Error(
    `Public-safety checks failed without printing matched values:\n${failures.join("\n")}`,
  );
}

console.log(
  `Public-safety checks passed for ${trackedFiles.length} public-source files; matched values are never printed.`,
);
