 /* eslint-disable */
 import firebase from 'firebase/compat/app';
 import 'firebase/compat/firestore';
 import 'firebase/compat/auth';
 
const firebaseConfig = {
//add firebase config here
  };

const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


