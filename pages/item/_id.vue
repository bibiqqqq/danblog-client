<template lang="pug">
  .item-detail
    .content(
      v-html="content"
    )
</template>

<script>
export default {
  async asyncData ({ store, params }) {
    const res = await store.dispatch('getArticleDetail', params.id)
    console.log(res)
    if (res.data.code === 0) {
      return { content: res.data.data.content.content }
    }
  },
  mounted () {
    // console.log(this.content)
  },
  computed: {
    // markdownContent () {
    //   return markdown(this.content, false, true).html
    // }
  }
}
</script>

<style scoped lang="sass">

</style>
