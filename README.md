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

##react基础语法
组件：
使用类extends React.Component的方法,如果组件里面只有render函数，可以使用函数的方法来定义组件
需要render
最终需要export暴露出去
组件之间传递参数使用props
view层：
1.直接写html代码，实际执行的是js语法
2.Class 要写成 ClassName
3.变量用{}包裹

渲染列表使用.map函数
constructor构造函数里面记得使用super(props)
State是一个不可变的，要用this.setState来获取
noClick={this.函数名}
.bind改变this

生命周期
初始化生命周期
更新重新渲染生命周期
卸载的生命周期

##ui组件库
`npm install antd-mobile --save`
引入
`import 'antd-mobile/dist/antd-mobile.css';`
按需加载组件
安装babel-plugin-import来按需加载css
`npm install babel-plugin-import --save-dev`
配置：package.json里面添加
`
    "plugins":[["import", { "libraryName": "antd-mobile", "style": "css" }]]
`

##redux
######单一状态
######和react是解耦的，在vue,angular里面也可以

安装
`npm install redus --save`]
引入
`import {createStore} from 'redux';`
新建：const store = createStore(counter);
派发：store.dispatch
监听：store.subscribe






