import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assets, dummyDateTimeData, dummyShowsData } from '../assets-3/assets';
import { ClockIcon, Loader, ArrowRight } from 'lucide-react';
import BlurCircle from '../Component/BlurCircle';
import './seatLayout.css';
import isoTimeFormat from '../lib/ISOTIMEFORMAT';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const SeatLayout = () => {
  const navigate = useNavigate();
  const { id, date } = useParams();
  const [show, setShow] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const groupRow = [
    ['A', 'B'],
    ['C', 'D'],
    ['E', 'F'],
    ['G', 'H'],
    ['I', 'J']
  ];
 const url = "http://localhost:8000";

  const handleShowDetail = async () => {
    try {
      const response = await axios.get(`${url}/api/movie/getbyId/${id}`);
      if (response.data.success) {
        setShow(response.data.data);

      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.message || "Server Error");
    }
  };

  useEffect(() => {
    handleShowDetail();
  }, [id]);

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      toast.error("Please select a time first");
      return;
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleProceedToCheckout = () => {
    if (!selectedTime) {
      toast.error("Please select a time first");
      return;
    }
    if (!selectedSeats.length) {
      toast.error("Please select at least one seat");
      return;
    }
console.log("clicked")
    navigate('/mybooking', {
      state: { selectedSeats, selectedTime, movie: show.movie, date }
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className="seat-layout">
      {show ? (
        <div className="layout-container">

          {/* <div className="blur-background">
            <BlurCircle top="-150px" left="-150px" size="400px" blur="150px" />
            <BlurCircle bottom="200px" right="-200px" size="500px" blur="200px" />
            <BlurCircle top="50%" left="50%" size="600px" blur="180px" />
          </div> */}
          <BlurCircle/>
          

          <div className="time-section">
            <p className="timing-header">Available Timings</p>
            <div className="available-time">
              {show.datetime.map((item, index) => (
                <div
                  key={index}
                  className={`time-item ${selectedTime === item.time ? 'selected-time' : ''}`}
                  onClick={() => setSelectedTime(item.time)}
                >
                  <ClockIcon />
                  <BlurCircle/>
                  <p>{(item.time)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="seats-section">
            <p className="seat-header">Select your seat</p>
            <img src={assets.screenImage} alt="Screen" className="screen-image" />
            <p className="screen-side">SCREEN SIDE</p>

            <div className="seat-groups">
              {groupRow.map((group, index) => {
                const isLastTwo = index >= groupRow.length - 2;
                return (
                  <div
                    key={index}
                    className={`seat-row-group ${index === 0 ? 'front-row-group' : ''} ${isLastTwo ? 'last-two-rows-group' : ''}`}
                  >
                    {group.map(row => (
                      <div
                        key={row}
                        className={`seat-row ${index === 0 ? 'front-row' : ''} ${isLastTwo ? 'last-two-rows' : ''}`}
                      >
                        {Array.from({ length: 9 }, (_, i) => {
                          const seatId = `${row}${i + 1}`;
                          return (
                            <button
                              key={seatId}
                              onClick={() => handleSeatClick(seatId)}
                              className={`seat-button ${selectedSeats.includes(seatId) ? 'selected' : ''}`}
                            >
                              {seatId}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

         <button  className="payment-button" onClick={handleProceedToCheckout}>
  Proceed to Check Out
</button>
<ArrowRight className="arrow-right" />
<BlurCircle right='50px' buttom='500px'/>
</div>

      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default SeatLayout;
