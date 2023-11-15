#!/usr/bin/env zx
const repoList = (await $`gh repo list benpaullamb`).toString();
const repos = repoList.split('\n').map((line) => line.split('\t')[0]);

for (let i = 0; i < repos.length; i++) {
  await $`gh repo clone ${repos[i]}`;
}
