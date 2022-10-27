import React from 'react'
import Main from '../../components/main/Main'
import Signin from '../../components/signin/Signin'
import './login.css'
const Login = () => {
  return (
      <div className="login">
          <div className="loginPageContainer">
              <div className="logo">
                  <Main />
              </div>
              <div className="signupForm">
                  <Signin />
              </div>
          </div>
      </div>
  )
}

export default Login
