<template lang="html">
    <Panel title="实名认证" :class="$style.panel">
        <section :class="$style.content">
                <router-link :to="{name: 'vip'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70" alt="">
                    <p :class="$style.info">实名认证</p>
                    <p :class="$style.benifit"></p>
                </router-link>
        </section>
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
            width: 100%;
            height: 112px;
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
                width: 128px;
                height: 88px;
                line-height: 88px;
                font-size: 32px;
            }
            .benifit{
                float: right;
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
</style>