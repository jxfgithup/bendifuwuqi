<template>
     <div class="adduser">
        <div class="adduser-top">
            添加用户
        </div>
        <div class="adduser-container">
            <div class="add-box">
                <div class="add-box-top">
                    <p v-for="(item,index) in listtwo" :key="index" @click="dian(index)" :class="count===index?'act':''">
                        {{item}}
                    </p>
                </div>
                 <div class="add-box-center" v-show="abc">
                     <el-input v-model="form.user_name" placeholder="请输入用户名"></el-input>
                     <el-input v-model="form.user_pwd" placeholder="请输入密码"></el-input>
                      <el-select v-model="form.identity_id" placeholder="请选择身份id">
                        <el-option
                        v-for="(item,index) in list"
                        :key="index"
                        :label="item.identity_text"
                        :value="item.identity_id">
                        </el-option>
                    </el-select>
                    <p>
                      <Button type="primary" @click="tab">确定</Button>
                      <Button>重置</Button>
                    </p>
                      
                </div>
                <div class="add-box-center" v-show="abd">
                     <el-select v-model="titd" placeholder="请选择身份id">
                        <el-option
                        v-for="(item,index) in listthree"
                        :key="index"
                        :label="item.user_name"
                        :value="item.user_id">
                        </el-option>
                     </el-select>
                     <el-input v-model="ipt1" placeholder="请输入用户名"></el-input>
                     <el-input v-model="ipt2" placeholder="请输入密码"></el-input>
                      <el-select v-model="newtitd" placeholder="请选择身份id">
                        <el-option
                        v-for="(item,index) in list"
                        :key="index"
                        :label="item.identity_text"
                        :value="item.identity_id">
                        </el-option>
                     </el-select>
                     <p>
                      <Button type="primary" @click="tab10">确定</Button>
                      <Button>重置</Button>
                    </p>
                </div>
            </div>
            <div class="add-box">
                <div class="add-box-top">
                    <span>添加身份</span>   
                </div>
                <div class="add-box-center">
                    <el-input v-model="identity_text" placeholder="请输入身份名称"></el-input>
                     <p>
                      <Button type="primary" @click="tab1">确定</Button>
                      <Button>重置</Button>
                     </p>
                </div>
            </div>
            <div class="add-box">
                <div class="add-box-top">
                    <span>添加api接口权限</span>
                </div>
                <div class="add-box-center">
                     <el-input v-model="api_authority_text" placeholder="请输入api接口权限名称"></el-input>
                      <el-input v-model="api_authority_url" placeholder="请输入api接口权限url"></el-input>
                       <el-input v-model="api_authority_method" placeholder="请输入api接口权限方法"></el-input>
                         <Button type="primary" @click="tab2">确定</Button>
                      <Button>重置</Button>
                </div>
            </div>
            <div class="add-box">
                <div class="add-box-top">
                    <span>添加视图接口权限</span>
                </div>
                <div class="add-box-center">
                    <el-select v-model="val" placeholder="请选择身份id">
                        <el-option
                        v-for="(item,index) in newlist"
                        :key="index"
                        :label="item.view_authority_text"
                        :value="item.view_id">
                        </el-option>
                    </el-select>
                    <p>
                        <Button type="primary" @click="tab3">确定</Button>
                      <Button>重置</Button>
                    </p>
                </div>
            </div>
            <div class="add-box">
                <div class="add-box-top">
                    <span>给身份设置api接口权限</span>
                </div>
                <div class="add-box-center">
                     <el-select v-model="ttid" placeholder="请选择身份id">
                        <el-option
                        v-for="(item,index) in list"
                        :key="index"
                        :label="item.identity_text"
                        :value="item.identity_id">
                        </el-option>
                    </el-select>
                     <el-select v-model="val1" placeholder="请选择身份id">
                        <el-option
                        v-for="(item,index) in listone"
                        :key="index"
                        :label="item.api_authority_text"
                        :value="item.api_authority_id">
                        </el-option>
                    </el-select>
                    <p>
                        <Button type="primary" @click="tab4">确定</Button>
                      <Button>重置</Button>
                    </p>
                </div>
            </div>
            <div class="add-box">
                <div class="add-box-top">
                    <span>给身份设置视图权限</span>
                </div>
                <div class="add-box-center">
                     <el-select v-model="ttid1" placeholder="请选择身份id">
                        <el-option
                        v-for="(item,index) in list"
                        :key="index"
                        :label="item.identity_text"
                        :value="item.identity_id">
                        </el-option>
                    </el-select>
                      <el-select v-model="val2" placeholder="请选择身份id">
                        <el-option
                        v-for="(item,index) in newlist"
                        :key="index"
                        :label="item.view_authority_text"
                        :value="item.view_id">
                        </el-option>
                    </el-select>
                    <p>
                        <Button type="primary" @click="tab5">确定</Button>
                      <Button>重置</Button>
                    </p>
                </div>
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
            newlist:[],
            listone:[],
            listtwo:["添加用户","更新用户"],
            listthree:[],
            form:{
                user_name:"",
                user_pwd:"",
                identity_id:""
            },
            form1:{
                
            },
            val:"",
            val1:"",
            identity_text:"",
            api_authority_text:"",
            api_authority_url:"",
            api_authority_method:"",
            ttid:"",
            ttid1:"",
            val2:"",
            abc:true,
            abd:false,
            ipt1:"",
            ipt2:"",
            titd:"",
            newtitd:"",
            count:0,
        }
    },
    created(){
        Axios.get('/user/identity').then(res=>{
            // console.log(res);
            this.list = res.data.data;
        })
        Axios.get('/user/view_authority').then(res=>{
            this.newlist = res.data.data;
        })  
        Axios.get('/user/api_authority').then(res=>{
            // console.log(res);
            this.listone = res.data.data;
        })
        Axios.get('/user/user').then(res=>{
            this.listthree = res.data.data
        })
    },
    methods:{
        dian(index){
            this.count = index;
            if(index==1){
                this.abd= true;
                this.abc = false
            }else if(index==0){
                this.abd = false;
                this.abc = true;
            }
            console.log(index)
        },
        tab(){
           Axios.post('/user',this.form).then(res=>{
              if(res.data.code==1){
                    this.$Message.success(res.data.msg);
              }
           })
        },
        tab1(){
            Axios.get('/user/identity/edit',{params:{
                identity_text:this.identity_text
            }}).then(res=>{
                // console.log(res);
                if(res.data.code==1){
                    this.$Message.success(res.data.msg);
                }
            })
        },
        tab2(){
            Axios.get('/user/authorityApi/edit',{params:{
                api_authority_text:this.api_authority_text,
                api_authority_url:this.api_authority_url,
                api_authority_method:this.api_authority_method
            }}).then(res=>{
                if(res.data.code==1){
                    this.$Message.success(res.data.msg);
                }
            })
        },
        tab3(){
           let arr= this.newlist.filter(item=>item.view_id==this.val);
           Axios.get('/user/authorityView/edit',{params:{
               view_authority_text:arr[0].view_authority_text,
               view_id:arr[0].view_id
           }}).then(res=>{
              this.$Message.error(res.data.msg);
           })
        },
        tab4(){
            console.log(this.ttid,this.val1)
            Axios.get('/user/setIdentityApi',{params:{
                identity_id:this.ttid,
                api_authority_id:this.val1
            }}).then(res=>{
                console.log(res)
            })
        },
        tab5(){
            let obj ={
                identity_id:this.ttid1,
                view_authority_id:this.val2
            }
            Axios.post('/user/setIdentityView',obj).then(res=>{
                this.$Message.error(res.data.msg);
            })
        },
        tab10(){
            let obj = {
                user_id:this.titd,
                user_pwd:this.ipt2,
                identity_id:this.newtitd
            }
            // console.log(obj);
            Axios.put('/user/user',obj).then(res=>{
                    this.$Message.success(res.data.msg)
            })
        }
    }
}
</script>

<style lang="scss">
    .adduser{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        .adduser-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .adduser-container{
            width: 95%;
            // height: 100%;
            margin: 0 auto;
            background: #f0f2f5;
            display: flex;
            flex-wrap: wrap;
            .add-box{
                width: 33%;
                // height: 280px;
                padding: 10px;
                border: 0.5px solid #eee;
                .el-input__inner{
                    margin-top: 15px;
                    margin-bottom: 15px;
                }
                .add-box-top{
                    .act{
                        border: 1px solid blue;
                    }
                    p{
                        padding: 5px 15px;
                        border: 1px solid #eee;
                        cursor: pointer;
                        background: #fff;
                    }
                    display: flex;
                    span{
                        padding: 5px 15px;
                        border: 1px solid blue;
                        background: #fff;
                    }
                }
            }
        }
    }
</style>