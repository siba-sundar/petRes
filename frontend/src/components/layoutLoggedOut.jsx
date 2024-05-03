import React from 'react'
import LandingBarOut from './homePage/navBarLoggedOut'
//import Newsletter from './homePage/footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <LandingBarOut/>
        <Outlet/>
       {/*  <Newsletter/> */}
    </>
  )
}

export default Layout