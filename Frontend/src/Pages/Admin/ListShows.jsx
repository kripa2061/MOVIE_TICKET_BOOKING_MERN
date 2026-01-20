import React, { useEffect, useState } from 'react'
import { dummyDashboardData, dummyDateTimeData, dummyShowsData } from '../../assets-3/assets'
import { dateFormat } from '../../lib/DateFormat'
import toast from 'react-hot-toast'
import axios from 'axios'
import isoTimeFormat from '../../lib/ISOTIMEFORMAT'
const ListShows = () => {
  const [shows, setShows] = useState([])
  const currency = import.meta.env.VITE_CURRENCY;
  const url = "http://localhost:8000"
  const MovieList = async () => {
    const response = await axios.get(`${url}/api/movie/movieList`)
    console.log(response.data.data);
    if (response.data.success) {
      
      setShows(response.data.data)

    }
  }
  const handleDelete = async (id) => {
    const response = await axios.delete(`${url}/api/movie/deleteMovie/${id}`)
    if (response.data.success) {
      toast.success("Movie Removed")
      MovieList();
    } else {
      toast.error(response.data.message)
    }
  }
  useEffect(() => {
    MovieList()

  }, [])

  return (
    <div>
      <p className="booking-title">List Shows</p>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Show Time</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                {item.datetime && item.datetime.length > 0 ? (
                  item.datetime.map((d, idx) => {
                    if (!d.date) return null; // skip invalid entries
                    const datePart = d.date.split("T")[0];      // "YYYY-MM-DD"
                    const isoString = `${datePart}T${d.time || "00:00"}:00`; // fallback time
                    return (
                      <span key={d._id}>
                        {isoTimeFormat(isoString)}
                        {idx < item.datetime.length - 1 && ", "}
                      </span>
                    );

                  })

                ) : (
                  <span>No showtimes</span>
                )}
              </td>



              <td>{item.price}</td>
              <button onClick={() => handleDelete(item._id)}>Delete</button>



            </tr>
          ))}

        </tbody>

      </table>
    </div>
  )
}

export default ListShows
