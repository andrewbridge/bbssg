#! /bin/sh
set -e

export DENO_INSTALL="/root/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

npm run build
git checkout --orphan gh-pages
git reset
git clean -fd
mv ./dist/* .
rm -d ./dist

git config http.sslVerify false
git config --local user.email "github-actions[bot]@users.noreply.github.com"
git config --local user.name "github-actions[bot]"

git add -A

git commit -m "{chore: autopublish ${timestamp}}"

remote_repo="https://${GITHUB_ACTOR}:${INPUT_GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git push "${remote_repo}" HEAD:"gh-pages" --follow-tags --force;