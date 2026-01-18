import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import UserLayout from './Pages/UserLayout';
import Layout from './Pages/Admin/Layout';

import Home from './Pages/Home';
import Movies from './Pages/Movies';
import MovieDetail from './Pages/MovieDetail';
import SeatLayout from './Pages/SeatLayout';
import Favorite from './Pages/Favorite';
import MyBooking from './Pages/MyBooking';
import Login from './Pages/Login';
import SSOCallback from './Pages/SSOCallback';

import Dashboard from './Pages/Admin/Dashboard';
import AddShow from './Pages/Admin/AddShow';
import ListBooking from './Pages/Admin/ListBooking';
import ListShows from './Pages/Admin/ListShows';

const App = () => {
  const [data, setData] = useState(null);

  // Load user once when app mounts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setData(JSON.parse(savedUser));
    }
  }, []);

  return (
    <>
      <Toaster />

      <Routes>
        {/* USER ROUTES */}
        <Route element={<UserLayout data={data} setData={setData} />}>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route path="/login" element={<Login setData={setData} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/movies/:id/:date" element={<SeatLayout />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/mybooking" element={<MyBooking  data={data} setData={setData}/>} />
          <Route path="/sso-callback" element={<SSOCallback />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-show" element={<AddShow />} />
          <Route path="list-booking" element={<ListBooking />} />
          <Route path="list-show" element={<ListShows />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
