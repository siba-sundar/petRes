import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout.jsx'
import Home from './components/homePage/home.jsx'
import Adopt from './components/adoption/adoptionHome.jsx'
import Login from './components/loginSignup/login.jsx'
import Signup from './components/loginSignup/signup.jsx'
import Listing from './components/listingPage/listingPage.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path ="" element={<Home/>}></Route>
          <Route path="/adopt" element={<Adopt/>}></Route>
        </Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
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

export default App
 */