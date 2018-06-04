<template lang="html">
    <Panel title="新用户惊喜" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t19486/212/2027578940/37343/4dbdfbda/5ae2f28bNcb2272c5.png?width=750&height=120" alt="">
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
            position:fixed;
            left: 0;
            top: 80px;
            z-index: 100;
            background-color: transparent;
            &>h4{
                 display: none;
             }
            .content{
                background-color: transparent;
                text-align:center;
                img{
                    width: 640px;
                    height: 104px;
                    vertical-align: top;
                }
            }
    }
</style>