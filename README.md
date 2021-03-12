# Barebones Static Site Generator (BBSSG)

Sometimes you don't need a site that comes with a templating language, MBs or even GBs of dependencies and a hundred lines of config.

BBSSG takes markdown content (no frontmatter here!) places it into an HTML template and performs some link matching. It's built in [deno](https://deno.land/) so you don't need another `node_modules` folder filling up your hard drive and adds less than 100 lines of my shonky code to tie libraries together (written by much smarter, less shonky people).

