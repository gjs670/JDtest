<template lang="html">
    <Panel title="火线提额" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t22291/49/358705815/38785/cd0acd7b/5b0b6547N6290770c.png?width=750&height=248" alt="">
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
        &>h4{
             display: none;
        }
        .content{
            width: 100%;
            height: 211.626px;
            padding-bottom: 40px;
            img{
                width: 100%;
                height: 211.626px;
            }
        }
    }
</style>