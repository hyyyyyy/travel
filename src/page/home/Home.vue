<template>
    <!-- 只能暴露一个根标签，所以用div包起来 -->
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>  
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper
    }
}
</script>

<style>

</style>

