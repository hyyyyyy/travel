<template>
    <!-- 只能暴露一个根标签，所以用div包起来 -->
    <div>
        <home-header></home-header>
    </div>  
</template>

<script>
import HomeHeader from './components/Header'
export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader
    }
}
</script>

<style>

</style>

