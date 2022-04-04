import React,{useEffect,useState} from 'react'
import {getAllStudent} from '../Actions/StudentAction'
import {useDispatch,useSelector} from 'react-redux'
import {createAttendence,addAttendence} from '../Actions/AttendenceAction'
import {useHistory} from 'react-router-dom'

function AddAttendences() {

  const history = useHistory()
    const dispatch = useDispatch()
    const {students} = useSelector(state => state.student)
    useEffect(()=>{
        dispatch(getAllStudent())
    },[])


    


    const [date, setdate] = useState("")

    const go = () => {
        history.push('/attendences')
    } 


    const final2 = () =>{
         dispatch(createAttendence(date))
    }

  return (
    <>
        <section>

<h1>ADD ATTENDENCE</h1>


<input type="text" name='date' id='date' placeholder='Enter the Date' onChange={(e)=>{setdate(e.target.value)}} />
<input type="button" value="create" id='create' onClick={final2
}      />

<div class="tbl-header">
  <table cellpadding="0" cellspacing="0" border="0">
    <thead>
      <tr>
        <th>Enrollment Number</th>
        <th>Name</th>
        <th>Course</th>
        <th>Semester</th>
        <th>Status</th>
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
              <td>
                <input type="button" value="ADD"  id='button' onClick={ ()=>{
                    dispatch(addAttendence(date,student.enrollmentNumber))
  
                }}  />
             </td>
            </tr>
          ))
      } 

    </tbody>
  </table>

</div>
<input type="button" value="ALL ATTENDENCES"  id='allAttendences' onClick={go} />
</section>
    </>
  )
}

export default AddAttendences