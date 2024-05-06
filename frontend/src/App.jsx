import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutOut from './components/layoutLoggedOut.jsx'
import Home from './components/homePage/home.jsx'
import Adopt from './components/adoption/adoptionHome.jsx'
import Login from './components/loginSignup/login.jsx'
import Signup from './components/loginSignup/signup.jsx'
import Listing from './components/listingPage/listingPage.jsx'
import About from "./components/homePage/aboutUs.jsx"
import AdoptDetails from "./components/adoption/adoptionDetails.jsx"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutOut/>}>
          <Route path ="" element={<Home/>}></Route>
          <Route path="/adopt" element={<Adopt/>}></Route>
          <Route path="/aboutus" element={<About/>}></Route>
        </Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/listing' element={<Listing/>}></Route>
        <Route path='/adoptdetails' element={<AdoptDetails/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



/* function App() {

  return (
    <>
    <Listing/>
    </>
  )
}

export default App */
