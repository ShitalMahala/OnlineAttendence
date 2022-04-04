import axios from 'axios'

import { ATTENDENCE_SUCCESS} from '../constants'

export const getAllAttendence = () => async(dispatch) => {
    console.log('hello')
    let link = 'http://localhost:12345/attendence/all'
    const {data} = await axios.get(link)
    dispatch({type:ATTENDENCE_SUCCESS, payload:data.attendences})
}

export const createAttendence = (Date) => async(dispatch) => {

    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post(
        `http://localhost:12345/attendence/create`,
        {Date},
        config
    )

}

export const addAttendence = (Date,rollno,status=true) => async(dispatch) => {

    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post(
        `http://localhost:12345/attendence/add`,
        {Date,rollno,status},
        config
    )
}