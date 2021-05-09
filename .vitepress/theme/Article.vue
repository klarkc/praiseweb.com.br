<template>
  <main class="max-w-3xl mx-auto px-4 space-y-8">
    <article class="space-y-8">
      <header class="text-center space-y-4">
        <ArticleTitle class="text-4xl">{{ data.title }}</ArticleTitle>
        <ArticleMeta :date="postCustom.date" :readTime="postCustom.readTime" />
      </header>
      <ArticleCard :cover-image="postCustom.coverImage" :cover-alt="postCustom.coverAlt">
        <Content class="prose max-w-none p-8 dark:prose-light" />
      </ArticleCard>
    </article>
  </main>
  <footer class="space-y-8">
    <Author />
    <Copyright />
  </footer>
</template>

<script setup>
import { useFrontmatter, useSiteData, useRoute } from 'vitepress';
import { computed } from 'vue';
import ArticleTitle from './ArticleTitle.vue';
import ArticleMeta from './ArticleMeta.vue';
import ArticleCard from './ArticleCard.vue';
import Author from './Author.vue';
import Copyright from './Copyright.vue';

function findCurrentIndex() {
  return posts.findIndex(p => p.href === route.path)
}

const data = useFrontmatter();
const route = useRoute();
const posts = useSiteData().value.customData.posts
const postCustom = computed(() => posts[findCurrentIndex()])
</script>
