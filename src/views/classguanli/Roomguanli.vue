<template>
     <div class="roomguanli">
        <div class="roomguanli-top">
            教室管理
        </div>
        <div class="roomguanli-container">
            <p>
                <Button type="primary" icon="md-add" @click="fn">添加教室</Button>
            </p>
            <ul class="room-oul">
                <li>教室号</li>
                <li>操作</li>
            </ul>
            <ul v-for="(item,index) in list" :key="index">
                <li>{{item.room_text}}</li>
                <li><span @click="del(index)">删除</span></li>
            </ul>
        </div>

        <div class="kuang">

            <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <p>教室号:</p>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
            </span>
            </el-dialog>

        </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
    data(){
        return{
             list:[],
             dialogVisible: false,
             input:""
        }
    },
    created(){
        this.rongcuo()
    },
    methods:{
        rongcuo(){
             Axios.get('/manger/room').then(res=>{
                this.list = res.data.data;
            })
        },
        fn(){
            this.dialogVisible = true;
         
        },
        sure(){
             this.dialogVisible = false;
                let obj ={
                    room_text:this.input
                }
            Axios.post('/manger/room',obj).then(res=>{
                // console.log(res);
               this.rongcuo();
               if(res.data.code==1){
                   this.$Message.success('创建教室成功!');
               }else if(res.data.code==0){
                   this.$Message.warning('教室名重复!');
               }
               
            })
        },
        del(index){
          
            // console.log(this.list[index])
            let room_id =this.list[index].room_id
            
            Axios.delete('/manger/room/delete',{
                data:{
                    room_id
                }
            }).then(res=>{
                // console.log(res);
                this.rongcuo();
            })
        },
         handleClose(done) {
            this.dialogVisible=false;
      }
    }
}
</script>

<style lang="scss">
  .roomguanli{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
         overflow: auto;
        .roomguanli-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .roomguanli-container{
            width: 95%;
            // height: 100%;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            margin-bottom: 50px;
            p{
                margin-bottom: 20px;
            }
            .room-oul{
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