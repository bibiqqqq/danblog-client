<template lang="pug">
  .markdown.fmt(v-html="content")
</template>

<script>
import hlj from 'highlight.js'
export default {
  props: {
    content: String
  },
}
</script>

<style lang="sass" scoped>
</style>
