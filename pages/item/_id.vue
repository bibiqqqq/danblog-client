<template lang="pug">
  .item-detail
    h1.title {{ title }}
    span.tag {{ tag }}
    span.createdAt {{ createdAt | relativeTime }}
    .mark-content
      markdown(:content="content")
</template>

<script>
import markdown from '~/components/markdown'
export default {
  async asyncData ({ store, params }) {
    const res = await store.dispatch('getArticleDetail', params.id)
    if (res.data.code === 0) {
      return {
        title: res.data.data.title,
        createdAt: res.data.data.createdAt,
        tag: res.data.data.tag,
        content: res.data.data.content
      }
    }
  },
  components: {
    markdown
  }
}
</script>

<style scoped lang="sass">
  .item-detail
    margin-top: 40px
    padding-left: 28px
    .title
      font-size: 21px
      color: #3eaf7c
      padding-bottom: 10px
    .tag
      display: block
      color: #828282
      font-size: 12px
      padding-bottom: 20px
    .createdAt
      color: #828282
    .mark-content
      margin-top: 28px


</style>
