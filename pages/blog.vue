<template lang="pug">
  .blog
    description
    paging(
      :total="total",
      :currentPage="currentPage"
      @listenToPage="listenToPage"
    )
    nuxt-child
</template>
<script>
import description from '~/components/description'
import paging from '~/components/paging'
export default {
  async asyncData({ store, route }) {
    const page = +route.params.id || 1
    const res = await store.dispatch("getArticleList", page)
    if (res.data.code === 0) {
      return {
        list: res.data.data.list,
        total: res.data.data.total
      }
    }
  },
  components: {
    description,
    paging,
  },
  data () {
    return {
    }
  },
  computed: {
    currentPage () {
      return +this.$route.params.id || 1
    }
  },
  // transition: {
  //   name: 'slide'
  // },
  methods: {
    async listenToPage (page) {
      this.$router.push({
        name: 'blog-id',
        params: {
          id: page
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .blog
    .article-list
      margin-top: 40px
      .item
        padding: 20px 30px 20px 0
        .title
          display: block
          padding-bottom: 10px
        .date, i, .read-more
          color: #828282
          font-size: 12px
        .i
          padding: 0 10px
        .read-more
          text-decoration: underline
          cursor: pointer
          &:hover
            color: #d480aa
</style>
