import React, { Component } from 'react';
import moment from 'moment';

export default class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUserName: '',
      newUserTime: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createEntry = this.createEntry.bind(this);
  }

  handleInputChange(event) {
    let { value } = event.target;
    if (event.target.name === 'newUserTime' && value < 0) {
      value = 0;
    }

    this.setState({
      [event.target.name]: value
    });
  }

  createEntry() {
    const now = moment().unix();
    const reservationTime = now + (parseInt(this.state.newUserTime) * 60);

    const user = {
      name: this.state.newUserName,
      creationTime: now,
      completionStatus: false,
      reservationTime
    };

    this.props.addUser(user);
    this.setState({
      newUserName: '',
      newUserTime: ''
    });
  }

  render() {
    const isEnabled = this.state.newUserName.length > 0;

    return (
      <div className="content-frame form-input-container">
        <div className="input-group form-input-container__data">
          <input
            className="input-group__item form-input-container__data__field"
            placeholder="Name"
            name="newUserName"
            value={this.state.newUserName}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            min="0"
            className="input-group__item form-input-container__data__field"
            placeholder="Wait Time"
            name="newUserTime"
            value={this.state.newUserTime}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="form-input-container__submit" disabled={!isEnabled} onClick={this.createEntry}>
          Save
        </button>
      </div>
    );
  }
}
