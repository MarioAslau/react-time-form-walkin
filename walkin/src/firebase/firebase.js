import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.val());
// });
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.val());
// });
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109834,
//   createdAt: 90329434543
// });

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log(e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref().once('value').then((data) => {
//   console.log(data.val());
// }).catch((error) => {
//   console.log(error);
// });

// database.ref().set({
//   name: 'Archie Kennedy-Dyson',
//   age: 26,
//   job: 'Software developer',
//   location: {
//     city: 'Philadelphia',
//     country: 'UK'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().remove().then(() => {
//   console.log('Data was removed');
// }).catch((e) => {
//   console.log(e);
// });

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston'
// }).then(() => {
//   console.log('Done');
// }).catch((err) => {
//   console.log(err);
// });
