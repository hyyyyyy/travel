<template>
    <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
        
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default{
        name: 'HomeSwiper',
        data () {
            return {
                swiperOption: {
                    pagination:'.swiper-pagination',
                    loop: true
                },
                swiperList: [{
                    id: '01',
                    imgUrl: 'https://i0.hdslb.com/bfs/archive/fd03a5237097a21fad09fc4fb01e011e57436bea.jpg'
                },{
                    id: '02',
                    imgUrl: 'https://i0.hdslb.com/bfs/archive/de60117383ce744ccfa4500c5a8fdf6cae19d359.jpg'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff !important 
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 50%
        background: #eee
        .swiper-img
            width: 100%
</style>

