import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import moment from 'moment';

export default class WaitingTimeItem extends Component {
  // Temporary code to get percentage value. Need to be replaced
  state = {
    percentage: 20
  }

  formatTime = (reservationTime) => {
    const minutesTillReservation = moment.unix(reservationTime).diff(moment(), 'minutes');
  
    if (minutesTillReservation == 0) {
      const secondsTillReservation = moment.unix(reservationTime).diff(moment(), 'seconds');

      return `${secondsTillReservation} seconds`
    }

    if (minutesTillReservation > 60) {
      const hours = Math.round(minutesTillReservation/60);
      const minutes = Math.round(minutesTillReservation%60);

      return hours > 1 
        ? `${hours} hours ${minutes} minutes`
        : `${hours} hour ${minutes} minutes`;
    }

    return `${minutesTillReservation} minutes`;
  }

  checkIfReservationTimeHadPassed = (reservationTime) => (
    moment.unix(reservationTime).diff(moment()) < 0
  );

  calculatePercentage = (creationTime, reservationTime) => {
    const totalWaitingTimeMinutes = moment.unix(reservationTime).diff(moment.unix(creationTime), 'secunds');
    const waitedTimeMinutes = moment().diff(moment.unix(creationTime), 'secunds');

    const percentage = waitedTimeMinutes/totalWaitingTimeMinutes*100
    console.log(percentage)
    return percentage > 100 ? 100 : percentage;
  }


  // Temporary code to simulate procentage change for testing
  incrementPercentage() {
    this.setState({ percentage: this.state.percentage + 10 })
  }

  render(props) {
    const { creationTime, reservationTime, name } = this.props.user;
    this.calculatePercentage(creationTime, reservationTime)
    return (
      <div className="waiting-time-item" onClick={() => this.incrementPercentage()}>
        <div className="waiting-time-item__data">
          <div>Name: {name}</div>
          {
            this.checkIfReservationTimeHadPassed(reservationTime)
              ? <div> Done </div>
              : <div> Time: {this.formatTime(reservationTime)} </div>
          }
        </div>
        <ProgressBar percentage={this.calculatePercentage(creationTime, reservationTime)}/>
      </div>
    )
  }
};

WaitingTimeItem.PropTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    waitingTime: PropTypes.number
  })
};
