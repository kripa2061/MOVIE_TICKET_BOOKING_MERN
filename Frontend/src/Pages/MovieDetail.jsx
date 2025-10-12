import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'

const dummyMovieData = [
  {
    _id: "1",
    title: "Inception",
    poster_path: "https://m.media-amazon.com/images/I/51s+zU1zKRL._AC_.jpg", // ✅ Real poster image
    vote_average: 8.8,
    overview: "A mind-bending thriller by Christopher Nolan.",
    runtime: 148,
    genres: [{ name: "Sci-Fi" }, { name: "Thriller" }],
    release_date: "2010-07-16"
  }
]


const dummyDateTimeData = ["2025-10-11T18:00", "2025-10-12T20:00"]

const timeFormat = (minutes) => {
  const hrs = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hrs}h ${mins}m`
}

const MovieDetail = () => {
  const { id } = useParams()
  const [shows, setShow] = useState(null)

  useEffect(() => {
    console.log("Route param id:", id)
    const show = dummyMovieData.find(movie => movie._id === id)
    console.log("Matched movie:", show)
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    } else {
      console.warn("No movie found for id:", id)
    }
  }, [id])

  return shows ? (
    <div className="movie-detail-container">
      <div className="movie-detail-wrapper">
        <img
          src={shows.movie.poster_path}
          alt={shows.movie.title}
          className="movie-poster"
        />

        <div className="movie-info">
          <div className="blur-circle" />
          <p className="movie-language">ENGLISH</p>
          <h1 className="movie-title">{shows.movie.title}</h1>
          <div className="movie-rating">
            <span className="star-icon">★</span>
            {shows.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className="movie-overview">{shows.movie.overview}</p>
          <p className="movie-meta">
            {timeFormat(shows.movie.runtime)} · {shows.movie.genres.map(g => g.name).join(", ")} · {shows.movie.release_date.split("-")[0]}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading">
      {id ? `No movie found for ID ${id}` : "Loading..."}
    </div>
  )
}

export default MovieDetail
