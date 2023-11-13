<template>
	<van-nav-bar
    :fixed="isFixed"
    :border="border"
    placeholder
    @click-right="rightClick"
    :style="{background: bgColor}"
    :z-index="zIndex"
	>
        <div slot="left" v-if="showLeft">
		    <van-icon
            size="20px" 
            :color="textColor" 
            name="arrow-left"
            @click="back"
            />
		    <van-icon 
            v-if="showCloseBtn"
            size="21px" 
            :color="textColor" 
            name="cross" 
            style="margin-left:12px"
            @click="closePage"
            />
        </div>
		<van-icon 
            v-if="showRight"
            size="20px" 
            :color="textColor" 
            :name="iconName" 
            slot="right"
        />
		<div 
            slot="title" 
            :style='"color:" + textColor'
        >
            <span v-if="title">{{title}}</span>
            <slot v-else></slot>
        </div>
	</van-nav-bar>
</template>

<script>
import {NavBar} from 'vant'
export default {
    // --------------------------------------------------
    // 默认配置： 显示返回箭头 显示关闭按钮 显示刷新按钮
    // 字体颜色#222 不显示下边框 z-index: 99
    // 背景颜色#fff 固定在顶部（高度46px）
    // --------------------------------------------------
    props: {
        title: {
            type: String,
            default: ''
        },
        showLeft: {
            type: Boolean,
            default: true
        },
        showCloseBtn: {
            type: Boolean,
            default: false
        },
        showRight: {
            type: Boolean,
            default: true
        },
        bgColor: {
            type: String,
            default: '#ffffff'
        },
        textColor: {
            type: String,
            default: '#222222'
        },
        border: {
            type: Boolean,
            default: false
        },
        zIndex: {
            type: Number,
            default: 99
        },
        isFixed: {
            type: Boolean,
            default: true
        },
        iconName: {
            type: String,
            default: 'replay'
        },
        rightClick: {
            type: Function,
            default: () => {
                window.location.reload()
            }
        }

    },
    data () {
        return {
            from: ''
        }
    },
    components: {
        vanNavBar: NavBar
    },
    methods: {
        back () {
            if (this.from === 'native') {
                this.closePage()
            } else {
                this.$router.go(-1)
            }
        },
        /* refresh () {
            window.location.reload()
        }, */
        closePage () {
            this.DS.call('DS.closePage')
        }/* ,
        rightClick () {
            this.$emit('rightClickFn')
            if (this.iconName == 'share') {
            } else {
                window.location.reload()
            }
        } */
    },
    created () {
        this.from = this.$route.query.from
    }
}
</script>

<style lang="less" scoped>

</style>