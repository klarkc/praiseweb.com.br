<template>
  <main class="container mx-auto px-4">
    <article class="space-y-8">
      <header class="text-center">
        <ArticleTitle class="text-4xl">{{ data.title }}</ArticleTitle>
        <ArticleMeta :date="postCustom.date" :readTime="postCustom.readTime" />
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
import { useFrontmatter, useSiteData, useRoute } from 'vitepress';
import { computed } from 'vue';
import ArticleTitle from './ArticleTitle.vue';
import ArticleMeta from './ArticleMeta.vue';

function findCurrentIndex() {
  return posts.findIndex(p => p.href === route.path)
}

const data = useFrontmatter();
const route = useRoute();
const posts = useSiteData().value.customData.posts
const postCustom = computed(() => posts[findCurrentIndex()])
</script>
