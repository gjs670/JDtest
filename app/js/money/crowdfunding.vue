<template lang="html">
    <Panel title="京东众筹" :class="$style.panel">
        <div :class="$style.subtitle">
            <router-link :to="{name: 'home'}">
                好生活 享品质 <span>></span>
            </router-link>
        </div>
        <section :class="$style.content">
            <div :class="$style.left">
                <p :class="$style.title">0.01元</p>
                <p :class="$style.subtitle">抢好物</p>
                <router-link :to="{name: 'home'}">
                    <Btn :cname="$style.btn">立即抢购</Btn>
                </router-link>
                <span :class="$style.label">今日推荐</span>
            </div>
            <div :class="$style.right">
                <div :class="$style.item" v-for="item in items">
                    <router-link :to="{name:item.href}">
                        <img :src="item.src" :alt="item.title">
                        <p>{{item.title}}</p>
                    </router-link>
                </div>
            </div>
        </section>
    </Panel>
</template>
<script>
  import Panel from "../core/panel.vue"
  import Btn from "../core/btn.vue"
  export default{
    components:{
      Panel,
      Btn,
    },
    data(){
      return{
        items:[{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9739/355/2223965438/3092/b3cc4062/59f2fef3Nc2363e64.png?width=56&height=56",
          title:"京东出众",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t10882/187/2325566882/2968/e64c911c/59f2ff2cNd85eb522.png?width=56&height=56",
          title:"手机优惠",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t11674/229/560588342/2307/d88f9fd7/59f2ff5eNcac8d195.png?width=56&height=56",
          title:"领神券",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t10018/213/2260133396/2902/107476f0/59f2ff70N35c5d0bb.png?width=56&height=56",
          title:"智能首发",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t7552/255/3352153359/2695/fc610922/59f2ff88N95232a40.png?width=56&height=56",
          title:"舌尖美味",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9523/348/2258037555/2792/9e8e1a80/59f2ff9fNf9648450.png?width=56&height=56",
          title:"轻时尚",
        },]
      }
    }
  }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
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
            padding: 0 30px 16px 30px;
            height: 260px;
            text-align:center;
            .left{
                position: relative;
                float: left;
                width: 188px;
                height: 100%;
                padding: 0 12px;
                box-shadow: 0 0 14px 7px rgba(101,118,155,.15);
                .title{
                    width: 100%;
                    height: 62px;
                    line-height: 62px;
                    margin: 62px 0 4px 0;
                    font-size: 50px;
                    color: #1bd5c7;
                }
                .subtitle{
                    width: 100%;
                    height: 34px;
                    line-height: 34px;
                    margin-bottom: 24px;
                    font-size: 24px;
                    color: #000;
                }
                .btn{
                    @include btn;
                    width: 140px;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 12px;
                    font-size: 24px;
                    background-color: #1bd5c7;
                    border-radius: 36px;
                }
                .label{
                    position: absolute;
                    top: 0;
                    left:0;
                    background-color: #000;
                    width: 96px;
                    height: 32px;
                    line-height: 32px;
                    padding: 0 12px;
                    font-size: 24px;
                    font-family: PingFangSC-Semibold;
                    color: #fff;
                }
            }
            .right{
                @include flex(row);
                float: right;
                width: 354px;
                height: 100%;
                box-shadow: 0 0 14px 7px rgba(101,118,155,.15);
                justify-content: space-around;
                box-sizing: border-box;
                .item{
                    a{
                      color:#333;
                    }
                    img{
                        width: 56px;
                        height: 56px;
                        margin: 20px 31px 2px 31px;
                        vertical-align: top;
                    }
                    p{
                        font-size: 24px;
                        width: 90px;
                        height: 26px;
                        line-height: 26px;
                        padding: 0 12px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>
