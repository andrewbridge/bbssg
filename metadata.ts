import { fromFileUrl, dirname } from "https://deno.land/std@0.89.0/path/mod.ts";

const __filename = fromFileUrl(import.meta.url);
const __dirname = dirname(__filename);

export {
    __filename,
    __dirname,
};