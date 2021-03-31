<template>
    <main class="max-w-3xl mx-auto p-4">
      <Home v-if="isIndex" />
      <Article v-else />
    </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>