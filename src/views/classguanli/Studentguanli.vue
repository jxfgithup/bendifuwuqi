<template>
   <div class="student">
        <div class="student-top">
            学生管理
        </div>
        <div class="student-container">
            <div class="contaniner-top">
                <p><el-input v-model="input" placeholder="请输入内容"></el-input></p>
                <p>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in newopt"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                <p>
                    <el-select v-model="value1" placeholder="请选择">
                        <el-option
                        v-for="item in newopt1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                 <Button type="primary" style="width:110px;height:40px" @click="fn">搜索</Button>
                 <Button type="primary" style="width:110px;height:40px">重置</Button>
            </div>
            <ul class="student-oul">
                <li>姓名</li>
                <li>学号</li>
                <li>班级</li>
                <li>教室</li>
                <li>密码</li>
                <li>操作</li>
            </ul>
            <div class="student-list">
                <ul v-for="(item,index) in list" :key="index" class="student-oul newoul">
                   <li>{{item.student_name}}</li> 
                   <li>{{item.student_id}}</li>
                   <li>{{item.grade_name}}</li>
                   <li>{{item.room_text}}</li>
                   <li>{{item.student_pwd}}</li>
                   <li><span @click="del(item,index)">删除</span></li>
                </ul>
                <Page :total="total" 
                show-elevator show-sizer 
                :page-size-opts="[5,10,20,50,100]"
                :page-size="pageSize"
                :current="pageIndex"
                @on-change="tab"
                @on-page-size-change="changepage"
                 />
                <!-- <Page :total="40" size="small" show-elevator  /> -->
            </div>
        </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
    created(){
        this.getlist();
    },
    data(){
        return {
              options: [],
              options1: [],
              newopt:[],
              newopt1:[],
              value: '',
              value1: '',
              input:"",
              list:[],
              total:0,
              pageIndex:1,
              pageSize:10,
        }
    },
    methods:{
        getlist(){
             Axios.get('/manger/student').then(res=>{
                // console.log(res);
                this.list = res.data.data.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize)
                this.total = res.data.data.length;
                res.data.data.forEach((item,index)=>{
                        this.options.push({
                          value:index+1,
                          label:item.room_text
                        });
                         this.options1.push({
                          value:index+1,
                          label:item.grade_name
                        })    
                })
                ///
                for(var i =0;i<this.options.length;i++){
                    var flag = true;
                    for(var j=0;j<this.newopt.length;j++){
                        if(this.options[i].label==this.newopt[j].label){
                            flag = false;
                        }
                    }
                    if(flag){
                        this.newopt.push(this.options[i])
                   }
                }
                ///
                   for(var i =0;i<this.options1.length;i++){
                    var flag = true;
                    for(var j=0;j<this.newopt1.length;j++){
                        if(this.options1[i].label==this.newopt1[j].label){
                            flag = false;
                        }
                    }
                    if(flag){
                        this.newopt1.push(this.options1[i])
                   }
                }   

                
              
            })
        },
        tab(index){
            // console.log(index)
            this.pageIndex= index;
            this.getlist();
        },
        changepage(index){
            // console.log(index)
            this.pageSize = index;
            this.getlist();
        },
        fn(){
            // console.log(this.newopt);
            // console.log(this.newopt1)
        },
        del(item,index){
            let params={
                id:item.student_id
            }
            Axios.delete(`/manger/student/`+item.student_id).then(res=>{
                this.getlist();
               
                if(res.data.code==1){
                     this.$Message.success(res.data.msg);
                }else{
                     this.$Message.error(res.data.msg);
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .student{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        overflow: auto;
        .student-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;     
        }
        .student-container{
            width: 95%;
            // height: 100%;
            margin: 0 auto;
            // background: #fff;
            margin-bottom: 20px;
            .contaniner-top{
                display: flex;
                p{
                    width: 178px;
                    margin-right: 20px;
                }
                Button{
                    margin-right: 20px;
                }
               
            }
            .student-list{
                background: #fff;
            }
            .newoul{
                background: #fff !important;
                border: 1px solid #eee;
            }
            .newoul:hover{
                background: #f0f5ff !important;
            }
             .student-oul{
                display: flex;
                height: 50px;
                line-height: 50px;
                padding-left: 15px;
                background: #e6f7ff;
                li:nth-child(1){
                    width: 13%;
                }
                 li:nth-child(2){
                    width: 20%;
                }
                 li:nth-child(3){
                    width: 11%;
                }
                 li:nth-child(4){
                    width: 11%;
                }
                li:nth-child(5){
                    flex: 1;
                }
                li:nth-child(6){
                    width: 10%;
                }
            }
        }
    }
</style>