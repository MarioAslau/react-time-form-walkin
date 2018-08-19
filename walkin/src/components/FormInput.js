import React, { Component } from 'react'

export default class FormInput extends Component {
  
  // const { name, time, userID } = this.props;
  // const {} = this.state;

  constructor(props) {
    super(props);
    
    this.state = {
      newUserName: '',
      newUserTime: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createEntry = this.createEntry.bind(this);
  };

  //29


  //When the user gives new input, set newUserNameInput to the value
    //of what is in the input box
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createEntry() {
    const user = {
      name: this.state.newUserName,
      time: this.state.newUserTime
    };
    
      
  
    //call a method that sets the FormTime to the value input
    this.props.addUser(user);
    //set newUserName & newUserTime to empty - to empty the input box after createEntry takes place
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