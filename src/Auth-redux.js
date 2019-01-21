import axios from 'axios'

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const USER = "USER";

const initState= {
    isAuth:false,
    user:'李云龙',
    name:'李云龙',
    age:'30'
}

//reducer
export function auth(state=initState,action) {
    switch (action.type){
        case LOGIN:
            return {...state  ,isAuth:true}
        case LOGOUT:
            return {...state  ,isAuth:false}
        case USER:
            return {...state,...action.UserData}
        default:
            return state;
    }
}

//action creator
export function User() {
    return dispatch=>{
        axios.get('/data').then(res=>{
            if(res.status==200){
                dispatch(getUser(res.data[0]))
            }
        })
    }
}
export function getUser(data) {
    return {type:USER,UserData:data}
}
export function Login() {
    return {type:LOGIN}
}
export function Logout() {
    return {type:LOGOUT}
}