import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormTime extends Component {

  formatTime = (time) => {
    if (time > 60) {
      const hours = Math.round(time/60);
      const minutes = Math.round(time%60);

      return hours > 1 
        ? `${hours} hours ${minutes} minutes`
        : `${hours} hour ${minutes} minutes`;
    }

    return `${time} minutes`;
  }

  render(props) {

    const { name, time, userID } = this.props;
    
    // constructor(props){
    //   super(props)
    //   this.name = props.name
    //   this.time = props.time
    //   this.userID = props.userID
    // }

    return (
      <div className="waiting-time-item">
      <div className="waiting-time-item__data">
        <div>Name: {name}</div>
        <div>Time: {this.formatTime(time)}</div>
      </div>
      <div className="waiting-time-item__progress-bar" />
    </div>
    )
  }
};

FormTime.PropTypes = {
  name: PropTypes.string,
  time: PropTypes.number
};
