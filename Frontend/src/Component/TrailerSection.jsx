import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'
import { dummyTrailers } from '../assets-3/assets'
import './TrailerSection.css'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[3])

  return (
    <div className="trailer-container">
    <div className="trailer-section">
      <p className="current-trailer-label">Trailer</p>


        <div className="current-trailer-display">
          <BlurCircle />
<iframe
  width="100%"
  height="100%"
  src={currentTrailer.videoUrl}
  title="YouTube video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>





      </div>

      <div className="trailer-thumbnails-wrapper">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className={`trailer-thumb ${
              trailer.videoUrl === currentTrailer.videoUrl ? 'active' : ''
            }`}
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img src={trailer.image} alt="trailer" />
            <PlayCircleIcon className="play-icon" />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default TrailerSection
