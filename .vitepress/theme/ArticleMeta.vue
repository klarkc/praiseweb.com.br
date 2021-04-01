<template>
    <div class="text-base text-gray-600 dark:text-gray-400">
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
