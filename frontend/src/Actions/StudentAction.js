import axios from 'axios'
import {STUDENT_SUCCESS } from '../constants'

export const getAllStudent = () => async(dispatch) => {
    let link  = `http://localhost:12345/student/all`
    const {data} = await axios.get(link)
    dispatch({type:STUDENT_SUCCESS, payload:data.students})
}

export const addStudent = (enrollmentNumber,name,Course,Semester) => async(dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post(
        `http://localhost:12345/student/new`,
        {enrollmentNumber,name,Course,Semester},
        config
    )
    console.log(data)
}