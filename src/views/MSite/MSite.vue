/* eslint-disable vue/require-v-for-key */
<template>
    <section class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">
          <router-link to="/search" slot="left" class="header_search">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
          <router-link :to="userInfo._id?'/userinfo':'/login'" slot="right" class="header_login" >
            <span class="header_login_text" v-if="!userInfo._id">
              登录|注册
            </span>
            <span class="header_login_text" v-else>
              <i class="iconfont icon-person"></i>
            </span>
          </router-link>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorysArr.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
                <a v-for="(item, index) in categorys" :key="index" href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img :src="'https://fuss10.elemecdn.com'+ item.image_url">
                  </div>
                  <span>{{ item.title }}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
      </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Swiper from "swiper"
import 'swiper/swiper-bundle.min.css'
import ShopList from "../../components/ShopList/ShopList";
import { mapState } from 'vuex';
// import { nextTick } from 'vue/types/umd';
export default {
    data() {
      return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      this.$store.dispatch('getFoodType')
        // eslint-disable-next-line no-unused-vars
      
        
    },
    watch: {
      foodTypes() { // categorys数组中有数据了, 在异步更新界面之前执行
        // 使用setTimeout可以实现效果, 但不是太好
        /*setTimeout(() => {
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }, 100)*/

        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

          // new BScroll('.miste-content-wrapper', {
          //   click: true
          // })
        })
      }
    },
    computed: {
      ...mapState(['address','foodTypes','shops','userInfo']),
      categorysArr() {
        const { foodTypes } = this;
        const arr = [];
        let minArr = [];
        foodTypes.forEach(item => {
          if(minArr.length === 8) {
            minArr = []; 
          }
          if(minArr.length === 0){
            arr.push(minArr)
          }
          minArr.push(item)
        })
        return arr;
      },
      
    },
    components: {
         HeaderTop,
         ShopList
    }
}
</script>

<style lang="stylus" >
@import '../../assets/stylus/mixin';
    .msite  //首页
          width 100%
          .header
            background-color #02a774
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            .header_search
              position absolute
              left 15px
              top 50%
              transform translateY(-50%)
              width 10%
              height 50%
              .icon-sousuo
                font-size 25px
                color #fff
            .header_title
              position absolute
              top 50%
              left 50%
              transform translate(-50%, -50%)
              width 50%
              color #fff
              text-align center
              .header_title_text
                font-size 20px
                color #fff
                display block
            .header_login
              font-size 14px
              color #fff
              position absolute
              right 15px
              top 50%
              transform translateY(-50%)
              .header_login_text
                color #fff
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            
</style>