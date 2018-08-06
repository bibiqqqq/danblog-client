<template lang="pug">
  .markdown.fmt(v-html="content")
</template>

<script>
export default {
  props: {
    content: String
  },
}
</script>

<style lang="sass" scoped>
</style>
