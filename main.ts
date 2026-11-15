// Proof of Peck (PECK), bounty make.fun makefun-coin-promo-01.
// Copies LAUNCH.json to /output (or MAKEFUN_OUTPUT_DIR), creating directories as needed.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDirectory = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(
  join(botDirectory, 'LAUNCH.json'),
  join(outputDirectory, 'LAUNCH.json'),
);
