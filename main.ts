import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I promise to love you through every firmware update, every dead battery, and every factory reset — even the one that wipes my memory of this wedding.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

writeEntry(resolveOutDir(), line);
