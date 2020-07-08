import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
import ViewUI from "view-design"
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

import http from "./utils/http";
// const whiteList=['/login'];//不需要登录能访问的path
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach');
//   var userInfo= localStorage.getItem('username');//获取缓存看是否登录过
//   if(whiteList.indexOf(to.path)<0){//访问了需要登录才能访问的页面
//     if(userInfo){//登录过来直接进去
//       next();
//     }else{
//       if(to.path=='/login'){
//         next();
//       }else{
//         next('/login');
//       }
//     }
//   }
//   else{
//     next();
//   }
// });
router.beforeEach(function(to, from, next) {

  if (!localStorage.getItem("username")) {
      if (to.path !== '/login') {
          return next('/login')
      }
  }
  next()
})




Vue.prototype.$http = http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
