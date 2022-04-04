import React, { useEffect } from 'react'
import './Students.css'
import './AddAttendences.css'
import {getAllStudent} from '../Actions/StudentAction'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Students() {

    const dispatch = useDispatch()
    const {students} = useSelector(state => state.student)
    useEffect(()=>{
        dispatch(getAllStudent())
    },[])

    const history = useHistory()


    const hi = () => {
      history.push('/addStudents')
    }


  return (
    <>
    <section>

  <h1>STUDENTS</h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Enrollment Number</th>
          <th>Name</th>
          <th>Course</th>
          <th>Semester</th>

        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>



        {
            students.map((student) => (
                <tr>

                <td>{student.enrollmentNumber}</td>
                <td>{student.name}</td>
                <td>{student.Course}</td>
                <td>{student.Semester}</td>
      
              </tr>
            ))
        } 






      </tbody>
    </table>
  </div>

    <input type="button" value="ADD STUDENT" id='add_student'  onClick={hi}  />

</section>




    </>
  )
}

export default Students