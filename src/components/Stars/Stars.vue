<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item on" v-for="(item, index) in onstar" :key="'on' + index">></span>
    <span class="star-item half" v-for="(item, index) in half" :key="'half' + index">></span>
    <span class="star-item off" v-for="(item, index) in offstar" :key="'off'+index">></span>
  </div>
</template>

<script>
export default {
  props: {
    score: Number, //2.3
    size: Number,
  },
  computed: {
    onstar() {
      return Math.floor(this.score);
    },
    offstar() {
      if (
        this.score * 10 - Math.floor(this.score) * 10 < 5 &&
        this.score * 10 - Math.floor(this.score) * 10 != 0
      ) {
        return 5 - Math.ceil(this.score) + 1;
      } else {
        return 5 - Math.ceil(this.score);
      }
    },
    half() {
      return this.score * 10 - Math.floor(this.score) * 10 > 5 ? 1 : 0;
    },
  },
};
</script>

<style lang="stylus"></style>