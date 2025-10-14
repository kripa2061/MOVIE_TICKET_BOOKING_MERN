// UserLayout.jsx
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'



const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
     <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
