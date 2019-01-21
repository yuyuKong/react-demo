import React from 'react';
import {connect } from 'react-redux';
import {Login} from './Auth-redux'
import {Redirect} from 'react-router-dom'

@connect(
    state=>state.auth,
    {Login}
)

class Auth extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard'/>: null}
                <h6>您还没有权限</h6>
                <button onClick={this.props.Login}>登录</button>
            </div>
        )
    }
}
export default Auth