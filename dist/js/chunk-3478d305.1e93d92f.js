(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3478d305"],{"1b40":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"student"},[n("div",{staticClass:"student-top"},[t._v(" 学生管理 ")]),n("div",{staticClass:"student-container"},[n("div",{staticClass:"contaniner-top"},[n("p",[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),n("p",[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.newopt,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("p",[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},t._l(t.newopt1,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("Button",{staticStyle:{width:"110px",height:"40px"},attrs:{type:"primary"},on:{click:t.fn}},[t._v("搜索")]),n("Button",{staticStyle:{width:"110px",height:"40px"},attrs:{type:"primary"}},[t._v("重置")])],1),t._m(0),n("div",{staticClass:"student-list"},[t._l(t.list,(function(e,a){return n("ul",{key:a,staticClass:"student-oul newoul"},[n("li",[t._v(t._s(e.student_name))]),n("li",[t._v(t._s(e.student_id))]),n("li",[t._v(t._s(e.grade_name))]),n("li",[t._v(t._s(e.room_text))]),n("li",[t._v(t._s(e.student_pwd))]),n("li",[n("span",{on:{click:function(n){return t.del(e,a)}}},[t._v("删除")])])])})),n("Page",{attrs:{total:t.total,"show-elevator":"","show-sizer":"","page-size-opts":[5,10,20,50,100],"page-size":t.pageSize,current:t.pageIndex},on:{"on-change":t.tab,"on-page-size-change":t.changepage}})],2)])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"student-oul"},[n("li",[t._v("姓名")]),n("li",[t._v("学号")]),n("li",[t._v("班级")]),n("li",[t._v("教室")]),n("li",[t._v("密码")]),n("li",[t._v("操作")])])}],i=(n("4160"),n("fb6a"),n("159b"),n("bc3a")),s=n.n(i),o={created:function(){this.getlist()},data:function(){return{options:[],options1:[],newopt:[],newopt1:[],value:"",value1:"",input:"",list:[],total:0,pageIndex:1,pageSize:10}},methods:{getlist:function(){var t=this;s.a.get("/manger/student").then((function(e){t.list=e.data.data.slice((t.pageIndex-1)*t.pageSize,t.pageIndex*t.pageSize),t.total=e.data.data.length,e.data.data.forEach((function(e,n){t.options.push({value:n+1,label:e.room_text}),t.options1.push({value:n+1,label:e.grade_name})}));for(var n=0;n<t.options.length;n++){for(var a=!0,l=0;l<t.newopt.length;l++)t.options[n].label==t.newopt[l].label&&(a=!1);a&&t.newopt.push(t.options[n])}for(n=0;n<t.options1.length;n++){for(a=!0,l=0;l<t.newopt1.length;l++)t.options1[n].label==t.newopt1[l].label&&(a=!1);a&&t.newopt1.push(t.options1[n])}}))},tab:function(t){this.pageIndex=t,this.getlist()},changepage:function(t){this.pageSize=t,this.getlist()},fn:function(){},del:function(t,e){var n=this;t.student_id;s.a.delete("/manger/student/"+t.student_id).then((function(t){n.getlist(),1==t.data.code?n.$Message.success(t.data.msg):n.$Message.error(t.data.msg)}))}}},u=o,r=(n("bedf"),n("2877")),c=Object(r["a"])(u,a,l,!1,null,null,null);e["default"]=c.exports},8418:function(t,e,n){"use strict";var a=n("c04e"),l=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var s=a(e);s in t?l.f(t,s,i(0,n)):t[s]=n}},bedf:function(t,e,n){"use strict";var a=n("e656"),l=n.n(a);l.a},e656:function(t,e,n){},fb6a:function(t,e,n){"use strict";var a=n("23e7"),l=n("861d"),i=n("e8b5"),s=n("23cb"),o=n("50c4"),u=n("fc6a"),r=n("8418"),c=n("b622"),p=n("1dde"),d=n("ae40"),v=p("slice"),f=d("slice",{ACCESSORS:!0,0:0,1:2}),g=c("species"),h=[].slice,_=Math.max;a({target:"Array",proto:!0,forced:!v||!f},{slice:function(t,e){var n,a,c,p=u(this),d=o(p.length),v=s(t,d),f=s(void 0===e?d:e,d);if(i(p)&&(n=p.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?l(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(p,v,f);for(a=new(void 0===n?Array:n)(_(f-v,0)),c=0;v<f;v++,c++)v in p&&r(a,c,p[v]);return a.length=c,a}})}}]);
//# sourceMappingURL=chunk-3478d305.1e93d92f.js.map