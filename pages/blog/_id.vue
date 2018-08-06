<template lang="pug">
  .blog-list
    //- paging(
    //-   :total="total",
    //-   :currentPage="currentPage"
    //-   @listenToPage="listenToPage"
    //- )
    .item(
      v-for="item in list"
    )
      span.title {{ item.title }}
      span.created {{ item.createdAt | formatDate }}
      i.i |
      span.read-more(
        @click="handleReadMore(item._id)"
      ) Read more
</template>

<script>
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
    paging
  },
  // computed: {
  //   currentPage () {
  //     return +this.$route.params.id || 1
  //   }
  // },
  // transition: 'slide',
  methods: {
    // listenToPage (page) {
    //   console.log(this.list)
    //   this.$router.push({
    //     name: 'blog-id',
    //     params: { id: page }
    //   })
    // },
    handleReadMore (articleId) {
      this.$router.push({
        name: 'item-id',
        params: { id: articleId }
      })
    }
  }
}
</script>

<style scoped lang="sass">
  .blog-list
    margin-top: 80px
    padding-bottom: 40px
    .item
      padding: 20px 0
      .title
        display: block
        padding-bottom: 10px
      .created, .i, .read-more
        font-size: 12px
        color: #828282
      .i
        padding: 0 10px
      .read-more
        cursor: pointer
        text-decoration: underline
        &:hover
          color: #d480aa
</style>
