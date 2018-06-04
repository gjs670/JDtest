<template lang="html">
    <Panel title="精品活动" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.imgBox">
                <router-link :to="{name:'home'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t20620/150/260030723/15028/e868cb0d/5b079963N65616e9a.png?width=376&height=264" alt="">
                </router-link>
                <router-link :to="{name:'money'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t18901/214/2385188321/64672/bf6f1441/5af16613N5423430b.png?width=376&height=264" alt="">
                </router-link>
            </div>
            <div :class="$style.imgwrap">
                <router-link :to="{name:'money'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t16675/365/91110617/54621/c0042c09/5a5c87faNd161d42e.png?width=730&height=264" alt="">
                </router-link>
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
    margin-bottom: 120px;
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
            padding-bottom: 40px;
            .imgBox{
            @include flex(row);
                justify-content: space-between;
                width: 640px;
                height: 200px;
                a{
                    display: inline-block;
                    width: 50%;
                    height: 200px;
                    img{
                        width: 320px;
                        height: 200px;
                        vertical-align: top;
                    }
                }
            }
            .imgwrap{
                width: 100%;
                height: 230px;
                a{
                    display: block;
                    img{
                        width: 640px;
                        height: 230px;
                        vertical-align: top;
                    }
                }
            }
        }
    }
</style>