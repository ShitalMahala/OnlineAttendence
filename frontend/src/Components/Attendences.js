import React, {useEffect} from 'react'
import {getAllAttendence} from '../Actions/AttendenceAction'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './Attendences.css'

function Attendences() {
    const dispatch = useDispatch()
    const history = useHistory()
    const {attendence} = useSelector(state => state.attendence)
    console.log(attendence)
    useEffect(()=>{
        dispatch(getAllAttendence())
    },[])

    const add = () =>{
      history.push('/addattendences')
    }

  return (
    <>
            <section>

<h1>Attendences</h1>
      <input type="button" value="ADD ATTENDENCES"  id='addattend'  onClick={add} />
        {
            attendence.map((att)=>(
                <section>

                <div class="tbl-header">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                      <tr>
                        <th>{att.Date}</th>             
                      </tr>
                    </thead>
                  </table>
                </div>
                <div class="tbl-content">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
              
              
                        {
                            att.attend.map((a)=>(
                                <tr>
                                    <td>Enrollment Number</td>
                                    <td>{a.rollno}</td>
                                    <td> Present</td>
                                </tr>
                            ))
                        }
              
              
              
                    </tbody>
                  </table>
                </div>
              </section>
            ))
        }

</section>

    </>
  )
}

export default Attendences