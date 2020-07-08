<template>
    <div class="shitixiangqing">
        <div class="shitixiangqing-top">
            试题详情
        </div>
        <div class="shitixiangqing-center">
            <div class="xiangqing-left">
                <p>出题人:{{obj.user_name}}</p>
                <p>题目信息</p>
                <p>
                    <span>{{obj.questions_type_text}}</span>
                    <span>{{obj.subject_text}}</span>
                    <span>{{obj.exam_name}}</span>
                </p>
                <p>{{obj.title}}</p>
                <span>
                    {{obj.questions_stem}}
                </span>
            </div>
            <div class="xiangqing-right">
                <span>
                    {{obj.questions_answer}}
                </span>
            </div>
        </div>
        
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            list:[],
            obj:{}
        }
    },
    created(){
        console.log(this.$route.params.id)
        let ind =this.$route.params.id
        Axios.get('/exam/questions/new').then(res=>{
            this.list = res.data.data.filter(item=>item.questions_id ==ind )
            console.log(this.list)
            this.obj = this.list[0]
        })
    }
}
</script>

<style lang="scss">
    .shitixiangqing{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #eee;
         .shitixiangqing-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .shitixiangqing-center{
            display: flex;
            width: 100%;
            padding: 20px;
            .xiangqing-left{
                width: 70%;
                // background: red;
                padding: 20px;
                background: #fff;
                line-height: 50px;
            }
            .xiangqing-right{
                flex: 30%;
                padding: 20px;
                background: #fff;
                line-height: 50px;
                margin-left: 20px;
            }
        }
    }
</style>