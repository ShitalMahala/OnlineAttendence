import {ATTENDENCE_SUCCESS} from '../constants'

export const  attendenceReducer = (state = {attendence:[]},action) =>{
    switch(action.type){
        case ATTENDENCE_SUCCESS:
            return {
                loading:false,
                attendence:action.payload
            }
        default:
            return state
    }
}