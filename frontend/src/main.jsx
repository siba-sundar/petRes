import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
// import './index.css'

import Layout from './components/layout.jsx'
import Home from './components/homePage/home.jsx'
import Adopt from './components/adoption/adoptionHome.jsx'
import Login from './components/loginSignup/login.jsx'
import Signup from './components/loginSignup/signup.jsx'

/* 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path ="" element={<Home/>}></Route>
          <Route path="/adopt" element={<Adopt/>}></Route>
        </Route>

        <Route path="login" element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>, */

  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
