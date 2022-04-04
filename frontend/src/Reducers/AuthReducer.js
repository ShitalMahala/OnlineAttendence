import {LOGIN_FAIL,LOGIN_SUCCESS,REGISTER_SUCCESS,LOGOUT_SUCCESS} from '../constants'

export const auth_reducer = (state = {user:{},isAuthenticated:false},action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticated:false,
                user:null
            }
        default:
            return state
    }
} 