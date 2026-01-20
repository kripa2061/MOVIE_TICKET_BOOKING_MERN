import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetail.css';
import isoTimeFormat from '../lib/ISOTIMEFORMAT';
import { Heart, PlayCircleIcon, StarIcon, X } from 'lucide-react';
import DateSelect from '../Component/DateSelect';
import MovieCard from '../Component/MovieCard';
import Loading from '../Component/Loading';
import toast from 'react-hot-toast';
import axios from 'axios';


const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [trailerOpen, setTrailerOpen] = useState(false);
const[fetchmovie,setFetchMovie]=useState([]);
  const url = "http://localhost:8000";
  const fetchShows = async () => {
    try {
      const response = await axios.get(`${url}/api/movie/movieList`);
      if (response.data.success) {
        const movies = response.data.data;
        setFetchMovie(movies);

     
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.message || 'Server Error');
    }
  };

  const handleShowDetail = async () => {
    try {
      const response = await axios.get(`${url}/api/movie/getbyId/${id}`);
      if (response.data.success) {
        setShow(response.data.data);
        setTrailerOpen(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.message || "Server Error");
    }
  };

  useEffect(() => {
    handleShowDetail();
    fetchShows()
  }, [id]);

  if (!show) return <Loading />;

  return (
    <section className="detail-section">
      {/* Poster and basic info */}
      <div className="detail-content">
        <img src={`${url}/uploads/${show.image}`} alt={show.name} className="detail-poster" />

        <div className="detail-info">
          <div className="detail-glow" />
          <p className="detail-lang">
            {show.original_language?.toUpperCase() || 'ENGLISH'}
          </p>
          <h1 className="detail-title">{show.name}</h1>

          <div className="detail-rating">
            <StarIcon className="star-icon" />
            {show.vote_average?.toFixed(1) || 6} User Rating
          </div>

          <p className="detail-overview">{show.description}</p>

          {/* Meta info if available */}
          {show.runtime && (
            <p className="detail-meta">
              {isoTimeFormat(show.runtime)} · {show.genres?.map(g => g.name).join(', ')} · {show.release_date?.split('-')[0]}
            </p>
          )}

          {/* Buttons */}
          <div className="detail-buttons">
            {show.movieUrl ? (
              <button className="button-trailer" onClick={() => setTrailerOpen(true)}>
                <PlayCircleIcon className="icon" /> Watch Trailer
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
              <Heart className="icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Cast list */}
      {show.casts && show.casts.length > 0 && (
        <>
          <p className="cast-title">Your Favorite Cast</p>
          <div className="cast-list">
            {show.casts.slice(0, 12).map((cast, index) => (
              <div key={index} className="cast-item">
                <img src={`${url}/uploads/${cast.profile_path}`} alt={cast.name} className="cast-img" />
                <p className="cast-name">{cast.name}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Date selection */}
      <DateSelect dateTime={show.datetime} id={id} />

      {/* Recommended movies */}
      <p className="recommend-title">You May Also Like</p>
      <div className="recommend-list">
        {fetchmovie.slice(0,4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {/* Show more button */}
      <div className="show-more-wrapper">
        <button onClick={() => { navigate('/movies'); window.scrollTo(0, 0); }} className="show-more-btn">
          Show more
        </button>
      </div>

      {/* Trailer modal */}
      {trailerOpen && show.movieUrl && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button className="close-btn" onClick={() => setTrailerOpen(false)}>
              <X size={24} />
            </button>
            <iframe
              src={show.movieUrl}
              title={`${show.name} movieUrl`}
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
