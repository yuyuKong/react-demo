//express并没有引入import的模块化，所以需要使用require()
const express = require('express');
//新建app
const app = express();

//路由
app.get('/',function (req,res) {
    //输出文本
    res.send('<h1>Hello</h1>');
})
app.get('/data',function (req,res) {
    res.json({name:'yuyu1222',course:'react'})
})

//监听端口
app.listen(9093,function () {
    console.log('Node app start at port 9093');
})