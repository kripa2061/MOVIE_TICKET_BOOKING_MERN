import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetail.css';
import { dummyDateTimeData, dummyShowsData } from '../assets-3/assets';
import isoTimeFormat from '../lib/ISOTIMEFORMAT';
import { Heart, PlayCircleIcon, StarIcon, X } from 'lucide-react';
import DateSelect from '../Component/DateSelect';
import MovieCard from '../Component/MovieCard';
import Loading from '../Component/Loading';

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    const show = dummyShowsData.find(movie => movie._id === id);
    if (show) {
      setShowData({
        movie: show,
        dateTime: dummyDateTimeData
      });
    }
  }, [id]);

  if (!showData) return <Loading />;

  const { movie, dateTime } = showData;

  return (
    <section className="detail-section">
      <div className="detail-content">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="detail-poster"
        />

        <div className="detail-info">
          <div className="detail-glow" />
          <p className="detail-lang">
            {movie.original_language?.toUpperCase() || 'ENGLISH'}
          </p>
          <h1 className="detail-title">{movie.title}</h1>

          <div className="detail-rating">
            <StarIcon className="star-icon"/>
            {movie.vote_average?.toFixed(1)} User Rating
          </div>

          <p className="detail-overview">{movie.overview}</p>

          <p className="detail-meta">
            {isoTimeFormat(movie.runtime)} · {movie.genres?.map(g => g.name).join(', ')} · {movie.release_date?.split('-')[0]}
          </p>

          <div className="detail-buttons">
            {movie.trailer ? (
              <button 
                className="button-trailer"
                onClick={() => setTrailerOpen(true)}
              >
                <PlayCircleIcon className="icon"/>
                Watch Trailer
              </button>
            ) : (
              <button className="button-trailer disabled" disabled>
                Trailer Not Available
              </button>
            )}

            <a href="#dateSelect" className="button-ticket">
              Buy Ticket
            </a>

            <button className="button-heart">
              <Heart className="icon"/>
            </button>
          </div>
        </div>
      </div>

      <p className="cast-title">Your Favorite Cast</p>
      <div className="cast-list">
        {movie.casts?.slice(0, 12).map((cast, index) => (
          <div key={index} className="cast-item">
            <img src={cast.profile_path} alt={cast.name} className="cast-img"/>
            <p className="cast-name">{cast.name}</p>
          </div>
        ))}
      </div>

      <DateSelect dateTime={dateTime} id={id} />

      <p className="recommend-title">You May Also Like</p>
      <div className="recommend-list">
        {dummyShowsData.slice(0,4).map((movie,index)=>(
          <MovieCard key={index} movie={movie}/>
        ))}
      </div>

      <div className="show-more-wrapper">
        <button onClick={()=> {navigate('/movies'); scrollTo(0,0)}} className="show-more-btn">
          Show more
        </button>
      </div>

      {trailerOpen && movie.trailer && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button className="close-btn" onClick={() => setTrailerOpen(false)}>
              <X size={24}/>
            </button>
            <iframe 
              src={movie.trailer}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetail;
