import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
   <>
   <Header/>
   <Outlet />  {/* Allows nested routes to be rendered dynamically */} 
   <Footer />

   </>
  )
}

export default Layout