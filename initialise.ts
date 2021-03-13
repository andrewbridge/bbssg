import { ensureFile } from "https://deno.land/std@0.89.0/fs/mod.ts";
import files from "./files.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");

type InitialiseOptions = { gitignore: boolean, packageJson: boolean};
export default async ({ gitignore = false, packageJson = false }: InitialiseOptions) => {
    for (const path in files) {
        if (!path.startsWith('./src')) continue;
        await ensureFile(path);
        const fileData = files[path as keyof typeof files];
        await Deno.writeFile(path, encoder.encode(fileData));
    }
    if (gitignore === true) {
        const gitignorePath = './.gitignore';
        await ensureFile(gitignorePath);
        await Deno.writeFile(gitignorePath, encoder.encode('\n/dist\n'), { append: true });
    }
    if (packageJson === true) {
        const packagePath = './package.json';
        await ensureFile(packagePath);
        const packageContents = decoder.decode(await Deno.readFile(packagePath));
        const packageObj = packageContents.length > 0 ? JSON.parse(packageContents) : {};
        if (typeof packageObj.scripts !== 'object') {
            packageObj.scripts = {};
        }
        packageObj.scripts.build = "deno run --unstable --allow-read --allow-write https://deno.land/x/bbssg@v1.0.0/cli.ts generate";
        await Deno.writeFile(packagePath, encoder.encode(JSON.stringify(packageObj, null, 2)));
    }
};
