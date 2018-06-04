<template lang="html">
    <Panel title="热销保险" :class="$style.panel">
        <section :class="$style.content">
            <Silder :options="options" :items="items" cname="insurance-slider"/>
        </section>
    </Panel>
</template>

<script>
  import Panel from "../core/panel.vue"
  import Silder from "../core/slider.vue"
  export default{
    components:{
      Panel,
      Silder,
    },
    data() {
      return {
        items:[{
          href:"home",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260",
        },{
          href:"home",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260",
        },{
          href:"home",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260",
        },{
          href:"home",
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260",
        },],
        options:{
          slidesPerView: 2.7,
          spaceBetween: 16,
          freeMode: true,
        },

      }
    }
  }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        margin-top: 0;
        &>h4{
             width: 580px;
             height: 100px;
             line-height: 100px;
             padding: 0 30px;
             text-align: left;
             font-size: 32px;
             font-weight: normal;
        }
        .content{
            padding-bottom: 40px;
        }
    }
</style>
<style lang="scss">
    .insurance-slider{
        .swiper-container{
            box-sizing: border-box;
            padding: 0 30px;
                .swiper-slide{
                    width: 210px;
                    height: 260px;
                    border-radius: 4px;
                    a{
                        display: inline-block;
                        width: 100%;
                        img{
                            width: 100%;
                            height: 260px;
                            display: block;
                            border:1px solid #fafafa
                        }
                    }
            }
        }
    }
</style>