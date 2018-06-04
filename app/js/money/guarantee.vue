<template lang="html">
    <Panel title="保险保障" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.left">
                <p :class="$style.title">100万</p>
                <p :class="$style.subtitle">账户安全险</p>
                <router-link :to="{name: 'home'}">
                    <Btn :cname="$style.btn">免费领取</Btn>
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
          src:"//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56",
          title:"车险",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56",
          title:"人寿",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56",
          title:"意外",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56",
          title:"财产",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56",
          title:"健康",
        },{
          href:"money",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56",
          title:"旅行",
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
            margin-bottom: 0;
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