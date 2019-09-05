<template>
   <div class="post-meta">
      Postado em {{ toLocale(post.date) }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min leitura.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    toLocale(date) {
      const d = new Date(date);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Intl.DateTimeFormat('pt-BR', options).format(d);
    }
  }
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>
