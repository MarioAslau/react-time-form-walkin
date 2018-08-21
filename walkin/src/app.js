import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { FirestoreProvider } from 'react-firestore';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import Loading from './components/Loading';

const store = configureStore();

const jsx = (
  <FirestoreProvider firebase={firebase}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </FirestoreProvider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
