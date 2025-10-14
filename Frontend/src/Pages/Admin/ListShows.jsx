import React, { useEffect, useState } from 'react'
import { dummyDashboardData, dummyDateTimeData, dummyShowsData } from '../../assets-3/assets'
import { dateFormat } from '../../lib/DateFormat'

const ListShows = () => {
  const [shows, setShows] = useState([])
  const currency = import.meta.env.VITE_CURRENCY;
  const fetchShowsList = () => {
    setShows([
      {
        movie: dummyShowsData[0],
        showDateTime: dummyDashboardData.activeShows[0].showDateTime,

        totalBooking: dummyDashboardData.totalBookings,
        earning: dummyDashboardData.totalRevenue,
      }
    ])
  }

  useEffect(() => {
    fetchShowsList()
  }, [])

  return (
    <div>
      <p className="booking-title">List Shows</p>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Show Time</th>
            <th>Total Booking</th>
            <th>Earning</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((item, index) => (
            <tr key={index}>
              <td>{item.movie.title}</td>
              <td>{dateFormat(item.showDateTime)}</td>
              <td>{item.totalBooking}</td>
              <td>{currency} {item.earning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListShows
