import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../../assets-3/assets';
import './ListBooking.css'
import { dateFormat } from '../../lib/DateFormat';

const ListBooking = () => {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
 const currency = import.meta.env.VITE_CURRENCY;
  const fetchBookingList = async () => {
    setBooking(dummyBookingData);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookingList();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="booking-container">
      <p className="booking-title">List Bookings</p>
      <table className="booking-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Movie Name</th>
            <th>Show Time</th>
            <th>Seats</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((item) => (
            <tr key={item._id}>
              <td>{item.user.name}</td>
              <td>{item.show.movie.title}</td>
              <td>{dateFormat(item.show.showDateTime)}</td>
              <td>{item.bookedSeats.join(', ')}</td>
              <td>{currency} {item.bookedSeats.length * item.show.showPrice} {item.show.currency || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooking;
