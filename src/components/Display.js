import React from 'react';
import './Display.css';

const Display = ({soundName}) => {
    return (
      <div className="header">
        <div id="display">{soundName}</div>
      </div>
    );
}

export default Display;
