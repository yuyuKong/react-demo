import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router ,
    Route ,
    Link ,
    Redirect ,
    Switch
} from 'react-router-dom';   //引入路由
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware } from 'redux';  //引入redux
//引入redux-thunk中间件   action可以异步执行
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';               //引入react-redux
// import { counter ,addGun ,subGun ,subGunAsync} from './index-redux';
// import { counter } from './index-redux';
import reducers from './reducer'   //引入合并的reducer
import './axios-config'   //引入拦截器

import './index.css';

import Auth from './Auth';
import Dashboard from './Dashboard';


const store = createStore(reducers,applyMiddleware(thunk));
console.log(store.getState())
/*import {createStore} from 'redux';
//1.新建store  通过reducer来建立   根据老的state和新的action ，生成新的state
function counter(state=0,action) {
    switch (action.type){
        case '加机关枪':
            return state+1;
        case '减机关枪':
            return state-1;
        default:
            return 10;
    }
}
const store = createStore(counter);
//2.获取store
const init = store.getState();
console.log(init);

function listener() {
    const current = store.getState();
    console.log(`现在有${current}把机关枪`);
}
//订阅  可以实时监听state的变化
store.subscribe(listener);

//派发事件  传递action
store.dispatch({type:'加机关枪'})
store.dispatch({type:'减机关枪'})
store.dispatch({type:'加机关枪'})*/


/*class Test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return <h1>测试组件{this.props.match.params.location}</h1>
    }
}*/
ReactDOM.render(
    <Provider store={store}>
        {/*Router包裹整个应用   注意里面只包含一个根元素*/}
        <Router>
            {/*页面重定向*/}
            {/*<Redirect to='/yiying' />*/}
            {/*Switch匹配第一个路由  可以用来做404页面*/}

            <div>
                <Switch>
                    {/*注意精确匹配要添加exact属性*/}
                    <Route path='/login' exact component={Auth}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Redirect to='/dashboard'/>
                </Switch>

                {/*<App/>*/}
            </div>
        </Router>


    </Provider>,
    document.getElementById('root')
);
/*function render() {
    ReactDOM.render(<App store={store} addGun={addGun} subGun={subGun} subGunAsync={subGunAsync}/>, document.getElementById('root'));
}
render()
store.subscribe(render)*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
