import React from 'react';
import {connect } from 'react-redux';
import {Login ,User} from './Auth-redux'
import {Redirect} from 'react-router-dom'
// import axios from 'axios'

@connect(
    state=>state.auth,
    {Login , User}
)

class Auth extends React.Component{
/*    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }*/
    componentDidMount(){
/*      axios.get('/data').then(res=>{
          if(res.status==200){
              this.setState({
                  data:res.data[0]
              })
          }
      })*/
        this.props.User();
    }
    render(){
        return (
            <div>
                <h1>我的名字是{this.props.name}</h1>
                {this.props.isAuth ? <Redirect to='/dashboard'/>: null}
                <h6>您还没有权限</h6>
                <button onClick={this.props.Login}>登录</button>
            </div>
        )
    }
}
export default Auth