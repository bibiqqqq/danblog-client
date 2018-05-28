<template lang="pug">
  div
    Nav
    nuxt
</template>

<script>
import Nav from '~/components/nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="sass">
  html
    border-top: 2px solid #c9cacc
  body
    font-family: "Menlo", "Meslo LG", monospace
    font-size: 14px
    font-weight: 500
    margin: 0
    color: #c9cacc
    background-color: #1d1f21
    max-width: 800px
    margin: 0 auto
</style>
