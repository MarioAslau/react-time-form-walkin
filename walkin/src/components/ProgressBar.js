import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Filler = ({ percentage }) => {
  const getFillerState = (percentage) => {
    if (percentage < 50) return 'one-quarter';
    if (percentage >= 50 && percentage < 80) return 'two-quarters';
    if (percentage >= 80 && percentage < 100) return 'three-quarters';

    return 'four-quarters';
  }

  return (
    <div className={`progress-bar__filler progress-bar__filler--${getFillerState(percentage)}`}  style={{ width: `${percentage}%`}}/>
  );
}

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <Filler percentage={percentage}/>
    </div>
  )
}

ProgressBar.PropTypes = {
    percentage: PropTypes.number
  };

export default ProgressBar;