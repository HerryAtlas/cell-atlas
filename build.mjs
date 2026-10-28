import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

// Normalize text imports before esbuild turns CRLF into the two-character
// sequence \r\n inside a template literal. Without this, a Windows working tree
// and a Linux CI checkout generate different client.js bytes for the same
// source. Keeping the text LF makes the generated bundle cross-platform stable.
const normalizedText = {
  name: 'normalized-text',
  setup(build) {
    build.onLoad({ filter: /\.(html|css)$/ }, async (args) => ({
      contents: (await readFile(args.path, 'utf8')).replace(/\r\n/g, '\n'),
      loader: 'text',
    }));
  },
};

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
  loader: { '.js': 'jsx' },
  plugins: [normalizedText],
  minify: true,
  legalComments: 'none',
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'info',
});

// Keep the final artifact LF-only as a second guard.
const bundle = resolve(here, 'client.js');
const source = await readFile(bundle, 'utf8');
await writeFile(bundle, source.replace(/\r\n/g, '\n'));
