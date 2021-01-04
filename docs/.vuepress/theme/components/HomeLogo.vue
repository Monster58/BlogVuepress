<template>
  <div class="home-logo">
    <img :src="data.heroImage" :alt="this.$site.title" />
  </div>
</template>
<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
}
</script>
<style lang="stylus" scoped>
  .home-logo
    width 20%
    border-radius 10px
    overflow hidden
    border 4px solid #efefef
    img
      width 100%
      display block
</style>