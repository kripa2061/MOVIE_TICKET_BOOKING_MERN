import React from 'react';
import './BlurCircle.css';

const BlurCircle = ({ top, left, right, bottom, color = 'rgba(231,76,60,0.5)', size = '400px', blur = '150px' }) => {
  return (
    <div
      className="blur-circle"
      style={{
        position: 'absolute',  // Make sure it's absolute
        top: top ?? 'auto',
        left: left ?? 'auto',
        right: right ?? 'auto',
        bottom: bottom ?? 'auto',
        background: color,
        width: size,
        height: size,
        borderRadius: '50%',
        filter: `blur(${blur})`,
        opacity: 0.6,
        zIndex: 0,
      }}
    ></div>
  );
};

export default BlurCircle;
