import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormTime extends Component {
  render(props) {

    const { name, time, userID } = this.props;
    
    // constructor(props){
    //   super(props)
    //   this.name = props.name
    //   this.time = props.time
    //   this.userID = props.userID
    // }

    return (
      <div className="form-time-frame__content form-time-frame--fade-in">
        <div className="form-time-frame__data">
          <p>Name: {name}</p>
          <p>Time: {time} minutes</p>
        </div>
        <div className="form-time-frame__progress-bar">
          
        </div>
      </div>
    )
  }
};

FormTime.PropTypes = {
  name: PropTypes.string,
  time: PropTypes.number
};
