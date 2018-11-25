<template>
     <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
        <swiper-slide>
            <img class="swiper-img" src="../../../assets/img/1.jpg" alt="">
            </swiper-slide>
        <swiper-slide>
            <img class="swiper-img" src="../../../assets/img/2.jpg" alt="">
            </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
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
                swiperList: [
                    
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 50%
        background: #eee
        .swiper-img
            width: 100%
</style>

