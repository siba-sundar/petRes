import React from 'react'
import LandingBar from './homePage/navBar'
//import Newsletter from './homePage/footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <LandingBar/>
        <Outlet/>
       {/*  <Newsletter/> */}
    </>
  )
}

export default Layout