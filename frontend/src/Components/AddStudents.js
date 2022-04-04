import React, {useState} from 'react'
import './AddStudents.css'
import {addStudent,getAllStudent} from '../Actions/StudentAction'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function AddStudents() {

    const dispatch = useDispatch()
    const history = useHistory()

    

    const [enrollmentNumber, setenrollmentNumber] = useState("")
    const [name, setname] = useState("")
    const [course, setcourse] = useState("")
    const [semester, setsemester] = useState("")


    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(enrollmentNumber,name,course,semester))
        history.push('/students')
    }

  return (
    <>

    <div className="box">
        
        <form>
        <h1> NEW STUDENT</h1>
            <input type="text" name='enrloomentNumber'  placeholder='Enrollment Number'   onChange={(e)=> {setenrollmentNumber(e.target.value)}} />
            <input type="text" name='name'  placeholder='Name'  onChange={(e)=> {setname(e.target.value)}} />
            <input type="text" name='Course'  placeholder='Course' onChange={(e)=> {setcourse(e.target.value)}} />
            <input type="text" name='Semester' placeholder='Semester'  onChange={(e)=> {setsemester(e.target.value)}} />
            <input type="button" value="Submit" className='submitButton'  onClick={onSubmit} />
        </form>
    </div>
    
    </>
  )
}

export default AddStudents