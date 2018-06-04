<template lang="html">
    <Panel title="小金库" :class="$style.panel">
        <div :class="$style.subtitle">
            <router-link :to="{name: 'home'}">
                更多理财产品 <span>></span>
            </router-link>
        </div>
        <section :class="$style.content">
            <div :class="$style.vault">
                <p :class="$style.benifit">4.3040<span>%</span></p>
                <p :class="$style.title">七日年化收益</p>
                <p :class="$style.desc">支付/缴费/优质理财/大额理财</p>
                <div :class="$style.btn">开启送礼包</div>
            </div>
            <div :class="$style.product">
                <div :class="$style.htitle">稳健灵活 定期理财</div>
                <Slider :items="items" cname="vaultslider"></Slider>
            </div>
        </section>
    </Panel>
</template>
<script>
    import Panel from "../core/panel.vue"
    import Slider from "./newslider.vue"
    export default{
      components:{
        Panel,
        Slider,
      },
      data(){
        return{
          items:[{
            href:"money",
            title:"年年盈",
            label:"金融专享",
            subtitle:"5.80",
            desc:"近七日年化收益率",
          },{
            href:"money",
            title:"周期盈",
            label:"理财优选",
            subtitle:"5.04",
            desc:"近七日年化收益率",
          },{
            href:"money",
            title:"双年盈",
            label:"2年可赎回",
            subtitle:"6.00",
            desc:"历史年化投资回报率",
          },{
            href:"money",
            title:"随享盈",
            label:"质押贷款",
            subtitle:"5.50",
            desc:"历史年化结算利率",
          },],
        }
      }
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        position: relative;
        background-color: #fff;
        &>h4{
            font-size: 36px;
            width: 256px;
            height: 120px;
            line-height: 120px;
            text-align: left;
            padding: 0 30px;
        }
        >.subtitle{
            position: absolute;
            top: 0;
            right:0;
            height: 120px;
            line-height: 120px;
            padding: 0 24px;
            margin-right: 30px;
            a{
                text-decoration: none;
                font-size: 24px;
                color: #999;
                display:block;
                span{
                    position: absolute;
                    top:-3px;
                    right:0;
                    height: 110px;
                }
            }
        }
        .content{
            .vault{
                position: relative;
                margin: 0 auto;
                padding-left: 28px;
                width: 552px;
                height: 200px;
                color: #fff;
                background: url("//m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png");
                >.benifit{
                    width: 280px;
                    height: 72px;
                    line-height: 72px;
                    font-size: 60px;
                    padding-top: 24px;
                    span{
                        font-size: 24px;
                        line-height: 2.25px;
                    }
                }
                >.title{
                    margin: 8px 0 4px 0;
                    height: 34px;
                    line-height: 34px;
                    font-size: 24px;
                }
                >.desc{
                    height: 34px;
                    line-height: 34px;
                    font-size: 24px;
                }
                >.btn{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 332px;
                    height: 200px;
                    line-height: 200px;
                    font-size: 24px;
                    text-align: center;
                    background: url("//m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png");
                }
            }
            .product{
                padding-bottom: 40px;
                >.htitle{
                    width: 580px;
                    height: 100px;
                    line-height: 100px;
                    padding: 0 30px;
                    font-size: 32px;
                }
            }

        }
    }
</style>
