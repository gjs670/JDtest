<template lang="html">
    <Panel title="-有车有钱-" :class="$style.panel">
        <article :class="$style.content">
            <div :class="$style.pic" v-for="item in items" :key="item.src">
                <router-link :to="{name: item.href}">
                    <img :src="item.src">
                </router-link>
            </div>
            <section :class="$style.list">
                <div class="item" v-for="item in enters" :key="item.img">
                    <router-link :to="{name: item.href}">
                        <img :src="item.img" :alt="item.title">
                        <h4>{{item.title}}</h4>
                    </router-link>
                </div>
            </section>
        </article>
    </Panel>
</template>
<script>
    import Panel from "../core/panel.vue"
    export default{
      components:{
        Panel,
      },
      data(){
        return {
          items:[{
            href:"home",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t18319/288/2020359902/20747/e4c1e6d4/5ae28f3bN8d2fabad.png?width=375&height=233"
          },{
            href:"home",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233"
          },],
          enters:[{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90',
            title:'旅游',
          },{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
            title:'医美',
          },{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
            title:'房抵货',
          },{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
            title:'驾校',
          },{
            href:'home',
            img:'//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
            title:'分期用',
          },]
        }
      }
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            width: 100%;
            .pic{
                display: inline-block;
                padding-bottom: 40px;
                width: 50%;
                height: 198.82px;
                a{
                    display: block;
                    width:100%;
                    height:100%;
                    img{
                        width: 320px;
                        height: 198.82px;
                        vertical-align: top;
                    }
                }

            }
            .list{
                @include list(row);
                width: 100%;
                height: 142px;
                padding-bottom: 20px;
                padding-top: 40px;
                text-align: center;
                justify-content: space-around;
                a{
                    text-decoration: none;
                    display: block;
                }
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
    }
</style>