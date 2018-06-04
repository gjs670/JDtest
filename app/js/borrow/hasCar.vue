<template lang="html">
    <Panel title="有钱有车" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.imgBox">
                <router-link :to="{name:'home'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t18319/288/2020359902/20747/e4c1e6d4/5ae28f3bN8d2fabad.png?width=375&height=233" alt="">
                </router-link>
                <router-link :to="{name:'money'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
                </router-link>
            </div>
            <Slider :cname="$style.slider" :items="enters" :options="options"/>
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
        enters:[{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90',
          info:'旅游',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
          info:'医美',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
          info:'房抵货',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
          info:'驾校',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
          info:'分期用',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90',
          info:'教育',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90',
          info:'车险',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88',
          info:'家装',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t15922/204/1330308267/4745/e0cae4a0/5a4f2836Nd00354cb.png?width=90&height=90',
          info:'租房',
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t15481/327/1321322864/951/3d12781/5a4f275eN31cb9abf.png?width=176&height=177',
          info:'',
        },],
        options: {
          slidesPerView: 5,
          spaceBetween: 0,
          slidesPerGroup: 5,
        }
        }
      }
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
            .imgBox{
                @include flex(row);
                justify-content: space-between;
                width: 640px;
                height: 200px;
                margin-bottom:52.5px;
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
            .slider{
                height: 140px;
                text-align: center;
                a{
                    display: block;
                    color: #333;
                    text-decoration: none;
                }
                img{
                    width: 77px;
                    height: 77px;
                    margin-bottom: 17.5px;
                }
                p{
                    width: 77px;
                    height: 24px;
                    padding: 0 25.5px;
                    line-height: 24px;
                    font-size: 24px;
                }
            }
        }
    }
</style>