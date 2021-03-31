<template>
  <div class="h-screen bg-yellow-300 text-gray-800 dark:bg-green-900 dark:text-gray-200">
    <div class="container mx-auto p-4">
      <div class="flex">
        <div class="flex-1" />
        <DarkMode />
      </div>
      <main>
        <Home v-if="isIndex" />
        <Article v-else />
      </main>
    </div>
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
