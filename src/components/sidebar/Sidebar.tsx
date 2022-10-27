import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
      <div className="sideBarContainer">
          <div className="sideBarContents">
              <div className="burgerMenu">
                  <img
                      src={require("../../assests/icon/burger_menu.png")}
                      alt=""
                      className="burger"
                  />
              </div>
              <div className="home">
                  <img
                      src={require("../../assests/icon/home_icn.png")}
                      alt=""
                      className="homeIcon"
                  />
              </div>
          </div>
          <div className="activeTab"></div>
      </div>
  )
}

export default Sidebar
