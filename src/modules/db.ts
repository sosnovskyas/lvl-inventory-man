import * as firebase from 'firebase';
import {store} from './store';
import {userAuth, userUnAuth} from './user/user-actions';

const config = {
  apiKey: 'AIzaSyBlqIU27E8ca7SWzUtn3tsgEtVOoWNefT4',
  authDomain: 'lvl-inventory-man.firebaseapp.com',
  databaseURL: 'https://lvl-inventory-man.firebaseio.com',
  projectId: 'lvl-inventory-man',
  storageBucket: 'lvl-inventory-man.appspot.com',
  messagingSenderId: '880047903726'
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    store.dispatch(userAuth(user))
  } else {
    // User is signed out.
    store.dispatch(userUnAuth())
  }
});

firebase.auth().signInAnonymously().catch((error: any) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;

  console.log('ERR', errorMessage);
});


export const fb = firebase;
export const db = fb.database();

export const Goods = db.ref('goods');