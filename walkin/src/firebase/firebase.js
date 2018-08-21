import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDIJTNEJHntTJeycdIVqcxlMSWf4N6-T1M",
  authDomain: "walkin-test-7f35f.firebaseapp.com",
  databaseURL: "https://walkin-test-7f35f.firebaseio.com",
  projectId: "walkin-test-7f35f",
  storageBucket: "walkin-test-7f35f.appspot.com",
  messagingSenderId: "132436972596"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, db as default };
