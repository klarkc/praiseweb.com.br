<template>
    <div class="container mx-auto">
        <div class="flex">
            <DarkMode />
        </div>
        <main>
            <Home v-if="isIndex" />
            <Article v-else />
        </main>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DarkMode from './DarkMode.vue'
import Home from './Home.vue'
import Article from './Article.vue'
const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>