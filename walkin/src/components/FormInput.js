import React, { Component } from 'react'

export default class FormInput extends Component {
  
  // const { name, time, userID } = this.props;
  // const {} = this.state;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <div className="form-input-frame__data">
          <input className="form-input-frame__field" placeholder="Name"></input>
            <input className="form-input-frame__field" placeholder="Wait Time"></input>
          </div>
            <button className="form-input-frame__save">Save</button>
        </div>
      </div>
    )
  }
}
