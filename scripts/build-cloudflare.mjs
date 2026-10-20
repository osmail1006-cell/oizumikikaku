import './build-blog.mjs';
import { cpSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'public');
const files = ['index.html', 'styles.css', 'app.js', 'thanks.html'];
for (const file of files) {
  if (!existsSync(resolve(root, file))) throw new Error('Missing site file: ' + file);
}
if (!existsSync(resolve(root, 'assets'))) throw new Error('Missing assets directory');
mkdirSync(output, { recursive: true });
for (const file of files) copyFileSync(resolve(root, file), resolve(output, file));
cpSync(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });
console.log('Cloudflare Pages files are ready in public/');

for(const file of ['robots.txt','sitemap.xml','feed.xml'])copyFileSync(resolve(root,file),resolve(output,file));
cpSync(resolve(root,'blog'),resolve(output,'blog'),{recursive:true});
