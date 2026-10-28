import { build } from 'esbuild';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here);
const docs = resolve(root, 'docs');

await mkdir(docs, { recursive: true });
await Promise.all([
  build({
    absWorkingDir: root,
    entryPoints: ['demo/main.js'],
    outfile: 'docs/cell-atlas.js',
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: ['chrome110', 'safari16', 'firefox110'],
    minify: true,
    legalComments: 'none',
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'info',
  }),
  build({
    absWorkingDir: root,
    entryPoints: ['demo/textbook.js'],
    outfile: 'docs/textbook.js',
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: ['chrome110', 'safari16', 'firefox110'],
    minify: true,
    legalComments: 'none',
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'info',
  }),
  build({
    absWorkingDir: root,
    entryPoints: ['demo/models.js'],
    outfile: 'docs/models.js',
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: ['chrome110', 'safari16', 'firefox110'],
    minify: true,
    legalComments: 'none',
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'info',
  }),
]);
await copyFile(resolve(root, 'demo/index.html'), resolve(docs, 'index.html'));
await copyFile(resolve(root, 'demo/style.css'), resolve(docs, 'style.css'));
await copyFile(resolve(root, 'demo/textbook.html'), resolve(docs, 'textbook.html'));
await copyFile(resolve(root, 'demo/textbook.css'), resolve(docs, 'textbook.css'));
const lessonShell = await readFile(resolve(root, 'src/lesson-ui/shell.html'), 'utf8');
const lessonCSS = await readFile(resolve(root, 'src/lesson-ui/lesson.css'), 'utf8');
await writeFile(resolve(docs, 'models.html'), (await readFile(resolve(root, 'demo/models.html'), 'utf8')).replace('<!-- LESSON_SHELL -->', lessonShell));
await writeFile(resolve(docs, 'models.css'), (await readFile(resolve(root, 'demo/models.css'), 'utf8')).replace('/* LESSON_STYLES */', lessonCSS));
await copyFile(resolve(root, 'demo/guide.html'), resolve(docs, 'guide.html'));
await copyFile(resolve(root, 'demo/guide.css'), resolve(docs, 'guide.css'));
await copyFile(resolve(root, 'demo/_headers'), resolve(docs, '_headers'));
await copyFile(resolve(root, 'icon.svg'), resolve(docs, 'icon.svg'));
await copyFile(resolve(root, 'media/cover.jpg'), resolve(docs, 'cover.jpg'));
await writeFile(resolve(docs, '.nojekyll'), '');
console.log('demo built → docs/');
