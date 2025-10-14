import React from 'react'
import { dummyShowsData } from '../assets-3/assets'
import BlurCircle from '../Component/BlurCircle'
import MovieCard from '../Component/MovieCard'
import "./Movies.css"
import { Loader } from 'lucide-react'

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
          <Loader/>
        </div>
      )}
    </div>
  )
}

export default Movies
