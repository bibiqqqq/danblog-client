<template lang="pug">
  .paging
    span.prev(
      @click="handleClickPage('prev')",
      :class="{ disabled: defaultPage === 1 }"
    ) PREV
    span.page {{ page }}
    span.next(
      @click="handleClickPage('next')",
      :class="{ disabled: defaultPage === total }"
    ) NEXT
</template>

<script>
export default {
  props: {
    total: Number,
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      defaultPage: null
    }
  },
  computed: {
    page () {
      return `${this.defaultPage}/${this.total}`
    }
  },
  watch: {
    currentPage: {
      handler (val) { this.defaultPage = val },
      immediate: true
    }
  },
  methods: {
    handleClickPage (type) {
      if (type === 'prev' && this.defaultPage > 1) {
        this.defaultPage --
      } else if (type === 'next' && this.defaultPage < this.total) {
        this.defaultPage ++
      }
      this.$emit('listenToPage', this.defaultPage)
    },
  },
}
</script>

<style scoped lang="sass">
  .paging
    .prev, .next
      cursor: pointer
      color: #3eaf7c
      &.disabled
        color: #444
    .page
      padding: 0 10px
</style>
