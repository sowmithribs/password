import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../../views/home/Home';
import Login from '../../views/login/Login';
import Register from '../../views/register/Register';
import Sidebar from '../sidebar/Sidebar';
const Router = () => {
  return (
    <div>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/signup" element={<Register />} />
              <Route path="*" element={<Login/>} />
              <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default Router
