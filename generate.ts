import { join, extname } from "https://deno.land/std@0.89.0/path/mod.ts";
import { ensureDir, ensureFile, walk } from "https://deno.land/std@0.89.0/fs/mod.ts";
import marked from 'https://cdn.skypack.dev/marked';
import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const encoder = new TextEncoder();

const inputRelDir = './src';
const outputRelDir = './dist';
const titleReplacementStr = '{%PAGE_TITLE%}';
const contentReplacementStr = '{%PAGE_CONTENT%}';

export default async (base = '') => {
    await ensureDir(inputRelDir);
    await ensureDir(outputRelDir);
    const inputDir = await Deno.realPath(inputRelDir);
    const outputDir = await Deno.realPath(outputRelDir);
    const templatePath = join(inputDir, './template.html');
    const template = await Deno.readTextFile(templatePath);
    for await (const item of walk(inputDir)) {
        if (!item.isFile || item.path === templatePath) continue;
        const { path, name } = item;
        const ext = extname(name);
        if (ext === '.md') {
            const isHome = name === 'index.md';
            const md = await Deno.readTextFile(join(inputDir, './content', name));
            const htmlFileName = isHome ? name.replace(ext, '.html') : name.replace(ext, '/index.html');
            const htmlPath = join(outputDir, htmlFileName);
            const html = marked(md).replace(/\n/g, '\n        ');
            let templatedHtml = template.replace(contentReplacementStr, html);
            let pageTitle = name.replace(ext, '');
            const htmlDom = new DOMParser().parseFromString(templatedHtml, 'text/html');
            if (htmlDom) {
                const h1 = htmlDom.querySelector('h1');
                if (h1) {
                    pageTitle = h1.textContent;
                }
                const activeLinks = htmlDom.querySelectorAll(`[href="/${htmlFileName}"], [href="/${htmlFileName.replace('index.html', '')}"]`)
                activeLinks.forEach(node => {
                    if (node instanceof Element) {
                        node.classList.add('active');
                    }
                });
                // Seems to be a bug where multi-css selectors don't work
                ['href', 'src'].forEach(attr => {
                    const relativeLinks = htmlDom.querySelectorAll(`[${attr}^="/"]`);
                    if (!relativeLinks) return;
                    relativeLinks.forEach(node => {
                        if (node instanceof Element) {
                            const attrValue = node.getAttribute(attr)
                            if (attrValue !== null && attrValue.startsWith('/')) {
                                node.setAttribute(attr, base + attrValue);
                            }
                        }
                    });
                });
                const title = htmlDom.querySelector('head title');
                if (title) {
                    title.textContent = title.textContent.replace(titleReplacementStr, isHome ? 'Home' : pageTitle);
                }
                if (htmlDom.documentElement) {
                    templatedHtml = templatedHtml.slice(0, templatedHtml.indexOf('<html')) + htmlDom.documentElement.outerHTML;
                }
            }
            await ensureFile(htmlPath);
            await Deno.writeFile(htmlPath, encoder.encode(templatedHtml));
            continue;
        }
        const outputPath = path.replace(inputDir, outputDir);
        await ensureFile(outputPath);
        await Deno.copyFile(path, outputPath);
    }
};
