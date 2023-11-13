<template>
   <div class="no-data" :style="{marginTop: marginTop}">
       <div class="no-data-img">
            <img v-if="emptyImg" :src="emptyImg" alt="">
            <img v-else src="../assets/img/bg_empty_data.png" alt="">
       </div>
       <div class="no-data-text">
           {{text}}
       </div>
   </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: '暂无数据~'
        },
        emptyImg: {
            type: String,
            default: ''
        },
        marginTop: {
            type: String,
            default: '50%'
        }
    },
    data () {
        return {
        }
    },
    created () {},
    mounted () {},
    methods: {}
}
</script>
<style lang="less" scoped>
    .no-data{
        text-align: center;
        padding-bottom: 50px;
        &-img{
            width: 110px;
            height: 110px;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
        &-text{
            font-size: 14px;
            margin-top: 10px;
            color: #777;
        }
    }
</style>