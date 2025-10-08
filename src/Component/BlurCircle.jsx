// src/Component/BlurCircle.jsx

import React from 'react';
import './BlurCircle.css';

const BlurCircle = ({ top = 'auto', left = 'auto', right = 'auto', bottom = 'auto' }) => {
  return (
    <div
      className="blur-circle"
      style={{ top, left, right, bottom }}
    ></div>
  );
};

export default BlurCircle;
