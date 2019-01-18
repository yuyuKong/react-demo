import React from 'react';
import { Button , List } from 'antd-mobile';                    //按需加载组件
import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS
import {addGun} from './index-redux'

class App extends React.Component{
  render(){
    const boss = "李云龙";
    return (
        <div>
          <h2>独立团：{boss}</h2>
          <一营 boss="张大喵"></一营>
          <骑兵连 boss="孙德胜"></骑兵连>
            <Gun store = {this.props.store}/>
        </div>
        )
  }
}
class Gun extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const store = this.props.store;
        const num = store.getState();
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={()=>store.dispatch(addGun())}>申请武器</button>
            </div>
            )

    }
}
function 骑兵连(props) {
    return <h2>骑兵连连长：{props.boss}</h2>
}
class 一营 extends React.Component{
    constructor(props){
        super(props);
        this.state={
          soldier:['竹子','虎子','小明']
        }
        // this.addSoldier = this.addSoldier.bind(this);
    }
    addSoldier(){
      this.setState({
          soldier:[...this.state.soldier,'新兵'+Math.random()]
      })
      console.log("新兵入伍");
    }
    componentWillMount(){
      console.log('组件马上就要加载了');
    }
    componentDidMount(){
      console.log('组件已经加载完毕');
    }
    conponentWillReciveProps(nextProps){
      console.log('组件要接受父组件的值了');
    }
    shouldConponentUpdate(){
      console.log('判断是不是要更新组件');
      return true;
    }
    conponentWillUpdate(){
      console.log('组件马上就要更新了');
    }
    conponentDidUpdate(){
      console.log('组件已经更新了')
    }
    conponentWillUnmount(){
      console.log('组件已经卸载了')
    }


  render(){
      console.log('组件正在加载');
    return (
        <div>
          <h2>一营营长：{this.props.boss}</h2>
          <Button type="primary" onClick={()=>this.addSoldier()}>新兵入伍</Button>
            <List
                renderHeader="新兵列表"
            >
                {this.state.soldier.map(v=>{
                    return <List.Item key={v}>{v}</List.Item>
                })}
            </List>
        </div>
        )

  }
}

export default App;