<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="less">
@font-face {
    font-family: numberFont;
    src: url(./assets/font/Regular.ttf) format("truetype")
}
body {
    color: #111111;
    font-size: 14px;
    background-color: #f5f5f9;
    -webkit-font-smoothing: antialiased;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}
.numberFont{
    font-family: numberFont;
}
#app {
    height: 100%;
}
a:active {
    color: #0081ff;
}
.van-tabs__nav {
    background: transparent !important;
    .van-tab--active {
        font-size: 16px;
        font-weight: 600;
    }
}
.van-dropdown-menu__bar {
    height: 36px !important;
    background-color: transparent !important;
    box-shadow: none !important;
    .van-dropdown-menu__title {
        font-size: 12px;
    }
}
.skeleton-box {
	margin: 12px 12px 0 !important;
	padding: 10px !important;
	background: #fff;
	border-radius: 6px;
}
.skeleton-title,.skeleton-cont{
    padding: 0;
    .van-skeleton__row{
        width: 100% !important;
    }
    
}
.skeleton-cont{
    margin: 10px 0;
}
</style>
