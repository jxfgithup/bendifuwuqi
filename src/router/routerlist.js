export default[
    {
        path:"/home",
        component:()=>import('../views/Home.vue'),
        children:[
            {
               title:"试题管理",
               path:"/home",
               component:()=>import('../views/Wrap.vue'),
               children:[
                   {
                       title:"添加试题",
                       path:"/home/addshiti",
                       component:()=>import('../views/question/Addshiti.vue'),
                       auth:["管理员","出题者"]
                   },
                   {
                    title:"试题分类",
                    path:"/home/shitifenlei",
                    component:()=>import('../views/question/Shitifeilei.vue'),
                    auth:["管理员"]
                },
                {
                    title:"查看试题",
                    path:"/home/chakanshiti",
                    component:()=>import('../views/question/Chakanshiti.vue'),
                    auth:["管理员","出题者","浏览者"]
                },
               ]
            },
            {
                title:"用户管理",
                path:"/home",
                component:()=>import('../views/Wrap.vue'),
                children:[
                    {
                        title:"添加用户",
                        path:"/home/adduser",
                        component:()=>import('../views/userguanli/Adduser.vue'),
                        auth:["管理员"]
                    },
                    {
                        title:"用户展示",
                        path:"/home/usershow",
                        component:()=>import('../views/userguanli/Usershow.vue'),
                        auth:["管理员"]
                    },
                ]
            },
            {
                title:"考试管理",
                path:"/home",
                component:()=>import('../views/Wrap.vue'),
                children:[
                    {
                        title:"添加考试",
                        path:"/home/addexam",
                        component:()=>import('../views/examguanli/Addexam.vue'),
                        auth:["管理员"]
                    },
                    {
                        title:"试卷列表",
                        path:"/home/shijuanlist",
                        component:()=>import('../views/examguanli/Shijuanlist.vue'),
                        auth:["管理员"]
                    },
                ]
            },
            {
                title:"班级管理",
                path:"/home",
                component:()=>import('../views/Wrap.vue'),
                children:[
                    {
                        title:"班级管理",
                        path:"/home/classguanli",
                        component:()=>import('../views/classguanli/Classguanli.vue'),
                        auth:["管理员","出题者"]
                    },
                    {
                        title:"教室管理",
                        path:"/home/roomguanli",
                        component:()=>import('../views/classguanli/Roomguanli.vue'),
                        auth:["管理员","出题者"]
                    },
                    {
                        title:"学生管理",
                        path:"/home/studentguanli",
                        component:()=>import('../views/classguanli/Studentguanli.vue'),
                        auth:["管理员","出题者"]
                    },
                ]
            },
            {
                title:"阅卷管理",
                component:()=>import('../views/Wrap.vue'),
                path:"/home",
                children:[
                    {
                        title:"待批班级",
                        path:"/home/daipi",
                        component:()=>import('../views/yuejuan.vue/Daipi.vue'),
                        auth:["管理员"]
                    }
                ]
            }
        ]
    },
]