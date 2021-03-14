import Denomander from "https://deno.land/x/denomander/mod.ts";
import files from './files.ts';
import initialise from "./initialise.ts";
import generate from "./generate.ts";

const decoder = new TextDecoder("utf-8");

const { name, version, description } = JSON.parse(files['./package.json']);

const program = new Denomander({
    app_name: name,
    app_version: version,
    app_description: description,
  });

program
    .command("initialise", "Initialise bbssg site")
    .option("-g --gitignore", "Set up .gitignore")
    .option("-p --package", "Set up package.json")
    .option("-w --workflow", "Setup GitHub publishing workflow")
    .option("-n --nosrc", "Don't initialise static site source files")
    .action(() => initialise({
        gitignore: program.gitignore,
        packageJson: program.package,
        githubWorkflow: program.workflow,
        sourceFiles: !program.nosrc
    }));

program
    .command("generate", "Generate bbssg site")
    .option("-b --base", "Set a base path for the generated site")
    .action(() => generate(program.base));

program.parse(Deno.args);