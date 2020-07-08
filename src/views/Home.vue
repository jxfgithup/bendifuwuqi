<template>
  <div class="home">
      <div class="top">
         <div class="imgbox">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="">
          </div>
          <div class="tuichu">
              <Dropdown  @on-click="fn" >
                  <a href="javascript:void(0)">
                      {{name}}
                    <Icon type="ios-arrow-down"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                      <DropdownItem name="111">驴打滚</DropdownItem>
                      <DropdownItem name="222">退出登录</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
          </div>
      </div>
      <div class="center">
          <div class="c-left">
                <Menu :theme="theme2" width="200px" v-for="(item,index) in list[0].children" :key="index">
                     <Submenu  v-show="item.children.length!==0" :name="index">  
                       <template slot="title">
                            <Icon type="ios-paper" />
                            {{item.title}}
                        </template>                     
                        <MenuItem v-for="(items,indexs) in item.children" :key="indexs" :name="index+'-'+(indexs+1)" :to="items.path">
                          <span>{{items.title}}</span>
                        </MenuItem>
                    </Submenu>
                </Menu>
          </div>
          <div class="c-right">
              <router-view />
          </div>
      </div>
  </div>
</template>

<script>
import Routerlist from "../router/routerlist";
import router from "../router/index";
export default {
 
  created(){
   
  },
  mounted(){

  },
  data(){
    return {
           theme2: 'dark',
           name:localStorage.getItem('username'),
           list:Routerlist
         }
  },
  methods:{
    fn(name){
      if(name=="222"){
        this.$router.push('/');
        localStorage.clear();
      }
    }
  }
}
</script>

<style lang="scss">
  .home{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      // overflow: auto;
      .top{
        width: 100%;
        height: 60px;
        box-shadow: 2px 2px 2px  #ccc;
        .imgbox{
          width: 200px;
          height: 60px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .tuichu{
          width: 200px;
          height:60px;
          position: absolute;
          top: 0;
          left:800px;
          line-height: 60px;
        }
        
      }
      .center{
        flex: 1;
        display: flex;
        overflow: auto;
        .c-left{
          width: 200px;
          height: 100%;
          background: #515a6e;
        }
        .c-right{
          flex: 1;
          // overflow: auto;
        }
      }
  }
</style>
