import React from 'react'
import '../signin/signin.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
const Signup = () => {
  const [password, setPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPassword(!password);
  };
  const existedUsers = localStorage.getItem("users") || "[]";

  if (existedUsers === "[]") {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const submitHandler = (e: any) => {
    e.preventDefault();

    const mobile = e.target.mobileNo.value;
    const mPin = e.target.mPin.value;
    const cmPin = e.target.cmPin.value;

    const userValues = { mobile, mPin, cmPin };
    console.log("userValues", userValues);

    const enteredData = JSON.parse(localStorage.getItem("users") || "[]");
    console.log("entered", enteredData);

    const newArr: any[] = [];
    enteredData.map((user: any) => {
      if (user.mobile === userValues.mobile) {
        newArr.push("exists");
      }
    });

    if (newArr.includes("exists")) {
      alert("User already exists");
    } else {
      if (
        userValues.mobile !== "" &&
        userValues.mPin !== "" &&
        userValues.cmPin !== ""
      ) {
        if (userValues.mPin && userValues.cmPin && userValues.mPin === cmPin) {
          enteredData.push(userValues);
          localStorage.setItem("users", JSON.stringify(enteredData));
          navigate("/");
        } else {
          alert("MPIN doesnot match");
        }
      } else {
        alert("enter all fields");
      }
    }
  };

  return (
    <div className="signIn">
      <div className="signInHead">SIGN UP </div>
      <div className="signInForm">
        <form className="formConatiner" onSubmit={submitHandler}>
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
              type="text"
              className="mPin"
              placeholder="Enter Mpin"
              name="mPin"
              maxLength={4}
              minLength={4}
            />
          </div>
          <div className="txtField">
            <input
              type={password ? "text" : "password"}
              className="cMPin"
              placeholder="Re-enter Mpin"
              name="cmPin"
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

          <div>
            <button className="btnSignIn">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
