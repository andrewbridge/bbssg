import { fromFileUrl, dirname } from "https://deno.land/std@0.89.0/path/mod.ts";
import { join } from "https://deno.land/std@0.89.0/path/mod.ts";
import { ensureDir, ensureFile, walk } from "https://deno.land/std@0.89.0/fs/mod.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");

const __filename = fromFileUrl(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
    type FlatFiles = { [key: string]: string };
    const files: FlatFiles = {};
    for await (const item of walk(join(__dirname, './src'))) {
        if (!item.isFile) continue;
        const relPath = item.path.replace(__dirname, '.');
        files[relPath] = decoder.decode(await Deno.readFile(item.path));
    }
    files['./package.json'] = decoder.decode(Deno.readFileSync(join(__dirname, "./package.json")));
    const fileModule = `export default ${JSON.stringify(files)}`;
    await Deno.writeFile('./files.ts', encoder.encode(fileModule));
})();