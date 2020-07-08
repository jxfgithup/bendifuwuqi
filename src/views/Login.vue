<template>
    <div class="login">
        <form action="aaa">
        <div class="l-c">
            <div class="l-c1">
            <p class="p1">账号登录</p>
            <p class="sp">
                <img src="../assets/images/login/u12.png" alt="">
                <input type="text" v-model="username" class="ipt">
            </p>
            <p class="sp">
                <img src="../assets/images/login/u14.png" alt="">
                <input :type="pw" v-model="userpwd" class="ipt">
            </p>
                   <el-button type="primary" style="width:100%;margin-top:25px;" @click="login">马上登录</el-button>
                <p style="text-align:right; margin-top:5px; font-size:14px;color:#bbb">忘记密码? <span style="color:#4169E1;cursor: pointer;" @click="backof">立即找回</span></p>
            </div>
            
        </div> 
          <p class="shpw" @click="shpwd"><i class="el-icon-view"></i></p>
        </form>
      
    </div>
</template>

<script>
import Routerlist from "../router/routerlist";
import router from "../router/index";
import routerlist from '../router/routerlist';
import {Loading} from "element-ui"
export default {
    data(){
        return{
            username:"",
            userpwd:"",
            pw:"password"
        }
    },
    methods:{
        shpwd(){
           if(this.pw=="password"){
               this.pw= "text"
           }else{
               this.pw = "password"
           }
        },
        login(){
            this.$http.post('/user/login',{
                user_name:this.username,
                user_pwd:this.userpwd
            }).then(res=>{
                // 
                if(res.data.code==1){
                     Loading.service()
                    setTimeout(()=>{
                        this.$Message.success(res.data.msg)
                    },1000)
                    
                }else{
                    this.$Message.error(res.data.msg)
                }
                
                if(res.data.code==1){
                    localStorage.setItem('token',res.data.token);
                         let newarr=[]
                            this.$http.get('/user/userInfo').then(res=>{
                            // this.name = res.data.data.user_name;
                        //    console.log(res.data);
                           localStorage.setItem("username",res.data.data.user_name)
                            localStorage.setItem('user_id',res.data.data.user_id);
                            Routerlist[0].children.forEach((item,index)=>{
                                var arr = item.children&&item.children.filter(item=>item.auth.includes(res.data.data.identity_text));                        
                                    item.children = arr;
                                    router.addRoutes(Routerlist);
                                })
                                
                            setTimeout(()=>{
                                let  loadingInstance = Loading.service();
                                loadingInstance.close()
                                this.$router.push('/home');
                            },1000)
                             
                            })

                }
                
            }) 
            
            // this.$router.push('/home');
        },
        backof(){
        
        }
    }
}
</script>

<style lang="scss">
    .login{
        width: 100%;
        height: 100%;
        position: relative;
        .h1{
            text-align: center;
        };
        background-image:url("../assets/bawei.jpg");
        background-size: 100% 100%; 
        // background-image: url('../assets/logo.png');
    }
    .l-c{
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%,70%);
        width: 450px;
        height: 300px;
        background: #fff;
          // padding: 30px;
          display: flex;
          align-items: center;
        .l-c1{
            width: 70%;
            height: 70%;
            margin: 0 auto;
        }
      
        .p1{
            text-align: center;
        }
       
    }
     .shpw{
            position: absolute;
            top: 340px;
            right: 700px;
            cursor: pointer;
        }
    .ipt{
        height: 28px;
        width: 96%;
        border: 0;
        outline: none;
        background: #fff;
        text-indent: 1em;
    }
    .sp{
        width: 100%;
        height: 30px;
        background: #fff;
        margin:15px 0; 
        border-bottom: 1px solid #ccc;
    }
</style>