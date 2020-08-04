<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";

export default {
  mounted() {
    this.$store.dispatch('getAddress')
  },
  components: {
    FooterGuide,
  },
};
</script>

<style lang="stylus">

</style>
