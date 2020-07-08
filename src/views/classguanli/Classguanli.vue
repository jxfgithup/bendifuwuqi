<template>
   <div class="classguanli">
        <div class="classguanli-top">
            班级管理
        </div>
        <div class="classguanli-container">
            <p>
                <Button type="primary" icon="md-add" @click="dialogVisible = true">添加班级</Button>
            </p>
            <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <el-input v-model="form.grade_name" placeholder="请输入班级名" style="margin-bottom:10px;"></el-input>
            <el-input v-model="form.room_id" placeholder="请输入教室id" style="margin-bottom:10px;"></el-input>
            <el-input v-model="form.subject_id" placeholder="请输入课程id" style="margin-bottom:10px;"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
            <ul class="oul">
                <li>班级</li>
                <li>课程名</li>
                <li>教师号</li>
                <li>操作</li>
            </ul>
            <ul v-for="(item,index) in list" :key="index">
                <li>{{item.grade_name}}</li>
                <li>{{item.subject_text}}</li>
                <li>{{item.room_text}}</li>
                <li><span @click="update(item)">修改</span>|<span @click="del(index)">删除</span></li>
            </ul>
        </div>
        <el-dialog
            title="提示"
            :visible.sync="newdialogVisible"
            width="30%"
            :before-close="handleClose">
             <p><span style="color:red">*</span>班级名:</p>

             <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>

             <p><span style="color:red">*</span>教室号:</p>
              <el-select v-model="input2" placeholder="请选择"  @change="chan">
                <el-option
                v-for="(item,index) in opt"
                :key="index"
                :label="item.room_text"
                :value="item.room_id"
                >
                </el-option>
             </el-select>
             <p><span style="color:red">*</span>课程名:</p>
              <el-select v-model="input3" placeholder="请选择">
                <el-option
                v-for="(item,index) in newopt"
                :key="index"
                :label="item.subject_text"
                :value="item.subject_id">
                </el-option>
             </el-select>

            <span slot="footer" class="dialog-footer">
                <el-button @click="newdialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>

<script>
import Axios from "axios";
export default {
    data(){
        return {
            list:[],
            dialogVisible: false,
            newdialogVisible:false,
            opt:[],
            newopt:[],
            input1:"",
            input2:"",
            input3:"",
            roomid:"",
            newid:"",
            subjectid:"",
            form:{
                grade_name:"",
                room_id:"",
                subject_id:""
            }
        }
    },
    created(){
        this.getlist();
       
    },
    methods:{
        chan(abc){
            console.log(abc)
        },
        handleClose(){
            this.dialogVisible = false;
            this.newdialogVisible = false;
        },
        del(index){
            let grade_id = this.list[index].grade_id;
            Axios.delete('/manger/grade/delete', {
                data: {
                    grade_id
                }
            }).then(res=>{
                this.getlist();
            })
        },
        getlist(){
            Axios.get('/manger/grade').then(res=>{
            this.list = res.data.data;
        })
         Axios.get('/exam/subject').then(res=>{
            // this.input3 = 
            // res.data.data.forEach((item,index)=>{
            //     this.newopt.push(item.subject_text)
            // })
            console.log(res);
            this.newopt=res.data.data
        })
        
        Axios.get('/manger/room').then(res=>{
           this.opt = res.data.data;
            //  console.log(this.opt);
        })
        },
        update(item){
            // console.log(item)
            this.newdialogVisible = true;
            this.input1 = item.grade_name;
            this.newid = item.grade_id
            // this.roomid = item.room_id;
            // this.subjectid=item.subject_id;
        },
        sure(){
            this.newdialogVisible= false;
            let obj ={
                grade_id:this.newid,
                grade_name:this.input1,
                room_id: this.input2,
                subject_id:this.input3
            }
            // console.log(obj)
            Axios.put('/manger/grade/update',obj).then(res=>{
                this.getlist();
            })
        }
    }
}
</script>
<style lang="scss">
    .classguanli{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
       
         overflow: auto;
        .classguanli-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .classguanli-container{
            width: 95%;
            // height: 100%;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            margin-bottom: 50px;
            p{
                margin-bottom: 20px;
            }
            .oul{
                background:#e5f5ef;
            }
            ul{
                width: 100%;
                height: 50px;
                display: flex;
                border-bottom: 1px solid #eee;
                padding-left: 10px;
                font-size:14px; 
                li{
                    flex: 1;
                    line-height: 50px;
                    span{
                        color: blue
                    }
                }
            }
        }
    }
</style>