import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import MovieDetail from './Pages/MovieDetail'
import SeatLayout from './Pages/SeatLayout'
import Favorite from './Pages/Favorite'
import MyBooking from './Pages/MyBooking'
import { Toaster } from "react-hot-toast"
import Login from './Pages/Login'
import SSOCallback from './Pages/SSOCallback'
import Layout from './Pages/Admin/Layout'
import Dashboard from './Pages/Admin/Dashboard'
import AddShow from './Pages/Admin/AddShow'
import ListBooking from './Pages/Admin/ListBooking'
import ListShows from './Pages/Admin/ListShows'

const App = () => {
  const IsAdminRoutes = useLocation().pathname.startsWith("/admin")

  return (
    <>
      <Toaster />
      {!IsAdminRoutes && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sso-callback" element={<SSOCallback />} />

        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/mybooking" element={<MyBooking />} />
       <Route path="/admin" element={<Layout />}>
    <Route index element={<Dashboard />} />
    <Route path="add-show" element={<AddShow />} />
    <Route path="list-booking" element={<ListBooking />} />
    <Route path="list-show" element={<ListShows />} />
  </Route>
      </Routes>
      {!IsAdminRoutes && <Footer />}
    </>
  )
}

export default App
