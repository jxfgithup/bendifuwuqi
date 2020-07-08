<template>
    <div class="shiti">
        <div class="shiti-top">
            试题分类
        </div>
        <div class="shiti-container">
            <div class="shiti-center">
                <Button type="primary" icon="md-add" style="width:158px;height:40px" @click="dialogVisible = true">添加类型</Button>
                <ul class="shiti-oul">
                    <li>类型ID</li>
                    <li>类型名称</li>
                    <li>操作</li>
                </ul>
                <ul class="shiti-newoul" v-for="(item,index) in list" :key="index">
                    <li>{{item.questions_type_id}}</li>
                    <li>{{item.questions_type_text}}</li>
                    <li></li>
                </ul>
            </div>
        </div>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-input v-model="text" placeholder="请输入类型"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="sure">确 定</el-button>
        </span>
        </el-dialog>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            list:[],
            dialogVisible: false,
            text:"",
            sort:0,
            
            
        }
    },
    created(){
        this.getlist();
    },
    methods:{
        handleClose(){
            this.dialogVisible = false
        },
        sure(){
            // this.sort = this.list.length;
            let params={
                sort:this.list.length+1,
                text:this.text
            }
            Axios.get('/exam/insertQuestionsType',{params}).then(res=>{
                console.log(res)
                if(res.data.code==1){
                    this.$Message.info('添加成功');
                    this.getlist();
                }
            })
            this.dialogVisible = false;
        },
        getlist(){
            Axios.get('/exam/getQuestionsType').then(res=>{
              this.list = res.data.data;
            })
        }   
    }
}
</script>

<style lang="scss">
    .shiti{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        .shiti-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .shiti-container{
            width: 95%;
            // height: 100%;
            margin: 0 auto;
            background: #fff;
            .shiti-center{
                padding: 20px;
                .shiti-oul{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    line-height: 50px;
                    border-bottom: 1px solid #eee;
                    margin-top: 20px;
                    li{
                        flex: 1;
                    }
                }
                .shiti-newoul{
                    width: 100%;
                    display: flex;
                    height: 50px;
                    line-height: 50px;
                    border-bottom: 1px solid #eee;
                    li{
                        flex: 1;
                    } 
                }
            }
        }
    }
</style>