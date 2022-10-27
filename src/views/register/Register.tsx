import React from 'react'
import Main from '../../components/main/Main'
import Signup from '../../components/signup/Signup'
import '../login/login.css'
const Register = () => {
  return (
    <div className="login">
      <div className="loginPageContainer">
        <div className="logo">
          <Main />
        </div>
        <div className="signupForm">
          <Signup />
        </div>
      </div>
    </div>
  )
}

export default Register
