import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

await build({
  absWorkingDir: here,
  entryPoints: ['src/entry.jsx'],
  outfile: 'client.js',
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome110', 'safari16', 'firefox110'],
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  loader: { '.js': 'jsx', '.html': 'text', '.css': 'text' },
  minify: true,
  legalComments: 'none',
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'info',
});

// Text imports (the lesson shell and CSS) arrive with CRLF on Windows and LF on
// Linux. Normalize the finished bundle so local and CI builds produce the same
// committed artifact and GitHub Pages reuses the same bytes.
const bundle = resolve(here, 'client.js');
const source = await readFile(bundle, 'utf8');
await writeFile(bundle, source.replace(/\r\n/g, '\n'));
