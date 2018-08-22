import React, { Component } from 'react';
import { FirestoreCollection } from 'react-firestore';
import moment from 'moment';
import db from '../firebase/firebase';
import { FormInput, Loading, WaitingTimeItem } from '../components';

const LIMIT_IN_MINUTES = 5;

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: null
    };

    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    this.setState({ currentTime: moment() });
    setTimeout(this.getCurrentTime.bind(this), 1000);
  };

  addUser = user => db.collection('users').add(user);

  shouldRenderWaitingItem = (user, limit) => moment().diff(moment.unix(user.reservationTime), 'seconds') < limit * 60;

  renderCollection = (data) => {
    if (data.length <= 0) return <div className="content-frame__header">No entries</div>;

    return (
      <div>
        {data.map(user => (
          <WaitingTimeItem
            user={user}
            key={user.id}
            currentTime={this.state.currentTime}
          />
        ))}
      </div>
    );
  };

  renderCompletedCollection = (data) => {
    const jsx = (
      data.map(user => (
        this.shouldRenderWaitingItem(user, LIMIT_IN_MINUTES) ? (
          <WaitingTimeItem
            user={user}
            key={user.id}
            currentTime={this.state.currentTime}
          />
        ) : null
      )).filter(item => item !== null)
    );

    if (jsx.length <= 0) return <div className="content-frame__header">No finished entries</div>;

    return <div>{jsx}</div>;
  }

  render() {
    return (
      <div className="dashboard-page">
        <FormInput addUser={this.addUser} />
        <div className="content-frame">
          <FirestoreCollection
            path="users"
            sort="creationTime:desc"
            filter={[['completionStatus', '==', false]]}
            render={({ isLoading, data }) => (
              isLoading ? <Loading small /> : this.renderCollection(data)
            )}
          />
        </div>

        <div className="content-frame">
          <FirestoreCollection
            path="users"
            sort="creationTime:desc"
            filter={[['completionStatus', '==', true]]}
            render={({ isLoading, data }) => (
              isLoading ? <Loading small /> : this.renderCompletedCollection(data)
            )}
          />
        </div>
      </div>
    );
  }
}
