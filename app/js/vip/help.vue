<template lang="html">
    <Panel title="帮助中心" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{name: 'vip'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70" alt="">
                <p :class="$style.info">帮助中心</p>
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
    margin-bottom: 120px;
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