import React, { Component } from 'react';
import FormInput from './FormInput';
import WaitingTimeItem from './WaitingTimeItem';
import * as firebase from 'firebase';
//import db from '../firebase/firebase'; //<--?


export default class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);

    // this.dataBase = this.database().ref().child('users');

    this.state = {
      users: [
        {ID:1, name: 'Dio', time: 34},
        {ID:2, name: 'IronMaiden', time: 70},
        {ID:2, name: 'Disturbed', time: 130},
      ],
    };
  }; 

  // componentWillMount() {
  //   const previousUsers = this.state.users;

  //   this.dataBase.on('child_added', snap => {
  //     previousUsers.push({
  //       id: snap.key,
  //       newUserName: snap.val().newUserName,
  //       newUserTime: snap.val().newUserTime
  //     });

  //       this.setState({
  //         users: previousUsers
  //       });
  //   } )
  // }

  addUser(user) {
    //push the user into the users array
    const users = this.state.users;
    users.push({ ID: users.legth + 1, name: user.name, time: user.time});
    this.setState({ users });
    // this.dataBase.push().set({ newUserName: user.newUserName})


  };

  render() {
    return (
      <div className="dashboard-page">
          <FormInput addUser={this.addUser}/>
        <div className="content-frame">
          {
            this.state.users.map((user, index) => {
              return(
                <WaitingTimeItem name={user.name} time={user.time} userID={user.id} key={user.id}/>
              )
            })
          }
        </div>
      </div>
    )
  }
};