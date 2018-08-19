import React, { Component } from 'react';
import FormInput from './FormInput';
import FormTime from './FormTime';

export default class DashboardPage extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="dashboard-page">
      Dashboard Content
        <div className="form-input-frame">
          <FormInput/>
        </div>
        <div className="form-time-frame">
          <FormTime name={"Jimbo"} time={23} key={3}/>
        </div>
    </div>
    )
  }
};
