<template lang="html">
    <div :class="$style.header">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="personal">
        <div :class="$style.right">
            <span>会员福利</span>
            <img src="//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="enter">
        </div>
    </div>
</template>
<script>
 
</script>
<style lang="scss" module>
    .header{
        position: relative;
        color: #666;
        width: 100%;
        height:140px;
        background-color: #fff;
        >img{
            width: 100px;
            height: 100px;
            margin: 20px 32px 0;
        }
        .right{
            position: absolute;
            top: 50%;
            margin-top: -30px;
            right:32px;
            width: 146px;
            height: 60px;
            line-height: 60px;
            font-size: 0;
            color:#999;
            >span{
                display: inline-block;
                width: 112px;
                height: 32px;
                line-height: 32px;
                font-size: 28px;
                vertical-align: middle;
            }
            >img{
                display: inline-block;
                width: 14px;
                height: 24px;
                margin-left: 20px;
                vertical-align: middle;
            }
        }
    }

</style>