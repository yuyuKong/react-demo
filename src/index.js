import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { counter } from './index-redux';
const store = createStore(counter);
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


function render() {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
