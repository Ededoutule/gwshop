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
import {mapActions} from 'vuex'
export default {
  mounted() {
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getUserInfo','getAddress'])
  },
  components: {
    FooterGuide,
  },
};
</script>

<style lang="stylus">

</style>
