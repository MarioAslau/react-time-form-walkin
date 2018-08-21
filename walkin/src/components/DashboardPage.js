import React, { Component } from 'react';
import { FirestoreCollection } from 'react-firestore';
import moment from 'moment';
import db from "../firebase/firebase";
import { FormInput, Loading, WaitingTimeItem } from '../components';


export default class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }; 

  addUser = (user) => {
    const userRef = db.collection("users").add(user);//not used
  };

  shouldRenderWaitingItem = (time, limit) => {

    return moment().diff(moment.unix(time), 'seconds') < limit * 60 
    // const isNotDone = moment().diff(moment.unix(time), 'seconds') < limit * 60 

    // if (!isNotDone) {
    //   db.collection("users").user.update({completionStatus: true});
    // }

    // return isNotDone;
  }

  render() {
    return (
      <div className="dashboard-page">
          <FormInput addUser={this.addUser}/>
        <div className="content-frame">
          <FirestoreCollection 
            path="users"
            sort="creationTime:desc"
            render={({ isLoading, data }) => {
              return isLoading ? (
                <Loading small />
              ) : (
                <div>
                    {data.map(user => (
                      this.shouldRenderWaitingItem(user.reservationTime, 5)
                        ? <WaitingTimeItem user={user} key={user.id} currentTime={moment()}/>
                        : null
                    ))}
                </div>
              );
            }}
          />
        </div>
      </div>
    )
  }
};