<template>
    <swiper :options="swiperOption">
        <!-- slides -->
        <div class="wrapper">
            <swiper-slide>
            <img  class="swiper-img" src="https://i0.hdslb.com/bfs/archive/65b2e89b47f30d0ba7c47bd2f42bf6bf49109923.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://i0.hdslb.com/bfs/sycp/tmaterial/201811/75f287dcde107d8939e5341039b39da7.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://i0.hdslb.com/bfs/archive/9c8c50263ab3160ebf898a9749cd9a95493425e3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://i0.hdslb.com/bfs/archive/9fca0c5ca8fa9702b70173685bd5338e0771bfe7.jpg" alt="">
            </swiper-slide>
        </div>
        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    export default{
        name: 'HomeSwiper',
        data () {
            return {
                swiperOption: {
                    pagination:'.swiper-pagination'
                },
                swiperList: []
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .weapper
        overflow: hidden
        width: 100%
        padding-bottom: 2%
    .swiper-img
        width: 100%
</style>

