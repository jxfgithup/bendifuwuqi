<template>
     <div class="addexam">
        <div class="addexam-top">
            添加考试
        </div>
        <div class="addexam-container">
            <div class="addexam-item">
                <p><span>*</span>试卷名称:</p>
                <el-input v-model="form.title" placeholder="请输入内容" style="width:465px"></el-input>
            </div>
            
            <div class="addexam-item">
                 <p><span>*</span>选择考试类型:</p>
                 <el-select v-model="valueone" placeholder="请选择" @change="cha1">
                    <el-option
                    v-for="(item,index) in list"
                    :key="index"
                    :label="item.exam_name"
                    :value="item.exam_id">
                    </el-option>
                </el-select>
            </div>
           
                
            
            <div class="addexam-item">
                <p><span>*</span>选择课程:</p>
                <el-select v-model="valuetwo" placeholder="请选择" @change="cha2">
                    <el-option
                    v-for="(item,index) in newlist"
                    :key="index"
                    :label="item.subject_text"
                    :value="item.subject_id">
                    </el-option>
                </el-select>
            </div>
            
            <div class="addexam-item">
                <p><span>*</span>设置题量:</p>
                <el-input v-model="form.number" placeholder="" style="width:100px"></el-input>
            </div>
            
             <div class="addexam-item">
                <p>考试时间:</p>
                   <el-date-picker
                    v-model="form.start_time"
                    type="datetime"
                    placeholder="选择日期时间">
                    </el-date-picker>
                        -
                     <el-date-picker
                        v-model="form.end_time"
                        type="datetime"
                        placeholder="选择日期时间">
                    </el-date-picker>
             </div>
            <Button type="primary" style="width:136px" @click="fn">创建试卷</Button>
        </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            input:"",
            value1:"",
            value2:"",
            valueone:"",
            valuetwo:"",
            list:[],
            newlist:[],
            form:{
                subject_id:"",
                exam_id:"",
                title:"",
                start_time:"",
                end_time:"",
                number:0,
            }
        }
    },
    created(){
        this.getlist();
    },
    methods:{
        getlist(){
            Axios.get('/exam/examType').then(res=>{
                this.list = res.data.data;
            })
              Axios.get('/exam/subject').then(res=>{
                //   console.log(res)
                    this.newlist = res.data.data;
            })
        },
        fn(){
           

            let abc = (this.form.start_time).getTime()
            let abd = (this.form.end_time).getTime()
            this.form.start_time =abc
            this.form.end_time = abd
            this.form.number=Number(this.form.number);
            // console.log(this.form)
            Axios.post('/exam/exam',this.form).then(res=>{
                // console.log(res);
                if(res.data.code==1){
                    this.$Message.success('创建成功');
                    this.$router.push('/home/shijuanlist')
                }   
                
            })
        },
        cha1(val){
            // console.log(val)
            this.form.exam_id = val;
        },  
        cha2(val){
            // console.log(val)
            this.form.subject_id = val;
        }
    }
}
</script>

<style lang="scss">
    .addexam{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        .addexam-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .addexam-container{
            width: 95%;
            height: 100%;
            margin: 0 auto;
            background: #fff;
            padding: 30px;
            padding-top: 40px;
            .addexam-item{
                margin-bottom: 30px;
                p{
                    margin-bottom: 15px;
                    span{
                        color: red;
                    }
                }
            }
        }
    }
</style>