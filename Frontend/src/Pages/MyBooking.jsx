import React, { useEffect, useState } from 'react'
import { assets, dummyBookingData } from '../assets-3/assets';
import { Loader } from 'lucide-react';
import BlurCircle from '../Component/BlurCircle';
import './MyBooking.css'
import { dateFormat } from '../lib/DateFormat';
import toast from 'react-hot-toast';
import axios from 'axios';
import isoTimeFormat from '../lib/ISOTIMEFORMAT';
const MyBooking = ({ data }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [booking, setBooking] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = "http://localhost:8000";
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user?._id
  const getMyBookings = async (id) => {
    const response = await axios.get(`${url}/api/booking/getmoviebyId/${id}`)
    if (response.data.success) {
      setBooking(response.data.data)
      setIsLoading(false)
    } else {
      toast.error("No booking Found")
    }
  }

  useEffect(() => {
    getMyBookings(id);
  }, [])

  return (
    <div className="mybooking-container">
      {booking && !isLoading ? (
        <>
          <p>My Bookings</p>
          <BlurCircle top="100px" left="100px" size="400px" blur="150px" />
          <BlurCircle bottom="100px" right="600x" size="500px" blur="200px" />
          <BlurCircle top="50%" left="50%" size="600px" blur="180px" />
          <div className="mybooking-cards">
            {booking.map((item, index) => (
              <div key={index} className="mybooking-card">
                <div className="mybooking-left">
                  <img src={`${url}/uploads/${item.image}`} alt={item.name} />
                </div>
                <div className="mybooking-center">
                
                  {/* <p className="runtime">Runtime: {item.show.movie.runtime} mins</p> */}
                  <div className="show-date">
                    {item.showDateTime && item.showDateTime.length > 0 ? (
                      item.showDateTime.map((i, idx) => {
                        const isoString = i.time
                          ? `${i.date.split("T")[0]}T${i.time}:00`
                          : i.date; // fallback if time is missing

                        return (
                          <p key={idx}>
                            {isoTimeFormat(isoString)}
                          </p>
                        );
                      })
                    ) : (
                      <div>No showtime</div>
                    )}
                  </div>

                </div>

                <div className="mybooking-right">
                  <p className="amount">{currency}{item.price}</p>
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
