<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{name :item.href}">
                    <img :src="item.src" alt="">
                    <p>{{item.info}}</p>
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" v-if="options.pagination"/>
        </swiper>
    </section>
</template>

<script>
  import { swiper,swiperSlide } from "vue-awesome-swiper"
  export default {
    components: {
      swiper,
      swiperSlide,
    },
    props:{
      cname:{
        type: String,
        default:"",
      },
      options:{
        type:Object,
        default () {
          return{
            autoplay:true,
            direction: 'vertical',
            pagination:{
              el:'.swiper-pagination',
            },
            notNextTick:false
          }
        }
      },
      items:{
        type:Array,
        default(){
          return [{href:"",src:"",info:"",}]
        }
      }
    }
  }
</script>

<style lang="css">
    @import '~swiper/dist/css/swiper.css';
    .swiper-pagination-bullet{
        width: 14px;
        height: 14px;
        opacity: 1;
        background: url(//m.jr.jd.com/spe/qyy/main/images/banner_point.png) center center;
        -webkit-background-size: 14px 14px;
        background-size: 14px 14px;
        margin: 0 5px;
    }
    .swiper-pagination-bullet-active{
        background: url(//m.jr.jd.com/spe/qyy/main/images/banner_point_cur.png) center center;
    }
</style>