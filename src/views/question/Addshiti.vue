<template>
    <div class="tianjia">
        <div class="tianjia-top">
            添加试题
        </div>
        <div class="tianjia-container">
            <div class="tianjia-box1">
                <p>题目信息</p>
                <p>题干</p>
                <el-input v-model="form.questions_stem" placeholder="请输入内容"></el-input>
            </div>
            <div class="tianjia-box2">
                <p>题目主题</p>
                <div class="mackdownone">
                        <mark-down @on-save="save" ref="md" @on-change="changeImg"
                        :theme="theme" :initialValue="form.title" 
                        :placeholderValue="placeholderValue"/>
                </div>
                
            </div>
            <div class="tianjia-box3">
                <p>请选择考试类型</p>
                 <el-select v-model="value1" placeholder="请选择" @change="fn1">
                    <el-option
                    v-for="(item,index) in list"
                    :key="index"
                    :label="item.exam_name"
                    :value="item.exam_id">
                    </el-option>
                </el-select>
                <p>请选择课程类型</p>
                 <el-select v-model="value2" placeholder="请选择" @change="fn2">
                    <el-option
                    v-for="(item,index) in newlist"
                    :key="index"
                    :label="item.subject_text"
                    :value="item.subject_id">
                    </el-option>
                </el-select>
                <p>请选者题目类型</p>
                 <el-select v-model="value3" placeholder="请选择"  @change="fn3">
                    <el-option
                    v-for="(item,index) in listone"
                    :key="index"
                    :label="item.questions_type_text"
                    :value="item.questions_type_id"
                   
                    >
                    </el-option>
                </el-select>
                <div class="mackdowntwo">
                        <mark-down @on-save="save1" ref="md1" @on-change="changeImg"
                        :theme="theme" :initialValue="form.questions_answer" 
                        :placeholderValue="placeholderValue"/>
                </div>
                 <el-button type="primary" @click="sub">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
import MarkDown from 'vue-meditors'

export default {
    components:{
        MarkDown
    },
    methods:{
        save(content){
            // console.log("原始内容:"+content.value);
            // console.log("转义后的内容:"+content.html);
            // console.log("主题theme:"+content.theme);
            this.form.title = content.value;
        },
        save1(content){
            //  console.log("原始内容:"+content.value);
             this.form.questions_answer = content.value;
        },
        
        changeImg(files,callback){
                // console.log(files)
                //图片上传
            var url = data.url;
                callback(url);//通过callback回调将图片地址返回
        },
          getlist(){
            Axios.get('/exam/examType').then(res=>{
                this.list = res.data.data;
            })
              Axios.get('/exam/subject').then(res=>{
                //   console.log(res)
                this.newlist = res.data.data;
            })
            Axios.get('/exam/getQuestionsType').then(res=>{
              this.listone = res.data.data;
            })
        },
        fn1(item){
            this.form.exam_id = item;
        },
        fn2(item){
            this.form.subject_id = item;
        },
        fn3(item){
            this.form.questions_type_id = item;
        },
        sub(){
            
         this.$refs.md.handleSave();
         this.$refs.md1.handleSave();
            Axios.post('/exam/questions',this.form).then(res=>{
                // console.log(res);
                if(res.data.code==1){
                    this.$Message.success('创建成功');
                    this.$router.push('/home/chakanshiti');
                }
                
            })
        // console.log(this.form)
        }
        

    },
    data(){
        return{
             placeholderValue:"请输入问题描述",//placeholder的内容
            initialValue: "",//，markdown默认值
            initialValue1:"",
            theme: 'OneDark',//主题，
            list: [],
            newlist:[],
            listone:[],
            value1:"",
            value2:"",
            value3:"",
            form:{
                questions_type_id:"",
                questions_stem:"",
                subject_id:"",
                exam_id:"",
                user_id:localStorage.getItem("user_id"),
                questions_answer:"",
                title:"",
            }
        }
    },
    created(){
        this.getlist();
    }
}
</script>

<style lang="scss">
    .tianjia{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        overflow: auto;
        .tianjia-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .tianjia-container{
            width: 95%;
            margin: 0 auto;
            background: #fff;
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            padding-left: 25px;
            .tianjia-box1{
                p{
                    margin-top: 15px;
                }
            }
            .tianjia-box2{
                p{
                    margin-top: 15px;
                }
            }
            .tianjia-box3{
                p{
                    margin-top: 30px;
                    margin-bottom: 15px;
                }
                .mackdowntwo{
                    margin-bottom: 50px;
                }
            }
        }
    }
</style>