import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'
import { dummyDateTimeData, dummyShowsData } from '../assets-3/assets'
import isoTimeFormat from '../lib/ISOTIMEFORMAT'
import { StarIcon } from 'lucide-react'

const MovieDetail = () => {
  const { id } = useParams()
  const [showData, setShowData] = useState(null)

  useEffect(() => {
    const show = dummyShowsData.find(movie => movie._id === id)
    if (show) {
      setShowData({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }, [id])

  return showData ? (
    <section className="detail-section">
      <div className="detail-content">
        <img
          src={showData.movie.poster_path}
          alt={showData.movie.title}
          className="detail-poster"
        />

        <div className="detail-info">
          <div className="detail-glow" />
          <p className="detail-lang">
            {showData.movie.original_language?.toUpperCase() || 'ENGLISH'}
          </p>
          <h1 className="detail-title">{showData.movie.title}</h1>

          <div className="detail-rating">
            <StarIcon />
            {showData.movie.vote_average?.toFixed(1)} User Rating
          </div>

          <p className="detail-overview">{showData.movie.overview}</p>

          <p className="detail-meta">
            {isoTimeFormat(showData.movie.runtime)} ·{" "}
            {showData.movie.genres?.map(g => g.name).join(", ")} ·{" "}
            {showData.movie.release_date?.split("-")[0]}
          </p>
        </div>
      </div>
    </section>
  ) : (
    <div className="detail-loading">
      {id ? `No movie found for ID ${id}` : "Loading..."}
    </div>
  )
}

export default MovieDetail
