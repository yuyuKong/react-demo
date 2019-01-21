import React from 'react';
import {Link,Route,Redirect} from 'react-router-dom'
import {connect } from 'react-redux';
import {Logout} from './Auth-redux'
import App from './App'

class yiying extends React.Component{
    render(){
        return <h1>一营</h1>
    }
}
class erying extends React.Component{
    render(){
        return <h1>二营</h1>
    }
}
/*必须在使用的class上面写*/
@connect(
    state=>state.auth,
    {Logout}
)
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const match = this.props.match;
        const RedireactToLogin = <Redirect to='/login' />;
        const app =
            <div>
                {this.props.isAuth ? <button onClick={this.props.Logout}>注销</button> : null};
                <ul>
                    <li><Link to={`${match.url}/`}>独立团</Link></li>
                    <li><Link to={`${match.url}/yiying`}>一营</Link></li>
                    <li><Link to={`${match.url}/erying`}>二营</Link></li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}/>
                <Route path={`${match.url}/yiying`} component={yiying}/>
                <Route path={`${match.url}/erying`} component={erying}/>
            </div>

        return this.props.isAuth ? app : RedireactToLogin;
    }
}
export default Dashboard