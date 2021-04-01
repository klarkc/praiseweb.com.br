<template>
  <article class="bg-white shadow flex flex-col relative transition-shadow dark:bg-green-800 hover:shadow-2xl">
    <img v-if="coverImage" class="object-cover h-64 w-full" :src="coverImage" :alt="coverAlt">
    <slot />
  </article>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  coverImage: String,
  coverAlt: String,
})
</script>
