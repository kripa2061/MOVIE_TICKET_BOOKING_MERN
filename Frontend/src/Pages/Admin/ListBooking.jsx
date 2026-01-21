import React, { useEffect, useState } from 'react';
import './ListBooking.css';
import { dateFormat } from '../../lib/DateFormat';
import toast from 'react-hot-toast';
import axios from 'axios';

const ListBooking = () => {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const currency = import.meta.env.VITE_CURRENCY;
  const url = "http://localhost:8000";

  const fetchBookingList = async () => {
    try {
      const response = await axios.get(`${url}/api/booking/bookingList`);
      if (response.data.success) {
       setBooking(response.data.data.booking || []);
 // always ensure array
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookingList();
  }, []);


  return (
    <div className="booking-container">
      <p className="booking-title">List Bookings</p>
      <table className="booking-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Show Time</th>
            <th>Seats</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {booking && booking.length > 0 ? (
            booking.map((item) => (
              <tr key={item._id}>
                <td>{item.name || "Unknown User"}</td>

                <td>
                  {item.showDateTime && item.showDateTime.length > 0
                    ? item.showDateTime.map((dt, idx) => (
                        <span key={dt._id}>
                          {dateFormat(dt.date)} {dt.time}
                          {idx < item.showDateTime.length - 1 && ", "}
                        </span>
                      ))
                    : "N/A"}
                </td>

                <td>{item.bookedSeats?.length ? item.bookedSeats.join(', ') : "No seats"}</td>

                <td>
                  {currency} {item.price}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No bookings available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooking;
