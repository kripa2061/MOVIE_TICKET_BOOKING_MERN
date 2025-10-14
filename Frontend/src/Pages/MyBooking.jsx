import React, { useEffect, useState } from 'react'
import { assets, dummyBookingData } from '../assets-3/assets';
import { Loader } from 'lucide-react';
import BlurCircle from '../Component/BlurCircle';
import './MyBooking.css'
import { dateFormat } from '../lib/DateFormat';

const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [booking, setBooking] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    setBooking(dummyBookingData)
    setIsLoading(false);
  }

  useEffect(() => {
    getMyBookings();
  }, [])

  return (
    <div className="mybooking-container">
      {!isLoading ? (
        <>
          <p>My Bookings</p>
          <BlurCircle top="100px" left="100px" size="400px" blur="150px" />
          <BlurCircle bottom="100px" right="600x" size="500px" blur="200px" />
          <BlurCircle top="50%" left="50%" size="600px" blur="180px" />
          <div className="mybooking-cards">
            {booking.map((item, index) => (
              <div key={index} className="mybooking-card">
                <div className="mybooking-left">
                  <img src={item.show.movie.poster_path} alt={item.show.movie.title} />
                </div>
                <div className="mybooking-center">
                  <h3>{item.show.movie.title}</h3>
                  <p className="runtime">Runtime: {item.show.movie.runtime} mins</p>
                  <p className="show-date">{dateFormat(item.show.showDateTime)}</p>
                </div>

                <div className="mybooking-right">
                  <p className="amount">{currency}{item.amount}</p>
                  <p>Total Tickets: {item.bookedSeats.length}</p>
                  <p>Seats: {item.bookedSeats.join(', ')}</p>
                  {!item.isPaid && <button className="pay-btn">Pay Now</button>}
                </div>

              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mybooking-loader">
          <Loader size={40} />
        </div>
      )}
    </div>
  )
}

export default MyBooking
