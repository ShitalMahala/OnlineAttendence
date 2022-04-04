import React , {useEffect,useState}from 'react'
import './LoginRegister.css'
import {login,register} from '../Actions/AuthActions'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function LoginRegister() {


	const [name, setname] = useState("")
	const [password, setpassword] = useState("")
	const [branch, setbranch] = useState("")
  const [username, setusername] = useState("")
  const [password2, setpassword2] = useState("")
  const history = useHistory()

    const dispatch = useDispatch()

    const {isAuthenticated} = useSelector(state => state.auth)
  
	const onlogin = (e) => {

		dispatch(login(name,password))
    console.log(name,password)

	}

	const regsiter = (e) =>  {

		dispatch(register(username,branch,password2))

	}

  if(isAuthenticated){
    history.push('/landing')
  }

	useEffect(()=>{
		const loginText = document.querySelector(".title-text .login");
		const loginForm = document.querySelector("form.login");
		const loginBtn = document.querySelector("label.login");
		const signupBtn = document.querySelector("label.signup");
		const signupLink = document.querySelector("form .signup-link a");
		signupBtn.onclick = (()=>{
		  loginForm.style.marginLeft = "-50%";
		  loginText.style.marginLeft = "-50%";
		});
		loginBtn.onclick = (()=>{
		  loginForm.style.marginLeft = "0%";
		  loginText.style.marginLeft = "0%";
		});
		signupLink.onclick = (()=>{
		  
		  return false;
		});
  
	},[])


  return (
	<>
		<div class="wrapper">
      <div class="title-text">
        <div class="title login">Login Form</div>
        <div class="title signup">Signup Form</div>
      </div>
      <div class="form-container">
        <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked />
          <input type="radio" name="slide" id="signup" />
          <label for="login" class="slide login">Login</label>
          <label for="signup" class="slide signup">Signup</label>
          <div class="slider-tab"></div>
        </div>
        <div class="form-inner">
          <form action="#" class="login">
            <div class="field">
              <input type="text" placeholder="Username" required   onChange={(e)=>{setname(e.target.value)}} />
            </div>
            <div class="field">
              <input type="password" placeholder="Password" required   onChange={(e)=>{setpassword(e.target.value)}} />
            </div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Login" onClick={onlogin} />
            </div>
            <div class="signup-link">Not a member? <a href="">Signup now</a></div>
          </form>
          <form action="#" class="signup">
            <div class="field">
              <input type="text" placeholder="Username"    onChange={(e)=>{setusername(e.target.value)}} />
            </div>
            <div class="field">
              <input type="text" placeholder="Branch"    onChange={(e)=>{setbranch(e.target.value)}} />
            </div>
            <div class="field">
              <input type="password" placeholder="Password"    onChange={(e)=>{setpassword2(e.target.value)}} />
            </div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Signup" onClick={regsiter} />
            </div>
          </form>
        </div>
      </div>
    </div>



	</>
  )
}

export default LoginRegister