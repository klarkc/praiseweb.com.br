<template>
  <div class="min-h-screen space-y-12 py-4 bg-yellow-300 text-gray-800 dark:bg-green-900 dark:text-gray-200">
    <div class="container mx-auto px-4 flex">
      <div class="flex-1" />
      <DarkMode />
    </div>
    <main class="max-w-2xl mx-auto px-4">
      <Home v-if="isIndex" />
      <Article v-else />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import DarkMode from './DarkMode.vue';
import Home from './Home.vue';
import Article from './Article.vue';

const route = useRoute();
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/');
</script>
