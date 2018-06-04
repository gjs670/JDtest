<template lang="html">
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slider :items="items" :cname="$style.slider"></Slider>
        </section>
        <nav :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </nav>
        <div :class="$style.mrecommend">
            <div :class="$style.left">
                <p>11.7<span>%</span></p>
                <p>历史年化投资回报率</p>
                <p>签到领红包</p>
            </div>
            <div :class="$style.right">
                <Slider :options="options" :items="goods" cname="sliderUp"></Slider>
            </div>
            <div :class="$style.fixed">
                <span>为你推荐</span>
                <img src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/weinituijianxiayibu.png">
            </div>
        </div>
    </Panel>
</template>
<script>
    import Panel from "../core/panel.vue"
    import Slider from "../core/slider.vue"
    export default{
      components:{
        Panel,
        Slider,
      },
      data(){
        return {
          items:[{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t22297/80/283596775/51077/8c003361/5b080d52N14333862.jpg?width=750&height=400"
          },{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t21433/218/283807853/45843/170c9925/5b0808e2N59aee9ec.jpg?width=750&height=400"
          },{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t22348/277/278055025/41362/97d2c608/5b0808f6N25f713ae.jpg?width=750&height=400"
          },{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t21904/164/286908241/38611/281d904f/5b08090eN91b5cd99.jpg?width=750&height=400"
          },],
          enters:[{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t22318/99/279243685/12708/b1e98c82/5b079479Nc3aea2dd.png?width=90&height=90',
            title:'领红包',
          },{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t21250/333/257920646/13618/d61f2e32/5b079489Nc22bdecd.png?width=90&height=90',
            title:'领福利',
          },{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t21967/161/261734533/13559/9a977165/5b079494Na8af3ac5.png?width=90&height=90',
            title:'领券',
          },{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t21733/194/259135291/14001/c96467e4/5b07949eNdb787303.png?width=90&height=90',
            title:'支付抽奖',
          },{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t20530/315/258030039/13697/27444d09/5b0794a6N0f299bee.png?width=90&height=90',
            title:'全部',
          },],
          goods:[{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t20722/67/251648719/7833/ad5b61e6/5b06c605N0c399ef0.jpg?width=160&height=160",
            info:"咕咚智能跑鞋限时立省320元",
          },{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t18745/69/2678928044/3539/d31d6d55/5b06c621Nde822a76.jpg?width=160&height=160",
            info:"智能睡眠机器人众筹价立省500元",
          },{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t16945/128/2663814248/11446/a6569a02/5b06c634Na91714a1.jpg?width=160&height=160",
            info:"宝丽来超短焦巨屏电视4折秒杀",
          },{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t18523/68/2664200309/6294/3a2e95a6/5b06c644Na1bff280.jpg?width=160&height=160",
            info:"咕咚智能健步鞋3.7折限时秒车载智能手机支架1元抽奖",
          },{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t22321/48/244953432/9035/d805b6e4/5b06c653N21873ed9.jpg?width=160&height=160",
            info:"智能颈椎按摩仪直降200元",
          },{
            href:"money",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t18832/140/2659708740/6054/c2e483b5/5b06c663Nbffe28bf.jpg?width=160&height=160",
            info:"多功能灭蚊灯赠驱蚊手环",
          },],
          options: {
            direction: 'vertical',
            autoplay: true,
            loop: true,
          },
        }
      },
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        padding-top: 100px;
        &>h4{
            display: none;
        }
        .content{
            width: 100%;
            height:340px;
            .slider{
                img{
                    width: 640px;
                    height:340px;
                }
            }
        }
        .list{
            @include list(row);
            background: #fff;
            padding-top: 34px;
            justify-content: space-around;
            a{
                text-decoration: none;
                display: block;
            }
            .item{
                text-align: center;
                img{
                    display: inline-block;
                    width: 90px;
                    height: 90px;
                }
                h4{
                    width: 128px;
                    height: 26px;
                    font-size: 24px;
                    margin-top: 18px;
                    margin-bottom: 48px;
                    color: #666;
                }
            }
        }
        .mrecommend{
            position: relative;
            padding: 0 30px 56px;
            height: 200px;
            .left{
               float: left;
               width: 140px;
               height: 200px;
               padding:0 38px 0 24px;
               background-color: #ff7013;
               p{
                   color:#fff;
                   text-overflow: ellipsis;
                   overflow: hidden;
                   white-space: nowrap;
               }
               p:nth-child(1){
                   font-size: 50px;
                   height: 70px;
                   line-height: 57.5px;
                   margin-top: 24px;
                   span{
                       line-height: 0.75px;
                       font-size: 24px;
                   }
               }
               p:nth-child(2){
                   font-size: 24px;
                   height: 28px;
                   line-height: 28px;
                   margin-bottom: 12px;
                   padding-bottom: 12px;
               }
                p:nth-child(3){
                    font-size: 24px;
                    height: 34px;
                    line-height: 34px;
                    margin-bottom: 12px;
                    padding-bottom: 12px;
                }
            }
            .right{
                float: right;
                background-color: #4769f6;
                width: 364px;
                height: 200px;
                a{
                    display: block;
                    text-decoration: none;
                    width: 100%;
                    height: 200px;
                    >img{
                        width: 160px;
                        height: 160px;
                        padding: 20px;
                        vertical-align: top;
                    }
                    >p{
                        position: absolute;
                        top: 24px;
                        right: 0;
                        width: 159.968px;
                        height: 56px;
                        font-size: 24px;
                        line-height: 28.8px;
                        vertical-align: top;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        color: #fff;
                    }
                }
            }
            .fixed{
                position: absolute;
                bottom: 56px;
                right: 30px;
                width: 205px;
                height:114px;
                span{
                    position: absolute;
                    width: 96px;
                    height: 34px;
                    font-size: 24px;
                    color: #fff;
                    padding-left: 30px;
                    margin-top: 56px;
                    z-index: 2;
                }
                img{
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
    }
</style>
<style lang="scss">
        .sliderUp{
            .swiper-container{
                height: 200px;
                .swiper-slide{
                    position: relative;
                    height: 1200px;
                    width: 362px;
                }
            }
        }
</style>