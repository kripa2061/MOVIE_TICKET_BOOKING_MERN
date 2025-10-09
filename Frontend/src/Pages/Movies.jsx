import React from 'react'
import { dummyShowsData } from '../assets-3/assets'
import BlurCircle from '../Component/BlurCircle'
import MovieCard from '../Component/MovieCard'
import "./Movies.css"

const Movies = () => {
  return (
    <div className="movie-container">
      {dummyShowsData.length > 0 ? (
        <div className="movie-show">
          <BlurCircle />
          <BlurCircle />
          <p className='movies-showing'>Now Showing</p>

          <div className="movie-card-container">
            {dummyShowsData.map((movie) => (
              <MovieCard movie={movie} key={movie._id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="movie-message">
          <p>No movie available</p>
        </div>
      )}
    </div>
  )
}

export default Movies
