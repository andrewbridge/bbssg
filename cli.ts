import Denomander from "https://deno.land/x/denomander/mod.ts";
import { join } from "https://deno.land/std@0.89.0/path/mod.ts";
import { __dirname } from './metadata.ts';
import initialise from "./initialise.ts";
import generate from "./generate.ts";

const decoder = new TextDecoder("utf-8");

const { name, version, description } = JSON.parse(decoder.decode(Deno.readFileSync(join(__dirname, "./package.json"))));

const program = new Denomander({
    app_name: name,
    app_version: version,
    app_description: description,
  });

program
    .command("initialise", "Initialise bbssg site")
    .option("-g --gitignore", "Set up .gitignore")
    .option("-p --package", "Set up package.json")
    .action(() => initialise({
        gitignore: program.gitignore,
        packageJson: program.package,
    }));

program
    .command("generate", "Generate bbssg site")
    .action(generate);

program.parse(Deno.args);