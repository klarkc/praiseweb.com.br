<template>
  <main class="max-w-2xl mx-auto px-4 space-y-8">
    <Author />
    <template v-for="{ title, href, date, readTime, coverImage, coverAlt, excerpt } of $site.customData.posts" :key="href">
      <ArticleCard :cover-image="coverImage" :cover-alt="coverAlt" class="hover:shadow-2xl">
        <div class="p-8 space-y-4">
          <ArticleTitle>{{ title }}</ArticleTitle>
          <div v-if="excerpt" class="prose text-lg text-gray-800 dark:text-gray-300" v-html="excerpt"></div>
          <ArticleMeta :date="date" :readTime="readTime" />
        </div>
        <a class="block absolute inset-0 opacity-0" aria-label="ler post" :href="href">Ler post</a>
      </ArticleCard>
    </template>
  </main>
</template>

<script setup>
import Author from './Author.vue';
import ArticleMeta from './ArticleMeta.vue';
import ArticleTitle from './ArticleTitle.vue';
import ArticleCard from './ArticleCard.vue';
</script>

