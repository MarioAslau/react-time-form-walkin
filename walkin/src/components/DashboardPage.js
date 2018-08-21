import React, { Component } from 'react';
import FormInput from './FormInput';
import WaitingTimeItem from './WaitingTimeItem';

// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';
import db from '../firebase/firebase';

export default class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);

    this.state = {
      users: [
        // {ID:1, name: 'Dio', time: 34},
        // {ID:2, name: 'IronMaiden', time: 70},
        // {ID:2, name: 'Disturbed', time: 130},
      ],
    };
  }; 

  addUser(user) {
    // var userRef = firebase.firestore().collection('users').doc('djzfva6dtHb5dtdrkIBu');

    // var getDoc = userRef.get()
    // .then(doc => {
    //   if (!doc.exists) {
    //     console.log('No such document!');
    //   } else {
    //     console.log('Document data:', doc.data());
    //   }
    // })
    // .catch(err => {
    //   console.log('Error getting document', err);
    // });

    // console.log('Doc', getDoc)
    //push the user into the users array
    //************************************************* */
    // db.collection('users').get().then((snapshots) => {
    //   console.log('Fo', snapshots.docs)
    // }).catch((err) => {
    //   console.log('Error', err)
    // })
    //************************************************* */
    const users = this.state.users;
    users.push({ ID: users.legth + 1, name: user.name, time: user.time});
    this.setState({ users });
    // // this.dataBase.push().set({ newUserName: user.newUserName})
    // firebase.firestore().collection("users").add({
    //   name: 'Toma',
    //   waitingTime: '31'
    // }).then((docRef) => {
    //   console.log("I am done with firestore set", docRef.id)
    // }).catch((err) => {
    //   console.log("error", err)
    // });
    // console.log("Outside");

  };

  render() {
    return (
      <div className="dashboard-page">
          <FormInput addUser={this.addUser}/>
        <div className="content-frame">
          {
            this.state.users.map((user, index) => {
              return(
                <WaitingTimeItem name={user.name} time={user.time} userID={user.id} key={index}/>
              )
            })
          }
        </div>
      </div>
    )
  }
};