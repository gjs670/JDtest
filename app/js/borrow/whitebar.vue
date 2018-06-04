<template lang="html">
    <Panel title="白条服务" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.whitecard">
                <router-link :to="{name:'home'}">
                    <img src="//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="">
                </router-link>
            </div>
            <div :class="$style.whiteright">
                <img src="//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" alt="">
                <p :class="$style.title">小白信用</p>
                <p :class="$style.btn">登录查看</p>
            </div>
        </section>
    </Panel>
</template>
<script>
  import Panel from "../core/panel.vue"
  export default {
    components:{
      Panel,
    },
  }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
            padding-top: 52.5px;
        >h4{
            text-align: left;
            font-size: 31.5px;
            height: 38px;
            line-height: 38px;
            font-weight: 500;
            padding:  0 0 0 17.5px;
            position: relative;
            margin: 0 26.25px 26.25px;
            &:after{
                 content:"";
                 position: absolute;
                 top: 50%;
                 left: 0;
                 width: 5.25px;
                 height: 31.5px;
                 background: url(//m.jr.jd.com/vip/borrowMoney/css/i/title.png) 0 0 no-repeat;
                 background-size: 100% 100%;
                 margin-top: -15.75px;
                 border-radius: 8.75px;
            }
        }
        .content{
            height: 264px;
            padding-bottom: 35px;
            .whitecard{
                float:left;
                a{
                    display: block;
                }
                img{
                    width: 393.25px;
                    height: 264px;
                    margin-left: 13px;
                }
            }
            .whiteright{
                position: relative;
                float: left;
                width: 216px;
                height: 264px;
                font-size: 24px;
                color: #fff;
                img{
                    width: 216px;
                    height: 264px;
                }
                .title{
                    position: absolute;
                    top: 36%;
                    right: 18%;
                    width: 120px;
                    height: 26px;
                    line-height: 26px;
                }
                .btn{
                    position: absolute;
                    bottom: 24%;
                    right: 27%;
                    height: 26px;
                    line-height: 26px;
                    color: #ae8339;
                }
            }

        }
    }
</style>