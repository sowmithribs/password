import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
      <div className="topBarContainer">
          <div className="topbarContents">
              <div className="topBarLogo">
                  <img
                      src={require("../../assests/icon/pass_logo.png")}
                      alt="topbarLogo"
                  />
              </div>
              <div className="topBarChoices">
                  <div className="sync">
                      <img src={require("../../assests/icon/sync.png")} alt="" />
                  </div>
                  <div className="profilePhoto">
                      <img src={require("../../assests/icon/profile.png")} alt="" />
                  </div>
              </div>
          </div>
          <div className="topBarMobile">
              <div className="topBarLeft">
                  <div className="leftImg1">
                      <img src={require("../../assests/icon/burger_menu.png")} alt="" />
                  </div>
                  <div className="leftImg2">
                      {" "}
                      <img src={require("../../assests/icon/pass.png")} alt="" />
                  </div>
              </div>
              <div className="topBarRight">
                  <div className="rightImg1">
                      <img src={require("../../assests/icon/search_mobile.png")} alt="" />
                  </div>
                  <div className="rightImg2">
                      <img src={require("../../assests/icon/sync_icn.png")} alt="" />
                  </div>
                  <div className="rightImg3">
                      <img src={require("../../assests/icon/profile_mob.png")} alt="" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar
