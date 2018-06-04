<template lang="html">
    <Panel title="-理财精选-" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <router-link :to="{name: item.href}">
                    <dt>
                        {{ item.title }}
                        <span v-show="item.flag">{{ item.sub }}</span>
                    </dt>
                    <dd>{{ item.rate }}</dd>
                    <dd>{{ item.text }}</dd>
                </router-link>
            </dl>
        </section>
    </Panel>
</template>
<script>
    import Panel from "../core/panel.vue"
    export default  {
      components:{
        Panel,
      },
      data(){
        return {
            items:[{
              href:"home",
              title: "京渤随享盈",
              rate: "5.50%",
              text: "历史年化收益率",
              sub: "",
              flag: false,
            },{
              href:"home",
              title: "年年盈",
              rate: "5.10%",
              text: "综合年化收益率",
              sub: "理财推荐",
              flag: true,
            },{
              href:"home",
              title: "京智2号",
              rate: "15.60%",
              text: "历史年化收益",
              sub: "火爆发售",
              flag: true,
            },{
              href:"home",
              title: "小白基金",
              rate: "4.50%",
              text: "7日年化收益率",
              sub: "超短期",
              flag: true,
            },],
        }
      },
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include list(row);
            justify-content:space-around;
            box-sizing: border-box;
            &:after{
                content:" ";
                display: block;
                width: 100%;
                height: 0;
                box-sizing: border-box;
                border-bottom: 1px solid #ddd;
                position: relative;
                top: -218px;
             }
            a{
                text-decoration: none;
                display: block;
            }
                .item{
                position: relative;
                width: 50%;
                padding:15.5px 0px 15.5px 32px;
                box-sizing: border-box;
                &:after{
                    content:"";
                    width:1px;
                    height: 136px;
                    position: absolute;
                    top: 50%;
                    right:0;
                    margin-top: -52.5px;
                    border-right: 1px solid #eee;
                }
                &:nth-child(2n){
                    &:after{
                        display:none;
                     }
                }
                dt{
                    font-size: 30px;
                    font-weight: 700;
                    line-height: 42px;
                    color:#333;
                    margin-top: 34px;
                    margin-bottom: 16px;
                    span{
                        font-size: 22px;
                        color:#ff5155;
                        border: 1px solid #ff5155;
                        padding:0 8px;
                        vertical-align: 1px;
                        margin-left: 2px;
                    }
                }
                dd{
                    &:nth-child(2){
                         font-weight: 700;
                         font-size: 44px;
                         height: 58px;
                         line-height: 58px;
                         color: #FF5155;
                         white-space: nowrap;
                         text-overflow: ellipsis;
                         overflow: hidden;
                    }
                    &:nth-child(3){
                          font-size: 24px;
                          height: 34px;
                          line-height: 34px;
                          color: #999;
                          white-space: nowrap;
                          text-overflow: ellipsis;
                          overflow: hidden;
                    }
                }
            }
        }
    }
</style>