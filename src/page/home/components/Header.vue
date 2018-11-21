<template>
    <!-- 只能暴露一个根标签，所以用div包起来 -->
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">&nbsp;输入城市景点游玩主题</div>
        <div class="header-right">城市</div>
    </div>  
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>
/* scoped 只对当前项目的css产生影响 */
<style lang="stylus" scoped>
    .header
        display: flex
        line-height: .86rem
        background: #00bcd4
        color: #fff
        .header-left
            width: .64rem
            float: left
            margin-left 10px;
        .header-input
            flex: 1
            background: #fff
            color: #ccc
            border-radius: .1rem
            height: .64rem
            line-height: .64rem
            margin-top: .1rem
            margin-left .2rem
        .header-right
            width: 1.24rem
            float: right 
            text-align: center
</style>

