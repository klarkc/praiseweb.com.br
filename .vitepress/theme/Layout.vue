<template>
  <div class="min-h-screen space-y-12 py-4 bg-yellow-300 text-gray-800 dark:bg-green-900 dark:text-gray-300">
    <div class="nav-bar container mx-auto px-4 flex">
      <a v-if="!isIndex" class="flex items-center text-lg font-medium" href="/">
        <ArrowLeftIcon class="h-6 w-6 mr-4" /> Home
      </a>
      <DarkMode class="ml-auto" />
    </div>
    <Home v-if="isIndex" />
    <Article v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import DarkMode from './DarkMode.vue';
import { ArrowLeftIcon } from '@heroicons/vue/outline';
import Home from './Home.vue';
import Article from './Article.vue';

const route = useRoute();
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/');
</script>
