<template>
  <div class="flex flex-col items-center py-8 text-center">
    <img src="/logo.jpg" alt="Praiseweb Logo" class="rounded-full w-24 h-24">
    <h1 class="text-3xl font-sans font-medium pt-4">{{ $frontmatter.title }}</h1>
    <h1 class="text-lg font-sans pt-4">{{ $frontmatter.subtext }}</h1>
    <div class="pt-4 underline">
      <a href="https://profile.codersrank.io/user/klarkc" target="_blank">Codersrank</a>
      <a href="https://twitter.com/klarkc" class="px-4" target="_blank">Twitter</a>
      <a href="https://github.com/klarkc" target="_blank">GitHub</a>
    </div>
  </div>
</template>
