import db from '../firebase/firebase';

export const addNewEntry = data => () => (
  db.collection('users')
    .add(data)
);

export const markEntryAsComplete = userId => () => (
  db.collection('users')
    .doc(userId)
    .update({ completionStatus: true })
);
