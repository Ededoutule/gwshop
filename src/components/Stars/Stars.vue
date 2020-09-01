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
  mounted() {
    if(this.score == undefined) {
      this.score = 0
    }
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

<style lang="stylus">
  @import "../../assets/stylus/mixin"

  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./stars/star48_on')
        &.half
          bg-image('./stars/star48_half')
        &.off
          bg-image('./stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./stars/star36_on')
        &.half
          bg-image('./stars/star36_half')
        &.off
          bg-image('./stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./stars/star24_on')
        &.half
          bg-image('./stars/star24_half')
        &.off
          bg-image('./stars/star24_off')
</style>