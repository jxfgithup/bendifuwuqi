import Axios from "axios";

//获取所有的试题

let shiti = ()=>{
    return Axios.get('/exam/questions/new').then(res=>{
        return res.data.data;
    })
}


module.exports={
    shiti
}