<template>
    <div class="hello">

        <h3 style="font-size: 12px;">测试</h3>
        <h3 style="font-size: 14px;">测试</h3>
        <h3 style="font-size: 16px;">测试</h3>
        <h3 style="font-size: 18px;">测试</h3>

        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <div class="test"></div>
    </div>
</template>

<script>
    import { Button } from 'vant';

    export default {
        name: 'Index',
        props: {
            msg: String
        },
        data() {
            return {
                checked: true
            }
        },
        components: {
            [Button.name]: Button
        },

        async mounted(){
            //请求示例1
            // let indexData = await this.$api.getIndexData();
            // console.log(indexData)

            //请求示例2
            // this.$api.getIndexData().then(res=>{
            //     console.log(res)
            // })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .test {
        height: 50px;
        width: 350px;
        background-color: #333;
        border-radius: 10px;

    }
</style>
