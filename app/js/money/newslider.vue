<template lang="html">
    <section :class="cname">
        <swiper :options="options">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{name :item.href}">
                    <Panel :class="$style.panel">
                        <section :class="$style.content">
                            <p :class="$style.title">{{item.title}}</p>
                            <p :class="$style.label">{{item.label}}</p>
                            <p :class="$style.subtitle">{{item.subtitle}}<span>%</span></p>
                            <p :class="$style.desc">{{item.desc}}</p>
                        </section>
                    </Panel>
                </router-link>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
  import { swiper,swiperSlide } from "vue-awesome-swiper"
  import Panel from "../core/panel.vue"
  export default {
    components: {
      swiper,
      swiperSlide,
      Panel,
    },
    props: {
      cname: {
        type: String,
        default: "",
      },
      options: {
        type: Object,
        default() {
          return {
            slidesPerView: 2.7,
            spaceBetween: 16,
          }
        }
      },
      items: {
        type: Array,
        default() {
          return [{href: "", title: "", label: "", subtitle: "", desc: "",}]
        }
      },
    }
  }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    a{
        text-decoration: none;
        display: block;
        /*width: 150px;*/
    }
    .panel{
        @include panel;
        margin:0;
        width:150px;
        padding: 0 30px;
        box-shadow: 0 0 14px 7px rgba(101,118,155,.15);
        &:nth-child(1){
             margin-left: 30px;
        }
        >h4{
            display: none;
        }
        .content{
        @include list;
            .title{
                padding:38px 0 10px 0;
                width: 150px;
                height: 46px;
                line-height: 46px;
                font-size: 32px;
                color:#333;
            }
            .label{
                width: 100px;
                height: 32px;
                line-height: 32px;
                background-image: linear-gradient(#5e8fff,#2f6fff);
                border-radius: 22px;
                font-size: 24px;
                text-align: center;
                color: #fff;
            }
            .subtitle{
                width: 150px;
                height: 60px;
                padding: 0;
                font-family: DIN-Bold;
                font-size: 50px;
                height: 60px;
                line-height: 60px;
                color: #ff281e;
            span{
                font-size: 36px;
                line-height: 60px;
            }
            }
            .desc{
                width: 150px;
                font-family: PingFangSC-Semibold;
                font-size: 24px;
                height: 56px;
                line-height: 28px;
                color: #999;
                margin-top: 8px;
                padding-bottom: 10px;
            }
        }
    }


</style>
<style lang="css">
    @import '~swiper/dist/css/swiper.css';
    .swiper-slide{
        width: 210px;
    }
</style>
