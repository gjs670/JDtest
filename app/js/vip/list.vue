<template lang="html">
    <Panel title="个人信息" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70" alt="">
                    <p :class="$style.info">我的资产</p>
                    <p :class="$style.benifit">查看全部资产</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
                    <p :class="$style.info">我的优惠券</p>
                    <p :class="$style.benifit">查看全部</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90" alt="">
                    <p :class="$style.info">我的金币</p>
                    <p :class="$style.benifit">赚金币兑好物</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90" alt="">
                    <p :class="$style.info">我的金条</p>
                    <p :class="$style.benifit">查看额度</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70" alt="">
                    <p :class="$style.info">我的借钱</p>
                    <p :class="$style.benifit">查看全部产品</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70" alt="">
                    <p :class="$style.info">我的白条</p>
                    <p :class="$style.benifit">去提额</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70" alt="">
                    <p :class="$style.info">我的众筹</p>
                    <p :class="$style.benifit">查订单/物流</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70" alt="">
                    <p :class="$style.info">我的保障</p>
                    <p :class="$style.benifit">全方位保障</p>
                </router-link>
            </li>
        </ul>
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
    .panel{
        @include panel;
        >h4{
            display: none;
        }
        .content{
            li{
                position: relative;
                width: 100%;
                height: 112px;
                &:after{
                    content: '';
                    position: absolute;
                    bottom:1px;
                    left:0;
                    width: 100%;
                    height: 2px;
                    background-color: #eee;
                }
                &:last-child:after{
                     display: none;
                 }
                a{
                    display: block;
                    color: #333;
                    text-decoration: none;
                }
                img{
                    float: left;
                    width: 48px;
                    height: 48px;
                    margin: 32px 32px 0;
                }
                .info{
                    float: left;
                    margin-top: 12px;
                    width: 160px;
                    height: 88px;
                    line-height: 88px;
                    font-size: 32px;
                }
                .benifit{
                    float: right;
                    width: 168px;
                    height: 88px;
                    line-height: 88px;
                    padding: 0 36px 0 20px;
                    margin: 12px 32px 0 0;
                    font-size: 28px;
                    color:#999;
                    background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
                    background-size: 9px 15px;
                    text-align: right;
                }
            }
        }
    }
</style>