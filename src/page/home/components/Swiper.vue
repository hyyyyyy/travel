<template>
    <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
        
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default{
        name: 'HomeSwiper',
        props:{
            list:Array
        },
        data () {
            return {
                swiperOption: {
                    pagination:'.swiper-pagination',
                    loop: true,
                    autoplay : 2000,
                    autoplayDisableOnInteraction: false,
                },
                swiperList: [{
                    id: '01',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
                },{
                    id: '02',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg'
                },{
                    id: '03',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'
                },{
                    id: '04',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/d4/e298dff35d3af802.jpg_750x200_9b0d56c1.jpg'
                }]
            }
        },
        computed:{
            showSwiper () {
                return this.list.length
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
        padding-bottom: 26.6%
        background: #eee
        .swiper-img
            width: 100%
</style>

