# Barebones Static Site Generator (BBSSG)

Sometimes you don't need a static site generator that comes with a templating language, MBs or even GBs of dependencies and a hundred lines of config.

BBSSG takes markdown content (no frontmatter here!) places it into an HTML template and performs some link matching. That's it!

It's built in [deno](https://deno.land/) so you don't need another `node_modules` folder filling up your hard drive and only adds ~100 lines of my shonky code to tie libraries together (written by much smarter, less shonky people).

## Install

Initialise a site with `deno run --unstable --allow-read --allow-write https://deno.land/x/bbssg@v1.1.11/cli.ts initialise --gitignore --package`.

Yes, that `--unstable` looks scary, but unfortuately a majority of the [deno fs module](https://deno.land/std@0.89.0/fs) currently requires it.

Note the `--gitignore` and `--package`:

- `--gitignore` adds the `./dist` directory to your `.gitignore` file
- `--package` adds the `build` script to generate a BBSSG site

### Manual

- Create `./src/template.html`
    - You can copy the contents of [`index.html`](./blob/main/src/template.html) or...
    - Check the [Customising the template](#customising-the-template) section for
- Create `./src/content/index.md`
- The `yarn build` or `npm run build` commands mentioned below are aliases of
    - `deno run --unstable --allow-read --allow-write https://deno.land/x/bbssg@v1.1.11/cli.ts generate`
- The site is generated in a `./dist` directory, so optionally add `/dist` to `.gitignore`

### Publish site GitHub action

// TODO: Set up GitHub action

Install the github action with ${insert method to install}. Check the [Publishing](#publishing) section for more information on publishing via a GitHub action.

### Customise

If any of the functionality or behaviour described below doesn't suit your needs, but you still want to use BBSSG, grab [`generate.ts`](./blob/main/generate.ts) from this repo (or clone the whole thing) and tweak as necessary. You can then run it

## Usage

### Generate the site

- Add or change content in the `src/content` folder
- Run `yarn build` or `npm run build`

The default template is set up to use [Water.css](https://watercss.kognise.dev/), which does a good job of styling semantic HTML.

`index.md` will be used for the content on the `index.html` of your site. All other content files will be added as `index.html` files within a directory using the same file name as the file. For example

```
- src
    - content
        index.md
        about.md
        contact.md
```

...results in...

```
- dist
    index.html
    - about
        index.html
    - contact
        index.html
```

### Customising the template

The template, `src/template.html`, is the only other required file. Any global elements, such as a navbar, should go here. There's no automated generated of the navbar, it's all manual, but that provides you simple and complete control for the small price of this manual work.

Anything else found in the `src` directory will be copied verbatim to the generated site. Stylesheets or javascript you want to link to in the template will be in the same location on the final site. Make sure your references are all absolute or from the site's root. In this example, the `assets` directory is used for stylesheets for neatness, but it is not required.

The `{%PAGE_CONTENT%}` placeholder can be used once, anywhere in the template.

#### Page title

The page title will be inferred from the file name or the first H1 on the generated page. Currently the `{%PAGE_TITLE%}` placeholder will only be replaced in the title element of the page.

#### Link matching

Any link on the generated page that matches the URL of the page being generated will had an "active" class added to it. It's up to you to handle any visual changes in your CSS.

## Publishing

// TODO:
Write some stuff here about a github action, implement the github action as a demo

## Development

As this is a barebones generator, the development situation is pretty barebones too. Rather than setting up a built in file watcher, I use [watchexec](https://github.com/watchexec/watchexec) which is a fantastic general purpose file watcher. If you have this installed, run `yarn dev` or `npm run dev` to run the build every time a non `dist` file changes.

If you need to serve the site, `yarn serve` or `npm run serve` will run a simple HTTP server of the `dist` directory at [http://localhost:8000](http://localhost:8000).

There's no live reloading or hot reloading here, so be ready to hit that refresh button!