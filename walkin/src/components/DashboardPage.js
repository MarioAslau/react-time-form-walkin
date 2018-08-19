import React, { Component } from 'react';
import FormInput from './FormInput';
import FormTime from './FormTime';

export default class DashboardPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [
        {ID:1, name: 'Jimbo', time: 34},
        {ID:2, name: 'John', time: 24},
      ],
    };
  }; 

  render() {
    return (
      <div className="dashboard-page">
        <div className="form-input-frame">
          <FormInput/>
        </div>
        <div className="form-time-frame">
        {
          this.state.users.map((user) => {
            return(//de ce a pus tipul return si aici? are sens?
              <FormTime name={user.name} time={user.time} userID={user.id} key={user.id}/>//userID so i can send to firebase
            )
          })
        }
          
        </div>
    </div>
    )
  }
};
