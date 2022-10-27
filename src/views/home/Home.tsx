import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css';
const Home = () => {
  return (
      <div className="dashboardContainer">
          <div className="dashboard">
              <div className="dashobardInside">
                  <div className="sideBar">
                      <Sidebar />
                  </div>
                   <div className="topBar">
                      <Navbar />
                  </div>
                  {/* <div className="dashboardBody">
                      <DashBoardBody />
                  </div>  */}
              </div>
          </div>
      </div>
  )
}

export default Home
