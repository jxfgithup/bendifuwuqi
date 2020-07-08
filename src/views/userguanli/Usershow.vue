<template>
   <div class="usershow">
        <div class="usershow-top">
            用户展示
        </div>
        <div class="usershow-container">
            <div class="uc-top">
                <p v-for="(item,index) in list" :key="index" @click="tab(index)" :class="count==index? 'act':''">
                    {{item.name}}
                </p>
            </div>
            <p style="font-size:30px;margin:10px 0;">{{list[count].name}}</p>
            <ul class="newus-oul newoul-one" v-if="list[count].name=='用户数据'">
                <li  v-for="(item,index) in list[count].child" :key="index">{{item}}</li>
            </ul>

            <ul class="us-oul newoul-one" v-else>
                <li  v-for="(item,index) in list[count].child" :key="index">{{item}}</li>
            </ul>


            <div  v-for="(item,index) in list[count].children" :key="index">
                <ul class="newus-oul" v-if="list[count].url=='/user/user'">
                <!-- 1 -->
                <li>{{item.user_name}}</li>
                <li>{{item.user_pwd}}</li>
                <li>{{item.identity_text}}</li>
                </ul>
                <ul class="us-oul" v-else-if="list[count].url=='/user/identity'">
                    <!-- 2 -->
                    <li>{{item.identity_text}}</li>
                </ul>
                <ul class="us-oul" v-else-if="list[count].url=='/user/api_authority'">
                    <!-- 3 -->
                    <li>{{item.api_authority_text}}</li>
                    <li>{{item.api_authority_url}}</li>
                    <li>{{item.api_authority_method}}</li>
                </ul>
                <ul class="us-oul" v-else-if="list[count].url=='/user/identity_api_authority_relation'">
                            <!-- 4 -->
                        <li>{{item.identity_text}}</li>
                        <li>{{item.api_authority_text}}</li>
                        <li>{{item.api_authority_url}}</li>
                        <li>{{item.api_authority_method}}</li>
                </ul>
                <ul class="us-oul" v-else-if="list[count].url=='/user/view_authority'">
                    <!-- 5 -->
                        <li>{{item.view_authority_text}}</li>
                        <li>{{item.view_authority_id}}</li>
                </ul>
                <ul class="us-oul" v-else>
                      <!-- 6 -->
                    <li>{{item.identity_text}}</li>
                    <li>{{item.view_authority_text}}</li>
                    <li>{{item.view_id}}</li>
                </ul>
            </div>
             <div>
                      <Page :total="total" 
                       :current="pageIndex"
                       :page-size-opts="[10]"
                       :page-size="pageSize"
                       @on-change="changepage"
                       />
            </div>
            
        </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            list:[
                {name:"用户数据",url:"/user/user",child:['用户名',"密码","身份"],children:[]},
                {name:"身份数据",url:"/user/identity",child:['身份名称'],children:[]},
                {name:"api接口权限",url:"/user/api_authority",child:['api权限名称',"api权限url","api权限方法"],children:[]},
                {name:"身份和api接口关系",url:"/user/identity_api_authority_relation",child:['身份名称',"api权限名称","api权限url","api权限方法"],children:[]},
                {name:"视图接口权限",url:"/user/view_authority",child:['视图权限名称',"视图id"],children:[]},
                {name:"身份和视图权限关系",url:"/user/identity_view_authority_relation",child:["身份","视图名称","视图id"],children:[]},
            ],
            count:0,
            total:0,
            pageSize:10,
            pageIndex:1,
        }  
    },
    created(){
        // Axios.get('/user/user').then(res=>{
        //     console.log(res);
        // })
        this.getlist();
    },
    methods:{
        tab(index){
            this.count = index;
            this.pageIndex = 1;
            Axios.get(this.list[this.count].url).then(res=>{
                this.list[this.count].children = res.data.data.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize);
                // console.log(res.data.data);
                this.total =res.data.data.length;
            })
        },
        getlist(){
            Axios.get(this.list[this.count].url).then(res=>{
                this.list[this.count].children = res.data.data.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize);
                this.total = res.data.data.length;
            })
        },
        changepage(index){
            console.log(index)
            this.pageIndex=index;
            this.getlist();
        }
    }
}
</script>

<style lang="scss">
    .usershow{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        overflow: auto;
        .usershow-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .usershow-container{
            width: 95%;
            // height: 100%;
            margin: 0 auto;
            // background: #fff;
            .newus-oul{
                display: flex;
                width: 100%;
                justify-content: space-between;
                padding: 5px;
                border-bottom: 1px solid #ccc;
                li{
                    height: 50px;
                    line-height: 50px;
                }
            }
            .newoul-one{
                // font-size: 18px;
                background: #fff;
            }
            .us-oul{
                display: flex;
                width: 100%;           
                padding: 5px;
                border-bottom: 1px solid #eee;
                li{
                    flex: 1;
                    height: 50px;
                    line-height: 50px;
                }
            }
            .uc-top{
                display: flex;
                .act{
                    border: 1px solid blue;
                    color: blue;
                }
               p{
                 padding: 5px 10px;
                 background: #fff;
                 border: 1px solid #ccc;
                 cursor: pointer;
               }
            }
        }
    }
</style>