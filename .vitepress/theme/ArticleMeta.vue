<template>
    <div class="text-base leading-6 text-gray-500 dark:text-gray-400">
      Publicado em <time :datetime="getDateTime()">{{ date.string }}</time>.
      <b>{{readTime}} min leitura.</b>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  date: Object,
  readTime: Number,
})
function getDateTime() {
  return new Date(props.date.time).toISOString()
}
</script>
