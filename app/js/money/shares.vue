<template lang="html">
    <Panel title="股票" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img :class="$style.bg" src="//img12.360buyimg.com/jrpmobile/jfs/t8767/137/977390432/7475/e5acd251/59ba3a31Ncbd06cac.jpg?width=335&height=200">
                <img :class="$style.headerImg" src="//img30.360buyimg.com/jr_image/jfs/t5848/216/253631918/136369/1894b4a7/591e5567Ncfb35e99.jpg" alt="累计收益排行榜">
                <p :class="$style.benifit">368.83<span :class="$style.per">%</span></p>
                <p :class="$style.title">累计收益排行榜</p>
                <p :class="$style.desc">
                    <span :class="$style.label">牛人</span>
                    <span :class="$style.name">zangyn</span>
                </p>
                <p :class="$style.btn">
                    <img src="https://m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png" alt="">
                </p>
            </div>
            <div :class="$style.item">
                <img :class="$style.bg" src="//img12.360buyimg.com/jrpmobile/jfs/t15661/192/2386880166/5534/2d3f9dfd/5aa7310bN2f099f7a.jpg?width=335&height=200">
                <p :class="$style.benifit">竞猜大盘涨跌</p>
                <p :class="$style.title">赢500钢镚</p>
                <p :class="$style.desc">
                    <span :class="$style.name">立即前往</span>
                </p>
                <p :class="$style.btn">
                    <img src="https://m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png" alt="">
                </p>
            </div>
        </section>
    </Panel>
</template>
<script>
  import Panel from "../core/panel.vue"
  export default{
    components:{
      Panel,
    },
  }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        background-color: #fff;
        &>h4 {
            font-size: 36px;
            width: 256px;
            height: 120px;
            line-height: 120px;
            text-align: left;
            padding: 0 30px;
        }
        .content{
            height:200px;
            margin-bottom: 16px;
            padding:0 30px;
            color: #fff;
            .item{
                position: relative;
                float: left;
                width: 282px;
                height: 100%;
                padding-left: 8px;
                .bg{
                    width: 100%;
                    height: 100%;
                }
                .headerImg{
                    position: absolute;
                    top: 30px;
                    left: 20px;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
                .benifit{
                    position: absolute;
                    top: 26px;
                    left:130px;
                    width: 122px;
                    height: 52px;
                    line-height: 52px;
                    font-size: 36px;
                    font-family: DIN-Bold;

                    .per{
                        font-size: 24px;
                        line-height: 24px;
                        font-family: LucidaGrande;
                    }
                }
                .title{
                    position: absolute;
                    left:130px;
                    top: 78px;
                    width: 160px;
                    height: 34px;
                    line-height: 34px;
                    font-size: 24px;
                    font-family: PingFangSC-Semibold;
                }
                .desc{
                    position: absolute;
                    top: 140px;
                    left: 68px;
                    width: 138px;
                    height: 30px;
                    font-size: 24px;
                    font-family: PingFangSC-Semibold;
                    .label{
                        float:left;
                        width: 60px;
                        height: 30px;
                        line-height: 30px;
                        margin-right: 6px;
                        text-align: center;
                        background-image: linear-gradient(-90deg,#fd5737,#ec3038);
                        border-radius: 2px;
                        vertical-align: bottom;
                    }
                    .name{
                        float:right;
                        /*width: 72px;*/
                        /*height: 30px;*/
                        line-height: 27.6px;
                        font-size: 20px;
                        vertical-align: bottom;
                    }
                }
                .btn{
                    position: absolute;
                    right:20px;
                    bottom:20px;
                    width: 50px;
                    height: 50px;
                }
            }
            .item:nth-child(2){
                .benifit{
                    left: 38px;
                    width: 216px;
                }
                .title{
                    left: 38px;
                    width: auto;
                }
                .name{
                    font-size: 24px;
                }
            }
        }
    }
</style>