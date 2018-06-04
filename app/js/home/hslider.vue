<template lang="html">
    <article>
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import Slider from '../core/slider.vue'
    export default {
      components: {
        Slider,
      },
      data() {
        return {
          items:[{
            href:'home',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t21373/274/313223934/36338/14ddc2ea/5b07fdd0Ne5dd407f.jpg?width=750&height=320',
          },{
              href:'home',
              src:'//img12.360buyimg.com/jrpmobile/jfs/t20230/362/280260297/33558/9ade24ef/5b07fe15Nc753456b.jpg?width=750&height=320',
          },{
            href:'home',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t22219/134/298875297/48275/63f903fe/5b07fe3bNbe37f244.jpg?width=750&height=320',
          },{
            href:'home',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t20305/116/273290562/49600/f6486521/5b07febaN2cc4e8b8.jpg?width=750&height=320',
          },],
          enters:[{
            href:'download',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            title:'优惠券',
          },{
            href:'money',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
            title:'领红包',
          },{
            href:'borrow',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
            title:'抢钢镚',
          },{
            href:'raise',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
            title:'白条提额',
          }],
        }
      },
    }
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .slider{
        margin-top: 120px;
        a{
            text-decoration: none;
            display: block;
        }   
        img{
            width: 100%;
        }
    }
    .list{
        @include list(row);
        background: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;
        a{
            text-decoration: none;
            display: block;
            width: 100%;
            height: 100%;
        }
        .item{
            text-align: center;
            img{
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4{
                font-size: 24px;
                margin-top: 12px;
                color: #666;
            }
        }
    }
</style>