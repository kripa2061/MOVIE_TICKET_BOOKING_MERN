import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import './DateSelect.css';
import BlurCircle from './BlurCircle';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import isoTimeFormat from '../lib/ISOTIMEFORMAT';

const DateSelect = ({ id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [dates, setDates] = useState([]);
  const url = "http://localhost:8000";

  // Fetch movie date/time from backend
  const fetchDates = async (id) => {
    try {
      const response = await axios.get(`${url}/api/movie/getbyId/${id}`);
      if (response.data.success) {
        toast.success("Dates fetched");
        setDates(response.data.data.datetime || []);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.message || "Server Error");
    }
  };

  useEffect(() => {
    fetchDates(id);
  }, [id]);

  const onBookHandler = () => {
    if (!selected) {
      return toast.error("Please select a date");
    }
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="date-select-section">
      <div className="date-select-container">
        {/* Decorative blur circles */}
        <BlurCircle top="100px" left="-100px" color="rgba(255,76,0,0.2)" size="200px" blur="100px" />
        <BlurCircle top="100px" right="0px" color="rgba(255,76,0,0.2)" size="200px" blur="100px" />

        <div className="date-select-content">
          <p className="date-select-title">Choose Date</p>

          <div className="date-select-controls">
            <button className="chevron-btn">
              <ChevronLeftIcon width={28} />
            </button>

            <div className="date-buttons-wrapper">
              {dates.length > 0 ? (
                dates.map((d, idx) => {
                  const dateObj = new Date(d.date);
                  const day = dateObj.getDate();
                  const month = dateObj.toLocaleString('default', { month: 'short' });

                  return (
                    <button
                      key={idx}
                      className={`date-btn ${selected === d.date ? 'selected' : ''}`}
                      onClick={() => setSelected(d.date)}
                    >
                      {day} {month}
                    </button>
                  );
                })
              ) : (
                <p>No showtimes available</p>
              )}


            </div>

            <button className="chevron-btn">
              <ChevronRightIcon width={28} />
            </button>
          </div>

          <button onClick={onBookHandler} className="book-btn">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
