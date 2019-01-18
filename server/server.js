//express并没有引入import的模块化，所以需要使用require()
const express = require('express');
const  mongoose = require('mongoose');
//连接mongo  地址在C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe   /demo相当于Mysql中的数据库的名字，没有回会自动建立
const DB_URL = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb/demo';
mongoose.connect(DB_URL);
//提示信息
mongoose.connection.on('connected',function () {
    console.log("mongo connect success")
})

//类似于Mysql数据表的概念，mongo里面有文档，字段的概念
const User = mongoose.model("user",new mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新增数据
/*User.create({
    name:'yuyu',
    age:18
},function (err,doc) {
    if(!err){
        console.log(doc)
    }else {
        console.log(err)
    }
})*/
//删除
/*User.remove({},function (err,doc) {
 if(!err){
 console.log(doc)
 }else{
 console.log(err)
 }
 })*/
//更新
/*User.update({"name":"yuyu"},{"$set":{age:13}},function (err,doc){
    if(!err){
        console.log(doc);
    }else{
        console.log(err);
    }
})*/
//新建app
const app = express();

//路由
app.get('/',function (req,res) {
    //输出文本
    res.send('<h1>Hello</h1>');
})
app.get('/data',function (req,res) {
    //查找
    User.find({},function (err,doc) {
        if(!err){
            res.json(doc)
        }else{
            res.send(err)
        }
    })

})



//监听端口
app.listen(9093,function () {
    console.log('Node app start at port 9093');
})