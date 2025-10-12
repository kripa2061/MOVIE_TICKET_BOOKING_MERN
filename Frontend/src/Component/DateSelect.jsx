import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { useState } from 'react';
import './DateSelect.css';
import BlurCircle from './BlurCircle';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onBookHandler = () => {
    if (!selected) {
      return toast('Please select a date');
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
              {dateTime &&
                Object.keys(dateTime).map(date => (
                  <button
                    key={date}
                    onClick={() => setSelected(date)}
                    className={`date-btn ${selected === date ? 'selected' : ''}`}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  </button>
                ))}
            </div>

            <button className="chevron-btn">
              <ChevronRightIcon width={28} />
            </button>
          </div>
        </div>

        <button onClick={onBookHandler} className="book-btn">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
