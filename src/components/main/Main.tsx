import React from 'react'
import './main.css'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
    const [choose, setChoose] = useState("login");
  return (
      <div className="logoConatiner">
          <div className="logoImg">
              <img
                  src={require("../../assests/images/logo.png")}
                  alt="logo"
                  className="logoWeb"
              />
              <img
                  src={require("../../assests/icon/logo.png")}
                  alt=""
                  className="logoMob"
              />
          </div>
          <div className="logoText">
              Protect & Manage every password in your business
          </div>
          <div className="signInUpTabs">
              <div className={choose === "login" ? "signInTab" : ""}>
                  <Link to="/" className="linkTab">
                      SIGN UP
                  </Link>
              </div>
              <div
                  className={choose === "signup" ? "signInTab" : ""}
                  onClick={() => {
                      setChoose("signup");
                  }}
              >
                  <Link to="/signup" className="linkTab">
                      SIGN IN
                  </Link>
              </div>
          </div>
       </div>
  )
}

export default Main
