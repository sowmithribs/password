import React from 'react';
import Main from './components/main/Main';
import Router from './components/router/Router';
import Sidebar from './components/sidebar/Sidebar';
import './style.css';
import Login from './views/login/Login';
import Register from './views/register/Register';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
