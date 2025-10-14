import React, { useEffect, useState } from 'react';
import { dummyShowsData } from '../../assets-3/assets';
import { CheckIcon, DeleteIcon, Loader, StarIcon } from 'lucide-react';
import './AddShows.css';
import BlurCircle from '../../Component/BlurCircle';
import { kconverter } from '../../lib/KFormater';

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
    <div className="adm-add-show">
      <BlurCircle top="100px" left="100px" size="400px" blur="100px" />
      <BlurCircle top="50%" left="50%" size="600px" blur="300px" />

      <p className="adm-section-title">Select Movies</p>

      {nowPlayingMovies.length > 0 ? (
        <div className="adm-movie-list">
          {nowPlayingMovies.map((item) => (
            <div
              key={item._id}
              className={`adm-movie-box ${selectedMovie === item._id ? 'adm-selected' : ''}`}
              onClick={() => setSelectedMovie(item._id)}
            >
              <img src={item.poster_path} alt={item.title} className="adm-movie-poster" />
              <p className="adm-movie-title">{item.title}</p>
              <div className="vote-vote-count">
              <p className="adm-movie-rating">
                    <StarIcon className="star-icon" />
                      {item.vote_average.toFixed(1)}
              </p>
              <p className="adm-movie-votes">{kconverter(item.vote_count)} votes</p>
</div>
              {selectedMovie === item._id && <CheckIcon className="adm-check-icon" />}
            </div>
          ))}

          <div className="adm-show-price-box">
            <p className='price-date'>Add Price</p>
            <input
              type="text"
              value={showPrice}
              onChange={(e) => setShowPrice(e.target.value)}
              placeholder={`RS. Enter Show Price`}
              className="adm-show-price-input"
            />
          </div>

          <div className="adm-show-datetime-box">
            <p className='price-date'>Add Price</p>
            <input
              type="datetime-local"
              value={dateTimeInput}
              onChange={(e) => setDateTimeInput(e.target.value)}
              className="adm-datetime-input"
            />
            <button className="adm-add-time-btn" onClick={handleDateandTime}>Add Time</button>
          </div>

          {Object.keys(dateTimeSelection).length > 0 && (
            <div className="adm-selected-datetime">
              <p>Selected Date & Time:</p>
              <ul className="adm-date-list">
                {Object.entries(dateTimeSelection).map(([date, times]) => (
                  <li key={date} className="adm-date-item">
                    <div className="adm-date-label">{date}</div>
                    <div className="adm-time-list">
                      {times.map((time) => (
                        <div key={time} className="adm-time-item">
                          <span>{time}</span>
                          <DeleteIcon
                            className="adm-delete-icon"
                            onClick={() => handleRemoveTime(date, time)}
                          />
                        </div>
                      ))}
                    </div>
                    <button className="adm-add-show-btn">Add Show</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="adm-loader-box">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default AddShow;
