<template lang="html">
    <Panel title="白条" :class="$style.panel">
        <div :class="$style.subtitle">
            <router-link :to="{name: 'home'}">
                年轻不留白 <span>></span>
            </router-link>
        </div>
        <section :class="$style.content">
            <div :class="$style.left">
                <p :class="$style.title">小白信用分</p>
                <router-link :to="{name: 'home'}">
                    <Btn :cname="$style.btn">查看登录</Btn>
                </router-link>
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
          src:"//img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56",
          title:"白条",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56",
          title:"还款",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56",
          title:"1元抢券",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56",
          title:"小白卡",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56",
          title:"金条",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56",
          title:"校园",
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
                    height: 34px;
                    line-height: 34px;
                    margin: 72px auto 0;
                    font-size: 24px;
                    color: #c4a36c;
                }
                .btn{
                @include btn;
                    position: absolute;
                    width: 140px;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 12px;
                    font-size: 24px;
                    background-color: #c4a36c;
                    border-radius: 36px;
                    top:180px;
                    left: 23px;
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