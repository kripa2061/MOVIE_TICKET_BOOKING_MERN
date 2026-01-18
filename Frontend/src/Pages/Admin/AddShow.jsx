import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { dummyShowsData, assets } from '../../assets-3/assets';
import { DeleteIcon, Loader } from 'lucide-react';
import BlurCircle from '../../Component/BlurCircle';
import { toast } from 'react-hot-toast';
import './AddShows.css';

const AddShow = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showPrice, setShowPrice] = useState('');
  const [poster, setPoster] = useState(null);
  const [posterFile, setPosterFile] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState('');

  const url = 'http://localhost:8000';

  // Load dummy movies for poster preview
  useEffect(() => {
    setNowPlayingMovies(dummyShowsData);
  }, []);

  // Poster upload
  const handlePosterUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPoster(URL.createObjectURL(file));
      setPosterFile(file);
    }
  };

  // Add date & time
  const handleDateAndTime = () => {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split('T');
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });
    setDateTimeInput('');
  };

  // Remove a time
  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const updatedTimes = prev[date].filter((t) => t !== time);
      if (updatedTimes.length === 0) {
        const copy = { ...prev };
        delete copy[date];
        return copy;
      }
      return { ...prev, [date]: updatedTimes };
    });
  };

  // Submit form
  const handleAddShow = async (e) => {
    e.preventDefault();

    if (!name || !description || !showPrice || !posterFile || Object.keys(dateTimeSelection).length === 0) {
      toast.error('Please fill all required fields and add at least one showtime');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', showPrice);
    formData.append('datetime', JSON.stringify(dateTimeSelection));
    formData.append('image', posterFile);

    try {
      const response = await axios.post(`${url}/api/movie/addMovie`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        toast.success('Movie show added successfully!');
        setName('');
        setDescription('');
        setShowPrice('');
        setPoster(null);
        setPosterFile(null);
        setDateTimeSelection({});
      } else {
        toast.error(response.data.message || 'Something went wrong');
      }
    } catch (err) {
      toast.error(err.message || 'Server error');
    }
  };

  return (
    <form className="adm-add-show" onSubmit={handleAddShow}>
 <BlurCircle className="blur-circle" top="100px" left="100px" size="400px" blur="100px" />
<BlurCircle className="blur-circle" top="50%" left="50%" size="600px" blur="300px" />
<p>Add Movie</p>

      {/* Movie Name Input */}
      <div className="adm-upload-name">
        <input
          type="text"
          placeholder="Enter title of movie"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Poster Upload */}
      <div className="adm-upload-description">
        <input type="file" accept="image/*" hidden id="posterUpload" onChange={handlePosterUpload} />
        <label htmlFor="posterUpload" className="adm-upload-area">
          <img src={poster || assets.uploadarea} alt="Upload Movie Poster" />
        </label>
        <textarea
          className="adm-movie-description"
          placeholder="Enter movie description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Price Input */}
      <div className="adm-show-price-box">
        <p className="price-date">Add Price</p>
        <input
          type="number"
          min="0"
          value={showPrice}
          onChange={(e) => setShowPrice(e.target.value)}
          placeholder="Rs. Enter Show Price"
          className="adm-show-price-input"
        />
      </div>

      {/* Date & Time Picker */}
      <div className="adm-show-datetime-box">
        <input
          type="datetime-local"
          value={dateTimeInput}
          onChange={(e) => setDateTimeInput(e.target.value)}
          className="adm-datetime-input"
        />
        <button type="button" className="adm-add-time-btn" onClick={handleDateAndTime}>
          Add Time
        </button>
      </div>

      {/* Selected Dates & Times */}
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
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add Show Button */}
      <button
        type="submit"
        className="adm-add-show-btn"
        disabled={!name || !description || !showPrice || !posterFile || Object.keys(dateTimeSelection).length === 0}
      >
        Add Show
      </button>
    </form>
  );
};

export default AddShow;
