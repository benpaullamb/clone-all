#!/usr/bin/env zx
const repoList = (await $`gh repo list benpaullamb`).toString();
const repos = repoList
  .split('\n')
  .map((line) => line.split('\t')[0].trim())
  .filter((repo) => !!repo);

for (let i = 0; i < repos.length; i++) {
  const repo = repos[i];
  try {
    await $`gh repo clone ${repo}`;
  } catch (error) {
    console.error(`Failed to clone ${repo}`);
  }
}
