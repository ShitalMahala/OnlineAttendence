import {LOGIN_SUCCESS,REGISTER_SUCCESS, LOGOUT_SUCCESS} from '../constants'
import axios from 'axios'

export const login = (name,password) => async(dispatch) => {

    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post(
        `http://localhost:12345/faculty/login`,
        {name,password},
        config
    )
    dispatch({type:LOGIN_SUCCESS, payload:data.user})
    

}

export const register = (name,branch,password) => async(dispatch) => {
    const config = {headers: {'Content-Type': 'application/json'}};
    const {data} = await axios.post(
        `http://localhost:12345/faculty/register`,
        {name,branch,password},
        config
    )
    dispatch({type:REGISTER_SUCCESS,payload:data.user})
}

export const logout = () => async(dispatch) => {
    const link = 'http://localhost:12345/faculty/logout'
    const {data} = await axios.get(link)
    dispatch({type:LOGOUT_SUCCESS,payload:data})
}
