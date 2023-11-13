<template>
    <div>
        <div class="gotop" v-if="isTop" @click="toTop">
            <img class="img-contain" src="../assets/img/icon_gotop.svg">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        node: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            isTop: false,
            nodeEl: null
        }
    },
    mounted () {
        if (this.node) {
            this.nodeEl = document.getElementById(this.node)
            this.nodeEl.addEventListener('scroll', this.handleScroll)
        } else {
            window.addEventListener('scroll', this.handleScroll)
        }
    },
    methods: {
        handleScroll () {
            let scrollTop = 0
            if (this.node) {
                scrollTop = this.nodeEl.scrollTop
            } else {
                scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            }
            this.isTop = scrollTop > 100
        },
        toTop () { // 动画
            var timer
            var _this = this
            timer = requestAnimationFrame(function fn () {
                let scrollTop
                if (_this.node) {
                    scrollTop = _this.nodeEl.scrollTop
                } else {
                    scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                }
                let ispeed = Math.floor(-scrollTop / 5)
                if (_this.node) {
                    _this.nodeEl.scrollTop = scrollTop + ispeed
                } else {
                    document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed
                }
                if (scrollTop > 0) {
                    timer = requestAnimationFrame(fn)
                } else {
                    cancelAnimationFrame(timer)
                }
            })
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
        this.nodeEl && this.nodeEl.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="less" scoped>
.gotop{
    position: fixed;
    right: 15px;
    bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    // background: #000000;
    // opacity: .7;
    // color: #ffffff;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    padding: 2px;
    span{
        font-size: 10px
    }
}
</style>
