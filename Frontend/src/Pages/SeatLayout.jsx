import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets-3/assets'
import { ArrowLeftIcon, ArrowRight, ClockIcon, Loader } from 'lucide-react'
import BlurCircle from '../Component/BlurCircle'
import './seatLayout.css'
import isoTimeFormat from '../lib/ISOTIMEFORMAT'
import { toast } from 'react-hot-toast'

const SeatLayout = () => {
  const groupRow = [
    ['A', 'B'],
    ['C', 'D'],
    ['E', 'F'],
    ['G', 'H'],
    ['I', 'J']
  ]

  const { id, date } = useParams()
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [show, setShow] = useState(null)

  const getShow = async () => {
    const showData = dummyShowsData.find(show => show._id === id)
    if (showData) {
      setShow({
        movie: showData,
        dateTime: dummyDateTimeData,
      })
    }
  }

  useEffect(() => {
    getShow()
  }, [id])

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      toast.error("Please select a time first")
      return
    }

    if (selectedSeats.includes(seatId) && selectedSeats.length > 5) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId))
    } else {
      setSelectedSeats([...selectedSeats, seatId])
    }
  }

  return (
    <div className="seat-layout">
      {show ? (
        <div className="layout-container">

          {/* Blur Background */}
          <div className="blur-background">
            <BlurCircle top="-150px" left="-150px" size="400px" blur="150px" />
            <BlurCircle bottom="-200px" right="-200px" size="500px" blur="200px" />
            <BlurCircle top="50%" left="50%" size="600px" blur="180px" />
          </div>

          {/* Time Section */}
          <div className="time-section">
            <p className="timing-header">Available Timings</p>
            <div className="available-time">
              {show.dateTime[date]?.map((item, index) => (
                <div
                  key={index}
                  className={`time-item ${selectedTime === item.time ? 'selected-time' : ''}`}
                  onClick={() => setSelectedTime(item.time)}
                >
                  <ClockIcon />
                  <p>{isoTimeFormat(item.time)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seats Section */}
          <div className="seats-section">
            <p className="seat-header">Select your seat</p>
            <img src={assets.screenImage} alt="Screen" className="screen-image" />
            <p className='screen-side'>SCREEN SIDE</p>

            <div className="seat-groups">
              {groupRow.map((group, index) => {
                const isLastTwo = index >= groupRow.length - 2  // I and J
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
                        className={`seat-row ${index === 0 ? 'front-row' : ''} 
                        
                        ${isLastTwo ? 'last-two-rows' : ''}`}
                      >
                        {Array.from({ length: 9 }, (_, i) => {
                          const seatId = `${row}${i + 1}`
                          return (
                            <button
                              key={seatId}
                              onClick={() => handleSeatClick(seatId)}
                              className={`seat-button ${selectedSeats.includes(seatId) ? 'selected' : ''}`}
                            >
                              {seatId}
                            </button>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Checkout */}
          <div className="checkout-payment">
            <button className='payment-button'>Proceed to Check Out</button>
            <ArrowRight className='arrow-right' />
          </div>
        </div>
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </div>
  )
}

export default SeatLayout
