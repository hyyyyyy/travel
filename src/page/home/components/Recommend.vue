<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-title">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    export default{
        name: 'HomeRecommend',
        data () {
            return {
                recommendList:[{
                    id: "01",
                    title:"宠物掉进粪池",
                    desc:"一家四口去营救，一个都没活",
                    imgUrl: "http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg"
                },{
                    id: "02",
                    title:"北京申奥成功",
                    desc:"大清亡辣，大清亡辣，大清亡辣，大清亡辣，大清亡辣",
                    imgUrl: "http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg"
                },{
                    id: "03",
                    title:"叙利亚GKD部队",
                    desc:"GKD,GKD,GKD,KKP,KKP,KKP",
                    imgUrl: "http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg"
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>

