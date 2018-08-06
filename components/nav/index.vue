<template lang="pug">
  .nav
    img.img(src="~/assets/img/logo-120.png")
    nuxt-link.blog(to="/blog") Blog
    nuxt-link.tags(to="/tags") Tags
    nuxt-link.repo(to="/repo") Repo
    a.github(
      href="https://github.com/bibiqqqq",
      target="_blank"
    ) Github
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
  .nav
    margin-top: 20px
    .img
      width: 24px
      vertical-align: middle
    .blog, .tags, .repo, .github
      padding-left: 20px
      color: #d480aa
      &:hover
        color: #fff
      &.nuxt-link-active
        color: #fff
    .github
      cursor: pointer
</style>
