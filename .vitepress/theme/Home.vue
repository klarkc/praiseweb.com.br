<template>
  <div class="space-y-8">
    <div class="flex flex-col items-center space-y-4 text-center">
      <img src="/logo.jpg" alt="Praiseweb Logo" class="rounded-full w-24 h-24">
      <h1 class="text-3xl font-sans font-medium">{{ $frontmatter.title }}</h1>
      <h1 class="text-lg font-sans">{{ $frontmatter.subtext }}</h1>
      <div class="underline">
        <a href="https://profile.codersrank.io/user/klarkc" target="_blank">Codersrank</a>
        <a href="https://twitter.com/klarkc" class="px-4" target="_blank">Twitter</a>
        <a href="https://github.com/klarkc" target="_blank">GitHub</a>
      </div>
    </div>
    <article class="bg-white shadow-xl flex flex-col relative transition-shadow dark:bg-green-800 hover:shadow-2xl" v-for="{ title, href, date, excerpt } of $site.customData.posts" :key="href">
      <div class="p-8 space-y-4">
        <h2 class="text-3xl leading-8 font-medium">
          {{ title }}
        </h2>
        <div v-if="excerpt" class="prose text-lg text-gray-800 dark:text-gray-300" v-html="excerpt"></div>
        <Date :date="date" />
      </div>
      <a class="block absolute inset-0 opacity-0" aria-label="ler post" :href="href">Ler post</a>
    </article>
  </div>
</template>
