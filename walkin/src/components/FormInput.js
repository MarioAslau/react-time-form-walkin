import React, { Component } from 'react'
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
  };

  handleInputChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createEntry() {
    const creationTime = moment().unix();
    const reservationTime = moment().unix() + parseInt(this.state.newUserTime)*60;

    const user = {
      name: this.state.newUserName,
      creationTime,
      reservationTime,
      completionStatus: false
    };

    this.props.addUser(user);
    this.setState({
      newUserName: '',
      newUserTime: ''
    });
  };

  render() {
    return (
      <div className="content-frame form-input-container">
        <div className="input-group form-input-container__data">
          <input 
            className="input-group__item form-input-container__data__field" 
            placeholder="Name"
            name="newUserName"
            value={this.state.newUserName}
            onChange={this.handleInputChange}>
          </input>
          <input 
            type="number"
            className="input-group__item form-input-container__data__field"
            placeholder="Wait Time"
            name="newUserTime"
            value={this.state.newUserTime}
            onChange={this.handleInputChange}>
          </input>
        </div>
        <div 
          className="form-input-container__submit"
          onClick={this.createEntry}>
            Save
        </div>
      </div>
    )
  }
} 