import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import ProgressBar from './ProgressBar';
import * as firebaseActions from '../actions/firebaseActions';

const MAX_PERCENTAGE = 100;

class WaitingTimeItem extends Component {
  formatTime = (reservationTime) => {
    const { currentTime } = this.props;
    const minutesTillReservation = moment.unix(reservationTime).diff(currentTime, 'minutes');

    if (minutesTillReservation === 0) {
      const secondsTillReservation = moment.unix(reservationTime).diff(currentTime, 'seconds');

      return `${secondsTillReservation} seconds`;
    }

    if (minutesTillReservation > 60) {
      const hours = Math.round(minutesTillReservation / 60);
      const minutes = Math.round(minutesTillReservation % 60);

      return hours > 1
        ? `${hours} hours ${minutes} minutes`
        : `${hours} hour ${minutes} minutes`;
    }

    return `${minutesTillReservation} minutes`;
  }

  checkIfReservationTimeHadPassed = reservationTime => (
    moment.unix(reservationTime).diff(this.props.currentTime) < 0
  );

  calculatePercentage = (creationTime, reservationTime) => {
    const totalWaitingTimeMinutes = moment.unix(reservationTime).diff(moment.unix(creationTime), 'seconds');
    const waitedTimeMinutes = this.props.currentTime.diff(moment.unix(creationTime), 'seconds');

    const percentage = waitedTimeMinutes / totalWaitingTimeMinutes * 100;

    if (percentage >= MAX_PERCENTAGE) {
      this.props.markEntryAsComplete(this.props.user.id);
      return MAX_PERCENTAGE;
    }

    return percentage;
  }

  render() {
    const { creationTime, reservationTime, name } = this.props.user;
    this.calculatePercentage(creationTime, reservationTime);
    return (
      <div className="waiting-time-item">
        <div className="waiting-time-item__data">
          <div>Name: {name}</div>
          {
            this.checkIfReservationTimeHadPassed(reservationTime)
              ? <div> Done </div>
              : <div> Time: {this.formatTime(reservationTime)} </div>
          }
        </div>
        <ProgressBar percentage={this.calculatePercentage(creationTime, reservationTime)} />
      </div>
    );
  }
}

WaitingTimeItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    creationTime: PropTypes.number,
    reservationTime: PropTypes.number
  }).isRequired,
  currentTime: PropTypes.object.isRequired,
  markEntryAsComplete: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  markEntryAsComplete: userId => dispatch(firebaseActions.markEntryAsComplete(userId))
});


export default connect(undefined, mapDispatchToProps)(WaitingTimeItem);
