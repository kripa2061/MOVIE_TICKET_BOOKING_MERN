import React, { useEffect, useState } from 'react';
import { dummyShowsData } from '../../assets-3/assets';
import { CheckCheck, CheckCircle, CheckIcon, CheckSquareIcon, DeleteIcon, Loader, StarIcon, VoteIcon } from 'lucide-react';
import './AddShows.css'
import BlurCircle from '../../Component/BlurCircle';
const AddShow = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");
  const handleDateandTime = () => {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;
    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });
  }
  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const updatedTimes = prev[date].filter((t) => t !== time);
      if (updatedTimes.length === 0) {
        const newSelection = { ...prev };
        delete newSelection[date];
        return newSelection;
      }
      return { ...prev, [date]: updatedTimes };
    });


  }
  const fetchNowPlaying = async () => {
    setNowPlayingMovies(dummyShowsData);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return (
    <div className="add-show-container">
         {/* Blur circles */}
          <BlurCircle top="100px" left="100px" size="400px" blur="100px" />
          <BlurCircle button="50%" left="50%" size="600px" blur="300px" />
      <p>Select Movies</p>
      {nowPlayingMovies.length > 0 ? (

        <div className="movie-list">

          {nowPlayingMovies.map((item) => (
            <div
              key={item.id}
              className={`movie-card ${selectedMovie === item._id ? 'selected' : ''}`}
              onClick={() => setSelectedMovie(item._id)}
            >
              <img src={item.poster_path} alt={item.title} className="movie-poster" />
              <p className="movie-title">{item.title}</p>
              <p className="movie-rating">
                <StarIcon fill="gold" /> {item.vote_average}
              </p>
              <p className="movie-votes">{item.vote_count} votes</p>

              {selectedMovie === item._id && (
                <CheckIcon className="check-icon" />
              )}
            </div>
          ))}


       {/* Show Price */}

  <div className="show-price">
    <p>Show Price</p>
    <input
      type="text"
      value={showPrice}
      onChange={(e) => setShowPrice(e.target.value)}
      placeholder="RS.  Enter Show Price "
    />
  </div>


{/* Date & Time */}

  <div className="show-date-time">
    <input
      type="datetime-local"
      value={dateTimeInput}
      onChange={(e) => setDateTimeInput(e.target.value)}
      className="datetime-input"
    />
    <button onClick={handleDateandTime}>Add Time</button>
  </div>


{/* Selected Date & Time Display */}
{Object.keys(dateTimeSelection).length > 0 && (
  <div className="selected-date-time">
    <p>Selected Date & Time:</p>
    <ul className="selected-date-list">
      {Object.entries(dateTimeSelection).map(([date, times]) => (
        <li key={date} className="selected-date-item">
          <div className="date-label">{date}</div>
          <div className="time-list">
            {times.map((time) => (
              <div key={time} className="time-item">
                <span>{time}</span>
                <DeleteIcon
                  className="delete-icon"
                  onClick={() => handleRemoveTime(date, time)}
                />
              </div>
            ))}
          </div>
          <button className="add-show-btn">Add Show</button>
        </li>
      ))}
    </ul>
  </div>
)}


        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AddShow;
