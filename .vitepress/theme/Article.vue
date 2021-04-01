<template>
  <main class="container mx-auto px-4 space-y-8">
    <article class="space-y-8">
      <header>
        <ArticleTitle class="text-4xl text-center">{{ data.title }}</ArticleTitle>
      </header>
      <div>
        <Content class="prose" />
      </div>
      <footer>
        Footer
      </footer>
    </article>
  </main>
</template>

<script setup>
import { useFrontmatter } from 'vitepress';
import ArticleTitle from './ArticleTitle.vue';
const data = useFrontmatter();
</script>
