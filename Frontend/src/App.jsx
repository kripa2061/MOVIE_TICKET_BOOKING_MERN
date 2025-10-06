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

const App = () => {
  const IsAdminRoutes = useLocation().pathname.startsWith("/admin")

  return (
    <>
      <Toaster />
      {!IsAdminRoutes && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/mybooking" element={<MyBooking />} />
      </Routes>
      {!IsAdminRoutes && <Footer />}
    </>
  )
}

export default App
