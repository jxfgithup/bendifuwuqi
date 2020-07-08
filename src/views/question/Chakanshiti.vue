<template>
 <div class="chakan">
        <div class="chakan-top">
            查看试题
        </div>
        <div class="chakan-container">
            <div class="chakan-box1">
                <ul>
                    <p>课程类型:</p>
                    <li v-for="(item,index) in newlist" :key="index" @click="tab(index)" :class="count==index?'act':'' ">
                        <span>{{item.subject_text}}</span>
                    </li>
                </ul>
                <div class="examleixing">
                    <p>考试类型:</p>
                     <el-select v-model="value" placeholder="请选择" @change="fn1">
                        <el-option
                        v-for="(item,index) in options"
                        :key="index"
                        :label="item.exam_name"
                        :value="item.exam_id">
                        </el-option>
                    </el-select>
                    <p>题目类型</p>
                    <el-select v-model="value1" placeholder="请选择" @change="fn2">
                        <el-option
                        v-for="(item,index) in options1"
                        :key="index"
                        :label="item.questions_type_text"
                        :value="item.questions_type_id">
                        </el-option>
                    </el-select>
                    <p><Button type="primary" icon="ios-search" @click="chaxun">查询</Button></p>
                </div>
            </div>
            <div class="chakan-box2">
                <div class="box2-box" v-for="(item,index) in list" :key="index" @click="tab1(item.questions_id)">
                    <div><span>{{item.title}}</span></div>
                    <div class="box-box2">
                        <div>
                            <span>{{item.questions_type_text}}</span>
                            <span>{{item.subject_text}}</span>
                            <span>{{item.exam_name}}</span>
                        </div>
                        <p>编辑</p>
                    </div>
                    <div>
                        {{item.user_name}}
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
    data(){
        return {
            count:0,
            list:[],
            newlist:[],
            name:localStorage.getItem('username'),
            leixing:[],
             options:[],
             options1:[],
             value:"",
             value1:"",
             arr:[],
             brr:[]
        }
    },
    created(){
       Axios.get('/exam/questions/new').then(res=>{
           console.log(res.data.data);
           this.list = res.data.data;
            this.arr = res.data.data
        Axios.get("/exam/subject").then(res=>{
            this.newlist = res.data.data;
        })
     })
     //
     Axios.get('/exam/examType').then(res=>{
         this.options = res.data.data;
     })
    Axios.get('/exam/getQuestionsType').then(res=>{
        this.options1 = res.data.data;
    })
    },
    methods:{
        tab(index){
            this.count = index;
            console.log(this.newlist[index].subject_text)
             this.list = this.arr.filter(item=>item.subject_text===this.newlist[index].subject_text)
            //  console.log(this.list)
        },
        tab1(item){
            this.$router.push(`/home/shitixiangqing${item}`);
        },
        fn1(abc){
            this.brr = this.arr.filter(item=>item.exam_id == abc);
        },
        fn2(abd){
            this.brr=this.brr.filter(item=>item.questions_type_id == abd);
        },
        chaxun(){
           this.list = this.brr;
        }
    }
}
</script>

<style lang="scss">
   .chakan{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        .chakan-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .chakan-container{
            width: 100%;
            height: 100%;
            margin: 0 auto;
            overflow: auto;
            // background: #fff;
            margin-bottom: 50px;
            display: flex;
            flex-direction: column;
            // padding-left: 20px;
            .chakan-box1{
                width: 95%;
                height: 230px;
                margin: 0 auto;
                background: #fff;
                padding: 20px;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        margin: 0 15px;
                        cursor: pointer;
                    }
                    .act{
                        color: #ffd591;
                    }
                }
            }
            .examleixing{
                display: flex;
                margin-top: 20px;
                p{
                    line-height: 40px;
                    margin-left:20px; 
                    margin-right:20px; 
                }
            }
            .chakan-box2{
                width: 95%;
                background: #fff;
                margin: 0 auto;
                 margin-top: 50px;
                 padding: 20px;
                  .box2-box:hover{
                         background: #e6f7ff;
                     }
                 .box2-box{
                     cursor: pointer;
                     width: 100%;
                     height: 110px;
                     border-bottom: 1px solid #ccc;
                     padding: 1px;
                     div{
                         margin-top: 10px !important;
                     }
                    
                     .box-box2{
                         width: 100%;
                         display: flex;
                         justify-content: space-between;
                         span{
                             display: inline-block;
                             padding: 2px;
                             margin-right: 10px;
                         }
                         span:nth-child(1){
                             background: #e6f7ff;
                             border: 1px solid #91d5ff;
                             color: #8390ff;
                         }
                          span:nth-child(2){
                             background: #f0f5ff;
                             border: 1px solid #adc6ff;
                             color: #2f54eb;
                         }
                          span:nth-child(3){
                             background: #fff7e6;
                             border: 1px solid #ffd591;
                             color: #fa8c16;
                         }
                     }
                 }
            }
        }
    }
</style>