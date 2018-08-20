import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

export default class WaitingTimeItem extends Component {
  // Temporary code to get percentage value. Need to be replaced
  state = {
    percentage: 20
  }

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

  // Temporary code to simulate procentage change for testing
  incrementPercentage() {
    this.setState({ percentage: this.state.percentage + 10 })
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
      <div className="waiting-time-item" onClick={() => this.incrementPercentage()}>
        <div className="waiting-time-item__data">
          <div>Name: {name}</div>
          <div>Time: {this.formatTime(time)}</div>
        </div>
        <ProgressBar percentage={this.state.percentage}/>
      </div>
    )
  }
};

WaitingTimeItem.PropTypes = {
  name: PropTypes.string,
  time: PropTypes.number
};
