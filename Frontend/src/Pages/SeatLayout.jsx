import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assets } from '../assets-3/assets';
import { ClockIcon, Loader, ArrowRight } from 'lucide-react';
import BlurCircle from '../Component/BlurCircle';
import './seatLayout.css';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const SeatLayout = ({user}) => {
  const navigate = useNavigate();
  const { id, date } = useParams();

  const [show, setShow] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
const[seatsPrice,setSeatsPrice]=useState(0);
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
        setSeatsPrice(response.data.data.price||0)
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

  const handleProceedToCheckout = async () => {
    if (!user) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    if (!selectedTime) {
      toast.error("Please select a time first");
      return;
    }

    if (!selectedSeats.length) {
      toast.error("Please select at least one seat");
      return;
    }
const totalPrice=selectedSeats.length*seatsPrice
    const bookingDetail = {
      userId: user._id,
      showId: show._id,
      bookedSeats: selectedSeats,
      showDateTime: {
        date: date,
        time: selectedTime
      },
      name:user.name,
price:totalPrice
    };
  console.log("Booking detail being sent:", bookingDetail);
    try {
      const response = await axios.post(
        `${url}/api/booking/Moviebooking`,
        bookingDetail
      );

      if (response.data.success) {
        toast.success("Booking successful");
        navigate('/mybooking');
 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    
  };

  return (
    <div className="seat-layout">
      {show ? (
        <div className="layout-container">

          <BlurCircle />

          <div className="time-section">
            <p className="timing-header">Available Timings</p>
            <div className="available-time">
              {show.datetime?.map((item, index) => (
                <div
                  key={index}
                  className={`time-item ${selectedTime === item.time ? 'selected-time' : ''}`}
                  onClick={() => setSelectedTime(item.time)}
                >
                  <ClockIcon />
                  <p>{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="seats-section">
            <p className="seat-header">Select your seat</p>
            <img
              src={assets.screenImage}
              alt="Screen"
              className="screen-image"
            />
            <p className="screen-side">SCREEN SIDE</p>

            <div className="seat-groups">
              {groupRow.map((group, index) => {
                const isLastTwo = index >= groupRow.length - 2;

                return (
                  <div
                    key={index}
                    className={`seat-row-group 
                      ${index === 0 ? 'front-row-group' : ''} 
                      ${isLastTwo ? 'last-two-rows-group' : ''}`}
                  >
                    {group.map(row => (
                      <div
                        key={row}
                        className={`seat-row 
                          ${index === 0 ? 'front-row' : ''} 
                          ${isLastTwo ? 'last-two-rows' : ''}`}
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

          <button
            className="payment-button"
            onClick={handleProceedToCheckout}
          >
            Proceed to Check Out
          </button>

          <ArrowRight className="arrow-right" />
          <BlurCircle right="50px" bottom="500px" />

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
