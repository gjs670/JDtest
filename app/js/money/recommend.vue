<template lang="html">
    <Panel title="特色推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items">
                <img :src="item.src" :alt="item.title">
                <p :class="$style.title">{{item.title}}</p>
                <p :class="$style.price">
                    <span :class="$style.per">￥</span>{{item.price}}<span :class="$style.up">起</span>
                </p>
                <div :class="$style.progressWrap">
                    <div :class="$style.progress">
                        <div :class="$style.progressInner"></div>
                    </div>
                    <div :class="$style.percent">{{item.percent}}</div>
                </div>
            </div>
            <div :class="$style.text">-   京东金融出品  -</div>
        </section>
    </Panel>
</template>
<script>
    import Panel from "../core/panel.vue"
    export default{
      components:{
        Panel,
      },
      data(){
        return{
          items:[{
            src:"//img30.360buyimg.com/cf/jfs/t21715/307/161930913/37017/45207d9/5affd1a6N4277aaa3.jpg",
            title:"骑骋V米轻量级折叠智能电动车",
            price:"1.00",
            percent:"386%",
          },{
            src:"//img30.360buyimg.com/cf/jfs/t18376/175/2554556538/11164/66de5e11/5afbcd11Nf52992a6.jpg",
            title:"咕咚智能跑鞋10K",
            price:"179.00",
            percent:"720%",
          },{
            src:"//img30.360buyimg.com/cf/jfs/t17143/85/2578960278/14159/78321af5/5affa11aNf3847350.jpg",
            title:"热血V8微型电单车",
            price:"1.00",
            percent:"357%",
          },{
            src:"//img30.360buyimg.com/cf/jfs/t21550/155/347945173/53440/53c2ee50/5b0b7ea5Nbbf051ff.jpg",
            title:"海神 全伴侣科学教育版",
            price:"189.00",
            percent:"102%",
          },{
            src:"//img30.360buyimg.com/cf/jfs/t21664/66/104332621/63461/8034512c/5afc2ac8Nd601ea98.png",
            title:"新境界 更多彩·骏派CX65",
            price:"1.00",
            percent:"243%",
          },{
            src:"//img30.360buyimg.com/cf/jfs/t21226/276/389169737/65406/752a3c16/5b0bb9b7N25a30e47.jpg",
            title:"手机膜法传奇-1擦秒变新机",
            price:"49.00",
            percent:"183%",
          },{
            src:"//img30.360buyimg.com/cf/jfs/t19498/20/2017170636/8628/b1f0c563/5ae2ed00Na1fa7270.jpg",
            title:"夏日速干冰爽运动短裤",
            price:"19.00",
            percent:"599%",
          },{
            src:"//img30.360buyimg.com/cf/jfs/t17875/187/2573579777/13805/37b19c20/5afe43d4Nbb882309.jpg",
            title:"超轻薄夏日凉感运动裤",
            price:"19.00",
            percent:"341%",
          },],
        }
      },
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        >h4{
            text-align: left;
        }
        .content{
            @include list(row);
            justify-content: space-between;
            box-sizing: border-box;
            .item{
                position: relative;
                width: 316px;
                padding-right: 4px;
                margin-bottom: 8px;
                &:nth-child(2n-1):after{
                    position: absolute;
                    right: -4px;
                    top: 0;
                    content: '';
                    width: 8px;
                    height: 100%;
                    background-color: #f3f5f7;
                }
                &:before{
                     position: absolute;
                     left: 0;
                     bottom: -8px;

                     content: '';
                     width: 100%;
                     height: 8px;
                     background-color: #f3f5f7;
                }
                img{
                    width: 228px;
                    padding: 0 44px;
                    margin: 44px 0 20px 0;
                }
                .title{
                    width: 286px;
                    height: 42px;
                    line-height: 27px;
                    padding-left: 30px;
                    margin: 22px 0;
                    font-size: 30px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .price{
                    width: 286px;
                    height: 34px;
                    line-height: 34px;
                    padding-left: 30px;
                    padding-bottom: 14px;
                    font-family: DIN-Bold;
                    color: #ff9a1c;
                    font-size: 32px;
                    .per{
                        font-size: 24px;
                        color:#f92;
                    }
                    .up{
                        font-family: STHeitiSC-Medium;
                        font-size: 24px;
                        color: #999;
                        margin-left: 10px;
                    }
                }
                .progressWrap{
                    width: 256px;
                    height: 30px;
                    padding: 0 30px;
                    margin-bottom: 26px;
                    .progress{
                        width: 70%;
                        height: 10px;
                        margin-top: 10px;
                        background: #f3f5f7;
                        border-radius: 20px;
                        float: left;
                    }
                    .progressInner{
                        font-weight: 700;
                        width: 100%;
                        height: 10px;
                        background-image: linear-gradient(270deg,#f55 1%,#ff9c31);
                        border-radius: 20px;
                    }
                    .percent{
                        font-size: 24px;
                        color:#999;
                        letter-spacing: -2.28px;
                        height: 24px;
                        line-height: .75rem;
                        text-align: center;
                        float: left;
                        margin-left: 6px;
                    }
                }
            }
        }
        .text{
            font-family: STHeitiSC-Medium;
            font-size: 24px;
            color: #b1b4bb;
            margin-bottom: 100px;
            padding: 0 16px 100px;
            width: 100%;
            height: 100px;
            line-height: 100px;
            text-align: center;
            background: #f3f5f7;
        }
    }
</style>