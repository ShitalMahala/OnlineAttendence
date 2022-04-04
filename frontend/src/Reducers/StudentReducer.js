import {STUDENT_SUCCESS} from '../constants'


export const student_reducer = (state = {students:[]},action) => {
    switch(action.type){
        case STUDENT_SUCCESS:
            return {
                loading:false,
                students:action.payload
            }
        default:
            return state
    }
}