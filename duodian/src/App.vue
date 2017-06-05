<template>
    <div id="app">
        <div class="bottomBar">
            <router-link to="/home">
            首页
            </router-link>
            <router-link to="/classify">分类</router-link>
            <router-link to="/member">会员</router-link>
            <router-link to="/cart">购物车</router-link>
            <router-link to="/mine">我的</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    name: 'app',
}
</script>


<style>
    .bottomBar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0,0,0,0.5);
}
.bottomBar a{
    color: #fff;
    text-decoration: none;
}
</style>
