<template>
     <div class="shijuanlist">
        <div class="shijuanlist-top">
            试卷列表
        </div>
        <div class="shijuanlist-container">
            <div class="shijuan-t1">
                  <p>考试类型:</p>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <p>课程:</p>
                 <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <Button type="primary" icon="ios-search" style="width:125px;height:40px;margin-left:30px;">查询</Button>
            </div>
            <div class="shijuan-box">
                <div class="shijuan-box-b1">
                    <p>试卷列表</p>
                    <p>
                        <span>全部</span>
                        <span>进行中</span>
                        <span>已结束</span>
                    </p>
                </div>
                <div class="shijuan-box-b2 newbox-b2">
                    <p>试卷信息</p>
                    <p>班级</p>
                    <p>创建人</p>
                    <p>开始时间</p>
                    <p>结束时间</p>
                    <p>操作</p>
                </div>
                <div class="shijuan-box-b2 newbox-b3" v-for="(item,index) in list" :key="index">
                    <div class="aabb">
                        <p>{{item.title}}</p>
                        <p><span>考试时间:{{item.end_time}}</span><span>{{item.num}}道题</span> <span>作弊0分</span> </p>
                    </div>
                    <div class="aabb">
                        <p>考试班级</p>
                        <p>
                          <span  v-for="(items,indexs) in item.grade_name" :key="indexs">{{items}}</span>
                         </p>
                    </div>
                    <p>{{item.user_name}}</p>
                    <p>{{item.start_time}}</p>
                    <p>{{item.end_time}}</p>
                    <p @click="fn">详情</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            options: [{value: '选项1',label: '黄金糕'},],
            value:"",
            list:[]
        }
    },
    created(){
        Axios.get('/exam/exam').then(res=>{
            // console.log(res);
            this.list= res.data.exam;
            // console.log(this.list)
            this.list.forEach((item,index)=>{
                let abc = Number(item.end_time)
                var now = new Date(abc)
                var hour=now.getHours();    
                var minute=now.getMinutes();
                let str = hour +":"+minute ;
                item.end_time = str;

                let  abd = Number(item.start_time);
                let qow = new Date(qow);

                var year=now.getFullYear();  //取得4位数的年份
                var month=now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
                var date=now.getDate();      //返回日期月份中的天数（1到31）
                var hour1=now.getHours();     //返回日期中的小时数（0到23）
                var minute1=now.getMinutes(); //返回日期中的分钟数（0到59）
                var second=now.getSeconds();
                let str1 = year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
                item.start_time = str1; 
            })
        })
    },
    methods:{
        fn(){
            this.$router.push('/home/shijuanxiangqing')
        }
    }
}
</script>

<style lang="scss">
    .shijuanlist{
        width: 100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        overflow: auto;
        .shijuanlist-top{
            width: 95%;
            height: 70px;
            margin: 0 auto;
            line-height: 70px;
            font-size: 20px;
        }
        .shijuanlist-container{
            width: 95%;
            // height: 100%;
            margin: 0 auto;
            background: #fff;
            .shijuan-t1{
                display: flex;
                height: 121px;
                padding: 30px;
                p{
                margin-left: 70px;
                line-height: 40px;
                margin-right: 10px;
            }
            }
            
            .shijuan-box-b1{
                display: flex;
                justify-content: space-between;
                padding: 15px;
                padding-left: 25px;
                p{
                    span{
                        display: inline-block;
                        height: 32px;
                        border: 1px solid #eee;                
                        line-height: 12px;
                        padding: 10px;
                        color: blue;
                    }
                    .sp{
                        border: 1px solid blue;
                    }
                }
            }
            .newbox-b2{
                p{
                    background: #e5f5ef;  
                }
            }
            .newbox-b3{
                font-size: 12px;
                display: flex;
                .aabb{
                    flex: 1;
                }
                p{flex: 1}
            }
            .shijuan-box-b2{
                padding: 15px;
                display: flex;
                padding-left: 25px;
                // .aabb{
                //     display: flex;
                // }
                p{
                    flex: 1;
                    height: 45px;
                    
                    line-height: 45px;
                    padding-left: 10px;
                }
            }
        }
    }
</style>