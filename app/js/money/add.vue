<template lang="html">
    <Panel title="光大银行" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t19756/137/1902911799/17823/e19ffe7b/5add9511Nf6984e89.jpg?width=750&height=200" alt="">
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
        height: 170.66px;
        padding-bottom: 40px;
    img{
        width: 100%;
        height: 170.66px;
    }
    }
    }
</style>