##安装
###`npm install -g create-react-app`
###`create-react-app demo`
##`npm start`
##命令
###`npm install redux --save` 安装第三方库
###`npm run eject`  弹出配置文件，可以自定义配置webpack  
会重新安装依赖，可以在package.json中看到，以前都是封装在script字段里面的，这样会建一个新的文件夹script，在里面就有各种配置的js文件

##express
###`npm install express --save` 安装express
###`node server.js`每次修改都要ctrl+c中断再重启
### `npm install -g nodemon`  监听路由和响应内容，自动重启
###`nodemon server.js`

##mongodb     存储json
1.在官网下载安装mongodb数据库
2.`npm install mongoose --save`安装库

##mongoose
1.引入
2.连接  .connect()
3.建立集合  文档   mongoose.model("名称",new mongoose.Schema({字段名：{type:数据类型，require:是否必须}}))
4.增删改查操作
find()  findOne()
create()
update()
remove()






