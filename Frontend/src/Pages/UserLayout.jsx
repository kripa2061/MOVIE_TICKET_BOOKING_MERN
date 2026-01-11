// UserLayout.jsx
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'



const UserLayout = ({ data ,setData}) => {
  return (
    <>
      <Navbar data={data} setData={setData}/>
     <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
