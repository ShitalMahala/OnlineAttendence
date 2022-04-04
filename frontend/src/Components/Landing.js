import React from 'react'
import  { Link } from 'react-router-dom'
import './Landing.css'
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

function Landing() {

    const history = useHistory()

    const {isAuthenticated} = useSelector(state => state.auth)

  return (
      <>
    <div className="containerr">
        <div className="header_section">
            <div className="logo">
                <img src="https://skoolapp.com/wp-content/uploads/2018/03/website-attandence-features-page.png" alt="" srcset="" />
            </div>
            <div className="navigation">
                <div className="AboutMe">About</div>
                <div className="services">Services</div>
                <div className="attendence"  onClick={()=>{
                    if(isAuthenticated){
                        history.push('/attendences')
                    }else{
                        history.push('/landing')
                    }
                }} >Attendences</div>

                <div className="students" onClick={()=>{
                                       if(isAuthenticated){
                                        history.push('/students')
                                    }else{
                                        history.push('/landing')
                                    }
                }} >Students</div>

            </div>
        </div>
        
        <div className="title_part">
            <div className="title">Online</div>
            <div className="title2">Attendence System</div>
        </div>

        <Link to='/login'>
        <div className="button">Get Started &#8594;</div>
        </Link>

        <div className="semicircle"></div>
    </div>
    </>
  )
}

export default Landing