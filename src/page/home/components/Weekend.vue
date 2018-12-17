<template>
    <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default{
        name: 'HomeRecommend',
        props:{
          list:Array
        },
        // data () {
        //     return {
        //         list:[{
        //             id: "01",
        //             title:"宠物掉进粪池",
        //             desc:"一家四口去营救，一个都没活",
        //             imgUrl: "http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg"
        //         },{
        //             id: "02",
        //             title:"北京申奥成功",
        //             desc:"大清亡辣，大清亡辣，大清亡辣，大清亡辣，大清亡辣",
        //             imgUrl: "http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg"
        //         },{
        //             id: "03",
        //             title:"叙利亚GKD部队",
        //             desc:"GKD,GKD,GKD,KKP,KKP,KKP",
        //             imgUrl: "http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg"
        //         }]
        //     }
        // }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>

