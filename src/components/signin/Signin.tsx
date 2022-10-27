import React from 'react'
import './signin.css'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
    const [password, setPassword] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setPassword(!password);
    };

    const onsubmitHandler = (e: any) => {
        e.preventDefault();
        const mobile = e.target.mobileNo.value;
        const mPin = e.target.mPin.value;

        const loginData = { mobile, mPin };
        console.log("login data", loginData);

        const storedData = JSON.parse(localStorage.getItem("users") || "[]");
        console.log("storedData", storedData);
        if (loginData.mobile !== "" && loginData.mPin !== "") {
            storedData.map((user: any) => {
                if (user.mobile === loginData.mobile) {
                    if (user.mPin === loginData.mPin) {
                        navigate("/home");
                    } else {
                        alert("enter valid credentials");
                    }
                }
            });
        } else {
            alert("enter all fileds");
        }
    };
  return (
      <div className="signIn">
          <div className="signInHead">Sign in to your account</div>
          <div className="signInForm">
              <form className="formConatiner" onSubmit={onsubmitHandler}>
                  <div className="txtField">
                      <input
                          type="number"
                          className="mobileNo"
                          placeholder="Mobile Number"
                          name="mobileNo"
                          maxLength={10}
                          minLength={10}
                      />
                  </div>
                  <div className="txtField">
                      <input
                          type={password ? "text" : "password"}
                          className="mPin"
                          placeholder="Enter Mpin"
                          name="mPin"
                          maxLength={4}
                          minLength={4}
                      />
                      <img
                          src={require("../../assests/icon/eye_on.png")}
                          alt=""
                          className="eyeIcon"
                          onClick={togglePassword}
                      />
                  </div>
                  <div className="forgotPassword">Forgot your password?</div>
                  <div>
                      <button className="btnSignIn">SIGN IN</button>
                  </div>
              </form>
          </div>
          <div className="registerLink">
              Don’t have a Account?{" "}
              <Link to="/signup" className="regLink">
                  SIGNUP
              </Link>
          </div>
      </div>
  )
}

export default Signin
