<template lang="html">
    <Panel title="京东金条" :class="$style.panel">
        <div :class="$style.add"></div>
        <section :class="$style.content">
            <div :class="$style.jdGold">
                <img src="//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" alt="gold">
                <p :class="$style.text1">最高可借</p>
                <p :class="$style.text2"><span>￥</span>300,000</p>
                <p :class="$style.btn">立即登录</p>
            </div>
            <Slider :items="items" :cname="$style.slider"/>
        </section>
    </Panel>
</template>
<script>
    import Panel from "../core/panel.vue"
    import Slider from "../core/slider.vue"
    export default {
      components:{
        Panel,
        Slider,
      },
      data(){
        return {
            items:[{
              src:"//img12.360buyimg.com/jrpmobile/jfs/t21313/119/368520361/14455/ed098b39/5b0b6018Nec9c926a.png?width=690&height=154",
              href:"borrow",
            },
             {
                src:"//img12.360buyimg.com/jrpmobile/jfs/t21871/150/426067653/21399/a60b9dec/5b0d244eNaef7a635.png?width=690&height=154",
                href:"borrow",
            },
             {
                src:"//img12.360buyimg.com/jrpmobile/jfs/t21475/159/356066876/15370/529bcda2/5b0b66c9Na8906008.png?width=690&height=154",
                href:"borrow",
            },{
                src:"//img12.360buyimg.com/jrpmobile/jfs/t21574/277/374235388/16113/5d52911d/5b0b5fc1N905e4353.png?width=690&height=154",
                href:"borrow",
            },
              {
                src:"//img12.360buyimg.com/jrpmobile/jfs/t21328/3/367330673/13727/4f4f0a17/5b0b6583Nd8e06b8c.png?width=690&height=154",
                href:"borrow",
            },],
        }
      },
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        &>h4{
             display: none;
         }
         .add{
             height: 80px;
         }
        .content{
            position: relative;
            width: 587.5px;
            padding:47.25px 26.25px 132px 26.25px;
            background: url(//m.jr.jd.com/vip/borrowMoney/css/i/bj.png) no-repeat 0 0/100% auto;
            .jdGold{
                position: relative;
                color: #fff;
                >img{
                    width: 587.5px;
                    height: 348px;
                }
                .text1{
                    position: absolute;
                    top: 18%;
                    left: 10%;
                    width: 112px;
                    height: 28px;
                    line-height: 28px;
                    font-size: 28px;
                }
                .text2{
                    position:absolute;
                    top:30%;
                    left:10%;
                    height: 74px;
                    line-height: 74px;
                    font-size:75.25px;
                    font-family: DINAlternate-Bold;
                    text-shadow: 0 8.75px 8.75px rgba(63,39,0,.2);
                    span{
                        line-height: 52.5px;
                        font-size: 52.5px;
                    }
                }
                .btn{
                    position: absolute;
                    top: 56%;
                    left: 10%;
                    font-size: 24.5px;
                    font-weight: 500;
                    width: 180.25px;
                    height: 56.875px;
                    line-height: 52.5px;
                    text-align: center;
                    background: url(//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png) 0 0 no-repeat;
                    background-size: 100% 100%;
                }
            }
            .slider{
                position: absolute;
                bottom: 0;
                left:0;
                width: 640px;
                height: 132px;
                text-align: center;
                img{
                    width: 587.5px;
                    height: 132px;
                }

            }
        }
    }
</style>
<style lang="css">
    .swiper-pagination-bullets{
        margin-bottom: 10px;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
        width: 12px;
        height: 12px;
        opacity: 1;
        background-color: #fff;
        margin: 0 10px;
    }
    .swiper-pagination-bullet-active{
        background: #999;
    }
</style>